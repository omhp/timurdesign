import React, { useMemo, useState } from "react";
import axios from "axios";
import {
  Sparkles,
  Loader2,
  ArrowRight,
  Calculator,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SERVICE_CITIES, buildWaUrl } from "../constants/brand";

const ESTIMATOR_IDS = {
  section: "estimator-section",
  form: "estimator-form",
  submit: "estimator-submit",
  result: "estimator-result",
  ctaWa: "estimator-cta-wa",
};

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const projectTypes = [
  { value: "bangun_renovasi", label: "Bangun / Renovasi Rumah" },
  { value: "arsitek", label: "Jasa Arsitek (Rumah/Villa/Toko/Kantor)" },
  { value: "interior", label: "Desain Interior" },
  { value: "eksterior", label: "Desain Eksterior / Fasad" },
];

const qualities = [
  { value: "standar", label: "Standar" },
  { value: "menengah", label: "Menengah" },
  { value: "premium", label: "Premium" },
];

const cities = SERVICE_CITIES.map((c) => c.name);

const formatIDR = (n) =>
  "Rp " + Number(n || 0).toLocaleString("id-ID");

const Field = ({ label, children, hint }) => (
  <label className="block">
    <div className="text-[10px] uppercase tracking-luxe text-white/55">
      {label}
    </div>
    <div className="mt-2">{children}</div>
    {hint && <div className="mt-1 text-[11px] text-white/40">{hint}</div>}
  </label>
);

const inputCls =
  "w-full rounded-none border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[hsl(43,74%,55%)] focus:bg-black/50";

const Estimator = () => {
  const [form, setForm] = useState({
    project_type: "bangun_renovasi",
    city: "Bali",
    area_m2: 100,
    floors: 1,
    quality: "menengah",
    notes: "",
    name: "",
    whatsapp: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    if (!form.area_m2 || Number(form.area_m2) <= 0) {
      setError("Luas bangunan harus lebih dari 0.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        ...form,
        area_m2: Number(form.area_m2),
        floors: Number(form.floors),
      };
      const { data } = await axios.post(`${API}/estimate`, payload, {
        timeout: 90000,
      });
      setResult(data);
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        err?.message ||
        "Gagal mengambil estimasi. Coba lagi.";
      setError(typeof msg === "string" ? msg : "Gagal mengambil estimasi.");
    } finally {
      setLoading(false);
    }
  };

  const waMessage = useMemo(() => {
    if (!result) return "Halo Timur Design, saya butuh estimasi biaya rumah.";
    const proj =
      projectTypes.find((p) => p.value === result.project_type)?.label ||
      result.project_type;
    return (
      `Halo Timur Design, saya sudah pakai kalkulator AI di website.\n\n` +
      `Proyek: ${proj}\n` +
      `Kota: ${result.city}\n` +
      `Luas: ${result.area_m2} m² (${result.floors} lantai)\n` +
      `Kualitas: ${result.quality}\n` +
      `Estimasi: ${formatIDR(result.total_low)} – ${formatIDR(result.total_high)}\n` +
      `(${result.savings_percent}% lebih hemat dari rata-rata pasar)\n\n` +
      `Saya ingin konsultasi lebih lanjut.`
    );
  }, [result]);

  return (
    <section
      id="estimasi"
      data-testid={ESTIMATOR_IDS.section}
      className="relative overflow-hidden bg-[hsl(220,15%,6%)] py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 80%, hsl(43 74% 49% / 0.12), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Intro */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 border border-[hsl(43,74%,49%,0.35)] bg-black/30 px-3 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(43,74%,55%)]" />
              <span className="text-[10px] uppercase tracking-luxe text-white/85">
                Powered by AI
              </span>
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Estimasi Biaya{" "}
              <span className="italic text-[hsl(43,74%,55%)]">30 detik.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">
              Isi 5 input singkat. AI kami akan keluarkan rentang biaya, breakdown
              per kategori, durasi pengerjaan, dan langkah selanjutnya — semua
              dalam Rupiah, dengan asumsi pasar Indonesia terkini.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-white/65">
              {[
                "Rentang biaya low–high yang realistis",
                "Rincian biaya per bagian (struktur, listrik/air, penyelesaian)",
                "Estimasi durasi pengerjaan",
                "Langkah konkret setelah estimasi",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(43,74%,55%)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[11px] uppercase tracking-luxe text-white/35">
              Estimasi indikatif. Angka final ditentukan setelah survey lokasi.
            </p>
          </div>

          {/* Form / Result */}
          <div className="lg:col-span-8">
            <div className="relative border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:p-8">
              <span
                aria-hidden
                className="absolute -left-px -top-px h-10 w-10 border-l-2 border-t-2 border-[hsl(43,74%,55%)]"
              />
              <span
                aria-hidden
                className="absolute -bottom-px -right-px h-10 w-10 border-b-2 border-r-2 border-[hsl(43,74%,55%)]"
              />

              {!result && (
                <form
                  data-testid={ESTIMATOR_IDS.form}
                  onSubmit={onSubmit}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <Field label="Tipe Proyek">
                    <select
                      data-testid="estimator-project-type"
                      className={inputCls}
                      value={form.project_type}
                      onChange={update("project_type")}
                    >
                      {projectTypes.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Kota">
                    <select
                      data-testid="estimator-city"
                      className={inputCls}
                      value={form.city}
                      onChange={update("city")}
                    >
                      {cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="Luas Bangunan (m²)"
                    hint="Total luas per lantai × jumlah lantai"
                  >
                    <input
                      data-testid="estimator-area"
                      type="number"
                      min="1"
                      max="5000"
                      step="1"
                      className={inputCls}
                      value={form.area_m2}
                      onChange={update("area_m2")}
                      placeholder="100"
                    />
                  </Field>

                  <Field label="Jumlah Lantai">
                    <select
                      data-testid="estimator-floors"
                      className={inputCls}
                      value={form.floors}
                      onChange={update("floors")}
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n} lantai
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Kualitas Bangunan">
                    <div className="grid grid-cols-3 gap-2">
                      {qualities.map((q) => (
                        <button
                          key={q.value}
                          type="button"
                          data-testid={`estimator-quality-${q.value}`}
                          onClick={() =>
                            setForm((f) => ({ ...f, quality: q.value }))
                          }
                          className={`border px-3 py-3 text-xs uppercase tracking-luxe transition-colors ${
                            form.quality === q.value
                              ? "border-[hsl(43,74%,55%)] bg-[hsl(43,74%,49%,0.15)] text-white"
                              : "border-white/15 bg-black/20 text-white/65 hover:border-white/30"
                          }`}
                        >
                          {q.label}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Catatan (Opsional)" hint="Misal: 3 kamar tidur, kolam renang, dll.">
                    <input
                      data-testid="estimator-notes"
                      type="text"
                      className={inputCls}
                      value={form.notes}
                      onChange={update("notes")}
                      placeholder="3 kamar tidur, ada kolam renang…"
                      maxLength={200}
                    />
                  </Field>

                  {error && (
                    <div
                      role="alert"
                      className="sm:col-span-2 flex items-start gap-2 border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      data-testid={ESTIMATOR_IDS.submit}
                      disabled={loading}
                      className="group inline-flex w-full items-center justify-center gap-3 bg-[hsl(43,74%,49%)] px-8 py-4 text-base font-semibold tracking-wide text-[hsl(220,15%,5%)] transition-all duration-300 gold-glow hover:bg-[hsl(43,74%,55%)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Menghitung dengan AI…
                        </>
                      ) : (
                        <>
                          <Calculator className="h-4 w-4" />
                          Hitung Estimasi
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-[11px] uppercase tracking-luxe text-white/40">
                      Gratis • Tanpa pendaftaran • Hasil dalam &lt; 30 detik
                    </p>
                  </div>
                </form>
              )}

              {result && (
                <div data-testid={ESTIMATOR_IDS.result}>
                  <div className="flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
                        Harga Timur Design
                      </p>
                      <p className="mt-2 font-display text-3xl font-bold leading-none text-white sm:text-4xl">
                        {formatIDR(result.total_low)}
                        <span className="mx-2 text-white/40">–</span>
                        {formatIDR(result.total_high)}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xs text-white/55">
                        {formatIDR(result.cost_per_m2_low)} –{" "}
                        {formatIDR(result.cost_per_m2_high)} per m²
                      </p>
                      <p className="mt-1 text-xs text-white/55">
                        Lama pengerjaan: {result.duration_months_low}–
                        {result.duration_months_high} bulan
                      </p>
                    </div>
                  </div>

                  {/* Competitor comparison */}
                  {result.competitor_avg_low > result.total_low && (
                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div className="border border-white/10 bg-black/20 p-4">
                        <p className="text-[10px] uppercase tracking-luxe text-white/45">
                          Rata-Rata Pasar
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white/55 line-through">
                          {formatIDR(result.competitor_avg_low)} –{" "}
                          {formatIDR(result.competitor_avg_high)}
                        </p>
                      </div>
                      <div className="border border-[hsl(43,74%,49%,0.4)] bg-[hsl(43,74%,49%,0.08)] p-4">
                        <p className="text-[10px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">
                          Harga Anda Hari Ini
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          {formatIDR(result.total_low)} –{" "}
                          {formatIDR(result.total_high)}
                        </p>
                      </div>
                      <div className="border border-emerald-400/30 bg-emerald-400/5 p-4">
                        <p className="text-[10px] uppercase tracking-luxe text-emerald-300">
                          Anda Hemat
                        </p>
                        <p className="mt-2 font-display text-2xl font-bold leading-none text-emerald-200">
                          {result.savings_percent}%
                        </p>
                        <p className="mt-1 text-[11px] text-white/55">
                          ≈ {formatIDR(result.competitor_avg_high - result.total_high)}
                        </p>
                      </div>
                    </div>
                  )}

                  <p className="mt-6 text-sm leading-relaxed text-white/75">
                    {result.summary}
                  </p>

                  <div className="mt-7">
                    <p className="text-[10px] uppercase tracking-luxe text-white/45">
                      Rincian Biaya
                    </p>
                    <div className="mt-3 divide-y divide-white/5 border border-white/10">
                      {result.breakdown.map((b) => (
                        <div
                          key={b.category}
                          className="grid grid-cols-1 gap-1 p-4 sm:grid-cols-12 sm:items-center sm:gap-3"
                        >
                          <div className="sm:col-span-5">
                            <p className="text-sm font-semibold text-white">
                              {b.category}
                            </p>
                            {b.note && (
                              <p className="mt-1 text-[11px] leading-relaxed text-white/45">
                                {b.note}
                              </p>
                            )}
                          </div>
                          <div className="text-xs text-white/70 sm:col-span-7 sm:text-right">
                            {formatIDR(b.low)}{" "}
                            <span className="text-white/30">–</span>{" "}
                            {formatIDR(b.high)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {result.assumptions?.length > 0 && (
                    <div className="mt-7">
                      <p className="text-[10px] uppercase tracking-luxe text-white/45">
                        Asumsi
                      </p>
                      <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/60">
                        {result.assumptions.map((a, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(43,74%,55%)]" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {result.next_steps?.length > 0 && (
                    <div className="mt-7">
                      <p className="text-[10px] uppercase tracking-luxe text-white/45">
                        Langkah Selanjutnya
                      </p>
                      <ol className="mt-3 space-y-2 text-sm text-white/75">
                        {result.next_steps.map((s, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="font-display text-[hsl(43,74%,55%)]">
                              0{i + 1}
                            </span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <a
                      href={buildWaUrl(waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={ESTIMATOR_IDS.ctaWa}
                      className="group inline-flex items-center justify-center gap-3 bg-[hsl(43,74%,49%)] px-7 py-4 text-sm font-semibold tracking-wide text-[hsl(220,15%,5%)] transition-all duration-300 gold-glow hover:bg-[hsl(43,74%,55%)]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.34.17 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.34 11.89-11.92 0-3.18-1.24-6.17-3.43-8.4Z" />
                      </svg>
                      Kirim Estimasi ke WhatsApp
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setResult(null);
                        setError("");
                      }}
                      data-testid="estimator-reset"
                      className="text-xs uppercase tracking-luxe text-white/55 transition-colors hover:text-white"
                    >
                      ← Hitung Ulang
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
