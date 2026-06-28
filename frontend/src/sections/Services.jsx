import React from "react";
import {
  Home,
  PencilRuler,
  Sofa,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "../constants/testIds";
import { buildWaUrl } from "../constants/brand";

const items = [
  {
    icon: Home,
    title: "Bangun & Renovasi Rumah",
    desc: "Dari tanah kosong sampai renovasi total. Desain, struktur, listrik-air, sampai penyelesaian akhir — semua satu tim.",
    points: ["Gambar 3D + rincian biaya", "Garansi 1 tahun", "Laporan progres tiap minggu"],
    msg: "Halo Timur Design, saya tertarik konsultasi bangun/renovasi rumah.",
  },
  {
    icon: PencilRuler,
    title: "Jasa Arsitek",
    desc: "Desain rumah, villa, toko, atau kantor. Konsep arsitektur, denah 2D, model 3D, dan gambar teknis siap bangun.",
    points: ["Rumah, villa, toko, kantor", "Denah 2D + model 3D", "Gambar teknis lengkap"],
    msg: "Halo Timur Design, saya tertarik jasa arsitek desain (rumah/villa/toko/kantor).",
  },
  {
    icon: Sofa,
    title: "Desain Interior",
    desc: "Interior yang enak dilihat dan nyaman dipakai sehari-hari. Furniture custom, pencahayaan, sampai dekorasi.",
    points: ["Gambar 3D + moodboard", "Furniture custom", "Dekorasi lengkap"],
    msg: "Halo Timur Design, saya tertarik jasa desain interior.",
  },
  {
    icon: Building2,
    title: "Desain Eksterior & Fasad",
    desc: "Tampilan luar rumah yang berkarakter — modern, tropis, atau klasik. Sesuai gaya yang Anda inginkan.",
    points: ["Konsep tampilan rumah", "Pilihan material fasad", "Lampu eksterior"],
    msg: "Halo Timur Design, saya tertarik jasa desain eksterior / fasad.",
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
              <span className="italic text-white/80">Tanpa Drama.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            Empat layanan inti, dikerjakan oleh tenaga profesional kami yang
            berpengalaman — terlatih, terpercaya, dan siap mewujudkan rumah
            impian Anda.
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
                className="group relative flex flex-col items-center bg-[hsl(220,15%,5%)] p-7 text-center transition-colors duration-300 hover:bg-[hsl(220,15%,7%)]"
              >
                <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(43,74%,55%)]" />
                <div className="mt-2 flex h-12 w-12 items-center justify-center border border-[hsl(43,74%,49%,0.4)] bg-[hsl(43,74%,49%,0.08)] transition-all duration-300 group-hover:border-[hsl(43,74%,55%)] group-hover:bg-[hsl(43,74%,49%,0.15)]">
                  <Icon className="h-5 w-5 text-[hsl(43,74%,55%)]" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
                <ul className="mt-6 flex flex-col items-center space-y-2">
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
