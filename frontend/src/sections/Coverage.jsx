import React from "react";
import { MapPin } from "lucide-react";
import { COVERAGE } from "../constants/testIds";
import { SERVICE_CITIES, buildWaUrl } from "../constants/brand";

const cityImages = {
  Bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=70",
  Surabaya:
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=70",
  Malang:
    "https://images.unsplash.com/photo-1580687774429-74ee6e22cf85?auto=format&fit=crop&w=1000&q=70",
  Pontianak:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=70",
};

const Coverage = () => {
  return (
    <section
      id="kota"
      data-testid={COVERAGE.section}
      className="relative bg-[hsl(220,15%,5%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
            — Area Layanan
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Empat kota,{" "}
            <span className="italic text-white/80">satu standar kualitas.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
            Tim kami beroperasi di empat kota utama. Semua dengan SOP, material
            supplier, dan tim quality control yang sama.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CITIES.map((c) => (
            <a
              key={c.name}
              data-testid={COVERAGE.card}
              href={buildWaUrl(
                `Halo Timur Design, saya tertarik konsultasi untuk proyek di ${c.name}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden border border-white/10 bg-black/30"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={cityImages[c.name]}
                  alt={`Layanan Timur Design di ${c.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-2 text-[hsl(43,74%,55%)]">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="text-[10px] uppercase tracking-luxe">
                    Aktif Melayani
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  {c.name}
                </h3>
                <p className="mt-1 text-xs text-white/65">{c.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-luxe text-white/55 transition-colors group-hover:text-[hsl(43,74%,55%)]">
                  Konsultasi
                  <span className="inline-block h-px w-8 bg-white/30 transition-all duration-300 group-hover:w-12 group-hover:bg-[hsl(43,74%,55%)]" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
