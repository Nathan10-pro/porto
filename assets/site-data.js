/* ==========================================================================
   SITE DATA
   Semua teks & data yang tampil di situs (profil, skills, timeline,
   testimoni, proyek) didefinisikan langsung di sini sebagai objek statis.

   (Sebelumnya data ini dibaca dari assets/content.xlsx lewat SheetJS —
   fitur itu sudah dihapus. loadSiteData() tetap mengembalikan Promise
   supaya main.js / proyek.js tidak perlu diubah.)
   ========================================================================== */
(function (global) {
  "use strict";

  var SITE_DATA = {
    profile: {
      nama: "Nathan Putra Amrin",
      inisial: "NA",
      eyebrow: "Software Engineer | AI Enthusiast",
      peran: ["Front-End Developer", "TypeScript Developer", "Pelajar RPL", "Problem Solver"],
      deskripsiHero: "Siswa RPL yang membangun antarmuka web modern, aplikasi interaktif, dan proyek praktis dengan HTML, CSS, JavaScript, dan TypeScript.",
      tentang1: "Halo! Saya Nathan, siswa jurusan Rekayasa Perangkat Lunak yang aktif mengembangkan proyek web pribadi dan aplikasi berbasis teknologi modern.",
      tentang2: "Saya senang mengubah ide menjadi antarmuka yang rapi dan fungsional. Karya saya mencakup homepage web, aplikasi to-do, kalkulator, sistem pelaporan, serta platform ekosistem pertanian.",
      levelKartu: "LV. 12",
      kelas: "Kelas XII RPL",
      email: "nathanputraamrin@gmail.com",
      whatsapp: "+62 812-3456-7890",
      whatsappUrl: "https://wa.me/6281234567890",
      lokasi: "Bekasi, Jawa Barat",
      sekolah: "SMK — Rekayasa Perangkat Lunak",
      cvUrl: "#", githubUrl: "https://github.com/Nathan10-pro", linkedinUrl: "https://www.linkedin.com/in/nathan-putra-amrin-undefined-888733437/", instagramUrl: "https://www.instagram.com/nathan.mymy/"
     },
    stats: [
      { label: "Repository Publik", angka: 11 },
      { label: "Bahasa Utama", angka: 5 },
      { label: "Proyek Unggulan", angka: 9 },
      { label: "Tahun Belajar", angka: 3 }
    ],
    skills: [
      { kategori: "Front-End", nama: "HTML5 & CSS3", level: 22, label: "Mahir" },
      { kategori: "Front-End", nama: "JavaScript", level: 75, label: "Menengah" },
      { kategori: "Front-End", nama: "Tailwind CSS", level: 85, label: "Mahir" },
      { kategori: "Front-End", nama: "React (Dasar)", level: 45, label: "Pemula" },
      { kategori: "Back-End", nama: "PHP", level: 70, label: "Menengah" },
      { kategori: "Back-End", nama: "Laravel", level: 65, label: "Menengah" },
      { kategori: "Back-End", nama: "MySQL", level: 80, label: "Mahir" },
      { kategori: "Back-End", nama: "REST API", level: 50, label: "Pemula" },
      { kategori: "Tools", nama: "Git & GitHub", level: 82, label: "Mahir" },
      { kategori: "Tools", nama: "Figma", level: 68, label: "Menengah" },
      { kategori: "Tools", nama: "VS Code", level: 90, label: "Mahir" },
      { kategori: "Tools", nama: "Postman", level: 55, label: "Pemula" }
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "PHP", "Laravel", "MySQL", "Git & GitHub", "Figma", "React"],
    timeline: [
      { tahun: "2026", judul: "Juara 2 Lomba Web Design Tingkat Kota", desc: "Membuat aplikasi pendataan UMKM dalam waktu 8 jam bersama tim beranggotakan 3 siswa.", tipe: "Lomba" },
      { tahun: "2025", judul: "Magang di Studio Digital Lokal", desc: "Membantu tim front-end membangun landing page klien menggunakan HTML, CSS, dan JavaScript.", tipe: "Magang" },
      { tahun: "2025", judul: "Ketua Divisi IT — OSIS", desc: "Mengelola website dan media informasi sekolah bersama anggota divisi.", tipe: "Organisasi" },
      { tahun: "2024", judul: "Mulai Belajar Back-End (PHP & MySQL)", desc: "Memperdalam pengembangan sisi server melalui proyek sekolah dan kursus daring.", tipe: "Pendidikan" },
      { tahun: "2023", judul: "Masuk Jurusan Rekayasa Perangkat Lunak", desc: "Memulai pembelajaran dasar pemrograman, algoritma, dan pengembangan web di SMK.", tipe: "Pendidikan" }
    ],
    testimonials: [
      { nama: "Agro Ecosystem", peran: "TypeScript + Supabase", isi: "Platform ekosistem pertanian modern yang menggabungkan aplikasi web, visualisasi, dan alur data." },
      { nama: "Caelestia Homepage", peran: "HTML + CSS + JavaScript", isi: "Homepage browser kustom yang terinspirasi tampilan desktop Linux dengan nuansa futuristik." },
      { nama: "E-Report 1.0", peran: "Web Application", isi: "Aplikasi pelaporan berbasis web untuk mengelola informasi dan tampilan laporan secara terstruktur." }
    ],
    projects: [
      { no: 1, judul: "Agro Ecosystem Platform", kategori: "Web Application", rarity: "Secret Rare", tahun: 2026, desc: "Platform ekosistem pertanian modern berbasis TypeScript, Supabase, dan antarmuka web responsif.", gambar: "", tags: ["TypeScript", "Next.js", "Supabase"], fitur: ["Antarmuka ekosistem pertanian", "Integrasi data Supabase", "Desain responsif"], demo: "https://agro-ecosystem-platform.vercel.app", source: "https://github.com/Nathan10-pro/Agro-Ecosystem-Platform" },
      { no: 2, judul: "Portofolio Web", kategori: "Personal Website", rarity: "Secret Rare", tahun: 2026, desc: "Website portofolio TypeScript yang menampilkan profil, karya, dan identitas pengembangan saya.", gambar: "assets/items/images/projectpertama.jpg", tags: ["TypeScript", "HTML", "CSS"], fitur: ["Tampilan profil modern", "Struktur komponen", "Desain responsif"], demo: "https://nathan10-pro.github.io/portofolioWeb/", source: "https://github.com/Nathan10-pro/portofolioWeb" },
      { no: 3, judul: "Caelestia Homepage", kategori: "Personal Website", rarity: "Super Rare", tahun: 2026, desc: "Homepage browser kustom bergaya Arch Linux dan caelestia-shell yang dibangun dengan JavaScript murni.", gambar: "", tags: ["JavaScript", "HTML", "CSS"], fitur: ["Tema desktop futuristik", "Interaksi browser homepage", "Layout adaptif"], demo: "https://nathan10-pro.github.io/Caelestia-Homepage/", source: "https://github.com/Nathan10-pro/Caelestia-Homepage" },
      { no: 4, judul: "To-DO List", kategori: "Personal Project", rarity: "Rare", tahun: 2026, desc: "Aplikasi daftar tugas interaktif untuk membuat, mengelola, dan melacak pekerjaan harian.", gambar: "", tags: ["JavaScript", "HTML", "CSS"], fitur: ["Kelola daftar tugas", "Antarmuka interaktif", "Desain ringan"], demo: "https://nathan10-pro.github.io/To-DO-list/", source: "https://github.com/Nathan10-pro/To-DO-list" },
      { no: 5, judul: "E-Report 1.0", kategori: "Web Application", rarity: "Super Rare", tahun: 2025, desc: "Aplikasi pelaporan web dengan halaman informasi, aset pendukung, dan tampilan laporan terstruktur.", gambar: "", tags: ["HTML", "CSS", "JavaScript"], fitur: ["Halaman laporan", "Navigasi aplikasi", "Antarmuka responsif"], demo: "https://nathan10-pro.github.io/E-Report-1.0/", source: "https://github.com/Nathan10-pro/E-Report-1.0" },
      { no: 6, judul: "Kalkulator Sederhana", kategori: "Personal Project", rarity: "Common", tahun: 2025, desc: "Kalkulator sederhana berbasis web untuk melakukan operasi matematika dasar.", gambar: "", tags: ["HTML", "CSS", "JavaScript"], fitur: ["Operasi aritmatika dasar", "Input interaktif", "Tampilan ringkas"], demo: "https://nathan10-pro.github.io/calculator_sederhana/", source: "https://github.com/Nathan10-pro/calculator_sederhana" },
      { no: 7, judul: "My Web Profile", kategori: "Personal Website", rarity: "Rare", tahun: 2025, desc: "Website profil pribadi hasil eksplorasi pengembangan web dan penggunaan AI sebagai pendamping coding.", gambar: "", tags: ["HTML", "CSS"], fitur: ["Profil personal", "Tata letak sederhana", "Desain responsif"], demo: "https://nathan10-pro.github.io/myWebProfile/", source: "https://github.com/Nathan10-pro/myWebProfile" },
      { no: 8, judul: "NizzA", kategori: "Web Experiment", rarity: "Common", tahun: 2025, desc: "Eksperimen halaman web statis dengan komposisi gambar, teks, dan styling CSS.", gambar: "", tags: ["HTML", "CSS"], fitur: ["Konten visual", "Styling CSS", "Layout statis"], demo: "https://nathan10-pro.github.io/NIzzA/", source: "https://github.com/Nathan10-pro/NIzzA" },
      { no: 9, judul: "Lampu", kategori: "School Project", rarity: "Common", tahun: 2025, desc: "Proyek web sederhana yang dibuat sebagai latihan HTML dan pemahaman halaman web dasar.", gambar: "", tags: ["HTML"], fitur: ["Halaman HTML dasar", "Struktur sederhana", "Eksperimen antarmuka"], demo: "https://github.com/Nathan10-pro/Lampu", source: "https://github.com/Nathan10-pro/Lampu" }
    ]
  };

  var RARITY_CLASS = {
    "Common": "r-common",
    "Rare": "r-rare",
    "Super Rare": "r-super",
    "Secret Rare": "r-secret"
  };
  global.RARITY_CLASS = RARITY_CLASS;

  /**
   * Mengembalikan Promise<SITE data object>. Dulu fungsi ini membaca
   * assets/content.xlsx secara async; sekarang datanya statis di atas,
   * tapi bentuk Promise dipertahankan supaya main.js / proyek.js
   * (yang memanggil loadSiteData().then(...)) tidak perlu diubah.
   */
  function loadSiteData() {
    return Promise.resolve(SITE_DATA);
  }

  global.loadSiteData = loadSiteData;
})(window);
