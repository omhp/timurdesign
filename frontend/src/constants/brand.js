// Brand-wide constants — single source of truth
export const WHATSAPP_NUMBER = "6282226817232"; // international format (no +)
export const PHONE_DISPLAY = "+62 822-2681-7232";

const WA_TEXT =
  "Halo Timur Design, saya tertarik konsultasi gratis untuk bangun/renovasi rumah.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WA_TEXT
)}`;

export const buildWaUrl = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const BRAND_NAME = "timurdesign.com";
export const BRAND_TAGLINE = "Spesialis Ketepatan Waktu & Anggaran";

export const SERVICE_CITIES = [
  { name: "Bali", desc: "Denpasar, Ubud, Canggu, Seminyak" },
  { name: "Surabaya", desc: "Surabaya & Sidoarjo" },
  { name: "Malang", desc: "Kota Malang & Batu" },
  { name: "Pontianak", desc: "Pontianak & Kubu Raya" },
];

export const EMAIL = "halo@timurdesign.com";
