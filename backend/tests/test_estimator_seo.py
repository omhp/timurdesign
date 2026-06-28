"""Tests for AI estimator API and SEO static endpoints."""
import os
import re
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://timur-dream-home.preview.emergentagent.com").rstrip("/")


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Estimator API ----------
class TestEstimator:
    def test_estimate_bangun_baru_malang(self, session):
        payload = {
            "project_type": "bangun_baru",
            "city": "Malang",
            "area_m2": 150,
            "floors": 2,
            "quality": "menengah",
        }
        r = session.post(f"{BASE_URL}/api/estimate", json=payload, timeout=90)
        assert r.status_code == 200, f"got {r.status_code}: {r.text[:500]}"
        data = r.json()
        assert isinstance(data["total_low"], int) and data["total_low"] > 0
        assert isinstance(data["total_high"], int) and data["total_high"] >= data["total_low"]
        assert isinstance(data["breakdown"], list) and len(data["breakdown"]) >= 4
        for b in data["breakdown"]:
            assert "category" in b and "low" in b and "high" in b
        assert isinstance(data["summary"], str) and len(data["summary"]) > 10
        assert data["cost_per_m2_low"] > 0
        assert data["duration_months_low"] >= 1
        assert isinstance(data["assumptions"], list) and len(data["assumptions"]) >= 1
        assert isinstance(data["next_steps"], list) and len(data["next_steps"]) >= 1

    def test_estimate_renovasi_bali_premium(self, session):
        payload = {
            "project_type": "renovasi",
            "city": "Bali",
            "area_m2": 120,
            "floors": 2,
            "quality": "premium",
        }
        r = session.post(f"{BASE_URL}/api/estimate", json=payload, timeout=90)
        assert r.status_code == 200, f"got {r.status_code}: {r.text[:500]}"
        data = r.json()
        assert data["project_type"] == "renovasi"
        assert data["city"] == "Bali"
        assert data["quality"] == "premium"
        # Premium should be > 0 and reasonable for Bali
        assert data["total_low"] > 100_000_000  # > 100 jt for 120m2 premium renovasi

    def test_estimate_validation_bad_area(self, session):
        r = session.post(
            f"{BASE_URL}/api/estimate",
            json={"project_type": "bangun_baru", "city": "Bali", "area_m2": 0, "floors": 1, "quality": "standar"},
            timeout=30,
        )
        assert r.status_code in (400, 422)

    def test_estimate_validation_bad_quality(self, session):
        r = session.post(
            f"{BASE_URL}/api/estimate",
            json={"project_type": "bangun_baru", "city": "Bali", "area_m2": 100, "floors": 1, "quality": "luxe"},
            timeout=30,
        )
        assert r.status_code == 422


# ---------- SEO ----------
class TestSEO:
    def test_index_html_meta(self, session):
        r = session.get(f"{BASE_URL}/", timeout=20)
        assert r.status_code == 200
        html = r.text
        assert "<html lang=\"id\"" in html
        assert "Timur Design" in html and "Tanpa Drama" in html
        assert re.search(r"<meta\s+name=[\"']description[\"']", html, re.I)
        assert re.search(r"<meta\s+property=[\"']og:title[\"']", html, re.I)
        assert re.search(r"<meta\s+property=[\"']og:description[\"']", html, re.I)
        assert re.search(r"<meta\s+property=[\"']og:image[\"']", html, re.I)
        assert re.search(r"<meta\s+name=[\"']twitter:card[\"']", html, re.I)
        assert re.search(r"<link\s+rel=[\"']canonical[\"']", html, re.I)
        assert "application/ld+json" in html
        assert "GeneralContractor" in html
        assert "\"name\": \"Timur Design\"" in html or '"name":"Timur Design"' in html

    def test_robots_txt(self, session):
        r = session.get(f"{BASE_URL}/robots.txt", timeout=20)
        assert r.status_code == 200
        body = r.text
        assert "User-agent: *" in body
        assert "Sitemap:" in body

    def test_sitemap_xml(self, session):
        r = session.get(f"{BASE_URL}/sitemap.xml", timeout=20)
        assert r.status_code == 200
        body = r.text
        assert "<urlset" in body
        assert "<url>" in body

    def test_manifest_json(self, session):
        r = session.get(f"{BASE_URL}/manifest.json", timeout=20)
        assert r.status_code == 200
        data = r.json()
        assert "Timur Design" in (data.get("name") or "") or "Timur Design" in (data.get("short_name") or "")
