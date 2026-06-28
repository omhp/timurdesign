"""Iteration 6 regression — estimator restriction & competitor pricing."""
import os
import pytest
import requests

BASE_URL = os.environ.get(
    "REACT_APP_BACKEND_URL", "https://timur-dream-home.preview.emergentagent.com"
).rstrip("/")
ESTIMATE_URL = f"{BASE_URL}/api/estimate"
TIMEOUT = 120


def _post(payload):
    return requests.post(ESTIMATE_URL, json=payload, timeout=TIMEOUT)


# ---------- Validation: invalid project_type ----------
@pytest.mark.parametrize("bad", ["bangun_baru", "kitchen_set", "renovasi"])
def test_invalid_project_type_returns_422(bad):
    r = _post({
        "project_type": bad,
        "city": "Bali",
        "area_m2": 100,
        "floors": 1,
        "quality": "menengah",
    })
    assert r.status_code == 422, f"{bad} should be rejected, got {r.status_code}: {r.text}"


# ---------- Validation: invalid city ----------
@pytest.mark.parametrize("bad_city", ["Jakarta", "Yogyakarta", "Lainnya"])
def test_invalid_city_returns_422(bad_city):
    r = _post({
        "project_type": "bangun_renovasi",
        "city": bad_city,
        "area_m2": 100,
        "floors": 1,
        "quality": "menengah",
    })
    assert r.status_code == 422, f"{bad_city} should be rejected, got {r.status_code}: {r.text}"


# ---------- Happy path: bangun_renovasi / Bali ----------
def test_estimate_bangun_renovasi_bali():
    payload = {
        "project_type": "bangun_renovasi",
        "city": "Bali",
        "area_m2": 120,
        "floors": 2,
        "quality": "menengah",
    }
    r = _post(payload)
    assert r.status_code == 200, r.text
    data = r.json()
    # Required new fields
    for field in ("competitor_avg_low", "competitor_avg_high", "savings_percent",
                  "total_low", "total_high"):
        assert field in data, f"Missing field: {field}"
        assert isinstance(data[field], int), f"{field} should be int"
    # Competitor is more expensive than Timur Design
    assert data["competitor_avg_low"] > data["total_low"], \
        f"competitor_avg_low ({data['competitor_avg_low']}) must be > total_low ({data['total_low']})"
    assert data["competitor_avg_high"] > data["total_high"], \
        f"competitor_avg_high ({data['competitor_avg_high']}) must be > total_high ({data['total_high']})"
    # Savings in range
    assert 5 <= data["savings_percent"] <= 20, \
        f"savings_percent {data['savings_percent']} not in 5-20"
    # Summary mentions savings / competitive pricing
    summary_lower = data.get("summary", "").lower()
    assert any(k in summary_lower for k in ("hemat", "%", "pasar", "kompetit")), \
        f"summary should mention savings: {data.get('summary')}"


# ---------- Happy path: arsitek / Malang ----------
def test_estimate_arsitek_malang():
    payload = {
        "project_type": "arsitek",
        "city": "Malang",
        "area_m2": 80,
        "floors": 1,
        "quality": "standar",
    }
    r = _post(payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["project_type"] == "arsitek"
    assert data["city"] == "Malang"
    assert isinstance(data["competitor_avg_low"], int)
    assert isinstance(data["competitor_avg_high"], int)
    assert 5 <= data["savings_percent"] <= 20
    assert data["competitor_avg_high"] > data["total_high"]
    assert len(data["breakdown"]) >= 3


# ---------- Consistency: run 3 calls and ensure discount always present ----------
def test_competitor_discount_consistency_three_calls():
    payload = {
        "project_type": "interior",
        "city": "Surabaya",
        "area_m2": 60,
        "floors": 1,
        "quality": "menengah",
    }
    discounts = []
    for i in range(3):
        r = _post(payload)
        assert r.status_code == 200, f"call {i}: {r.text}"
        d = r.json()
        assert d["competitor_avg_high"] > d["total_high"], \
            f"call {i}: no discount competitor_avg_high={d['competitor_avg_high']} vs total_high={d['total_high']}"
        assert 5 <= d["savings_percent"] <= 20
        discounts.append(d["savings_percent"])
    print(f"Discounts across 3 calls: {discounts}")
