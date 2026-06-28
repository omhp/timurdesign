import React, { useEffect, useState } from "react";
import { WHATSAPP_URL } from "../constants/brand";

const FloatingWhatsApp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp"
      aria-label="Chat di WhatsApp"
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-[hsl(43,74%,49%)] px-4 py-3 text-xs font-semibold uppercase tracking-luxe text-[hsl(220,15%,5%)] transition-all duration-300 gold-glow hover:bg-[hsl(43,74%,55%)] sm:px-5 sm:py-3.5 sm:text-sm ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.34.17 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.34 11.89-11.92 0-3.18-1.24-6.17-3.43-8.4Z" />
      </svg>
      <span className="hidden sm:inline">Konsultasi Gratis</span>
    </a>
  );
};

export default FloatingWhatsApp;
