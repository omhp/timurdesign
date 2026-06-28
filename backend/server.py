from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import json
import logging
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Literal
from datetime import datetime, timezone

from emergentintegrations.llm.chat import LlmChat, UserMessage


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

# LLM key
EMERGENT_LLM_KEY = os.environ.get("EMERGENT_LLM_KEY")

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ------------------------- Models -------------------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class EstimateRequest(BaseModel):
    project_type: Literal["bangun_renovasi", "arsitek", "interior", "eksterior"]
    city: Literal["Bali", "Surabaya", "Malang", "Pontianak"]
    area_m2: float = Field(gt=0, le=5000)
    floors: int = Field(ge=1, le=5)
    quality: Literal["standar", "menengah", "premium"]
    notes: Optional[str] = None
    name: Optional[str] = None
    whatsapp: Optional[str] = None


class EstimateBreakdownItem(BaseModel):
    category: str
    low: int
    high: int
    note: Optional[str] = None


class EstimateResponse(BaseModel):
    id: str
    project_type: str
    city: str
    area_m2: float
    floors: int
    quality: str
    cost_per_m2_low: int
    cost_per_m2_high: int
    total_low: int
    total_high: int
    competitor_avg_low: int
    competitor_avg_high: int
    savings_percent: int
    duration_months_low: int
    duration_months_high: int
    breakdown: List[EstimateBreakdownItem]
    assumptions: List[str]
    next_steps: List[str]
    summary: str
    created_at: datetime


# ------------------------- Routes -------------------------
@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check["timestamp"], str):
            check["timestamp"] = datetime.fromisoformat(check["timestamp"])
    return status_checks


PROJECT_TYPE_LABEL = {
    "bangun_renovasi": "Bangun / Renovasi Rumah",
    "arsitek": "Jasa Arsitek (Rumah / Villa / Toko / Kantor)",
    "interior": "Desain Interior",
    "eksterior": "Desain Eksterior / Fasad",
}

QUALITY_LABEL = {
    "standar": "Standar (material lokal, hasil rapi & fungsional)",
    "menengah": "Menengah (campuran lokal-impor, hasil rapi & berkesan)",
    "premium": "Premium (material impor, hasil mewah dan istimewa)",
}


def _build_system_prompt() -> str:
    return (
        "Anda adalah ahli estimasi biaya konstruksi rumah di Indonesia tahun 2025-2026 "
        "untuk perusahaan kontraktor 'Timur Design' yang BERPOSISI sebagai kontraktor "
        "dengan HARGA LEBIH KOMPETITIF dari rata-rata pasar — efisien tanpa mengorbankan "
        "kualitas. Anda melayani Bali, Surabaya, Malang, dan Pontianak. "
        "Berikan estimasi BIAYA REALISTIS dalam Rupiah (IDR) berdasarkan harga pasar "
        "terkini, LALU tawarkan harga Timur Design yang 8-15% LEBIH MURAH dari rata-rata "
        "kompetitor di kota tersebut. Anda HANYA boleh membalas dalam format JSON valid "
        "TANPA blok kode markdown, tanpa teks pembuka/penutup. Semua nilai uang adalah "
        "integer dalam Rupiah (tanpa desimal, tanpa pemisah).\n\n"
        "REFERENSI HARGA PASAR (kompetitor, sebelum diskon Timur Design):\n"
        "• Bangun rumah baru: standar Rp 4.2–5.2jt/m², menengah Rp 5.5–7.5jt/m², "
        "premium Rp 8–13jt/m².\n"
        "• Renovasi: 60–80% dari bangun baru tergantung lingkup.\n"
        "• Jasa Arsitek (desain murni): Rp 150–400rb/m² untuk paket dasar, Rp 400–"
        "900rb/m² untuk paket lengkap (3D + gambar teknis).\n"
        "• Desain Interior: Rp 2–6jt/m² (termasuk furniture).\n"
        "• Desain Eksterior / Fasad: Rp 1.5–4jt/m² untuk eksekusi.\n"
        "PENYESUAIAN LOKASI: Bali +10-15% (logistik & permit), Surabaya baseline, "
        "Malang -5%, Pontianak -3% (tapi material impor sedikit lebih mahal).\n"
        "Multi-lantai: +8-12% per lantai tambahan.\n\n"
        "RUMUS HARGA TIMUR DESIGN:\n"
        "• competitor_avg_low/high = harga pasar standar untuk parameter tsb.\n"
        "• Diskon Timur Design = 10-13% (rata-rata 12%). Bisa sampai 15% untuk kualitas "
        "standar dengan volume besar (>200 m²).\n"
        "• total_low = competitor_avg_low * (1 - diskon).\n"
        "• total_high = competitor_avg_high * (1 - diskon).\n"
        "• savings_percent = persen diskon (integer 8-15).\n"
        "Pastikan harga Timur Design TERLIHAT lebih murah tapi tetap MASUK AKAL — jangan "
        "ekstrem sampai mencurigakan. Sebutkan keunggulan harga ini dalam summary."
    )


def _build_user_prompt(req: EstimateRequest) -> str:
    return (
        "Buat estimasi biaya untuk proyek berikut dan balas HANYA dengan JSON valid "
        "yang mengikuti skema persis ini:\n\n"
        "{\n"
        '  "cost_per_m2_low": int,\n'
        '  "cost_per_m2_high": int,\n'
        '  "total_low": int,         // HARGA TIMUR DESIGN (sudah diskon)\n'
        '  "total_high": int,        // HARGA TIMUR DESIGN (sudah diskon)\n'
        '  "competitor_avg_low": int,  // Harga rata-rata kompetitor di kota tsb\n'
        '  "competitor_avg_high": int, // Harga rata-rata kompetitor di kota tsb\n'
        '  "savings_percent": int,   // Persen hemat vs kompetitor (8-15)\n'
        '  "duration_months_low": int,\n'
        '  "duration_months_high": int,\n'
        '  "breakdown": [\n'
        '    {"category": "Pondasi & Struktur", "low": int, "high": int, "note": "..."},\n'
        '    {"category": "Dinding & Atap", "low": int, "high": int, "note": "..."},\n'
        '    {"category": "Listrik, Air & Sanitasi", "low": int, "high": int, "note": "..."},\n'
        '    {"category": "Penyelesaian & Interior", "low": int, "high": int, "note": "..."},\n'
        '    {"category": "Tukang & Pengawasan", "low": int, "high": int, "note": "..."}\n'
        "  ],\n"
        '  "assumptions": ["3-5 asumsi penting dalam Bahasa Indonesia sederhana, hindari istilah teknis"],\n'
        '  "next_steps": ["3 langkah konkret yang dapat dilakukan pemilik rumah, ditulis sederhana"],\n'
        '  "summary": "2-3 kalimat ringkasan dalam Bahasa Indonesia yang ramah & sederhana. WAJIB sebutkan persentase hemat vs harga pasar kompetitor."\n'
        "}\n\n"
        f"Detail proyek:\n"
        f"- Tipe proyek: {PROJECT_TYPE_LABEL[req.project_type]}\n"
        f"- Kota: {req.city}\n"
        f"- Luas: {req.area_m2:g} m²\n"
        f"- Jumlah lantai: {req.floors}\n"
        f"- Kualitas bangunan: {QUALITY_LABEL[req.quality]}\n"
        f"- Catatan tambahan: {req.notes or '-'}\n\n"
        "PENTING — TENTANG ANGKA:\n"
        "1. competitor_avg_low/high = harga PASAR sebelum diskon (sebagai pembanding).\n"
        "2. total_low/high = HARGA TIMUR DESIGN yang LEBIH MURAH (sudah diskon 8-15%).\n"
        "3. total_low = competitor_avg_low × (1 - savings_percent/100), dibulatkan ke "
        "ribuan terdekat.\n"
        "4. total_high = competitor_avg_high × (1 - savings_percent/100), dibulatkan.\n"
        "5. cost_per_m2_low/high = harga Timur Design dibagi luas (× lantai). \n"
        "6. Jumlah breakdown.low harus = total_low; jumlah breakdown.high harus = total_high.\n"
        "7. savings_percent realistis 8-15 (rata-rata 10-12).\n\n"
        "PENTING — TENTANG BAHASA:\n"
        "Gunakan Bahasa Indonesia sederhana yang mudah dipahami orang awam. Hindari "
        "istilah teknis seperti 'MEP', 'addendum', 'site engineer', 'finishing', "
        "'ergonomis'. Ganti dengan bahasa sehari-hari."
    )


def _extract_json(text: str) -> dict:
    """Find the outermost JSON object in the text, ignoring any markdown fences."""
    s = text.strip() if isinstance(text, str) else str(text)
    start = s.find("{")
    end = s.rfind("}")
    if start == -1 or end == -1 or end <= start:
        raise ValueError("No JSON object found in LLM response")
    return json.loads(s[start : end + 1])


@api_router.post("/estimate", response_model=EstimateResponse)
async def create_estimate(req: EstimateRequest):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="LLM key not configured")

    session_id = str(uuid.uuid4())
    chat = LlmChat(
        api_key=EMERGENT_LLM_KEY,
        session_id=session_id,
        system_message=_build_system_prompt(),
    ).with_model("anthropic", "claude-sonnet-4-5-20250929")

    try:
        raw = await chat.send_message(UserMessage(text=_build_user_prompt(req)))
    except Exception as e:
        logger.exception("LLM call failed")
        raise HTTPException(status_code=502, detail=f"LLM error: {e}")

    try:
        data = _extract_json(raw if isinstance(raw, str) else str(raw))
    except Exception as e:
        logger.error("Failed to parse LLM JSON. Raw: %s", raw)
        raise HTTPException(status_code=502, detail=f"Could not parse estimate JSON: {e}")

    estimate_id = str(uuid.uuid4())
    created_at = datetime.now(timezone.utc)

    try:
        breakdown = [EstimateBreakdownItem(**b) for b in data.get("breakdown", [])]
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Invalid breakdown: {e}")

    resp = EstimateResponse(
        id=estimate_id,
        project_type=req.project_type,
        city=req.city,
        area_m2=req.area_m2,
        floors=req.floors,
        quality=req.quality,
        cost_per_m2_low=int(data["cost_per_m2_low"]),
        cost_per_m2_high=int(data["cost_per_m2_high"]),
        total_low=int(data["total_low"]),
        total_high=int(data["total_high"]),
        competitor_avg_low=int(data.get("competitor_avg_low", data["total_low"])),
        competitor_avg_high=int(data.get("competitor_avg_high", data["total_high"])),
        savings_percent=max(5, min(20, int(data.get("savings_percent", 10)))),
        duration_months_low=int(data["duration_months_low"]),
        duration_months_high=int(data["duration_months_high"]),
        breakdown=breakdown,
        assumptions=list(data.get("assumptions", []))[:6],
        next_steps=list(data.get("next_steps", []))[:5],
        summary=str(data.get("summary", "")),
        created_at=created_at,
    )

    # Persist lead + estimate
    doc = resp.model_dump()
    doc["created_at"] = created_at.isoformat()
    doc["input_notes"] = req.notes
    doc["lead_name"] = req.name
    doc["lead_whatsapp"] = req.whatsapp
    await db.estimates.insert_one(doc)

    return resp


# Include router & middleware
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
