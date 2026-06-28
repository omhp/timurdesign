import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO } from "../constants/testIds";
import { buildWaUrl } from "../constants/brand";

// "Gaya Desain Rumah Populer di Indonesia"
// Educational showcase of popular residential design styles.
// Images are illustrative references of each style — bukan portofolio proyek.
const styles = [
  {
    title: "Minimalis",
    tagline: "Bersih, fungsional, bebas ornamen",
    desc: "Garis tegas, warna netral, dan ruang yang terasa lapang. Cocok untuk keluarga muda yang suka tampilan modern dan mudah dirawat.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Modern Tropis",
    tagline: "Adem, terbuka, ramah iklim Indonesia",
    desc: "Bukaan lebar, ventilasi silang, dan sentuhan kayu alami. Dirancang agar rumah tetap sejuk tanpa banyak bergantung pada AC.",
    img: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Mediterania",
    tagline: "Hangat, melengkung, khas Eropa Selatan",
    desc: "Atap genteng terakota, lengkungan pintu, dan dinding berwarna krem. Memberi kesan rumah klasik yang hangat dan ramah.",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Skandinavia",
    tagline: "Terang, lapang, dominasi warna terang",
    desc: "Palet putih dan kayu muda, pencahayaan natural maksimal, serta perabot sederhana. Membuat rumah terasa luas walau ukurannya sedang.",
    img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Industrialis",
    tagline: "Tegas, jujur, ekspos material",
    desc: "Beton ekspos, bata merah, dan pipa terbuka. Cocok untuk yang menyukai karakter kuat dan gaya rumah yang ‘berbeda’ dari tetangga.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Klasik",
    tagline: "Simetris, megah, kesan abadi",
    desc: "Pilar, profil dinding, dan detail dekoratif yang terukur. Memberi kesan rumah berwibawa dan timeless untuk hunian keluarga besar.",
    img: "https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=1200&q=70",
  },
];

const Portfolio = () => {
  return (
    <section
      id="gaya-desain"
      data-testid={PORTFOLIO.section}
      className="relative bg-[hsl(220,15%,6%)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
              — Inspirasi Gaya Desain
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Gaya desain rumah{" "}
              <span className="italic text-white/80">populer di Indonesia.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
              Belum tahu mau pilih gaya yang mana? Ini enam gaya rumah yang
              paling banyak diminati keluarga Indonesia. Kami bantu sesuaikan
              dengan kebutuhan, lahan, dan anggaran Anda.
            </p>
          </div>
          <a
            href={buildWaUrl(
              "Halo Timur Design, saya ingin konsultasi pilihan gaya desain rumah."
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="portfolio-consult-cta"
            className="group inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-xs uppercase tracking-luxe text-white/80 transition-colors hover:border-[hsl(43,74%,55%)] hover:text-white"
          >
            Konsultasi Gaya Desain
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((s) => (
            <article
              key={s.title}
              data-testid={PORTFOLIO.card}
              className="group relative overflow-hidden border border-white/10 bg-black/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={`Inspirasi gaya desain rumah ${s.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 border border-[hsl(43,74%,55%)]/40 bg-[hsl(43,74%,55%)]/15 px-2.5 py-1 text-[10px] uppercase tracking-luxe text-[hsl(43,74%,75%)] backdrop-blur-md">
                  <Sparkles className="h-3 w-3" />
                  Gaya Desain
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
                      {s.tagline}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-white/65">
                      {s.desc}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(43,74%,55%)]" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-[11px] uppercase tracking-luxe text-white/40">
          * Gambar di atas adalah ilustrasi referensi gaya desain, bukan
          portofolio proyek.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
