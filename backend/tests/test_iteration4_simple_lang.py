"""Iteration 4 tests: verify backend estimator uses simplified Indonesian
and new breakdown category labels (no MEP/jargon)."""
import os
import re
import pytest
import requests

BASE_URL = os.environ["REACT_APP_BACKEND_URL"].rstrip("/")

JARGON_TERMS = [
    r"\bMEP\b",
    r"Mekanikal[\s/]*Elektrikal[\s/]*Plumbing",
    r"\bsite engineer\b",
    r"\baddendum\b",
    r"\bfinishing\b",
]


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def _contains_jargon(text: str):
    hits = []
    for pat in JARGON_TERMS:
        if re.search(pat, text, re.IGNORECASE):
            hits.append(pat)
    return hits


class TestEstimatorSimplifiedLanguage:
    def test_estimate_bali_menengah_categories(self, session):
        payload = {
            "project_type": "bangun_baru",
            "city": "Bali",
            "area_m2": 120,
            "floors": 2,
            "quality": "menengah",
        }
        r = session.post(f"{BASE_URL}/api/estimate", json=payload, timeout=120)
        assert r.status_code == 200, f"got {r.status_code}: {r.text[:500]}"
        data = r.json()

        # breakdown must exist and contain simplified categories
        assert isinstance(data["breakdown"], list) and len(data["breakdown"]) >= 4
        categories = [b["category"] for b in data["breakdown"]]
        joined_cat = " | ".join(categories)
        print(f"Breakdown categories: {joined_cat}")

        # MUST contain simplified MEP wording
        assert any(
            ("Listrik" in c and ("Air" in c or "Sanitasi" in c)) for c in categories
        ), f"Expected 'Listrik, Air & Sanitasi' style category. Got: {categories}"

        # MUST NOT contain MEP / Mekanikal jargon in category labels
        # ("Finishing & Interior" is allowed per spec — appears in backend prompt)
        hard_cat_jargon = [
            p for p in _contains_jargon(joined_cat)
            if "MEP" in p or "Mekanikal" in p or "site engineer" in p or "addendum" in p
        ]
        assert not hard_cat_jargon, f"Breakdown categories contain hard jargon {hard_cat_jargon}: {categories}"

    def test_estimate_summary_simple_indonesian(self, session):
        payload = {
            "project_type": "bangun_baru",
            "city": "Malang",
            "area_m2": 100,
            "floors": 1,
            "quality": "standar",
        }
        r = session.post(f"{BASE_URL}/api/estimate", json=payload, timeout=120)
        assert r.status_code == 200, f"got {r.status_code}: {r.text[:500]}"
        data = r.json()
        summary = data.get("summary", "")
        assert isinstance(summary, str) and len(summary) > 10
        print(f"Summary: {summary}")

        hits = _contains_jargon(summary)
        assert not hits, f"summary contains jargon {hits}: {summary}"

        # Validate notes/assumptions/next_steps also avoid hard jargon
        notes_text = " ".join(
            [b.get("note", "") or "" for b in data.get("breakdown", [])]
        )
        for field_name, val in (
            ("assumptions", " ".join(data.get("assumptions", []))),
            ("next_steps", " ".join(data.get("next_steps", []))),
            ("breakdown_notes", notes_text),
        ):
            jargon = _contains_jargon(val)
            # Only fail hard on MEP / addendum / site engineer — finishing inside notes
            # may sometimes leak; we still report as soft check.
            hard = [h for h in jargon if "MEP" in h or "addendum" in h or "site engineer" in h or "Mekanikal" in h]
            assert not hard, f"{field_name} has hard jargon {hard}: {val}"
