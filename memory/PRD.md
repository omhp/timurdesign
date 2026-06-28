# PRD — timurdesign.com Landing Page

## Original Problem Statement
Full-stack landing page for "Timur Design" (brand: timurdesign.com).
- Value Prop: BANGUN DAN RENOVASI RUMAH IMPIAN TANPA BANYAK DRAMA
- Spesialisasi: Ketepatan Waktu & Anggaran
- Pain points (5 dramas): Salah Desain / Sama Tukang / Over Budget / Kontraktor Nakal / Tak Sesuai Perencanaan
- Target: pemilik rumah Indonesia
- WhatsApp: 082226817232
- Kota layanan: Bali, Surabaya, Malang, Pontianak

## User Choices
- Bahasa: Indonesia
- Visual: Premium dark luxury + gold accents
- CTA: WhatsApp
- Scope: Full landing page, ringan & responsive
- Images: Unsplash placeholders

## Architecture
- React 19 + Tailwind 3 + Framer Motion (hero only)
- Single page at `/` → `<Landing />`
- Fonts: Playfair Display (display) + Outfit (body)
- No backend interaction
- Brand constants centralized in `/app/frontend/src/constants/brand.js`

## Sections Implemented (Dec 2025)
- `pages/Landing.jsx` composes all sections
- `components/Hero.jsx` — Logo timurdesign.com, headline, CTA WA, city pills, trust row, bento card
- `components/FloatingWhatsApp.jsx` — Sticky WA button (appears after 600px scroll)
- `sections/Services.jsx` — 4 cards (Bangun Baru, Renovasi, Desain Interior, Konsultasi & RAB) — each clickable → WhatsApp
- `sections/WhyUs.jsx` — 5 "Tanpa Drama" cards
- `sections/Process.jsx` — 5-step process timeline
- `sections/Portfolio.jsx` — 6 project cards across all 4 cities
- `sections/Coverage.jsx` — 4 city cards (Bali, Surabaya, Malang, Pontianak) → WA per kota
- `sections/Testimonials.jsx` — 3 testimonials
- `sections/FAQSection.jsx` — 6 FAQ accordion
- `sections/CTABand.jsx` — Final WA CTA band
- `sections/Footer.jsx` — Navigation, cities, contact

## Brand Constants
- WHATSAPP_NUMBER: 6282226817232
- PHONE_DISPLAY: +62 822-2681-7232
- EMAIL: halo@timurdesign.com (placeholder)
- BRAND_NAME: timurdesign.com

## Performance Notes
- Lazy loading on all section images (`loading="lazy"`)
- Framer Motion used only in Hero (sub-sections use CSS transitions)
- Unsplash images sized at w=1000-1200, q=70
- No external libraries added beyond what's pre-installed

## Configuration TODO
- Real Instagram handle in Footer.jsx
- Real email if different from halo@timurdesign.com
- Real project photos & testimonials

## Backlog
- P1: Contact form (alternative to WhatsApp) with backend lead capture
- P1: Real CMS for portfolio (Strapi/Notion or simple JSON)
- P2: SEO meta tags, OG image, favicon
- P2: Cookie consent banner if going live in EU
- P2: GTM / Meta Pixel for ads tracking
- P2: Mobile sticky bottom WhatsApp bar (currently floating top-right)
