import React from "react";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { BLOG } from "../constants/testIds";
import { buildWaUrl } from "../constants/brand";

// Lightweight SEO content section — judul & excerpt mengandung
// keyword utama "Jasa Kontraktor Rumah" + variasi lokal.
const articles = [
  {
    title: "Tips Memilih Jasa Kontraktor Rumah yang Tepat",
    excerpt:
      "Sebelum tanda tangan kontrak, pastikan kontraktor pilihan Anda punya 5 hal ini: portofolio nyata, kontrak tertulis jelas, sistem progress payment, garansi pasca-bangun, dan tim sendiri (bukan calo).",
    category: "Panduan",
    readTime: "5 menit",
    msg: "Halo Timur Design, saya tertarik konsultasi sebelum memilih kontraktor.",
  },
  {
    title: "Estimasi Biaya Jasa Kontraktor Rumah di Bali 2026",
    excerpt:
      "Bangun rumah di Bali berbeda dengan di Jawa — material, ongkos tukang, dan izin punya karakteristik sendiri. Kisaran biaya bangun rumah di Bali: standar Rp 4–5,5jt/m², menengah Rp 5,5–7jt/m², premium di atas Rp 7,5jt/m².",
    category: "Estimasi Biaya",
    readTime: "6 menit",
    msg: "Halo Timur Design, saya mau konsultasi biaya bangun rumah di Bali.",
  },
  {
    title: "5 Pertanyaan Wajib Sebelum Tanda Tangan Kontrak",
    excerpt:
      "Jangan tergoda harga murah. Tanyakan: siapa yang kerjakan? berapa lama? bagaimana skema pembayaran? apa yang masuk & tidak masuk paket? siapa yang tanggung jawab kalau ada kebocoran 6 bulan kemudian?",
    category: "Tips",
    readTime: "4 menit",
    msg: "Halo Timur Design, saya mau konsultasi sebelum tanda tangan kontrak.",
  },
];

const Blog = () => {
  return (
    <section
      id="artikel"
      data-testid={BLOG.section}
      className="relative bg-[hsl(220,15%,5%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
              — Artikel & Tips
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Panduan sebelum Anda{" "}
              <span className="italic text-white/80">bangun rumah.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
              Pelajari hal-hal penting yang sering dilupakan calon pemilik rumah —
              supaya Anda lebih siap saat memilih jasa kontraktor rumah dan
              mulai membangun.
            </p>
          </div>
          <a
            href={buildWaUrl(
              "Halo Timur Design, saya ingin tanya seputar bangun rumah."
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="blog-ask-cta"
            className="group inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-xs uppercase tracking-luxe text-white/80 transition-colors hover:border-[hsl(43,74%,55%)] hover:text-white"
          >
            Tanya Langsung Ke Tim
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <a
              key={a.title}
              href={buildWaUrl(a.msg)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={BLOG.card}
              className="group relative flex flex-col gap-5 border border-white/10 bg-black/40 p-7 transition-all duration-300 hover:border-[hsl(43,74%,55%)]/40 hover:bg-black/60"
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-luxe text-white/50">
                <span className="inline-flex items-center gap-1.5 text-[hsl(43,74%,55%)]">
                  <BookOpen className="h-3 w-3" />
                  {a.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {a.readTime}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                {a.title}
              </h3>

              <p className="flex-1 text-sm leading-relaxed text-white/65">
                {a.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs uppercase tracking-luxe text-white/70 transition-colors group-hover:text-[hsl(43,74%,55%)]">
                Tanya via WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
