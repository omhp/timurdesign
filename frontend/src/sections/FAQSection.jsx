import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_IDS } from "../constants/testIds";

const faqs = [
  {
    q: "Berapa lama biasanya proyek bangun rumah selesai?",
    a: "Tergantung luas dan kompleksitas. Rumah 1 lantai 100 m² rata-rata 4-5 bulan, 2 lantai 200 m² rata-rata 6-8 bulan. Semua ada di kontrak, dengan klausa denda keterlambatan.",
  },
  {
    q: "Apakah RAB benar-benar tidak ada biaya tersembunyi?",
    a: "Ya. RAB kami detail per item (material + upah). Jika ada perubahan ruang lingkup, kami siapkan addendum tertulis yang harus Anda setujui dulu sebelum dikerjakan.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Pembayaran bertahap (termin) sesuai progres aktual yang terverifikasi. Bukan di awal sekaligus. Termin pertama setelah kontrak tanda tangan biasanya 20-25%.",
  },
  {
    q: "Apa isi garansi konstruksi 1 tahun?",
    a: "Mencakup perbaikan defek struktural, kebocoran, retak rambut signifikan, dan masalah finishing yang muncul akibat kualitas pengerjaan. Tidak termasuk kerusakan karena pemakaian normal.",
  },
  {
    q: "Saya di luar 4 kota layanan, apakah bisa dilayani?",
    a: "Hubungi kami via WhatsApp dulu. Untuk proyek dengan skala tertentu, kami bisa mobilisasi tim ke kota lain (Jakarta, Yogyakarta, Banjarmasin, dll).",
  },
  {
    q: "Bagaimana memulai konsultasi?",
    a: "Tekan tombol WhatsApp di mana saja di halaman ini. Konsultasi awal 100% gratis, tanpa biaya, tanpa komitmen — Anda bebas membandingkan dengan vendor lain.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      data-testid={FAQ_IDS.section}
      className="relative bg-[hsl(220,15%,5%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
            — Pertanyaan Sering Diajukan
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Hal-hal yang{" "}
            <span className="italic text-white/80">wajib Anda tahu.</span>
          </h2>
        </div>

        <div className="mt-14 border-t border-white/10">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={f.q}
                data-testid={FAQ_IDS.item}
                className="border-b border-white/10"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-white sm:text-lg">
                    {f.q}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 transition-colors group-hover:border-[hsl(43,74%,55%)]">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[hsl(43,74%,55%)]" />
                    ) : (
                      <Plus className="h-4 w-4 text-white/70" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
