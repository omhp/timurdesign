import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageSquare,
  Box,
  ShieldCheck,
  ArrowRight,
  Phone,
} from "lucide-react";
import { HERO } from "../constants/testIds";
import { WHATSAPP_URL, PHONE_DISPLAY } from "../constants/brand";

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
    icon: MessageSquare,
    title: "Konsultasi Gratis & Revisi Sampai Puas",
    desc: "Ngobrol dulu, baru jalan. Anda bisa minta revisi desain hingga benar-benar cocok.",
  },
  {
    icon: Box,
    title: "Lihat Rumah Anda dalam 3D Sebelum Dibangun",
    desc: "Kami buatkan gambar 3D rumah Anda — biar Anda tahu hasilnya sebelum mulai.",
  },
  {
    icon: ShieldCheck,
    title: "Pembayaran Bertahap & Diawasi Tim Kami",
    desc: "Bayar sesuai progres yang sudah dikerjakan, bukan di awal sekaligus.",
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

      {/* Gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,hsl(220,15%,5%)_0%,hsl(220,15%,5%/0.92)_35%,hsl(220,15%,5%/0.55)_65%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-[hsl(220,15%,5%)] to-transparent"
      />
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
            <a href="#kenapa" className="hover:text-white transition-colors">
              Kelebihan
            </a>
            <a href="#portofolio" className="hover:text-white transition-colors">
              Portofolio
            </a>
            <a href="#artikel" className="hover:text-white transition-colors">
              Artikel
            </a>
            <a href="#kontak" className="hover:text-white transition-colors">
              Kontak
            </a>
          </nav>
          <a
            data-testid={HERO.navContact}
            href="tel:+6282226817232"
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
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              data-testid={HERO.headline}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl lg:text-[5.25rem]"
            >
              <span className="mb-5 inline-flex items-center gap-2 border border-[hsl(43,74%,55%)]/40 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-luxe text-[hsl(43,74%,75%)] backdrop-blur-md sm:text-xs">
                Jasa Kontraktor Rumah
              </span>
              <span className="block">
                Bangun Rumah Impian Anda
                <br />
                <span className="italic font-medium text-white/90">Tanpa Banyak </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[hsl(43,74%,65%)] via-[hsl(43,74%,55%)] to-[hsl(43,74%,45%)] bg-clip-text text-transparent">
                    Drama.
                  </span>
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              data-testid={HERO.subHeadline}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
            >
              Tidak perlu pusing soal desain yang meleset, biaya membengkak,
              atau tukang yang susah diatur. Kami kerjakan dari awal sampai
              kunci diserahkan — sesuai janji.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
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
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.34.17 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.34 11.89-11.92 0-3.18-1.24-6.17-3.43-8.4ZM12.06 21.5h-.01a9.55 9.55 0 0 1-4.87-1.34l-.35-.21-3.75.98 1-3.65-.23-.37a9.6 9.6 0 0 1-1.47-5.0c0-5.31 4.32-9.62 9.65-9.62 2.58 0 5 1 6.83 2.82a9.55 9.55 0 0 1 2.83 6.81c0 5.31-4.32 9.61-9.63 9.61Z" />
                </svg>
                Konsultasi Gratis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#estimasi"
                data-testid={HERO.ctaSecondary}
                className="group inline-flex items-center gap-2 px-2 py-2 text-sm uppercase tracking-luxe text-white/70 transition-colors hover:text-white"
              >
                Hitung Estimasi
                <span className="ml-1 inline-block h-px w-8 bg-white/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[hsl(43,74%,55%)]" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Mengapa Timur Design bento card */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="lg:col-span-5"
          >
            <div className="relative rounded-none border border-white/10 bg-black/40 p-7 backdrop-blur-xl shadow-[0_8px_60px_-15px_rgba(0,0,0,0.6)]">
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
                Jasa Kontraktor Rumah yang beda.
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
            </div>

            {/* Risk reversal pill */}
            <div className="mt-5 flex items-center gap-3 border border-[hsl(43,74%,49%,0.25)] bg-black/30 px-4 py-3 backdrop-blur-md">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[hsl(43,74%,55%)]" />
              <p className="text-xs leading-tight text-white/75">
                <span className="font-semibold text-white">
                  Konsultasi 100% Gratis
                </span>{" "}
                — tanpa biaya, tanpa keharusan lanjut.
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
