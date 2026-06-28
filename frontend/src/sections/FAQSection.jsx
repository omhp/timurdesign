import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_IDS } from "../constants/testIds";

const faqs = [
  {
    q: "Berapa lama waktu pengerjaan rumah?",
    a: "Tergantung luas dan tingkat kesulitan. Rumah 1 lantai (sekitar 100 m²) biasanya selesai 4–5 bulan. Rumah 2 lantai (200 m²) sekitar 6–8 bulan. Semua sudah kami cantumkan di kontrak, lengkap dengan kesepakatan jika ada keterlambatan.",
  },
  {
    q: "Apakah biaya yang Anda sampaikan sudah final?",
    a: "Ya. Kami berikan rincian harga per item (material + tukang) sejak awal. Kalau di tengah jalan ada perubahan yang Anda inginkan, kami buatkan kesepakatan tertulis dulu — jadi Anda yang memutuskan, bukan kami yang menentukan sendiri.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Pembayaran bertahap, sesuai progres pekerjaan yang sudah selesai dan diverifikasi. Bukan lunas di awal. Tahap pertama biasanya 20–25% setelah kontrak diteken.",
  },
  {
    q: "Apa saja yang dijamin selama 1 tahun setelah selesai?",
    a: "Kami jamin perbaikan jika ada masalah seperti dinding retak rambut yang signifikan, kebocoran atap, atau kerusakan akibat kualitas pengerjaan. Yang tidak termasuk: kerusakan karena pemakaian normal (misal cat memudar karena waktu).",
  },
  {
    q: "Bagaimana cara mulai konsultasi dengan Timur Design?",
    a: "Cukup klik tombol WhatsApp di halaman ini. Konsultasi pertama gratis sepenuhnya — tanpa biaya, tanpa keharusan lanjut. Anda bebas membandingkan dengan kontraktor lain dulu.",
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
            — Pertanyaan yang Sering Ditanyakan
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
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15">
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
