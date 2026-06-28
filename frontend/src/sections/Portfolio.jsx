import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PORTFOLIO } from "../constants/testIds";
import { buildWaUrl } from "../constants/brand";

// Portfolio of completed projects — photos taken in Indonesia,
// titled with Indonesian residential context.
const projects = [
  {
    title: "Rumah Modern 2 Lantai",
    desc: "Hunian modern bertingkat dengan fasad bersih — cocok untuk kavling perkotaan Indonesia.",
    size: "240 m²",
    img: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Rumah Minimalis Putih",
    desc: "Minimalis fungsional, dinding putih bersih — banyak dipilih keluarga muda di kota besar.",
    size: "180 m²",
    img: "https://images.unsplash.com/photo-1608387371413-f2566ac510e0?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Rumah Klasik dengan Teras",
    desc: "Rumah dengan pagar, teras, dan halaman — gaya khas perumahan menengah Indonesia.",
    size: "150 m²",
    img: "https://images.unsplash.com/photo-1691940834294-7b07f3b39830?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Rumah Tropis Sederhana",
    desc: "Hunian sederhana dengan halaman luas — cocok untuk kawasan tropis Indonesia.",
    size: "120 m²",
    img: "https://images.unsplash.com/photo-1714621488914-a245a8089213?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Rumah Bertingkat Modern",
    desc: "Hunian berkelas dengan elemen tower kecil — gaya rumah elit di perumahan Indonesia.",
    size: "320 m²",
    img: "https://images.unsplash.com/photo-1735461932749-e602a9f6fc82?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Villa Bali Tradisional",
    desc: "Villa beratap ilalang khas Bali — perpaduan alam tropis dan budaya Indonesia.",
    size: "260 m²",
    img: "https://images.unsplash.com/photo-1710563138874-4bac91c14e51?auto=format&fit=crop&w=1200&q=70",
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
              — Proyek Pilihan Kami
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Hasil kerja kami,{" "}
              <span className="italic text-white/80">bukan janji manis.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
              Beberapa proyek rumah yang sudah kami selesaikan untuk keluarga
              Indonesia — dari rumah minimalis di kota sampai villa tradisional
              di Bali.
            </p>
          </div>
          <a
            href={buildWaUrl(
              "Halo Timur Design, saya ingin lihat portofolio lengkap proyek."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-xs uppercase tracking-luxe text-white/80 transition-colors hover:border-[hsl(43,74%,55%)] hover:text-white"
          >
            Minta Portofolio Lengkap
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
                  alt={`Proyek ${p.title} oleh Timur Design`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 text-[10px] uppercase tracking-luxe text-emerald-200 backdrop-blur-md">
                  <CheckCircle2 className="h-3 w-3" />
                  Proyek Selesai
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
                      Hunian · {p.size}
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
