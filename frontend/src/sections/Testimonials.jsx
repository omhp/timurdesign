import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTI } from "../constants/testIds";

const testimonials = [
  {
    name: "Pak Anwar S.",
    role: "Pemilik Rumah, Denpasar",
    quote:
      "Bangun rumah 2 lantai di Bali selesai tepat 7 bulan, sesuai kontrak. Yang paling saya hargai: RAB transparan, semua nota dibukakan.",
    rating: 5,
  },
  {
    name: "Bu Lina H.",
    role: "Renovasi, Surabaya",
    quote:
      "Sudah 2x ganti kontraktor sebelumnya, selalu bermasalah. Di Timur Design beda — laporan progres setiap minggu, jadi tenang.",
    rating: 5,
  },
  {
    name: "Pak Reza M.",
    role: "Vila Disewakan, Malang",
    quote:
      "Hasil akhir 95% mirip 3D render. Untuk proyek seharga ratusan juta, ini hal yang dulu saya kira mustahil. Recommended.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimoni"
      data-testid={TESTI.section}
      className="relative bg-[hsl(220,15%,6%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
            — Suara Klien
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Bukti, bukan{" "}
            <span className="italic text-white/80">brosur.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              data-testid={TESTI.card}
              className="relative flex flex-col border border-white/10 bg-black/30 p-7 backdrop-blur-sm transition-colors hover:border-[hsl(43,74%,49%,0.4)]"
            >
              <Quote className="h-7 w-7 text-[hsl(43,74%,55%)] opacity-70" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-white/80 sm:text-base">
                “{t.quote}”
              </blockquote>
              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[hsl(43,74%,55%)] text-[hsl(43,74%,55%)]"
                    />
                  ))}
                </div>
                <figcaption className="mt-3">
                  <div className="font-display text-base font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-white/55">{t.role}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
