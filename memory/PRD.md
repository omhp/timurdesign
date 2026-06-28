# PRD — Timur Design Hero Section

## Original Problem Statement
Create high-converting hero section for Brand "Timur Design".
- Value Proposition: BANGUN DAN RENOVASI RUMAH IMPIAN TANPA BANYAK DRAMA — Spesialisasi Ketepatan Waktu & Anggaran
- Problems solved: TANPA DRAMA SALAH DESAIN / SAMA TUKANG / OVER BUDGET / KONTRAKTOR NAKAL / BANGUNAN TAK SESUAI PERENCANAAN
- Target: pemilik rumah (Indonesian homeowners)

## User Choices
- Bahasa konten: Bahasa Indonesia
- Visual: Premium & elegant (dark luxury + gold accents)
- CTA: WhatsApp konsultasi gratis
- Scope: Hero section only
- Images: Placeholder berkualitas tinggi (Unsplash architectural)

## Architecture
- React 19 + Tailwind 3 + Framer Motion (already in deps)
- Single page hero at `/`
- Fonts: Playfair Display (display) + Outfit (body) via Google Fonts
- No backend interaction (static marketing hero)

## What's Been Implemented (Dec 2025)
- `/app/frontend/src/components/Hero.jsx` — Full hero section
  - Top nav (logo, menu links, phone CTA)
  - Eyebrow badge "SPESIALIS KETEPATAN WAKTU & ANGGARAN"
  - Main headline (Playfair Display): "Bangun Rumah Impian Anda, Tanpa Drama."
  - Sub-headline addressing pain points
  - Primary CTA → WhatsApp ("Konsultasi Gratis")
  - Secondary CTA → "Lihat Portofolio"
  - Trust row (5-star rating + 100+ keluarga, Garansi 1 Tahun, Transparansi 100%)
  - Right bento card: 3 supporting points + stats (100+, 98%, 12+) + risk reversal pill
  - Staggered Framer Motion entrance
  - Background: full-bleed Unsplash luxury home image + dark gradient + grain
- `/app/frontend/src/index.css` — Brand theme tokens, fonts, gold-glow utility
- `/app/frontend/src/App.js` — Routes `/` → `<Hero />`
- `/app/frontend/src/constants/testIds.js` — Test IDs

## Copywriting (Generated)
- Headline: "Bangun Rumah Impian Anda, Tanpa Drama."
- Sub-headline: "Tinggalkan kekhawatiran salah desain, over-budget, dan kontraktor nakal. Kami menjamin ketepatan waktu, transparansi anggaran, dan hasil sempurna — sesuai rencana."
- CTA: "Konsultasi Gratis"
- Supporting points: Jaminan Tepat Waktu & Anggaran / Desain 100% Sesuai Realisasi / Bebas Pusing Urus Tukang
- Trust: Dipercaya 100+ keluarga • Garansi Konstruksi 1 Tahun • Transparansi 100%

## Configuration Needed (P0 backlog)
- Replace WhatsApp number placeholder `6281234567890` in `Hero.jsx`
- Replace phone number `+62 812-3456-7890` in top nav
- Update logo if custom asset provided

## Backlog
- P1: Add layanan/proyek/proses/kontak sections to make full landing page
- P1: Real project photos & testimonials
- P2: Lead capture form (alt to WhatsApp)
- P2: SEO meta, OG tags, favicon update
