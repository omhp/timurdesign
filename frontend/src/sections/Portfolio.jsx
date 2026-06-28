import React from "react";
import { ArrowUpRight, Palette } from "lucide-react";
import { PORTFOLIO } from "../constants/testIds";
import { buildWaUrl } from "../constants/brand";

// Six popular Indonesian residential design styles
const projects = [
  {
    title: "Tropis Modern",
    desc: "Atap miring, banyak bukaan, material kayu & batu alam.",
    size: "240 m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Minimalis Modern",
    desc: "Garis tegas, warna netral, ruang fungsional tanpa hiasan berlebih.",
    size: "180 m²",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Industrial",
    desc: "Beton ekspos, baja hitam, dan sentuhan kayu untuk kesan urban.",
    size: "210 m²",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Skandinavia",
    desc: "Putih bersih, kayu terang, dan pencahayaan alami melimpah.",
    size: "150 m²",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Mediterania",
    desc: "Lengkungan, dinding putih, atap genteng terracotta khas Eropa selatan.",
    size: "320 m²",
    img: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Japandi",
    desc: "Perpaduan Jepang & Skandinavia — tenang, hangat, dan minimalis.",
    size: "165 m²",
    img: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=70",
  },
];

const Portfolio = () => {
  return (
    <section
      id="proyek"
      data-testid={PORTFOLIO.section}
      className="relative bg-[hsl(220,15%,6%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
              — Gaya Desain Populer
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Pilih gaya{" "}
              <span className="italic text-white/80">yang Anda sukai.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
              Setiap gaya punya karakter dan kelebihannya sendiri. Diskusikan
              dengan kami — kami bantu pilih yang paling cocok untuk lahan dan
              gaya hidup Anda.
            </p>
          </div>
          <a
            href={buildWaUrl(
              "Halo Timur Design, saya ingin diskusi gaya desain yang cocok untuk rumah saya."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-xs uppercase tracking-luxe text-white/80 transition-colors hover:border-[hsl(43,74%,55%)] hover:text-white"
          >
            Diskusi Gaya Desain
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              data-testid={PORTFOLIO.card}
              className="group relative overflow-hidden border border-white/10 bg-black/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={`Contoh rumah gaya ${p.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-luxe text-white/85 backdrop-blur-md">
                  <Palette className="h-3 w-3 text-[hsl(43,74%,55%)]" />
                  Gaya Desain
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
                      Referensi · {p.size}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-white/65">
                      {p.desc}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(43,74%,55%)]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
