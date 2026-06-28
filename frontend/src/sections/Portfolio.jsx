import React from "react";
import { ArrowUpRight, Hammer } from "lucide-react";
import { PORTFOLIO } from "../constants/testIds";
import { buildWaUrl } from "../constants/brand";

// Portofolio nyata Timur Design — gambar disediakan oleh klien/proyek sendiri.
const projects = [
  {
    title: "Scandinavian",
    img: "/portfolio/scandinavian.jpg",
  },
  {
    title: "Modern Tropis",
    img: "/portfolio/modern-tropis.jpg",
  },
  {
    title: "Rumah Gaya Villa",
    img: "/portfolio/villa.jpg",
  },
  {
    title: "Minimalis Modern",
    img: "/portfolio/minimalis.jpg",
  },
  {
    title: "Mediterania",
    img: "/portfolio/mediterania.jpg",
  },
  {
    title: "Industrialis",
    img: "/portfolio/industrialis.jpg",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portofolio"
      data-testid={PORTFOLIO.section}
      className="relative bg-[hsl(220,15%,6%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
              — Portofolio Kami
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Dan pilih gaya rumah{" "}
              <span className="italic text-white/80">yang Anda impikan.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
              Berikut beberapa proyek nyata yang sudah kami selesaikan.
              Konsultasikan gaya yang Anda suka — kami sesuaikan dengan lahan,
              kebutuhan, dan anggaran Anda.
            </p>
          </div>
          <a
            href={buildWaUrl(
              "Halo Timur Design, saya tertarik dengan portofolio dan ingin konsultasi gaya rumah."
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="portfolio-consult-cta"
            className="group inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-xs uppercase tracking-luxe text-white/80 transition-colors hover:border-[hsl(43,74%,55%)] hover:text-white"
          >
            Konsultasi Gaya Rumah
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
                  alt={`Portofolio rumah gaya ${p.title} oleh Timur Design`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 border border-[hsl(43,74%,55%)]/40 bg-[hsl(43,74%,55%)]/15 px-2.5 py-1 text-[10px] uppercase tracking-luxe text-[hsl(43,74%,75%)] backdrop-blur-md">
                  <Hammer className="h-3 w-3" />
                  Proyek Kami
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {p.title}
                  </h3>
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
