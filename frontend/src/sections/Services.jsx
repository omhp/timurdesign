import React from "react";
import { Home, Hammer, Sofa, FileText, ArrowUpRight } from "lucide-react";
import { SERVICES } from "../constants/testIds";
import { buildWaUrl } from "../constants/brand";

const items = [
  {
    icon: Home,
    title: "Bangun Rumah Baru",
    desc: "Dari kavling kosong jadi rumah impian. Arsitektur, struktur, MEP, finishing — satu pintu, satu kontrak.",
    points: ["Desain arsitektur 3D", "RAB transparan", "Garansi 1 tahun"],
    msg: "Halo Timur Design, saya tertarik konsultasi bangun rumah baru.",
  },
  {
    icon: Hammer,
    title: "Renovasi Rumah",
    desc: "Ubah total atau tambah lantai tanpa stress. Kami audit dulu, baru kerjakan — supaya hasilnya tidak setengah jadi.",
    points: ["Audit kondisi awal", "Jadwal jelas per fase", "Tanpa biaya tersembunyi"],
    msg: "Halo Timur Design, saya tertarik konsultasi renovasi rumah.",
  },
  {
    icon: Sofa,
    title: "Desain Interior",
    desc: "Interior yang nyaman dipakai, bukan cuma cantik di foto. Custom furniture, lighting, dan styling.",
    points: ["Moodboard & 3D render", "Custom furniture", "Styling lengkap"],
    msg: "Halo Timur Design, saya tertarik konsultasi desain interior.",
  },
  {
    icon: FileText,
    title: "Konsultasi & RAB",
    desc: "Belum siap eksekusi? Mulai dari konsultasi desain & Rencana Anggaran Biaya yang detail dan realistis.",
    points: ["Konsultasi 1-on-1", "RAB detail per item", "Rekomendasi material"],
    msg: "Halo Timur Design, saya tertarik konsultasi & RAB.",
  },
];

const Services = () => {
  return (
    <section
      id="layanan"
      data-testid={SERVICES.section}
      className="relative bg-[hsl(220,15%,5%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
              — Layanan Kami
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Satu Tim. Satu Kontrak.{" "}
              <span className="italic text-white/80">Nol Drama.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            Empat layanan inti, semua dikerjakan oleh tim internal Timur Design.
            Tidak kami sub-kontrakkan ke pihak yang tidak kami kenal.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                data-testid={SERVICES.card}
                href={buildWaUrl(s.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col bg-[hsl(220,15%,5%)] p-7 transition-colors duration-300 hover:bg-[hsl(220,15%,7%)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-[hsl(43,74%,49%,0.4)] bg-[hsl(43,74%,49%,0.08)] transition-all duration-300 group-hover:border-[hsl(43,74%,55%)] group-hover:bg-[hsl(43,74%,49%,0.15)]">
                    <Icon className="h-5 w-5 text-[hsl(43,74%,55%)]" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(43,74%,55%)]" />
                </div>
                <h3 className="mt-7 font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-xs text-white/70"
                    >
                      <span className="h-1 w-1 rounded-full bg-[hsl(43,74%,55%)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
