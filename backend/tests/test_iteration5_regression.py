"""Iteration 5 regression sanity for POST /api/estimate."""
import os
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback - attempt to read from frontend env file
    try:
        with open("/app/frontend/.env", "r") as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                    break
    except Exception:
        pass


def test_estimate_basic():
    assert BASE_URL, "REACT_APP_BACKEND_URL must be set"
    payload = {
        "project_type": "bangun_baru",
        "city": "Bali",
        "area_m2": 100,
        "floors": 1,
        "quality": "menengah",
    }
    r = requests.post(f"{BASE_URL}/api/estimate", json=payload, timeout=30)
    assert r.status_code == 200, f"Got {r.status_code}: {r.text}"
    data = r.json()
    # Structure
    assert "low" in data or "total_low" in data, f"Missing low total: {data.keys()}"
    assert "high" in data or "total_high" in data, f"Missing high total: {data.keys()}"
    assert "breakdown" in data, f"Missing breakdown: {data.keys()}"
    assert isinstance(data["breakdown"], list) and len(data["breakdown"]) > 0
    assert "summary" in data, f"Missing summary: {data.keys()}"
    assert isinstance(data["summary"], str) and len(data["summary"]) > 0
