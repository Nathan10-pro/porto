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
      eyebrow: "Siswa RPL · Sedang Belajar",
      peran: ["Siswa RPL", "Pengembang Web Pemula", "Sedang Bereksplorasi"],
      deskripsiHero: "Halo, saya siswa RPL yang sedang menjelajahi pengembangan web. Saya suka mencoba ide baru, membuat project kecil, dan mencari tahu bagaimana sesuatu bekerja.",
      tentang1: "Saya Nathan, siswa kelas X semester 1 jurusan Rekayasa Perangkat Lunak. Saya tertarik pada teknologi karena melihat sebuah website bisa dibuat dari ide sederhana menjadi sesuatu yang bisa digunakan orang lain.",
      tentang2: "Saat ini saya belajar HTML, CSS, JavaScript, dan dasar TypeScript. Saya mengembangkan kemampuan lewat project kecil, mencoba kode sendiri, membaca dokumentasi, dan mencari bantuan saat benar-benar terhenti.",
      levelKartu: "Kelas X",
      kelas: "Kelas X Semester 1 · RPL",
      email: "nathanputraamrin@gmail.com",
      whatsapp: "",
      whatsappUrl: "",
      lokasi: "Bekasi, Jawa Barat",
      sekolah: "SMK — Rekayasa Perangkat Lunak",
      cvUrl: "https://github.com/Nathan10-pro", githubUrl: "https://github.com/Nathan10-pro", linkedinUrl: "", instagramUrl: "https://www.instagram.com/nathan.mymy/"
     },
    stats: [
      { label: "Repository Publik", angka: 11 },
      { label: "Project di Portofolio", angka: 9 },
      { label: "Fokus saat Ini", angka: 3 },
      { label: "Tahap Belajar", angka: 1 }
    ],
    skills: [
      { kategori: "Web Fundamentals", nama: "HTML", status: "Pernah digunakan", project: "Kalkulator, E-Report" },
      { kategori: "Web Fundamentals", nama: "CSS", status: "Sedang dipelajari", project: "Caelestia Homepage" },
      { kategori: "Web Fundamentals", nama: "Responsive Design", status: "Sedang dipelajari", project: "Portofolio Web" },
      { kategori: "Frontend Development", nama: "JavaScript", status: "Sedang dipelajari", project: "To-DO List" },
      { kategori: "Frontend Development", nama: "TypeScript", status: "Belum sepenuhnya dikuasai", project: "Agro Ecosystem" },
      { kategori: "Backend & Database", nama: "Supabase", status: "Sedang dieksplorasi", project: "Agro Ecosystem" },
      { kategori: "Tools & Workflow", nama: "Git & GitHub", status: "Pernah digunakan", project: "Seluruh repository" },
      { kategori: "Tools & Workflow", nama: "VS Code", status: "Digunakan harian", project: "Seluruh project" }
    ],
    techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "Git & GitHub", "Supabase"],
    timeline: [
      { tahun: "2026", judul: "Membangun project web dari GitHub", desc: "Mulai menghubungkan project, membuat portofolio, dan belajar menggunakan repository sebagai arsip proses kerja.", tipe: "Project" },
      { tahun: "2026", judul: "Memperdalam JavaScript dan TypeScript", desc: "Belajar melalui To-DO List, kalkulator, dan eksperimen pada Agro Ecosystem.", tipe: "Pembelajaran" },
      { tahun: "2026", judul: "Memulai jurusan Rekayasa Perangkat Lunak", desc: "Belajar dasar pemrograman dan pengembangan website sebagai siswa kelas X semester 1.", tipe: "Pendidikan" }
    ],
    projects: [
      { no: 1, featured: true, judul: "Agro Ecosystem Platform", kategori: "Web Application", status: "Experimental", tahun: 2026, desc: "Eksperimen membuat platform ekosistem pertanian dengan TypeScript dan Supabase.", gambar: "", tags: ["TypeScript", "Next.js", "Supabase"], fitur: ["Eksplorasi antarmuka web", "Percobaan integrasi data", "Susunan halaman responsif"], demo: "https://agro-ecosystem-platform.vercel.app", source: "https://github.com/Nathan10-pro/Agro-Ecosystem-Platform", overview: "Project ini mencoba membangun tampilan dan alur sederhana untuk platform ekosistem pertanian. Saya menggunakannya sebagai ruang belajar di luar project kecil sehari-hari.", motivation: "Saya ingin mencoba teknologi yang belum pernah digunakan sebelumnya, terutama TypeScript, Next.js, dan Supabase.", process: "Saya mengikuti struktur project yang tersedia, mencoba jalankan aplikasi, mengubah bagian antarmuka, lalu memahami alur datanya melalui kode dan dokumentasi.", challenges: "Beberapa istilah dan struktur framework masih baru bagi saya. Saya perlu membedakan antara bagian yang sudah saya pahami dan bagian yang masih terasa asing.", decisions: "TypeScript dipilih karena project sudah menggunakan TypeScript. Supabase dipakai sebagai percobaan penyimpanan dan pengambilan data.", outcomes: "Saya mulai memahami cara membaca struktur aplikasi Next.js dan membedakan komponen, konfigurasi, serta akses data.", contribution: "Dapat diisi: bagian coding atau perubahan antarmuka yang benar-benar dikerjakan sendiri.", aiHelp: "Dapat diisi: bagian mana yang dibantu AI atau panduan pihak lain.", unknown: "Dapat diisi: bagian sistem yang masih belum sepenuhnya dipahami.", next: "Dapat diisi: hal yang ingin diperbaiki atau dipelajari lebih lanjut." },
      { no: 2, judul: "Portofolio Web", kategori: "Personal Website", status: "Completed", tahun: 2026, desc: "Website portofolio untuk menampilkan profil dan repository project yang pernah dibuat.", gambar: "assets/items/images/projectpertama.jpg", tags: ["TypeScript", "HTML", "CSS"], fitur: ["Halaman profil", "Daftar project", "Desain responsif"], demo: "https://nathan10-pro.github.io/portofolioWeb/", source: "https://github.com/Nathan10-pro/portofolioWeb", overview: "Website ini dibuat sebagai tempat menampilkan identitas dan project yang pernah saya kerjakan.", motivation: "Saya ingin memiliki satu halaman sederhana yang bisa dibuka orang lain tanpa menjelaskan setiap repository satu per satu.", process: "Saya menyiapkan struktur halaman, mengatur tampilan, lalu menyelaraskan isi profil dengan repository GitHub.", challenges: "Mengatur struktur tampilan agar tetap jelas di layar kecil cukup memerlukan beberapa percobaan.", decisions: "Saya memakai teknologi yang sudah ada pada project sebagai sarana untuk mengenal struktur TypeScript dan CSS.", outcomes: "Saya lebih terbiasa menyusun konten portofolio dan menghubungkan halaman dengan repository." },
      { no: 3, judul: "Caelestia Homepage", kategori: "Personal Website", status: "Completed", tahun: 2026, desc: "Homepage browser bergaya desktop Linux dengan tampilan gelap dan informasi cepat.", gambar: "", tags: ["JavaScript", "HTML", "CSS"], fitur: ["Halaman beranda kustom", "Tampilan desktop-inspired", "Interaksi dasar"], demo: "https://nathan10-pro.github.io/Caelestia-Homepage/", source: "https://github.com/Nathan10-pro/Caelestia-Homepage", overview: "Project ini merupakan eksperimen membuat homepage browser dengan karakter visual yang terinspirasi desktop Linux.", motivation: "Saya tertarik mencoba membuat halaman yang berbeda dari landing page biasa.", process: "Saya menyusun HTML, mengatur tampilan dengan CSS, lalu menambahkan JavaScript untuk interaksi halaman.", challenges: "Menjaga elemen tampilan tetap rapi pada ukuran layar yang berbeda menjadi bagian yang paling perlu dicoba berulang.", decisions: "JavaScript digunakan hanya untuk bagian yang benar-benar memerlukan interaksi; struktur halaman tetap dibuat sederhana.", outcomes: "Saya lebih memahami hubungan antara struktur HTML, styling CSS, dan perilaku JavaScript." },
      { no: 4, judul: "To-DO List", kategori: "Personal Project", status: "Completed", tahun: 2026, desc: "Aplikasi daftar tugas sederhana untuk menambah dan mencoret kegiatan harian.", gambar: "", tags: ["JavaScript", "HTML", "CSS"], fitur: ["Tambah tugas", "Tandai tugas selesai", "Antarmuka sederhana"], demo: "https://nathan10-pro.github.io/To-DO-list/", source: "https://github.com/Nathan10-pro/To-DO-list", overview: "Project ini dibuat untuk berlatih membuat aplikasi kecil dengan JavaScript.", motivation: "Saya ingin memahami alur saat pengguna menambah dan mengubah data di halaman.", process: "Saya membuat elemen HTML, mengatur tampilannya, lalu menulis JavaScript untuk menangani daftar tugas.", challenges: "Mengelola state halaman agar tugas tetap sesuai setelah pengguna melakukan beberapa tindakan membutuhkan pemahaman tambahan.", decisions: "Saya memilih JavaScript murni agar fokus pada dasar interaksi sebelum memakai library atau framework.", outcomes: "Saya belajar menghubungkan event dari pengguna dengan perubahan isi halaman." },
      { no: 5, judul: "E-Report 1.0", kategori: "Web Application", status: "Completed", tahun: 2025, desc: "Eksperimen halaman pelaporan yang menata informasi dalam beberapa tampilan web.", gambar: "", tags: ["HTML", "CSS", "JavaScript"], fitur: ["Halaman laporan", "Navigasi antarhalaman", "Struktur konten"], demo: "https://nathan10-pro.github.io/E-Report-1.0/", source: "https://github.com/Nathan10-pro/E-Report-1.0", overview: "Project ini merupakan latihan membuat halaman pelaporan dengan beberapa bagian konten.", motivation: "Saya ingin mencoba menyusun halaman yang memiliki navigasi dan informasi lebih teratur.", process: "Saya membuat beberapa halaman HTML, menghubungkannya, lalu menyesuaikan bagian gaya dan interaksi.", challenges: "Menata banyak halaman agar isinya konsisten membutuhkan perhatian pada struktur dan nama file.", decisions: "Project tetap menggunakan HTML, CSS, dan JavaScript untuk memperkuat dasar web.", outcomes: "Saya semakin memahami navigasi halaman dan pemisahan antara struktur, tampilan, serta interaksi." },
      { no: 6, judul: "Kalkulator Sederhana", kategori: "Personal Project", status: "Completed", tahun: 2025, desc: "Kalkulator web untuk mencoba input dan operasi matematika dasar.", gambar: "", tags: ["HTML", "CSS", "JavaScript"], fitur: ["Operasi dasar", "Tombol input", "Tampilan ringkas"], demo: "https://nathan10-pro.github.io/calculator_sederhana/", source: "https://github.com/Nathan10-pro/calculator_sederhana", overview: "Project ini dibuat untuk berlatih menghubungkan tombol dengan logika JavaScript.", motivation: "Saya ingin mencoba membuat aplikasi sederhana yang bereaksi langsung saat tombol ditekan.", process: "Saya menyusun tombol dan tampilan, lalu menulis fungsi untuk membaca input serta menampilkan hasil.", challenges: "Urutan input dan operasi menjadi bagian yang perlu diuji agar hasil kalkulasi tidak salah.", decisions: "JavaScript dipakai untuk logika, sedangkan HTML dan CSS digunakan untuk struktur serta tampilan.", outcomes: "Saya belajar menyusun fungsi yang dipanggil oleh interaksi pengguna." },
      { no: 7, judul: "My Web Profile", kategori: "Personal Website", status: "Completed", tahun: 2025, desc: "Website profil awal yang dibuat sebagai latihan HTML dan CSS.", gambar: "", tags: ["HTML", "CSS"], fitur: ["Profil sederhana", "Tata letak dasar", "Eksplorasi styling"], demo: "https://nathan10-pro.github.io/myWebProfile/", source: "https://github.com/Nathan10-pro/myWebProfile", overview: "Ini adalah salah satu project profil awal yang dibuat saat saya masih banyak bereksperimen.", motivation: "Saya ingin memahami cara menyusun halaman profil dengan HTML dan CSS.", process: "Saya mencoba struktur halaman, warna, ukuran teks, dan tata letak pada satu halaman statis.", challenges: "Agar tata letak tidak kacau pada ukuran layar yang berbeda merupakan tantangan pertama yang nyata.", decisions: "Saya memilih HTML dan CSS murni supaya proses belajar lebih fokus pada dasar.", outcomes: "Saya lebih mengenal elemen HTML, class CSS, dan cara mengatur tata letak." },
      { no: 8, judul: "NizzA", kategori: "Web Experiment", status: "Experimental", tahun: 2025, desc: "Eksperimen halaman web statis yang berisi komposisi gambar dan CSS.", gambar: "", tags: ["HTML", "CSS"], fitur: ["Konten visual", "Styling CSS", "Layout statis"], demo: "https://nathan10-pro.github.io/NIzzA/", source: "https://github.com/Nathan10-pro/NIzzA", overview: "Project ini merupakan eksperimen tampilan halaman statis.", motivation: "Saya ingin mencoba mengatur tata letak visual dan kombinasi gambar dengan teks.", process: "Saya mengatur struktur HTML dan mencoba beberapa aturan CSS untuk tampilannya.", challenges: "Menyatukan beberapa aset visual dengan ukuran yang berbeda cukup memerlukan percobaan.", decisions: "Project sengaja dibuat sederhana tanpa JavaScript untuk membatasi ruang belajar.", outcomes: "Saya memahami lebih jelas peran CSS dalam mengatur jarak dan penempatan elemen." },
      { no: 9, judul: "Lampu", kategori: "School Project", status: "Experimental", tahun: 2025, desc: "Proyek HTML sederhana yang dibuat sebagai latihan struktur halaman web.", gambar: "", tags: ["HTML"], fitur: ["Struktur HTML dasar", "Halaman sederhana"], demo: "https://github.com/Nathan10-pro/Lampu", source: "https://github.com/Nathan10-pro/Lampu", overview: "Project ini adalah latihan dasar untuk membuat halaman HTML sederhana.", motivation: "Saya ingin memahami struktur dokumen HTML sebelum menambahkan styling dan JavaScript.", process: "Saya menulis elemen dasar dan mengatur isi halaman pada file HTML.", challenges: "Memahami struktur dan urutan elemen merupakan hal yang masih dalam proses dipelajari.", decisions: "Project hanya memakai HTML agar fokus pada fondasi yang paling dasar.", outcomes: "Saya mulai mengenal tag HTML dan cara menyusun isi halaman." }
    ]
  };

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
