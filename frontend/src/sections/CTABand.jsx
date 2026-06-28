import React from "react";
import { ArrowRight } from "lucide-react";
import { CTA_BAND } from "../constants/testIds";
import { WHATSAPP_URL } from "../constants/brand";

const CTABand = () => {
  return (
    <section
      id="kontak"
      data-testid={CTA_BAND.section}
      className="relative overflow-hidden bg-[hsl(220,15%,5%)] py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, hsl(43 74% 49% / 0.15), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative grid grid-cols-1 items-center gap-10 border border-[hsl(43,74%,49%,0.25)] bg-black/40 p-10 backdrop-blur-md sm:p-14 lg:grid-cols-12">
          <span
            aria-hidden
            className="absolute -left-px -top-px h-14 w-14 border-l-2 border-t-2 border-[hsl(43,74%,55%)]"
          />
          <span
            aria-hidden
            className="absolute -bottom-px -right-px h-14 w-14 border-b-2 border-r-2 border-[hsl(43,74%,55%)]"
          />

          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
              — Siap Memulai?
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Konsultasi 30 menit yang bisa{" "}
              <span className="italic text-[hsl(43,74%,55%)]">
                menghemat ratusan juta
              </span>{" "}
              biaya rumah Anda.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Tanpa biaya. Tanpa komitmen. Tanpa drama. Kami bahas kebutuhan,
              gaya, dan anggaran Anda — lalu rekomendasikan langkah konkret.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={CTA_BAND.cta}
              className="group inline-flex w-full items-center justify-center gap-3 bg-[hsl(43,74%,49%)] px-8 py-5 text-base font-semibold tracking-wide text-[hsl(220,15%,5%)] transition-all duration-300 gold-glow hover:bg-[hsl(43,74%,55%)] sm:w-auto"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.34.17 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.34 11.89-11.92 0-3.18-1.24-6.17-3.43-8.4ZM12.06 21.5h-.01a9.55 9.55 0 0 1-4.87-1.34l-.35-.21-3.75.98 1-3.65-.23-.37a9.6 9.6 0 0 1-1.47-5.0c0-5.31 4.32-9.62 9.65-9.62 2.58 0 5 1 6.83 2.82a9.55 9.55 0 0 1 2.83 6.81c0 5.31-4.32 9.61-9.63 9.61Z" />
              </svg>
              Mulai Konsultasi Gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-[11px] uppercase tracking-luxe text-white/40">
              Respons rata-rata &lt; 10 menit (jam kerja)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
