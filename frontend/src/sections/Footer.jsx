import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FOOTER } from "../constants/testIds";
import {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  SERVICE_CITIES,
  EMAIL,
} from "../constants/brand";

const Footer = () => {
  return (
    <footer
      data-testid={FOOTER.section}
      className="relative border-t border-white/10 bg-[hsl(220,15%,4%)] pt-16 pb-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-display text-2xl font-bold tracking-[0.18em] text-white">
              timurdesign<span className="text-[hsl(43,74%,55%)]">.</span>com
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              Bangun &amp; renovasi rumah impian tanpa drama. Spesialis
              ketepatan waktu &amp; anggaran. Beroperasi di Bali, Surabaya,
              Malang, dan Pontianak.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={FOOTER.whatsapp}
              className="mt-6 inline-flex items-center gap-2 border border-[hsl(43,74%,49%,0.4)] bg-[hsl(43,74%,49%,0.08)] px-5 py-3 text-xs uppercase tracking-luxe text-[hsl(43,74%,60%)] transition-colors hover:bg-[hsl(43,74%,49%,0.15)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.34.17 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.34 11.89-11.92 0-3.18-1.24-6.17-3.43-8.4Z" />
              </svg>
              Chat di WhatsApp
            </a>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-luxe text-white/40">
              Navigasi
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {[
                ["Layanan", "#layanan"],
                ["Estimasi AI", "#estimasi"],
                ["Portofolio", "#portofolio"],
                ["Proses", "#proses"],
                ["FAQ", "#faq"],
                ["Kontak", "#kontak"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-luxe text-white/40">
              Kota Layanan
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {SERVICE_CITIES.map((c) => (
                <li key={c.name} className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[hsl(43,74%,55%)]" />
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-luxe text-white/40">
              Kontak
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="tel:+6282226817232"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[hsl(43,74%,55%)]" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[hsl(43,74%,55%)]" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} timurdesign.com — Semua hak dilindungi.
          </p>
          <p className="text-xs text-white/40">
            Bangun rumah impian Anda,{" "}
            <span className="text-[hsl(43,74%,55%)]">tanpa drama.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
