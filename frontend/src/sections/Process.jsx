import React from "react";
import { PROCESS } from "../constants/testIds";

const steps = [
  {
    n: "01",
    title: "Konsultasi Gratis",
    desc: "Diskusi kebutuhan, gaya, dan anggaran via WhatsApp atau survei lokasi.",
  },
  {
    n: "02",
    title: "Desain & RAB",
    desc: "Kami siapkan 3D render + Rencana Anggaran Biaya transparan untuk persetujuan Anda.",
  },
  {
    n: "03",
    title: "Kontrak Tertulis",
    desc: "Jadwal, harga, dan ruang lingkup dikunci hitam di atas putih. Tidak ada kejutan.",
  },
  {
    n: "04",
    title: "Eksekusi & Update",
    desc: "Site engineer harian + laporan progres mingguan lengkap dengan foto.",
  },
  {
    n: "05",
    title: "Serah Terima & Garansi",
    desc: "Inspeksi bersama, perbaikan minor, kunci diserahkan. Garansi konstruksi 1 tahun aktif.",
  },
];

const Process = () => {
  return (
    <section
      id="proses"
      data-testid={PROCESS.section}
      className="relative bg-[hsl(220,15%,5%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
              — Proses Kerja
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Lima langkah,{" "}
              <span className="italic text-white/80">zero spekulasi.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
              Sistem yang sama kami terapkan di setiap proyek — dari rumah 50 m²
              hingga vila 800 m². Konsisten, terukur, terdokumentasi.
            </p>
          </div>

          <ol className="lg:col-span-8">
            {steps.map((s, idx) => (
              <li
                key={s.n}
                data-testid={PROCESS.step}
                className="group relative flex gap-6 border-t border-white/10 py-7 transition-colors hover:bg-white/[0.02] sm:gap-10"
              >
                <div className="shrink-0">
                  <div className="font-display text-3xl font-bold text-[hsl(43,74%,55%)] sm:text-4xl">
                    {s.n}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                    {s.desc}
                  </p>
                </div>
                {idx === steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px bg-white/10"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;
