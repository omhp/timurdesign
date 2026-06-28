/* Timur Design — vanilla JS for static landing page */
(function () {
  "use strict";

  // ============ Brand constants ============
  var WA_NUMBER = "6282226817232";
  function buildWa(msg) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  }
  var WA_DEFAULT = buildWa(
    "Halo Timur Design, saya tertarik konsultasi gratis untuk bangun/renovasi rumah."
  );

  // ============ Helpers ============
  function el(tag, opts) {
    var e = document.createElement(tag);
    if (opts) {
      if (opts.cls) e.className = opts.cls;
      if (opts.html != null) e.innerHTML = opts.html;
      if (opts.text != null) e.textContent = opts.text;
      if (opts.attrs)
        Object.keys(opts.attrs).forEach(function (k) {
          e.setAttribute(k, opts.attrs[k]);
        });
    }
    return e;
  }
  function $(sel) {
    return document.querySelector(sel);
  }
  function setHref(id, href) {
    var n = document.getElementById(id);
    if (n) n.href = href;
  }
  function formatIDR(n) {
    return "Rp " + Number(n || 0).toLocaleString("id-ID");
  }

  // ============ WhatsApp link wiring ============
  setHref("hero-wa", WA_DEFAULT);
  setHref("ctaband-wa", WA_DEFAULT);
  setHref("footer-wa", WA_DEFAULT);
  setHref("floating-wa", WA_DEFAULT);
  setHref(
    "portfolio-wa",
    buildWa(
      "Halo Timur Design, saya tertarik dengan portofolio dan ingin konsultasi gaya rumah."
    )
  );

  // ============ Year ============
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // ============ Floating WhatsApp visibility on scroll ============
  var floatBtn = document.getElementById("floating-wa");
  var scrollTicking = false;
  function applyScrollState() {
    scrollTicking = false;
    if (!floatBtn) return;
    if (window.scrollY > 600) {
      floatBtn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      floatBtn.classList.add("opacity-100", "translate-y-0");
    } else {
      floatBtn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      floatBtn.classList.remove("opacity-100", "translate-y-0");
    }
  }
  function onScroll() {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(applyScrollState);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  applyScrollState();

  // ============ SVG icon helper (inline strings) ============
  var ICON = {
    arrow:
      '<svg class="h-5 w-5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(43,74%,55%)] absolute right-5 top-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10"/></svg>',
    home: '<svg class="h-6 w-6 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 22V12h6v10"/></svg>',
    pencil:
      '<svg class="h-6 w-6 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m3 16 7 7 11-11M3 16l4-4 7 7M3 16V8M14 5l5 5M19 3l2 2-9 9M14 5 9 10"/></svg>',
    sofa: '<svg class="h-6 w-6 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3M2 16a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3H2v-3ZM4 19v2M20 19v2M4 14V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5"/></svg>',
    building:
      '<svg class="h-6 w-6 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M2 22h20M10 6h2M10 10h2M10 14h2M10 18h2"/></svg>',
    msg: '<svg class="h-5 w-5 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>',
    box: '<svg class="h-5 w-5 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>',
    file: '<svg class="h-5 w-5 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
    award:
      '<svg class="h-5 w-5 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path stroke-linecap="round" stroke-linejoin="round" d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/></svg>',
    sun: '<svg class="h-5 w-5 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    eye: '<svg class="h-5 w-5 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
    hammer:
      '<svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9M17.64 15 22 10.64M20.91 11.7l-1.25-1.25a2 2 0 0 1 0-2.83l1.06-1.06a2 2 0 0 0 0-2.83l-.71-.71a2 2 0 0 0-2.83 0l-1.06 1.06a2 2 0 0 1-2.83 0L12.04 2.84a2 2 0 0 0-2.83 0L8.5 3.55a2 2 0 0 0 0 2.83l8.79 8.79a2 2 0 0 0 2.83 0Z"/></svg>',
    star: '<svg class="h-3.5 w-3.5 fill-[hsl(43,74%,55%)] text-[hsl(43,74%,55%)]" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5"/></svg>',
    quote:
      '<svg class="h-7 w-7 text-[hsl(43,74%,55%)] opacity-70" fill="currentColor" viewBox="0 0 24 24"><path d="M3 21c0-4 2-7 5-9V8H4V4h7v7c0 4-2 7-5 9zm10 0c0-4 2-7 5-9V8h-4V4h7v7c0 4-2 7-5 9z"/></svg>',
    plus: '<svg class="h-4 w-4 text-white/70" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M5 12h14"/></svg>',
    minus:
      '<svg class="h-4 w-4 text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"/></svg>',
    book: '<svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/></svg>',
    clock:
      '<svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>',
    arrowUp:
      '<svg class="h-5 w-5 shrink-0 text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(43,74%,55%)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10"/></svg>',
  };

  // ============ SERVICES ============
  var services = [
    { icon: "home", title: "Bangun & Renovasi Rumah", desc: "Dari tanah kosong sampai renovasi total. Desain, struktur, listrik-air, sampai penyelesaian akhir — semua satu tim.", points: ["Gambar 3D + rincian biaya", "Garansi 1 tahun", "Laporan progres tiap minggu"], msg: "Halo Timur Design, saya tertarik konsultasi bangun/renovasi rumah." },
    { icon: "pencil", title: "Jasa Arsitek", desc: "Desain rumah, villa, toko, atau kantor. Konsep arsitektur, denah 2D, model 3D, dan gambar teknis siap bangun.", points: ["Rumah, villa, toko, kantor", "Denah 2D + model 3D", "Gambar teknis lengkap"], msg: "Halo Timur Design, saya tertarik jasa arsitek desain (rumah/villa/toko/kantor)." },
    { icon: "sofa", title: "Desain Interior", desc: "Interior yang enak dilihat dan nyaman dipakai sehari-hari. Furniture custom, pencahayaan, sampai dekorasi.", points: ["Gambar 3D + moodboard", "Furniture custom", "Dekorasi lengkap"], msg: "Halo Timur Design, saya tertarik jasa desain interior." },
    { icon: "building", title: "Desain Eksterior & Fasad", desc: "Tampilan luar rumah yang berkarakter — modern, tropis, atau klasik. Sesuai gaya yang Anda inginkan.", points: ["Konsep tampilan rumah", "Pilihan material fasad", "Lampu eksterior"], msg: "Halo Timur Design, saya tertarik jasa desain eksterior / fasad." }
  ];
  var sg = document.getElementById("services-grid");
  var sgFrag = document.createDocumentFragment();
  services.forEach(function (s) {
    var card = el("div", {
      cls: "group relative flex flex-col items-center bg-[hsl(220,15%,5%)] p-7 text-center transition-colors duration-300 hover:bg-[hsl(220,15%,7%)]",
    });
    var pts = s.points.map(function (p) { return '<li class="flex items-center gap-2 text-sm text-white/75"><span class="h-1 w-1 rounded-full bg-[hsl(43,74%,55%)]"></span>' + p + "</li>"; }).join("");
    card.innerHTML =
      '<div class="mt-2 flex h-14 w-14 items-center justify-center border border-[hsl(43,74%,49%,0.4)] bg-[hsl(43,74%,49%,0.08)] transition-all duration-300 group-hover:border-[hsl(43,74%,55%)] group-hover:bg-[hsl(43,74%,49%,0.15)]">' + ICON[s.icon] + "</div>" +
      '<h3 class="mt-6 font-display text-2xl font-semibold leading-tight text-white sm:text-[1.625rem] lg:text-2xl">' + s.title + "</h3>" +
      '<p class="mt-4 text-base leading-relaxed text-white/65 sm:text-[15px]">' + s.desc + "</p>" +
      '<ul class="mt-6 flex flex-col items-center space-y-2.5">' + pts + "</ul>";
    sgFrag.appendChild(card);
  });
  sg.appendChild(sgFrag);

  // ============ WHY US ============
  var whyus = [
    { icon: "msg", title: "Mulai Tanpa Risiko", points: ["Konsultasi gratis", "Revisi desain sampai puas", "Pembayaran bertahap sesuai progres"] },
    { icon: "box", title: "Lihat Dulu, Baru Bangun", points: ["Gambar denah 2D yang jelas", "Model 3D rumah lengkap", "Bonus video 3D & render eksterior"] },
    { icon: "file", title: "Dokumen Lengkap Diserahkan", points: ["Gambar teknis arsitektur & struktur", "Gambar listrik, air & sanitasi", "Rincian anggaran (RAB) & print A3"] },
    { icon: "award", title: "Kualitas yang Bertahan Lama", points: ["Material berkelas & tahan cuaca", "Struktur lebih kokoh & aman", "Pengecekan kualitas berlapis"] },
    { icon: "sun", title: "Nyaman Ditinggali", points: ["Tata ruang lega & fungsional", "Cahaya alami & sirkulasi udara baik", "Optimal untuk lahan kecil maupun besar"] },
    { icon: "eye", title: "Diawasi Sampai Selesai", points: ["Koordinasi tim saat pembangunan", "Garansi gambar bisa benar-benar dibangun", "Pengawas lapangan harian"] }
  ];
  var wg = document.getElementById("whyus-grid");
  var wgFrag = document.createDocumentFragment();
  whyus.forEach(function (f, idx) {
    var pts = f.points.map(function (p) { return '<li class="flex items-start gap-2.5 text-sm leading-relaxed text-white/65"><span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(43,74%,55%)]"></span><span>' + p + "</span></li>"; }).join("");
    var d = el("div", {
      cls: "group relative border border-white/10 bg-black/30 p-7 text-center backdrop-blur-sm transition-all duration-300 hover:border-[hsl(43,74%,49%,0.4)] hover:bg-black/40",
      html:
        '<span class="absolute right-5 top-5 font-display text-xs text-white/20">0' + (idx + 1) + "</span>" +
        '<div class="mx-auto flex h-12 w-12 items-center justify-center border border-[hsl(43,74%,49%,0.4)] bg-[hsl(43,74%,49%,0.08)]">' + ICON[f.icon] + "</div>" +
        '<h3 class="mt-6 font-display text-xl font-semibold text-white">' + f.title + "</h3>" +
        '<ul class="mt-5 inline-flex flex-col items-start space-y-2.5 text-left">' + pts + "</ul>",
    });
    wgFrag.appendChild(d);
  });
  wg.appendChild(wgFrag);

  // ============ PROCESS ============
  var steps = [
    { n: "01", title: "Konsultasi Gratis", desc: "Ngobrol santai — kebutuhan, selera, dan anggaran Anda. Lewat WhatsApp atau langsung di lokasi." },
    { n: "02", title: "Desain Rumah & Rincian Biaya", desc: "Kami buatkan gambar 3D + rincian biaya yang detail. Anda bisa revisi sampai cocok di hati." },
    { n: "03", title: "Kontrak Hitam di Atas Putih", desc: "Jadwal, harga, dan lingkup pekerjaan dikunci tertulis. Tidak ada kejutan biaya di tengah jalan." },
    { n: "04", title: "Pembangunan & Laporan Mingguan", desc: "Pengawas lapangan setiap hari + laporan progres mingguan lengkap dengan foto. Anda selalu tahu kondisi proyek." },
    { n: "05", title: "Serah Terima Kunci & Garansi", desc: "Cek bersama, perbaikan kecil jika perlu, lalu kunci diserahkan. Garansi 1 tahun langsung aktif." }
  ];
  var pl = document.getElementById("process-list");
  steps.forEach(function (s, idx) {
    var li = el("li", {
      cls: "group relative flex gap-6 border-t border-white/10 py-7 transition-colors hover:bg-white/[0.02] sm:gap-10",
      html:
        '<div class="shrink-0"><div class="font-display text-3xl font-bold text-[hsl(43,74%,55%)] sm:text-4xl">' + s.n + "</div></div>" +
        '<div class="flex-1"><h3 class="font-display text-xl font-semibold text-white sm:text-2xl">' + s.title + '</h3><p class="mt-2 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">' + s.desc + "</p></div>" +
        (idx === steps.length - 1 ? '<span aria-hidden class="absolute inset-x-0 bottom-0 h-px bg-white/10"></span>' : ""),
    });
    pl.appendChild(li);
  });

  // ============ PORTFOLIO ============
  var portfolio = [
    { title: "Scandinavian", img: "/portfolio/scandinavian.webp" },
    { title: "Modern Tropis", img: "/portfolio/modern-tropis.webp" },
    { title: "Rumah Gaya Villa", img: "/portfolio/villa.webp" },
    { title: "Minimalis Modern", img: "/portfolio/minimalis.webp" },
    { title: "Mediterania", img: "/portfolio/mediterania.webp" },
    { title: "Industrialis", img: "/portfolio/industrialis.webp" }
  ];
  var pg = document.getElementById("portfolio-grid");
  var pgFrag = document.createDocumentFragment();
  portfolio.forEach(function (p) {
    var art = el("article", {
      cls: "group relative overflow-hidden border border-white/10 bg-black/40",
      html:
        '<div class="relative aspect-[4/5] overflow-hidden">' +
        '<img src="' + p.img + '" alt="Portofolio rumah gaya ' + p.title + ' oleh Timur Design" loading="lazy" decoding="async" width="720" height="900" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />' +
        '<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>' +
        '<span class="absolute left-4 top-4 inline-flex items-center gap-1.5 border border-[hsl(43,74%,55%)]/40 bg-[hsl(43,74%,55%)]/15 px-2.5 py-1 text-[10px] uppercase tracking-luxe text-[hsl(43,74%,75%)] backdrop-blur-md">' + ICON.hammer + " Proyek Kami</span>" +
        "</div>" +
        '<div class="absolute inset-x-0 bottom-0 p-5"><div class="flex items-end justify-between gap-3"><h3 class="font-display text-xl font-semibold text-white sm:text-2xl">' + p.title + "</h3>" + ICON.arrowUp + "</div></div>",
    });
    pgFrag.appendChild(art);
  });
  pg.appendChild(pgFrag);

  // ============ TESTIMONIALS ============
  var testi = [
    { name: "Pak Anwar S.", role: "Pemilik Rumah, Denpasar", quote: "Bangun rumah 2 lantai di Bali selesai tepat 7 bulan, sesuai kontrak. Yang paling saya hargai: RAB transparan, semua nota dibukakan.", rating: 5 },
    { name: "Bu Lina H.", role: "Renovasi, Surabaya", quote: "Sudah 2x ganti kontraktor sebelumnya, selalu bermasalah. Di Timur Design beda — laporan progres setiap minggu, jadi tenang.", rating: 5 },
    { name: "Pak Reza M.", role: "Vila Disewakan, Malang", quote: "Hasil akhir 95% mirip 3D render. Untuk proyek seharga ratusan juta, ini hal yang dulu saya kira mustahil. Recommended.", rating: 5 }
  ];
  var tg = document.getElementById("testi-grid");
  testi.forEach(function (t) {
    var stars = "";
    for (var i = 0; i < t.rating; i++) stars += ICON.star;
    var fig = el("figure", {
      cls: "relative flex flex-col border border-white/10 bg-black/30 p-7 backdrop-blur-sm transition-colors hover:border-[hsl(43,74%,49%,0.4)]",
      html:
        ICON.quote +
        '<blockquote class="mt-5 flex-1 text-sm leading-relaxed text-white/80 sm:text-base">“' + t.quote + "”</blockquote>" +
        '<div class="mt-7 border-t border-white/10 pt-5"><div class="flex items-center gap-1">' + stars + "</div>" +
        '<figcaption class="mt-3"><div class="font-display text-base font-semibold text-white">' + t.name + '</div><div class="text-xs text-white/55">' + t.role + "</div></figcaption></div>",
    });
    tg.appendChild(fig);
  });

  // ============ FAQ ============
  var faqs = [
    { q: "Berapa lama waktu pengerjaan rumah?", a: "Tergantung luas dan tingkat kesulitan. Rumah 1 lantai (sekitar 100 m²) biasanya selesai 4–5 bulan. Rumah 2 lantai (200 m²) sekitar 6–8 bulan. Semua sudah kami cantumkan di kontrak, lengkap dengan kesepakatan jika ada keterlambatan." },
    { q: "Apakah biaya yang Anda sampaikan sudah final?", a: "Ya. Kami berikan rincian harga per item (material + tukang) sejak awal. Kalau di tengah jalan ada perubahan yang Anda inginkan, kami buatkan kesepakatan tertulis dulu — jadi Anda yang memutuskan, bukan kami yang menentukan sendiri." },
    { q: "Bagaimana cara pembayarannya?", a: "Pembayaran bertahap, sesuai progres pekerjaan yang sudah selesai dan diverifikasi. Bukan lunas di awal. Tahap pertama biasanya 20–25% setelah kontrak diteken." },
    { q: "Apa saja yang dijamin selama 1 tahun setelah selesai?", a: "Kami jamin perbaikan jika ada masalah seperti dinding retak rambut yang signifikan, kebocoran atap, atau kerusakan akibat kualitas pengerjaan. Yang tidak termasuk: kerusakan karena pemakaian normal (misal cat memudar karena waktu)." },
    { q: "Bagaimana cara mulai konsultasi dengan Timur Design?", a: "Cukup klik tombol WhatsApp di halaman ini. Konsultasi pertama gratis sepenuhnya — tanpa biaya, tanpa keharusan lanjut. Anda bebas membandingkan dengan kontraktor lain dulu." }
  ];
  var fl = document.getElementById("faq-list");
  var faqOpen = 0;
  faqs.forEach(function (f, idx) {
    var item = el("div", { cls: "border-b border-white/10 faq-item" });
    item.dataset.idx = idx;
    item.innerHTML =
      '<button type="button" class="faq-toggle flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:bg-white/[0.02]" aria-expanded="' + (idx === 0) + '">' +
      '<span class="font-display text-base font-semibold text-white sm:text-lg">' + f.q + "</span>" +
      '<span class="faq-icon flex h-9 w-9 shrink-0 items-center justify-center border border-white/15">' + (idx === 0 ? ICON.minus : ICON.plus) + "</span>" +
      "</button>" +
      '<div class="faq-body grid overflow-hidden transition-all duration-300 ease-out ' + (idx === 0 ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0") + '">' +
      '<div class="min-h-0"><p class="max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base">' + f.a + "</p></div>" +
      "</div>";
    fl.appendChild(item);
  });
  fl.addEventListener("click", function (ev) {
    var btn = ev.target.closest(".faq-toggle");
    if (!btn) return;
    var item = btn.closest(".faq-item");
    var idx = Number(item.dataset.idx);
    var willOpen = faqOpen !== idx;
    // close all
    fl.querySelectorAll(".faq-item").forEach(function (n) {
      var body = n.querySelector(".faq-body");
      var icon = n.querySelector(".faq-icon");
      var b = n.querySelector(".faq-toggle");
      body.className = "faq-body grid overflow-hidden transition-all duration-300 ease-out grid-rows-[0fr] opacity-0";
      icon.innerHTML = ICON.plus;
      b.setAttribute("aria-expanded", "false");
    });
    if (willOpen) {
      var body = item.querySelector(".faq-body");
      var icon = item.querySelector(".faq-icon");
      body.className = "faq-body grid overflow-hidden transition-all duration-300 ease-out grid-rows-[1fr] pb-6 opacity-100";
      icon.innerHTML = ICON.minus;
      btn.setAttribute("aria-expanded", "true");
      faqOpen = idx;
    } else {
      faqOpen = -1;
    }
  });

  // ============ ESTIMATOR ============
  var PRICING = {
    bangun_renovasi: { standar: [4500000, 5500000], menengah: [5500000, 7000000], premium: [7000000, 10000000] },
    arsitek: { standar: [150000, 250000], menengah: [250000, 400000], premium: [400000, 700000] },
    interior: { standar: [1500000, 2500000], menengah: [2500000, 4000000], premium: [4000000, 6500000] },
    eksterior: { standar: [1000000, 1800000], menengah: [1800000, 3000000], premium: [3000000, 5000000] },
  };
  var CITY_MUL = { Bali: 1.12, Surabaya: 1.0, Malang: 0.95, Pontianak: 1.05 };
  var TIMUR_DISCOUNT_PCT = 8;
  var DURATION_FN = {
    bangun_renovasi: function (a, f) { var l = Math.max(4, Math.ceil(a * f / 50)); return [l, l + 2]; },
    arsitek: function () { return [1, 2]; },
    interior: function (a) { var l = Math.max(1, Math.ceil(a / 100)); return [l, l + 1]; },
    eksterior: function () { return [1, 2]; },
  };
  var BREAKDOWN = {
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
  var SUMMARY = {
    bangun_renovasi: function (c, a, f, q) { return "Estimasi untuk bangun/renovasi rumah " + q + " seluas " + a + " m² × " + f + " lantai di " + c + ". Sudah termasuk struktur, MEP, dan penyelesaian akhir. Harga final ditentukan setelah survey lokasi & finalisasi material."; },
    arsitek: function (c, a) { return "Estimasi jasa arsitek untuk bangunan seluas " + a + " m² di " + c + ". Mencakup konsep, denah 2D, render 3D, dan gambar kerja siap untuk tukang. Tidak termasuk biaya konstruksi."; },
    interior: function (c, a, _f, q) { return "Estimasi desain & eksekusi interior " + q + " untuk " + a + " m² di " + c + ". Termasuk furniture custom, lantai/dinding finishing, pencahayaan dekoratif, dan soft furnishing."; },
    eksterior: function (c, a) { return "Estimasi desain & pekerjaan eksterior/fasad untuk " + a + " m² di " + c + ". Termasuk material fasad, atap ekspos, taman, dan lampu eksterior."; },
  };
  var NEXT_STEPS = [
    "Hubungi tim Timur Design via WhatsApp dengan estimasi ini.",
    "Konsultasi gratis: kami pelajari kebutuhan, lahan, dan referensi gaya Anda.",
    "Survey lokasi & finalisasi RAB, lalu kontrak kerja transparan.",
    "Mulai pengerjaan dengan laporan progres tiap minggu.",
  ];
  function round(n, step) { step = step || 100000; return Math.round(n / step) * step; }
  function computeEstimate(input) {
    var area = Number(input.area_m2) || 0;
    var f = Number(input.floors) || 1;
    var totalArea = input.project_type === "bangun_renovasi" ? area * f : area;
    var p = (PRICING[input.project_type] || PRICING.bangun_renovasi)[input.quality] || PRICING.bangun_renovasi.menengah;
    var cityMul = CITY_MUL[input.city] != null ? CITY_MUL[input.city] : 1.0;
    var c_low = round(p[0] * totalArea * cityMul);
    var c_high = round(p[1] * totalArea * cityMul);
    var factor = 1 - TIMUR_DISCOUNT_PCT / 100;
    var t_low = round(c_low * factor);
    var t_high = round(c_high * factor);
    var per_low = Math.round(t_low / totalArea);
    var per_high = Math.round(t_high / totalArea);
    var dur = (DURATION_FN[input.project_type] || DURATION_FN.bangun_renovasi)(area, f);
    var bdTpl = BREAKDOWN[input.project_type] || BREAKDOWN.bangun_renovasi;
    var bd = bdTpl.map(function (b) { return { category: b.category, low: round(t_low * b.pct, 50000), high: round(t_high * b.pct, 50000), note: b.note }; });
    var sLow = bd.reduce(function (s, b) { return s + b.low; }, 0);
    var sHigh = bd.reduce(function (s, b) { return s + b.high; }, 0);
    bd[bd.length - 1].low += t_low - sLow;
    bd[bd.length - 1].high += t_high - sHigh;
    var fn = SUMMARY[input.project_type] || SUMMARY.bangun_renovasi;
    return { project_type: input.project_type, city: input.city, area_m2: area, floors: f, quality: input.quality, total_low: t_low, total_high: t_high, cost_per_m2_low: per_low, cost_per_m2_high: per_high, competitor_avg_low: c_low, competitor_avg_high: c_high, savings_percent: TIMUR_DISCOUNT_PCT, duration_months_low: dur[0], duration_months_high: dur[1], breakdown: bd, assumptions: ["Tarif berbasis rata-rata pasar 2026 untuk wilayah " + input.city + ".", "Kualitas finishing: " + input.quality + ".", "Harga belum termasuk biaya tanah, IMB/PBG, dan pajak (kecuali disebutkan).", "Estimasi indikatif. Angka final ditentukan setelah survey lokasi & RAB."], next_steps: NEXT_STEPS, summary: fn(input.city, area, f, input.quality) };
  }

  // Render form
  var mount = document.getElementById("estimator-mount");
  var state = { project_type: "bangun_renovasi", city: "Bali", area_m2: 100, floors: 1, quality: "menengah", notes: "", result: null, loading: false, error: "" };
  function inputCls() { return "w-full rounded-none border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[hsl(43,74%,55%)] focus:bg-black/50"; }
  function field(label, inner, hint) {
    return '<label class="block"><div class="text-[10px] uppercase tracking-luxe text-white/55">' + label + '</div><div class="mt-2">' + inner + "</div>" + (hint ? '<div class="mt-1 text-[11px] text-white/40">' + hint + "</div>" : "") + "</label>";
  }
  function renderForm() {
    var qBtn = ["standar", "menengah", "premium"].map(function (q) {
      var active = state.quality === q;
      return '<button type="button" data-q="' + q + '" class="quality-btn border px-3 py-3 text-xs uppercase tracking-luxe transition-colors ' + (active ? "border-[hsl(43,74%,55%)] bg-[hsl(43,74%,49%,0.15)] text-white" : "border-white/15 bg-black/20 text-white/65 hover:border-white/30") + '">' + q.charAt(0).toUpperCase() + q.slice(1) + "</button>";
    }).join("");
    var cityOpts = ["Bali", "Surabaya", "Malang", "Pontianak"].map(function (c) { return '<option value="' + c + '"' + (state.city === c ? " selected" : "") + ">" + c + "</option>"; }).join("");
    var typeOpts = [["bangun_renovasi", "Bangun / Renovasi Rumah"], ["arsitek", "Jasa Arsitek (Rumah/Villa/Toko/Kantor)"], ["interior", "Desain Interior"], ["eksterior", "Desain Eksterior / Fasad"]].map(function (t) { return '<option value="' + t[0] + '"' + (state.project_type === t[0] ? " selected" : "") + ">" + t[1] + "</option>"; }).join("");
    var floorOpts = [1, 2, 3, 4, 5].map(function (n) { return '<option value="' + n + '"' + (state.floors === n ? " selected" : "") + ">" + n + " lantai</option>"; }).join("");
    mount.innerHTML =
      '<form id="estimator-form" class="grid grid-cols-1 gap-5 sm:grid-cols-2">' +
      field("Tipe Proyek", '<select id="est-type" class="' + inputCls() + '">' + typeOpts + "</select>") +
      field("Kota", '<select id="est-city" class="' + inputCls() + '">' + cityOpts + "</select>") +
      field("Luas Bangunan (m²)", '<input id="est-area" type="number" min="1" max="5000" step="1" value="' + state.area_m2 + '" placeholder="100" class="' + inputCls() + '"/>', "Total luas per lantai × jumlah lantai") +
      field("Jumlah Lantai", '<select id="est-floors" class="' + inputCls() + '">' + floorOpts + "</select>") +
      field("Kualitas Bangunan", '<div class="grid grid-cols-3 gap-2">' + qBtn + "</div>") +
      field("Catatan (Opsional)", '<input id="est-notes" type="text" maxlength="200" value="' + state.notes + '" placeholder="3 kamar tidur, ada kolam renang…" class="' + inputCls() + '"/>', "Misal: 3 kamar tidur, kolam renang, dll.") +
      (state.error ? '<div role="alert" class="sm:col-span-2 flex items-start gap-2 border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">' + state.error + "</div>" : "") +
      '<div class="sm:col-span-2"><button type="submit" ' + (state.loading ? "disabled" : "") + ' class="group inline-flex w-full items-center justify-center gap-3 bg-[hsl(43,74%,49%)] px-8 py-4 text-base font-semibold tracking-wide text-[hsl(220,15%,5%)] transition-all duration-300 gold-glow hover:bg-[hsl(43,74%,55%)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">' +
      (state.loading
        ? '<svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"/></svg> Menghitung…'
        : '<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h2M14 14h2M8 18h2M14 18h2"/></svg> Hitung Estimasi <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"/></svg>') +
      '</button><p class="mt-3 text-[11px] uppercase tracking-luxe text-white/40">Gratis • Tanpa pendaftaran • Hasil dalam &lt; 30 detik</p></div>' +
      "</form>";

    document.getElementById("est-type").addEventListener("change", function (e) { state.project_type = e.target.value; });
    document.getElementById("est-city").addEventListener("change", function (e) { state.city = e.target.value; });
    document.getElementById("est-area").addEventListener("input", function (e) { state.area_m2 = e.target.value; });
    document.getElementById("est-floors").addEventListener("change", function (e) { state.floors = Number(e.target.value); });
    document.getElementById("est-notes").addEventListener("input", function (e) { state.notes = e.target.value; });
    mount.querySelectorAll(".quality-btn").forEach(function (b) {
      b.addEventListener("click", function () { state.quality = b.dataset.q; renderForm(); });
    });
    document.getElementById("estimator-form").addEventListener("submit", function (e) {
      e.preventDefault();
      state.error = "";
      if (!state.area_m2 || Number(state.area_m2) <= 0) { state.error = "Luas bangunan harus lebih dari 0."; return renderForm(); }
      state.loading = true; renderForm();
      setTimeout(function () {
        try { state.result = computeEstimate(state); }
        catch (err) { state.error = "Gagal menghitung estimasi. Coba lagi."; }
        state.loading = false;
        renderResult();
      }, 600);
    });
  }
  function renderResult() {
    var r = state.result;
    if (!r) return renderForm();
    var bd = r.breakdown.map(function (b) {
      return '<div class="grid grid-cols-1 gap-1 p-4 sm:grid-cols-12 sm:items-center sm:gap-3">' +
        '<div class="sm:col-span-5"><p class="text-sm font-semibold text-white">' + b.category + '</p>' + (b.note ? '<p class="mt-1 text-[11px] leading-relaxed text-white/45">' + b.note + "</p>" : "") + "</div>" +
        '<div class="text-xs text-white/70 sm:col-span-7 sm:text-right">' + formatIDR(b.low) + ' <span class="text-white/30">–</span> ' + formatIDR(b.high) + "</div></div>";
    }).join('<div class="border-t border-white/5"></div>');
    var assumpts = r.assumptions.map(function (a) { return '<li class="flex gap-2"><span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(43,74%,55%)]"></span><span>' + a + "</span></li>"; }).join("");
    var steps = r.next_steps.map(function (s, i) { return '<li class="flex gap-3"><span class="font-display text-[hsl(43,74%,55%)]">0' + (i + 1) + "</span><span>" + s + "</span></li>"; }).join("");
    var hasSavings = r.competitor_avg_low > r.total_low;
    var savingsLine = hasSavings ? "\n(" + r.savings_percent + "% lebih hemat dari rata-rata pasar)\n" : "\n";
    var projLabel = { bangun_renovasi: "Bangun / Renovasi Rumah", arsitek: "Jasa Arsitek (Rumah/Villa/Toko/Kantor)", interior: "Desain Interior", eksterior: "Desain Eksterior / Fasad" }[r.project_type];
    var waMessage = "Halo Timur Design, saya sudah pakai kalkulator estimasi di website.\n\nProyek: " + projLabel + "\nKota: " + r.city + "\nLuas: " + r.area_m2 + " m² (" + r.floors + " lantai)\nKualitas: " + r.quality + "\nEstimasi: " + formatIDR(r.total_low) + " – " + formatIDR(r.total_high) + savingsLine + "\nSaya ingin konsultasi lebih lanjut.";
    var comp = hasSavings
      ? '<div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">' +
        '<div class="border border-white/10 bg-black/20 p-4"><p class="text-[10px] uppercase tracking-luxe text-white/45">Rata-Rata Pasar</p><p class="mt-2 text-sm font-semibold text-white/55 line-through">' + formatIDR(r.competitor_avg_low) + " – " + formatIDR(r.competitor_avg_high) + "</p></div>" +
        '<div class="border border-[hsl(43,74%,49%,0.4)] bg-[hsl(43,74%,49%,0.08)] p-4"><p class="text-[10px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">Harga Anda Hari Ini</p><p class="mt-2 text-sm font-semibold text-white">' + formatIDR(r.total_low) + " – " + formatIDR(r.total_high) + "</p></div>" +
        '<div class="border border-emerald-400/30 bg-emerald-400/5 p-4"><p class="text-[10px] uppercase tracking-luxe text-emerald-300">Anda Hemat</p><p class="mt-2 font-display text-2xl font-bold leading-none text-emerald-200">' + r.savings_percent + '%</p><p class="mt-1 text-[11px] text-white/55">≈ ' + formatIDR(r.competitor_avg_high - r.total_high) + "</p></div>" +
        "</div>"
      : "";
    mount.innerHTML =
      '<div class="flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">' +
      '<div><p class="text-[10px] uppercase tracking-luxe text-[hsl(43,74%,55%)]">Harga Timur Design</p><p class="mt-2 font-display text-3xl font-bold leading-none text-white sm:text-4xl">' + formatIDR(r.total_low) + ' <span class="mx-2 text-white/40">–</span>' + formatIDR(r.total_high) + "</p></div>" +
      '<div class="text-left sm:text-right"><p class="text-xs text-white/55">' + formatIDR(r.cost_per_m2_low) + " – " + formatIDR(r.cost_per_m2_high) + ' per m²</p><p class="mt-1 text-xs text-white/55">Lama pengerjaan: ' + r.duration_months_low + "–" + r.duration_months_high + " bulan</p></div></div>" +
      comp +
      '<p class="mt-6 text-sm leading-relaxed text-white/75">' + r.summary + "</p>" +
      '<div class="mt-7"><p class="text-[10px] uppercase tracking-luxe text-white/45">Rincian Biaya</p><div class="mt-3 divide-y divide-white/5 border border-white/10">' + bd + "</div></div>" +
      '<div class="mt-7"><p class="text-[10px] uppercase tracking-luxe text-white/45">Asumsi</p><ul class="mt-3 space-y-2 text-xs leading-relaxed text-white/60">' + assumpts + "</ul></div>" +
      '<div class="mt-7"><p class="text-[10px] uppercase tracking-luxe text-white/45">Langkah Selanjutnya</p><ol class="mt-3 space-y-2 text-sm text-white/75">' + steps + "</ol></div>" +
      '<div class="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">' +
      '<a href="' + buildWa(waMessage) + '" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center justify-center gap-3 bg-[hsl(43,74%,49%)] px-7 py-4 text-sm font-semibold tracking-wide text-[hsl(220,15%,5%)] transition-all duration-300 gold-glow hover:bg-[hsl(43,74%,55%)]"><svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.34.17 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.89-5.34 11.89-11.92 0-3.18-1.24-6.17-3.43-8.4Z"/></svg>Kirim Estimasi ke WhatsApp<svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"/></svg></a>' +
      '<button type="button" id="est-reset" class="text-xs uppercase tracking-luxe text-white/55 transition-colors hover:text-white">← Hitung Ulang</button>' +
      "</div>";
    document.getElementById("est-reset").addEventListener("click", function () { state.result = null; state.error = ""; renderForm(); });
  }
  renderForm();
})();
