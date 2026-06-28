# PRD — timurdesign.com Landing Page

## Original Problem Statement
Full-stack landing page for "Timur Design" (brand: timurdesign.com).
- Value Prop: BANGUN DAN RENOVASI RUMAH IMPIAN TANPA BANYAK DRAMA
- 5 dramas: Salah Desain / Sama Tukang / Over Budget / Kontraktor Nakal / Tak Sesuai Perencanaan
- WhatsApp: 082226817232 → wa.me/6282226817232
- Beroperasi: Bali, Surabaya, Malang, Pontianak (+ kota lain on-demand)

## User Choices (cumulative)
- Bahasa: Indonesia
- Visual: Premium dark luxury + gold accents
- CTA: WhatsApp
- Background hero: foto rumah Indonesia yang elegan & nyaman
- AI cost-estimator wajib ada
- Coverage section: dihapus (multi-city info cukup di hero pills + footer)

## Tech Stack
- Frontend: React 19 + Tailwind 3 + Framer Motion (hero only) + Axios
- Backend: FastAPI + Motor (MongoDB) + emergentintegrations
- LLM: Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`) via Emergent LLM key
- Fonts: Playfair Display + Outfit

## Sections (Dec 2025 → ongoing)
1. **Hero** — Background: elegant Indonesian modern home; logo timurdesign.com; CTA primary WA + secondary "Hitung Estimasi (AI)"; city pills; trust row; bento card
2. **Services** — 5 layanan: Jasa Tukang Borongan, Bangun & Renovasi Rumah, Kitchen Set Custom, Desain Interior, Desain Eksterior & Fasad
3. **WhyUs** — 5 "Tanpa Drama" cards
4. **Process** — 5 langkah
5. **Estimator (AI)** — Form 6 input → POST /api/estimate → Claude 4.5 → JSON estimate (low/high IDR, breakdown 5 kategori, durasi, asumsi, next steps, summary) → WhatsApp CTA dengan summary
6. **Portofolio** — 5 proyek nyata: Minimalis Modern, Modern Tropis, Mediterania, Industrialis (cafe), Villa Tropis Bali. Headline CTA-style: "Dan pilih gaya rumah yang Anda impikan." Foto asli klien disimpan di `/app/frontend/public/portfolio/` (sudah dioptimasi <300KB/file). Anchor: `#portofolio`.
7. **Testimonials** — 3 reviews
8. **FAQ** — 6 accordion
9. **CTA Band** — Final WA push
10. **Footer** — Navigation, kota, contact
- **FloatingWhatsApp** — Sticky after scroll

## Backend Endpoints
- `GET  /api/` — health
- `POST /api/status` & `GET /api/status` — status checks (template)
- `POST /api/estimate` — AI cost estimator (Claude 4.5)
  - Input: `project_type` (bangun_baru|renovasi|interior|kitchen_set|eksterior), `city`, `area_m2`, `floors`, `quality` (standar|menengah|premium), `notes`, `name`, `whatsapp`
  - Output: low/high totals (IDR), cost_per_m2, duration_months, breakdown[5], assumptions[], next_steps[], summary
  - Persists every estimate to `db.estimates` (for lead tracking)

## Brand Constants
- WHATSAPP_NUMBER: 6282226817232
- PHONE_DISPLAY: +62 822-2681-7232
- EMAIL: halo@timurdesign.com (placeholder)

## Configuration TODO
- Real foto proyek & testimoni klien
- Real Instagram handle & email
- Tambah field `lead_status` di MongoDB jika ingin CRM ringan

## Backlog
- P1: Admin dashboard untuk lihat leads & estimates yang masuk
- P1: Streaming response untuk estimator (UX lebih responsive)
- P1: Email notification ke admin saat ada estimasi baru
- P2: SEO meta, OG image, favicon, sitemap
- P2: GTM / Meta Pixel
- P2: Multi-language (EN) untuk klien asing di Bali
