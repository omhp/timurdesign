import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO } from "../constants/testIds";
import { buildWaUrl } from "../constants/brand";

const projects = [
  {
    title: "Villa Senyap Canggu",
    type: "Bangun Baru",
    city: "Bali",
    size: "240 m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Rumah Tropis Pakuwon",
    type: "Renovasi Total",
    city: "Surabaya",
    size: "180 m²",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Townhouse Dieng",
    type: "Bangun Baru",
    city: "Malang",
    size: "120 m²",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Interior Penthouse",
    type: "Desain Interior",
    city: "Pontianak",
    size: "95 m²",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Rumah Joglo Modern",
    type: "Bangun Baru",
    city: "Malang",
    size: "320 m²",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Villa Ubud Ridge",
    type: "Bangun Baru",
    city: "Bali",
    size: "410 m²",
    img: "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?auto=format&fit=crop&w=1200&q=70",
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
              — Proyek Pilihan
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Hasil kerja kami,{" "}
              <span className="italic text-white/80">bukan janji manis.</span>
            </h2>
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
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-luxe text-white/85 backdrop-blur-md">
                  <span className="h-1 w-1 rounded-full bg-[hsl(43,74%,55%)]" />
                  {p.city}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
                      {p.type} • {p.size}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(43,74%,55%)]" />
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
