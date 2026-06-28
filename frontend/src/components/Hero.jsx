import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Wallet,
  HardHat,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";
import { HERO } from "../constants/testIds";
import { WHATSAPP_URL, PHONE_DISPLAY, SERVICE_CITIES } from "../constants/brand";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=75";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1 + i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const supportingPoints = [
  {
    icon: Clock3,
    title: "Jaminan Tepat Waktu & Anggaran",
    desc: "Komitmen tertulis. Tanpa kejutan biaya di tengah jalan.",
  },
  {
    icon: HardHat,
    title: "Desain 100% Sesuai Realisasi",
    desc: "Yang Anda lihat di render, itu yang Anda terima.",
  },
  {
    icon: ShieldCheck,
    title: "Bebas Pusing Urus Tukang",
    desc: "Tim profesional terkurasi & terverifikasi.",
  },
];

const Hero = () => {
  return (
    <section
      data-testid={HERO.section}
      className="relative isolate min-h-screen w-full overflow-hidden bg-[hsl(220,15%,5%)] text-white"
    >
      {/* Background image — responsive srcset for lighter mobile */}
      <div className="absolute inset-0 -z-20">
        <img
          src={HERO_IMAGE}
          srcSet={`${HERO_IMAGE.replace("w=1920", "w=800")} 800w, ${HERO_IMAGE.replace("w=1920", "w=1280")} 1280w, ${HERO_IMAGE} 1920w`}
          sizes="100vw"
          alt="Eksterior rumah modern Indonesia yang elegan saat senja"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Gradient overlay — keeps text contrast on the left */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,hsl(220,15%,5%)_0%,hsl(220,15%,5%/0.92)_35%,hsl(220,15%,5%/0.55)_65%,transparent_100%)]"
      />
      {/* Bottom fade for legibility */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-[hsl(220,15%,5%)] to-transparent"
      />
      {/* Subtle grain */}
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      {/* Top nav */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div
            data-testid={HERO.logo}
            className="font-display text-2xl font-bold tracking-[0.18em] text-white"
          >
            timurdesign<span className="text-[hsl(43,74%,55%)]">.</span>com
          </div>
          <nav className="hidden items-center gap-10 text-sm text-white/70 md:flex">
            <a href="#layanan" className="hover:text-white transition-colors">
              Layanan
            </a>
            <a href="#estimasi" className="hover:text-white transition-colors">
              Estimasi
            </a>
            <a href="#proyek" className="hover:text-white transition-colors">
              Proyek
            </a>
            <a href="#proses" className="hover:text-white transition-colors">
              Proses
            </a>
            <a href="#kontak" className="hover:text-white transition-colors">
              Kontak
            </a>
          </nav>
          <a
            data-testid={HERO.navContact}
            href={`tel:+${"6282226817232"}`}
            className="hidden items-center gap-2 rounded-none border border-white/15 px-4 py-2 text-xs uppercase tracking-luxe text-white/80 transition-colors hover:border-[hsl(43,74%,55%)] hover:text-white md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE_DISPLAY}
          </a>
        </div>
        <div aria-hidden className="divider-gold mx-auto h-px max-w-7xl" />
      </header>

      {/* Main hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* LEFT — content */}
          <div className="lg:col-span-7">
            {/* Eyebrow / Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              data-testid={HERO.badge}
              className="inline-flex items-center gap-3 rounded-none border border-[hsl(43,74%,49%,0.35)] bg-black/30 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(43,74%,55%)] shadow-[0_0_12px_hsl(43,74%,55%)]" />
              <span className="text-[11px] uppercase tracking-luxe text-white/85">
                Spesialis Ketepatan Waktu &amp; Anggaran
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              data-testid={HERO.headline}
              className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl lg:text-[5.25rem]"
            >
              Bangun Rumah Impian
              <br />
              <span className="italic font-medium text-white/90">Anda, </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[hsl(43,74%,65%)] via-[hsl(43,74%,55%)] to-[hsl(43,74%,45%)] bg-clip-text text-transparent">
                  Tanpa Drama.
                </span>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              data-testid={HERO.subHeadline}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
            >
              Tinggalkan kekhawatiran salah desain, over-budget, dan kontraktor
              nakal. Kami menjamin ketepatan waktu, transparansi anggaran, dan
              hasil sempurna — sesuai rencana.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={HERO.ctaWhatsapp}
                className="group inline-flex items-center gap-3 rounded-none bg-[hsl(43,74%,49%)] px-8 py-4 text-base font-semibold tracking-wide text-[hsl(220,15%,5%)] transition-all duration-300 gold-glow hover:bg-[hsl(43,74%,55%)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.34.17 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.34 11.89-11.92 0-3.18-1.24-6.17-3.43-8.4ZM12.06 21.5h-.01a9.55 9.55 0 0 1-4.87-1.34l-.35-.21-3.75.98 1-3.65-.23-.37a9.6 9.6 0 0 1-1.47-5.0c0-5.31 4.32-9.62 9.65-9.62 2.58 0 5 1 6.83 2.82a9.55 9.55 0 0 1 2.83 6.81c0 5.31-4.32 9.61-9.63 9.61Zm5.55-7.2c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.54-.07-.15-.68-1.64-.93-2.24-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.52.07-.79.36-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.79-.73 2.04-1.43.25-.71.25-1.31.18-1.43-.07-.13-.27-.2-.57-.35Z" />
                </svg>
                Konsultasi Gratis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#estimasi"
                data-testid={HERO.ctaSecondary}
                className="group inline-flex items-center gap-2 px-2 py-2 text-sm uppercase tracking-luxe text-white/70 transition-colors hover:text-white"
              >
                Hitung Estimasi (AI)
                <span className="ml-1 inline-block h-px w-8 bg-white/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[hsl(43,74%,55%)]" />
              </a>
            </motion.div>

            {/* Service cities row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 flex flex-wrap items-center gap-2"
            >
              <span className="mr-2 text-[10px] uppercase tracking-luxe text-white/45">
                Melayani —
              </span>
              {SERVICE_CITIES.map((c) => (
                <span
                  key={c.name}
                  data-testid={HERO.cityPill}
                  className="inline-flex items-center gap-1.5 border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-luxe text-white/75 backdrop-blur-md"
                >
                  <span className="h-1 w-1 rounded-full bg-[hsl(43,74%,55%)]" />
                  {c.name}
                </span>
              ))}
            </motion.div>

            {/* Trust elements row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:gap-10"
            >
              <div className="flex items-center gap-3" data-testid={HERO.trustElement}>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border border-white/20 bg-[hsl(220,15%,12%)] bg-gradient-to-br from-[hsl(220,15%,18%)] to-[hsl(220,15%,8%)] ring-1 ring-[hsl(43,74%,49%,0.2)]"
                    />
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[hsl(43,74%,55%)] text-[hsl(43,74%,55%)]"
                      />
                    ))}
                    <span className="ml-2 text-xs text-white/80">5.0</span>
                  </div>
                  <p className="mt-1 text-xs text-white/60">
                    Dipercaya{" "}
                    <span className="font-semibold text-white">100+ keluarga</span>{" "}
                    di Indonesia
                  </p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div
                className="flex items-center gap-3"
                data-testid={HERO.trustElement}
              >
                <ShieldCheck className="h-5 w-5 text-[hsl(43,74%,55%)]" />
                <p className="text-xs leading-tight text-white/70">
                  <span className="font-semibold text-white">
                    Garansi Konstruksi 1 Tahun
                  </span>
                  <br />
                  Tidak puas? Kami perbaiki — gratis.
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div
                className="flex items-center gap-3"
                data-testid={HERO.trustElement}
              >
                <Wallet className="h-5 w-5 text-[hsl(43,74%,55%)]" />
                <p className="text-xs leading-tight text-white/70">
                  <span className="font-semibold text-white">
                    Transparansi 100%
                  </span>
                  <br />
                  RAB terbuka, tanpa biaya tersembunyi.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — supporting points / bento card */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="lg:col-span-5"
          >
            <div className="relative rounded-none border border-white/10 bg-black/40 p-7 backdrop-blur-xl shadow-[0_8px_60px_-15px_rgba(0,0,0,0.6)]">
              {/* Corner gold accent */}
              <span
                aria-hidden
                className="absolute -left-px -top-px h-10 w-10 border-l-2 border-t-2 border-[hsl(43,74%,55%)]"
              />
              <span
                aria-hidden
                className="absolute -bottom-px -right-px h-10 w-10 border-b-2 border-r-2 border-[hsl(43,74%,55%)]"
              />

              <p className="font-display text-xs uppercase tracking-luxe text-[hsl(43,74%,55%)]">
                — Mengapa Timur Design
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-white">
                Lima Drama yang Kami Hapus dari Proyek Anda.
              
              </h3>

              <ul className="mt-7 space-y-5">
                {supportingPoints.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <li
                      key={p.title}
                      data-testid={`${HERO.supportingPoint}-${idx}`}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-[hsl(43,74%,49%,0.4)] bg-[hsl(43,74%,49%,0.08)]">
                        <Icon className="h-4 w-4 text-[hsl(43,74%,55%)]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {p.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/60">
                          {p.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div aria-hidden className="my-7 divider-gold h-px" />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: "100+", l: "Proyek Selesai" },
                  { v: "98%", l: "Tepat Waktu" },
                  { v: "12+", l: "Tahun Pengalaman" },
                ].map((s) => (
                  <div
                    key={s.l}
                    data-testid={HERO.statBlock}
                    className="text-left"
                  >
                    <div className="font-display text-3xl font-bold text-white">
                      {s.v}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-luxe text-white/55">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating risk reversal pill */}
            <div className="mt-5 flex items-center gap-3 border border-[hsl(43,74%,49%,0.25)] bg-black/30 px-4 py-3 backdrop-blur-md">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[hsl(43,74%,55%)]" />
              <p className="text-xs leading-tight text-white/75">
                <span className="font-semibold text-white">
                  Konsultasi 100% Gratis
                </span>{" "}
                — tanpa biaya, tanpa komitmen.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-testid={HERO.scrollIndicator}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:flex"
      >
        <span className="text-[10px] uppercase tracking-luxe">Gulir</span>
        <span className="block h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
