# PRD — timurdesign.com Landing Page (Static)

## Original Problem Statement
Full-static landing page untuk "Timur Design" (brand: timurdesign.com).
- Value Prop: BANGUN DAN RENOVASI RUMAH IMPIAN TANPA BANYAK DRAMA
- Target: pemilik rumah Indonesia (Bali, Surabaya, Malang, Pontianak)
- Primary CTA: WhatsApp ke 082226817232

## Architecture (Feb 2026)
**Static-only website** — tidak ada backend, tidak ada database, tidak ada panggilan API.
- Frontend: React 19 (CRA) + Tailwind 3 + Framer Motion + lucide-react
- Hosting: bisa di-deploy ke any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, dll.)
- Estimator: kalkulator client-side di `/app/frontend/src/lib/estimator.js` (deterministic formula).
- No backend, no DB, no AI calls.

## User Choices (cumulative)
- Bahasa: Indonesia
- Visual: Premium dark luxury + gold accents
- CTA: WhatsApp (semua tombol mengarah ke wa.me)
- Domain target: timurdesign.com

## Tech Stack
- Frontend: React 19 + Tailwind 3 + Framer Motion (hero only)
- Fonts: Playfair Display + Outfit
- Icons: lucide-react

## SEO On-Page
- Keyword utama: **"Jasa Kontraktor Rumah"** + variasi long-tail kota
- Posisi keyword: `<title>`, meta description, H1 Hero (badge), H2 Estimator, H3 Hero bento, H2/H3 Blog section
- Structured data: JSON-LD `GeneralContractor`
- Sitemap, robots.txt sudah ada di `/app/frontend/public/`

## Sections (urutan)
1. **Hero** — Background foto rumah elegan; eyebrow "Jasa Kontraktor Rumah"; H1 "Bangun Rumah Impian Anda Tanpa Banyak Drama."; CTA WA + Estimasi; bento card "Mengapa Timur Design"
2. **Services** — 4 layanan: Bangun & Renovasi, Jasa Arsitek, Desain Interior, Desain Eksterior/Fasad. H2: "Wujudkan rumah impian Anda — kami urus semua."
3. **WhyUs** — 5 "Tanpa Drama" cards
4. **Process** — 5 langkah
5. **Estimator** — Form 5 input → kalkulator client-side → rentang biaya + breakdown + asumsi + WA CTA
6. **Portofolio** — 6 proyek nyata (Scandinavian, Modern Tropis, Rumah Gaya Villa, Minimalis Modern, Mediterania, Industrialis)
7. **Testimonials** — 3 reviews
8. **FAQ** — 6 accordion
9. **Blog/Artikel** — 3 artikel SEO (Tips Memilih Kontraktor, Estimasi Biaya di Bali, 5 Pertanyaan Wajib)
10. **CTA Band** — Final WA push
11. **Footer** — Navigation, kota, contact
- **FloatingWhatsApp** — Sticky after scroll

## Brand Constants
- WHATSAPP_NUMBER: 6282226817232
- PHONE_DISPLAY: +62 822-2681-7232
- EMAIL: halo@timurdesign.com

## Static Estimator Formula
File: `/app/frontend/src/lib/estimator.js`
- Pricing matrix per (project_type × quality) dalam Rp/m²
- City multiplier (Bali 1.12 / Surabaya 1.00 / Malang 0.95 / Pontianak 1.05)
- Timur Design diskon 8% dari rata-rata pasar
- Output: total range, cost/m², durasi bulan, breakdown 4-5 kategori, asumsi, langkah selanjutnya

## Deploy
- Build: `cd /app/frontend && yarn build` → output ke `/app/frontend/build`
- Hosting static: copy `build/` ke host pilihan
- Tidak perlu env var apa pun untuk produksi

## Backlog (Static-only)
- P2: Halaman detail artikel (`/artikel/...`) untuk konten SEO penuh
- P2: Landing page per kota (`/jasa-kontraktor-rumah-bali`, dll) untuk local SEO
- P2: GTM / Meta Pixel
- P2: Multi-language (EN) untuk klien asing di Bali
- P2: Real foto klien tambahan untuk Portfolio
