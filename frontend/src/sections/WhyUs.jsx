import React from "react";
import {
  PencilRuler,
  Wallet,
  HardHat,
  ShieldAlert,
  ClipboardCheck,
} from "lucide-react";
import { WHY } from "../constants/testIds";

const dramas = [
  {
    icon: PencilRuler,
    label: "Salah Desain",
    solution:
      "3D render fotorealistik & approval bertahap. Yang Anda setujui, itu yang dibangun.",
  },
  {
    icon: HardHat,
    label: "Drama Sama Tukang",
    solution:
      "Tim tukang internal yang sudah bekerja >5 tahun bersama kami. Bukan tenaga lepas dadakan.",
  },
  {
    icon: Wallet,
    label: "Over Budget",
    solution:
      "RAB terbuka per item. Jika ada perubahan, harus disetujui tertulis lebih dulu.",
  },
  {
    icon: ShieldAlert,
    label: "Kontraktor Nakal",
    solution:
      "Pembayaran bertahap sesuai progres terverifikasi. Garansi konstruksi 1 tahun.",
  },
  {
    icon: ClipboardCheck,
    label: "Tak Sesuai Perencanaan",
    solution:
      "Site engineer harian + laporan progres mingguan dengan foto. Semua tercatat.",
  },
];

const WhyUs = () => {
  return (
    <section
      id="kenapa"
      data-testid={WHY.section}
      className="relative bg-[hsl(220,15%,6%)] py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, hsl(43 74% 49% / 0.08), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
            — Tanpa Drama, Janji Kami
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Lima drama umum yang{" "}
            <span className="italic text-[hsl(43,74%,55%)]">tidak akan</span>{" "}
            Anda alami.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Kami dengarkan ratusan keluhan pemilik rumah. Lalu kami bangun sistem
            kerja yang membuat semua kekhawatiran itu jadi mustahil terjadi.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dramas.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={d.label}
                data-testid={WHY.item}
                className="group relative border border-white/10 bg-black/30 p-7 backdrop-blur-sm transition-all duration-300 hover:border-[hsl(43,74%,49%,0.4)] hover:bg-black/40"
              >
                <span className="absolute right-5 top-5 font-display text-xs text-white/20">
                  0{idx + 1}
                </span>
                <div className="flex h-11 w-11 items-center justify-center border border-[hsl(43,74%,49%,0.4)] bg-[hsl(43,74%,49%,0.08)]">
                  <Icon className="h-5 w-5 text-[hsl(43,74%,55%)]" />
                </div>
                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-luxe text-white/40 line-through">
                    Tanpa Drama
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white">
                    {d.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {d.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
