// Static client-side estimator — no backend required.
// Angka berbasis tarif pasar Indonesia 2026 untuk wilayah yang dilayani Timur Design.

const TIMUR_DISCOUNT_PCT = 8; // % di bawah rata-rata pasar

// Tarif rata-rata pasar (Rupiah / m²) sebelum diskon
const PRICING = {
  bangun_renovasi: {
    standar: [4_500_000, 5_500_000],
    menengah: [5_500_000, 7_000_000],
    premium: [7_000_000, 10_000_000],
  },
  arsitek: {
    standar: [150_000, 250_000],
    menengah: [250_000, 400_000],
    premium: [400_000, 700_000],
  },
  interior: {
    standar: [1_500_000, 2_500_000],
    menengah: [2_500_000, 4_000_000],
    premium: [4_000_000, 6_500_000],
  },
  eksterior: {
    standar: [1_000_000, 1_800_000],
    menengah: [1_800_000, 3_000_000],
    premium: [3_000_000, 5_000_000],
  },
};

// Penyesuaian lokasi (logistik + permit)
const CITY_MULTIPLIER = {
  Bali: 1.12,
  Surabaya: 1.0,
  Malang: 0.95,
  Pontianak: 1.05,
};

// Durasi pengerjaan (bulan) — min, faktor luas
const DURATION = {
  bangun_renovasi: (area, floors) => {
    const total = area * floors;
    const low = Math.max(4, Math.ceil(total / 50));
    return [low, low + 2];
  },
  arsitek: () => [1, 2],
  interior: (area) => {
    const low = Math.max(1, Math.ceil(area / 100));
    return [low, low + 1];
  },
  eksterior: () => [1, 2],
};

// Komposisi breakdown per kategori (persen total)
const BREAKDOWN_TEMPLATE = {
  bangun_renovasi: [
    { category: "Struktur & Pondasi", pct: 0.25, note: "Pondasi, kolom, balok, pelat lantai." },
    { category: "Dinding & Atap", pct: 0.22, note: "Pasangan bata, plester, rangka & penutup atap." },
    { category: "Listrik, Air & Sanitasi", pct: 0.13, note: "Instalasi MEP lengkap, kran, kloset, septic tank." },
    { category: "Penyelesaian (Lantai, Plafon, Cat)", pct: 0.25, note: "Pasang keramik/granit, plafon gypsum, cat interior & eksterior." },
    { category: "Pintu, Jendela & Built-in", pct: 0.15, note: "Kusen, daun pintu/jendela, kitchen set & wardrobe built-in dasar." },
  ],
  arsitek: [
    { category: "Konsep & Sketsa Awal", pct: 0.25, note: "Mood board, zoning, sketsa konsep." },
    { category: "Denah & Tampak (2D)", pct: 0.35, note: "Denah lengkap, tampak depan/samping, potongan." },
    { category: "Visualisasi 3D & Render", pct: 0.25, note: "3D modeling + render foto-realistis ruang utama." },
    { category: "Gambar Kerja Teknis", pct: 0.15, note: "Detail struktur, MEP & schedule material untuk tukang." },
  ],
  interior: [
    { category: "Furniture Custom & Built-in", pct: 0.4, note: "Kitchen set, wardrobe, meja TV, headboard, dll." },
    { category: "Lantai & Dinding", pct: 0.2, note: "Lantai kayu/vinyl, wallpaper, panel kayu, batu alam." },
    { category: "Pencahayaan & Elektrik", pct: 0.15, note: "Lampu dekoratif, downlight, hidden lamp, stop kontak tambahan." },
    { category: "Dekorasi & Soft Furnishing", pct: 0.25, note: "Sofa, karpet, gorden, lukisan, tanaman." },
  ],
  eksterior: [
    { category: "Fasad & Cladding", pct: 0.35, note: "Material fasad: batu alam, kayu, GRC, metal panel." },
    { category: "Atap & Profil Eksterior", pct: 0.2, note: "Atap ekspos, dak beton, lisplang, profil." },
    { category: "Taman & Hardscape", pct: 0.25, note: "Pavers, kolam ikan, taman, tanaman tropis." },
    { category: "Lampu Eksterior & Aksesoris", pct: 0.2, note: "Lampu fasad, lampu taman, nomor rumah, kanopi." },
  ],
};

// Pesan ringkas per kombinasi
const SUMMARY = {
  bangun_renovasi: (city, area, floors, quality) =>
    `Estimasi untuk bangun/renovasi rumah ${quality} seluas ${area} m² × ${floors} lantai di ${city}. Sudah termasuk struktur, MEP, dan penyelesaian akhir. Harga final ditentukan setelah survey lokasi & finalisasi material.`,
  arsitek: (city, area) =>
    `Estimasi jasa arsitek untuk bangunan seluas ${area} m² di ${city}. Mencakup konsep, denah 2D, render 3D, dan gambar kerja siap untuk tukang. Tidak termasuk biaya konstruksi.`,
  interior: (city, area, _f, quality) =>
    `Estimasi desain & eksekusi interior ${quality} untuk ${area} m² di ${city}. Termasuk furniture custom, lantai/dinding finishing, pencahayaan dekoratif, dan soft furnishing.`,
  eksterior: (city, area) =>
    `Estimasi desain & pekerjaan eksterior/fasad untuk ${area} m² di ${city}. Termasuk material fasad, atap ekspos, taman, dan lampu eksterior.`,
};

const NEXT_STEPS = [
  "Hubungi tim Timur Design via WhatsApp dengan estimasi ini.",
  "Konsultasi gratis: kami pelajari kebutuhan, lahan, dan referensi gaya Anda.",
  "Survey lokasi & finalisasi RAB, lalu kontrak kerja transparan.",
  "Mulai pengerjaan dengan laporan progres tiap minggu.",
];

const round = (n, step = 100_000) => Math.round(n / step) * step;

export function computeEstimate(input) {
  const { project_type, city, area_m2, floors, quality } = input;
  const area = Number(area_m2) || 0;
  const f = Number(floors) || 1;
  const totalArea = ["bangun_renovasi"].includes(project_type) ? area * f : area;

  const [perM2Low, perM2High] =
    PRICING[project_type]?.[quality] || PRICING.bangun_renovasi.menengah;
  const cityMul = CITY_MULTIPLIER[city] ?? 1.0;

  // Market average (kompetitor)
  const competitor_avg_low = round(perM2Low * totalArea * cityMul);
  const competitor_avg_high = round(perM2High * totalArea * cityMul);

  // Harga Timur Design (lebih murah TIMUR_DISCOUNT_PCT%)
  const factor = 1 - TIMUR_DISCOUNT_PCT / 100;
  const total_low = round(competitor_avg_low * factor);
  const total_high = round(competitor_avg_high * factor);

  // Per m²
  const cost_per_m2_low = Math.round(total_low / totalArea);
  const cost_per_m2_high = Math.round(total_high / totalArea);

  // Durasi
  const [duration_months_low, duration_months_high] =
    (DURATION[project_type] || DURATION.bangun_renovasi)(area, f);

  // Breakdown
  const template = BREAKDOWN_TEMPLATE[project_type] || BREAKDOWN_TEMPLATE.bangun_renovasi;
  const breakdown = template.map((b) => ({
    category: b.category,
    low: round(total_low * b.pct, 50_000),
    high: round(total_high * b.pct, 50_000),
    note: b.note,
  }));

  // Adjust last item to make sum exactly match total
  const sumLow = breakdown.reduce((a, b) => a + b.low, 0);
  const sumHigh = breakdown.reduce((a, b) => a + b.high, 0);
  const last = breakdown[breakdown.length - 1];
  last.low += total_low - sumLow;
  last.high += total_high - sumHigh;

  // Assumptions
  const assumptions = [
    `Tarif berbasis rata-rata pasar 2026 untuk wilayah ${city}.`,
    `Kualitas finishing: ${quality}.`,
    "Harga belum termasuk biaya tanah, IMB/PBG, dan pajak (kecuali disebutkan).",
    "Estimasi indikatif. Angka final ditentukan setelah survey lokasi & RAB.",
  ];

  // Savings
  const savings_percent = TIMUR_DISCOUNT_PCT;

  const summaryFn = SUMMARY[project_type] || SUMMARY.bangun_renovasi;
  const summary = summaryFn(city, area, f, quality);

  return {
    project_type,
    city,
    area_m2: area,
    floors: f,
    quality,
    total_low,
    total_high,
    cost_per_m2_low,
    cost_per_m2_high,
    competitor_avg_low,
    competitor_avg_high,
    savings_percent,
    duration_months_low,
    duration_months_high,
    breakdown,
    assumptions,
    next_steps: NEXT_STEPS,
    summary,
  };
}
