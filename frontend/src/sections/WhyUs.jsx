import React from "react";
import {
  MessageSquare,
  Box,
  FileText,
  Award,
  Sun,
  Eye,
} from "lucide-react";
import { WHY } from "../constants/testIds";

const features = [
  {
    icon: MessageSquare,
    title: "Mulai Tanpa Risiko",
    points: [
      "Konsultasi gratis",
      "Revisi desain sampai puas",
      "Pembayaran bertahap sesuai progres",
    ],
  },
  {
    icon: Box,
    title: "Lihat Dulu, Baru Bangun",
    points: [
      "Gambar denah 2D yang jelas",
      "Model 3D rumah lengkap",
      "Bonus video 3D & render eksterior",
    ],
  },
  {
    icon: FileText,
    title: "Dokumen Lengkap Diserahkan",
    points: [
      "Gambar teknis arsitektur & struktur",
      "Gambar listrik, air & sanitasi",
      "Rincian anggaran (RAB) & print A3",
    ],
  },
  {
    icon: Award,
    title: "Kualitas yang Bertahan Lama",
    points: [
      "Material berkelas & tahan cuaca",
      "Struktur lebih kokoh & aman",
      "Pengecekan kualitas berlapis",
    ],
  },
  {
    icon: Sun,
    title: "Nyaman Ditinggali",
    points: [
      "Tata ruang lega & fungsional",
      "Cahaya alami & sirkulasi udara baik",
      "Optimal untuk lahan kecil maupun besar",
    ],
  },
  {
    icon: Eye,
    title: "Diawasi Sampai Selesai",
    points: [
      "Koordinasi tim saat pembangunan",
      "Garansi gambar bisa benar-benar dibangun",
      "Pengawas lapangan harian",
    ],
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
            — Kenapa Pilih Timur Design
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Semua yang Anda butuhkan,{" "}
            <span className="italic text-[hsl(43,74%,55%)]">
              sudah kami siapkan.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Bangun rumah itu rumit. Kami sederhanakan jadi pengalaman yang
            menyenangkan — mulai dari ngobrol pertama sampai pindah ke rumah baru.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                data-testid={WHY.item}
                className="group relative border border-white/10 bg-black/30 p-7 backdrop-blur-sm transition-all duration-300 hover:border-[hsl(43,74%,49%,0.4)] hover:bg-black/40"
              >
                <span className="absolute right-5 top-5 font-display text-xs text-white/20">
                  0{idx + 1}
                </span>
                <div className="flex h-11 w-11 items-center justify-center border border-[hsl(43,74%,49%,0.4)] bg-[hsl(43,74%,49%,0.08)]">
                  <Icon className="h-5 w-5 text-[hsl(43,74%,55%)]" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {f.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {f.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-white/65"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(43,74%,55%)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
