"""Iteration 4.1: Verify 3 consistency tweaks (jargon)."""
import os
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://timur-dream-home.preview.emergentagent.com").rstrip("/")


def test_estimate_breakdown_uses_penyelesaian_not_finishing():
    """POST /api/estimate — verify breakdown category is 'Penyelesaian & Interior' (not 'Finishing')."""
    payload = {
        "project_type": "bangun_baru",
        "city": "Surabaya",
        "area_m2": 100,
        "floors": 1,
        "quality": "menengah",
    }
    r = requests.post(f"{BASE_URL}/api/estimate", json=payload, timeout=120)
    assert r.status_code == 200, f"Expected 200, got {r.status_code}: {r.text[:500]}"
    data = r.json()
    assert "breakdown" in data and isinstance(data["breakdown"], list) and len(data["breakdown"]) > 0
    categories = [b["category"] for b in data["breakdown"]]
    print(f"\nCategories returned: {categories}")

    # Must contain literal 'Penyelesaian & Interior'
    assert "Penyelesaian & Interior" in categories, (
        f"Expected category 'Penyelesaian & Interior' to be present. Got: {categories}"
    )

    # No category may contain 'Finishing' or 'MEP'
    for cat in categories:
        assert "Finishing" not in cat, f"Forbidden substring 'Finishing' found in category: {cat}"
        assert "MEP" not in cat, f"Forbidden substring 'MEP' found in category: {cat}"
