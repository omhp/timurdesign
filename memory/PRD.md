# PRD — timurdesign.com Landing Page (Pure HTML/CSS/JS)

## Original Problem Statement
Static landing page untuk "Timur Design" (brand: timurdesign.com).
- Value Prop: BANGUN DAN RENOVASI RUMAH IMPIAN TANPA BANYAK DRAMA
- Target: pemilik rumah Indonesia (Bali, Surabaya, Malang, Pontianak)
- Primary CTA: WhatsApp ke 082226817232

## Architecture (Feb 2026)
**Pure static — HTML + CSS + JavaScript saja.** Tidak ada React, framework, atau build step di runtime.

### Struktur
```
/app/frontend/
├── index.html         # Semua section dalam 1 file + CSS+@font-face DI-INLINE (≈63 KB)
├── package.json       # Minimal: yarn start → python3 http.server
├── assets/
│   ├── styles.css     # Tailwind pre-compiled (tidak lagi direferensikan — sudah inline)
│   ├── script.js      # Vanilla JS untuk semua interaktivitas (~38KB)
│   ├── hero/          # Hero LCP image self-hosted: hero-{600,1280,1920}.webp
│   └── fonts/         # Self-hosted Playfair Display + Outfit (3 woff2, ~107 KB total)
├── portfolio/         # 6 foto proyek klien (.webp, sudah dioptimasi)
├── robots.txt
└── sitemap.xml
```

Static files langsung dilayani dari `/app/frontend/` (sesuai supervisor config).

### Deploy ke production
Upload folder `/app/frontend/` (tanpa `package.json`, `.env`, `.gitignore`) ke any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, Nginx, S3). Tidak perlu Node, tidak perlu env var, tidak ada build step.

## Sections (urutan)
1. **Hero** — eyebrow "Jasa Kontraktor Rumah"; H1 "Bangun Rumah Impian Anda Tanpa Banyak Drama"; CTA WA + Estimasi; bento card 3 supporting points
2. **Services** — 4 layanan (rendered dari JS array)
3. **WhyUs** — 6 cards "Tanpa Drama"
4. **Process** — 5 langkah
5. **Estimator** — Form 5 input → kalkulator vanilla JS (deterministic, no API)
6. **Portofolio** — 6 proyek nyata
7. **Testimonials** — 3 reviews
8. **FAQ** — 5 accordion (vanilla JS toggle)
9. **CTA Band** — Final WA push
10. **Footer** — Navigation, kota, contact
- **FloatingWhatsApp** — Sticky after scroll > 600px

## Static Estimator Formula
Embedded di `script.js` (function `computeEstimate`):
- Pricing matrix Rp/m² per (project_type × quality) untuk pasar Indonesia 2026
- City multiplier: Bali 1.12 / Surabaya 1.00 / Malang 0.95 / Pontianak 1.05
- Timur Design diskon 8% dari rata-rata pasar
- Output identik dengan versi sebelumnya: total range, breakdown 4-5 kategori, asumsi, langkah selanjutnya, WA CTA dengan summary

## SEO On-Page
- Keyword utama: **"Jasa Kontraktor Rumah"** + variasi long-tail kota
- Posisi: `<title>`, meta description/keywords, H1 Hero (badge), H2 Estimator, H3 Hero bento, H2/H3 Blog
- Structured data: JSON-LD `GeneralContractor`

## Brand Constants
- WHATSAPP_NUMBER: 6282226817232
- PHONE_DISPLAY: +62 822-2681-7232
- EMAIL: admin@timurdesign.com

## Performance Optimization (Feb 28, 2026)
Untuk menaikkan PageSpeed Insights mobile dari 87 menuju ~100:
- **Hero image self-hosted**: Unsplash (101 KiB external, LCP delay 2.28s) → `/assets/hero/hero-{600,1280,1920}.webp` (35/128/249 KB) dengan preload + media query
- **Fonts self-hosted**: Google Fonts (111 KiB) → `/assets/fonts/*.woff2` (107 KB total, latin subset saja, drop latin-ext)
- **CSS + @font-face inlined**: tidak ada lagi render-blocking external CSS request; semua di `<style>` block (~32 KB inline)
- **JS reflow guard**: `applyScrollState()` cache state — skip DOM writes saat tidak ada perubahan
- **Preload critical fonts**: 2 woff2 dengan `<link rel="preload" as="font" crossorigin>`

### Catatan untuk production deployment
Static host harus set header berikut:
- `/assets/hero/*`, `/assets/fonts/*`, `/assets/*.css`, `/assets/*.js`: `Cache-Control: public, max-age=31536000, immutable`
- `/index.html`, `/`: `Cache-Control: public, max-age=300`
- Aktifkan Brotli/Gzip compression untuk HTML/CSS/JS/SVG
- Aktifkan HTTP/2 atau HTTP/3

## Backlog
- P2: Halaman detail artikel (perlu file HTML tambahan per artikel)
- P2: Landing page per kota (file HTML duplikat dengan param berbeda)
- P2: GTM / Meta Pixel snippet inline
- P2: Multi-language (EN) — bisa pakai 2 file HTML terpisah
- P2: PWA / Service Worker untuk install-to-home-screen
