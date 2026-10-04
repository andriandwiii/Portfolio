// ─── Portfolio Data ────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  org: string;
  role: string;
  period: string;
  highlight: string;
  tags: string[];
  hasCaseStudy: boolean;
  gradient: string;
  monogram: string;
  tagline: string;
  accentColor: string;
  category: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface CaseStudyData {
  title: string;
  sections: {
    problem: string;
    solution: string;
    challenges: string;
    testing: string;
  };
  documentation?: { image: string; caption: string }[];
}

export const projectsData = {
  id: [
    {
      id: "growsafe",
      title: "Growsafe",
      org: "Proyek Tugas Akhir",
      role: "IoT & Mobile Developer",
      period: "2026",
      highlight:
        "Sistem pemantauan budidaya jamur terintegrasi IoT dan AI menggunakan YOLO untuk mendeteksi penyakit Black Mold secara otomatis.",
      tags: ["React Native", "Python (FastAPI)", "YOLO", "ESP32"],
      hasCaseStudy: true,
      gradient: "from-emerald-500 to-teal-800",
      monogram: "GS",
      tagline: "IoT & AI Mushroom Monitoring",
      accentColor: "#a7f3d0",
      category: "IoT & AI",
      githubUrl: "https://github.com/andriandwiii/TA_GrowSafe.git",
      imageUrl: "/img/growsafe mockup.png",
    },
    {
      id: "rintisku",
      title: "Rintisku.id",
      org: "PT Garapan Indonesia Sukses",
      role: "Full-Stack Developer Intern",
      period: "2026",
      highlight:
        "Platform Enterprise Resource Planning (ERP) UMKM dengan Modul Persediaan dan Modul SDM & Penggajian (Presensi Geofencing).",
      tags: ["Next.js", "Express.js", "MySQL", "Geofencing API"],
      hasCaseStudy: true,
      gradient: "from-blue-100 to-indigo-100",
      monogram: "RN",
      tagline: "ERP UMKM & Digitalisasi",
      accentColor: "#dbeafe",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=800&auto=format&fit=crop",
    },
    {
      id: "siakad",
      title: "Sistem Informasi Akademik",
      org: "PT Marstech Global",
      role: "Full-Stack Developer Intern",
      period: "2025",
      highlight:
        "Aplikasi berbasis web untuk mengelola proses akademik dan administrasi secara terintegrasi (Siswa, Guru, Jadwal, Absensi, Nilai).",
      tags: ["Next.js", "Express.js", "MySQL", "Geofencing API"],
      hasCaseStudy: true,
      gradient: "from-cyan-100 to-blue-100",
      monogram: "SK",
      tagline: "Integrated Academic System",
      accentColor: "#f3e8ff",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=85&w=800&auto=format&fit=crop",
    },
    {
      id: "rintisku-ui",
      title: "Rintisku.id Landing Page",
      org: "PT Garapan Indonesia Sukses",
      role: "UI/UX Designer",
      period: "2026",
      highlight:
        "Merancang antarmuka (UI) dan pengalaman pengguna (UX) untuk halaman utama promosi platform ERP Rintisku.id menggunakan Figma.",
      tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
      hasCaseStudy: true,
      gradient: "from-purple-100 to-pink-100",
      monogram: "UI",
      tagline: "ERP Landing Page Design",
      accentColor: "#fae8ff",
      category: "UI/UX Design",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=85&w=800&auto=format&fit=crop",
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      org: "Personal Project",
      role: "Frontend Developer",
      period: "2026",
      highlight:
        "Website portofolio interaktif dan modern yang dibangun menggunakan React, TypeScript, Tailwind CSS, dan animasi Framer Motion.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      hasCaseStudy: true,
      gradient: "from-gray-100 to-slate-200",
      monogram: "PF",
      tagline: "Interactive Web Experience",
      accentColor: "#f1f5f9",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=85&w=800&auto=format&fit=crop",
    },
  ],
  en: [
    {
      id: "growsafe",
      title: "Growsafe",
      org: "Final Year Project",
      role: "IoT & Mobile Developer",
      period: "2026",
      highlight:
        "IoT and AI integrated mushroom cultivation monitoring system using YOLO to automatically detect Black Mold disease.",
      tags: ["React Native", "Python (FastAPI)", "YOLO", "ESP32"],
      hasCaseStudy: true,
      gradient: "from-emerald-500 to-teal-800",
      monogram: "GS",
      tagline: "IoT & AI Mushroom Monitoring",
      accentColor: "#a7f3d0",
      category: "IoT & AI",
      githubUrl: "https://github.com/andriandwiii/TA_GrowSafe.git",
      imageUrl: "/img/growsafe mockup.png",
    },
    {
      id: "rintisku",
      title: "Rintisku.id",
      org: "PT Garapan Indonesia Sukses",
      role: "Full-Stack Developer Intern",
      period: "2026",
      highlight:
        "SME Enterprise Resource Planning (ERP) platform with Inventory and HR & Payroll modules (Geofencing Presence).",
      tags: ["Next.js", "Express.js", "MySQL", "Geofencing API"],
      hasCaseStudy: true,
      gradient: "from-blue-100 to-indigo-100",
      monogram: "RN",
      tagline: "SME ERP & Digitalization",
      accentColor: "#dbeafe",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=800&auto=format&fit=crop",
    },
    {
      id: "siakad",
      title: "Academic Information System",
      org: "PT Marstech Global",
      role: "Full-Stack Developer Intern",
      period: "2025",
      highlight:
        "Web-based application to manage academic and administrative processes (Students, Teachers, Schedules, Attendance, Grading) in an integrated manner.",
      tags: ["Next.js", "Express.js", "MySQL", "Geofencing API"],
      hasCaseStudy: true,
      gradient: "from-cyan-100 to-blue-100",
      monogram: "SK",
      tagline: "Integrated Academic System",
      accentColor: "#f3e8ff",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=85&w=800&auto=format&fit=crop",
    },
    {
      id: "rintisku-ui",
      title: "Rintisku.id Landing Page",
      org: "PT Garapan Indonesia Sukses",
      role: "UI/UX Designer",
      period: "2026",
      highlight:
        "Designed the user interface (UI) and user experience (UX) for the promotional landing page of the Rintisku.id ERP platform using Figma.",
      tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
      hasCaseStudy: true,
      gradient: "from-purple-100 to-pink-100",
      monogram: "UI",
      tagline: "ERP Landing Page Design",
      accentColor: "#fae8ff",
      category: "UI/UX Design",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=85&w=800&auto=format&fit=crop",
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      org: "Personal Project",
      role: "Frontend Developer",
      period: "2026",
      highlight:
        "Interactive and modern portfolio website built using React, TypeScript, Tailwind CSS, and Framer Motion animations.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      hasCaseStudy: true,
      gradient: "from-gray-100 to-slate-200",
      monogram: "PF",
      tagline: "Interactive Web Experience",
      accentColor: "#f1f5f9",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=85&w=800&auto=format&fit=crop",
    },
  ]
};

// ─── Case Studies (Bilingual) ──────────────────────────────────────────────────

export const caseStudies: Record<string, Record<string, CaseStudyData>> = {
  id: {
    growsafe: {
      title: "Growsafe — Sistem Prediksi Risiko Black Mold & Potensi Panen Jamur Berbasis IoT dan AI",
      sections: {
        problem: `Sektor budidaya jamur tiram merupakan komoditas agribisnis yang menjanjikan, namun rentan terhadap serangan patogen. Kerugian terbesar sering disebabkan oleh **Black Mold (Mucor spp.)**, yang muncul akibat kondisi lingkungan yang tidak ideal—terutama suhu ruangan yang terlalu tinggi dan kelembaban yang berlebihan.

Suhu optimal untuk pertumbuhan jamur berada pada rentang **22°C - 28°C** dengan kelembaban optimal **80% - 90%**. Penyakit ini tidak hanya merusak media tanam (baglog), tetapi juga secara signifikan menurunkan potensi kuantitas dan kualitas hasil panen.

Secara tradisional, petani mengandalkan pengawasan visual dan manual terhadap kondisi lingkungan dan gejala penyakit. Pendekatan ini rentan terhadap **human error** dan seringkali terlambat dalam mendeteksi kontaminasi, menyebabkan penyakit menyebar dengan cepat. Penanganan yang bersifat **reaktif, bukan preventif**, pada akhirnya menyebabkan kerugian finansial yang besar.`,

        solution: `Sistem ini mengintegrasikan tiga pilar teknologi utama ke dalam satu ekosistem yang utuh:

**1. Hardware IoT (ESP32 + DHT22)**
Sensor presisi tinggi DHT22 yang terhubung ke mikrokontroler ESP32 membaca data suhu dan kelembapan secara real-time dari dalam kumbung jamur. Data dikirimkan secara berkala ke server backend untuk dianalisis.

**2. Backend AI (Python FastAPI)**
Server backend menjadi otak sistem yang menjalankan dua model kecerdasan buatan:
• **Deteksi Visual YOLO (YOLOv11s):** Memproses gambar hasil pemindaian kamera langsung dari aplikasi mobile untuk mendeteksi persentase luasan area gejala black mold pada baglog secara instan.
• **Prediksi Risiko — Regresi Linier Polinomial:** Meleburkan data sensor IoT (suhu, kelembapan) dengan hasil deteksi visual YOLO untuk menghasilkan prediksi risiko black mold (0%-100%) berbasis 5 parameter: suhu, kelembapan, fase pertumbuhan, durasi stres lingkungan, dan persentase area terinfeksi.
• **Estimasi Potensi Panen:** Menggunakan metode Efisiensi Biologis dengan konstanta produktivitas 0,4 kg/baglog yang tervalidasi mitra petani, direduksi proporsional berdasarkan prinsip Yield Loss dari output model prediksi.

**3. Frontend Mobile (React Native)**
Antarmuka mobile interaktif sebagai dashboard pemantauan real-time, fitur pemindaian kamera langsung (live scan YOLO), grafik sensor, dan Sistem Peringatan Dini melalui Push Notification (FCM).`,

        challenges: `**Tantangan 1: Fusi Data Multi-Sumber (Data Fusion)**
Menggabungkan data sensor IoT real-time dengan hasil ekstraksi Computer Vision menjadi input tunggal untuk model prediksi merupakan tantangan arsitektur yang kompleks. Solusi: Merancang pipeline data asinkron di FastAPI yang mengorkestrasikan aliran data dari ESP32 dan hasil inferensi YOLO ke dalam satu vektor fitur sebelum diumpankan ke model Regresi Polinomial.

**Tantangan 2: Pola Biologis Non-Linier**
Penyebaran black mold pada jamur bersifat eksponensial dan non-linier—tidak bisa dimodelkan dengan regresi linier sederhana. Solusi: Menggunakan **Polynomial Features (Degree 2)** pada Regresi Linier agar model dapat membaca interaksi kuadratik antar fitur, meningkatkan R² Score menjadi **0.9765**.

**Tantangan 3: Deteksi Visual pada Objek Organik**
Baglog jamur memiliki variasi warna, tekstur, dan bentuk yang tinggi, membuat deteksi black mold menjadi challenging. Solusi: Melatih model YOLOv11s dengan dataset custom menggunakan teknik **overlap masking** untuk filtrasi area infeksi, dan augmentasi data untuk meningkatkan generalisasi.

**Tantangan 4: Latensi Pemindaian Real-Time di Mobile**
Memproses gambar dari kamera mobile dan mengirimkannya ke server AI tanpa delay yang mengganggu UX. Solusi: Mengoptimalkan payload gambar dengan kompresi JPEG sebelum dikirim, dan mengimplementasikan loading state yang informatif di sisi frontend.`,

        testing: `**Fase 1 — Pengujian Fungsionalitas (Black Box Testing)**
Menguji kelancaran aliran data dari sensor IoT, pemrosesan backend, hingga tampilan di aplikasi mobile. Semua fitur utama (monitoring real-time, scan kamera, prediksi risiko, estimasi panen, push notification) diverifikasi berfungsi sesuai spesifikasi.

**Fase 2 — Evaluasi Model Computer Vision (YOLO)**
Mengukur akurasi model YOLOv11s dalam mendeteksi area infeksi black mold menggunakan metrik standar:
• **Precision:** Ketepatan deteksi positif
• **Recall:** Kemampuan menangkap seluruh objek target
• **mAP (Mean Average Precision):** Rata-rata akurasi deteksi keseluruhan

**Fase 3 — Evaluasi Model Machine Learning (Regresi Polinomial)**
Memvalidasi akurasi prediksi risiko dan estimasi panen menggunakan metrik evaluasi standar:
• **MAE (Mean Absolute Error):** Rata-rata simpangan absolut prediksi
• **RMSE (Root Mean Square Error):** Akar kuadrat rata-rata kuadrat error
• **R² Score: 0.9765** — Model mampu menjelaskan 97.65% variansi data

**Fase 4 — Pengujian Integrasi & Simulasi**
Memverifikasi logika estimasi potensi panen berbasis Efisiensi Biologis, komunikasi dua arah backend↔mobile, dan ketepatan pemicu Push Notification peringatan dini.`,
      },
      documentation: [
        { image: "/img/growsafe mockup.png", caption: "Mockup Aplikasi Mobile GrowSafe — Dashboard & Login Screen" },
        { image: "/img/POSTER growsafe.jpg", caption: "Poster Penelitian Tugas Akhir — Arsitektur Sistem & Hasil Evaluasi" },
      ],
    },

    rintisku: {
      title: "Rintisku.id — Digitalisasi Pencatatan UMKM",
      sections: {
        problem: `Banyak UMKM lokal masih menggunakan pencatatan manual yang rentan hilang, kotor, dan sulit dipantau secara real-time. Hal ini menyebabkan kesulitan dalam mengontrol stok barang dan memonitor arus kas harian.

Selain itu, rekapan laporan akhir bulan memakan waktu berhari-hari karena harus mencocokkan nota kertas satu per satu.`,

        solution: `Saya membangun platform Enterprise Resource Planning (ERP) khusus UMKM yang berfokus pada kemudahan penggunaan:

**Modul Inventaris Cerdas**
Pencatatan barang masuk dan keluar dengan notifikasi stok menipis otomatis.

**Modul SDM & Penggajian**
Sistem presensi berbasis Geofencing API yang memvalidasi lokasi karyawan secara otomatis, terintegrasi dengan perhitungan gaji.

**Pencatatan Keuangan Terintegrasi**
Setiap transaksi inventaris akan otomatis terhubung ke jurnal kas, meminimalisir kesalahan input manual.

**Laporan Otomatis**
Dashboard yang menghasilkan laporan laba rugi dan ringkasan transaksi dalam satu klik.`,

        challenges: `**Tantangan 1: UI/UX untuk Pengguna Awam**
Banyak pelaku UMKM yang belum terbiasa dengan aplikasi kompleks. Solusi: Menggunakan pendekatan desain minimalis dengan font besar dan tombol yang jelas, serta alur kerja yang dipandu lapis demi lapis (step-by-step wizard).

**Tantangan 2: Integritas Data Relasional**
Memastikan bahwa perubahan harga modal di satu transaksi tidak merusak laporan bulan-bulan sebelumnya. Solusi: Implementasi snapshot harga pada tabel transaksi di MySQL alih-alih merelasikan langsung ke tabel master barang.

**Tantangan 3: Akurasi Geofencing**
Sinyal GPS di area perkotaan padat sering meleset. Solusi: Menggunakan radius toleransi dinamis dan kombinasi GPS + WiFi positioning untuk meningkatkan akurasi lokasi presensi.`,

        testing: `**Fase 1 — Uji Fungsi Internal**
Melakukan serangkaian skenario pengujian menggunakan Postman dan Jest untuk memastikan API merespons dengan benar terhadap input anomali (misal: qty negatif).

**Fase 2 — User Acceptance Testing (UAT)**
Mengujicobakan purwarupa ke 3 UMKM di Madiun. Umpan balik yang diterima sangat berharga, salah satunya adalah penambahan fitur "Simpan Sementara/Draft" saat pelanggan sedang mengantri dan kasir belum selesai menginput.`,
      },
      documentation: [
        { image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop", caption: "Perancangan Skema Database ERP UMKM" },
        { image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=1200&auto=format&fit=crop", caption: "Implementasi Backend API menggunakan Node.js" },
      ],
    },

    siakad: {
      title: "Sistem Informasi Akademik — Digitalisasi Administrasi Sekolah",
      sections: {
        problem: `Banyak sekolah masih mengelola data akademik secara manual menggunakan spreadsheet atau bahkan buku catatan. Proses pencatatan siswa, penjadwalan, absensi, dan penilaian yang tersebar di berbagai file menyebabkan inkonsistensi data dan memperlambat proses administrasi.

Guru menghabiskan waktu berlebih untuk input nilai dan rekap absensi, sementara pihak sekolah kesulitan mendapatkan laporan akademik yang akurat dan real-time. Orang tua juga tidak memiliki akses untuk memantau perkembangan anak mereka secara langsung.`,

        solution: `Saya membangun Sistem Informasi Akademik berbasis web yang mengintegrasikan seluruh proses administrasi sekolah:

**Manajemen Data Siswa & Guru**
Dashboard terpusat untuk mengelola data master siswa, guru, dan kelas dengan fitur pencarian dan filter canggih.

**Penjadwalan Otomatis**
Sistem penjadwalan mata pelajaran yang meminimalkan konflik waktu dan ruangan, dengan visualisasi timetable yang intuitif.

**Absensi Digital**
Pencatatan kehadiran siswa dan guru secara digital dengan laporan otomatis per hari, minggu, dan bulan.

**Sistem Penilaian Terintegrasi**
Input nilai tugas, UTS, UAS dengan kalkulasi otomatis dan pembuatan rapor digital yang bisa diakses oleh orang tua.`,

        challenges: `**Tantangan 1: Skema Relasi Data Kompleks**
Mendesain database yang mampu merelasikan siswa, guru, kelas, jadwal, absensi, dan nilai tanpa redundansi. Solusi: Merancang ERD (Entity Relationship Diagram) yang ternormalisasi dengan relationship mapping yang ketat.

**Tantangan 2: Role-Based Access Control (RBAC)**
Setiap pengguna (Admin, Guru, Siswa, Orang Tua) memiliki hak akses yang berbeda. Solusi: Implementasi middleware RBAC di Express.js dengan JWT token yang menyimpan informasi role dan permissions.

**Tantangan 3: Performa Query pada Data Besar**
Sekolah dengan ratusan siswa dan ribuan record nilai membutuhkan query yang efisien. Solusi: Implementasi indexing strategis pada kolom yang sering diquery, pagination server-side, dan caching layer.`,

        testing: `**Fase 1 — Unit Testing & Integration Testing**
Pengujian endpoint API menggunakan Jest dan Supertest, memastikan setiap modul (CRUD siswa, penjadwalan, absensi, penilaian) berfungsi secara independen dan terintegrasi.

**Fase 2 — Black Box Testing**
Pengujian fungsionalitas sistem secara menyeluruh mencakup alur kerja dari pendaftaran siswa hingga pencetakan rapor, memastikan semua fitur berjalan sesuai spesifikasi kebutuhan.

**Fase 3 — User Acceptance Testing (UAT)**
Demonstrasi sistem kepada pihak sekolah mitra untuk mendapatkan umpan balik langsung dari end-user (admin sekolah, guru, dan siswa).`,
      },
      documentation: [
        { image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=85&w=1200&auto=format&fit=crop", caption: "Dashboard Sistem Informasi Akademik" },
      ],
    },

    "rintisku-ui": {
      title: "Rintisku.id Landing Page — Desain Antarmuka ERP",
      sections: {
        problem: `Platform ERP Rintisku.id membutuhkan halaman utama (landing page) yang mampu mengkomunikasikan value proposition produk secara efektif kepada target audiens UMKM. Tanpa landing page yang menarik dan informatif, calon pengguna sulit memahami manfaat platform dan enggan untuk mendaftar.

Tantangan utamanya adalah bagaimana menyajikan fitur-fitur ERP yang kompleks dalam bahasa visual yang sederhana dan mudah dipahami oleh pelaku UMKM yang umumnya belum familiar dengan teknologi digital.`,

        solution: `Saya merancang UI/UX landing page menggunakan Figma dengan pendekatan user-centered design:

**Riset & Wireframing**
Melakukan analisis kompetitor dan user persona UMKM, kemudian merancang wireframe low-fidelity untuk memvalidasi alur informasi sebelum masuk ke desain visual.

**Visual Design System**
Membangun design system yang konsisten meliputi tipografi, color palette, spacing, dan komponen UI yang reusable—memastikan brand identity Rintisku.id terjaga di seluruh halaman.

**Storytelling Visual**
Menyusun hierarki konten yang mengarahkan pengunjung dari hero section yang eye-catching, fitur highlight dengan ilustrasi, testimonial, hingga CTA (Call to Action) yang persuasif.

**Prototyping Interaktif**
Membuat prototype high-fidelity dengan micro-interactions dan transisi halaman untuk mensimulasikan pengalaman pengguna sebelum implementasi.`,

        challenges: `**Tantangan 1: Menyederhanakan Kompleksitas ERP**
Fitur ERP seperti manajemen inventaris dan penggajian secara inheren kompleks. Solusi: Menggunakan pendekatan "show, don't tell" dengan ilustrasi visual dan screenshot produk yang dipoles, sehingga pengunjung bisa langsung membayangkan pengalaman menggunakan platform.

**Tantangan 2: Aksesibilitas untuk Audiens Non-Teknis**
Target audiens UMKM memiliki tingkat literasi digital yang bervariasi. Solusi: Menggunakan bahasa visual yang universal, ikon yang intuitif, dan CTA yang jelas dengan teks aksi langsung seperti "Mulai Gratis" alih-alih jargon teknis.

**Tantangan 3: Konsistensi dengan Platform Utama**
Landing page harus terasa seamless dengan dashboard ERP tanpa mengorbankan daya tarik promosi. Solusi: Mengekstrak komponen design system dari dashboard utama dan mengadaptasinya untuk konteks marketing.`,

        testing: `**Fase 1 — Usability Testing**
Melakukan usability testing dengan 5 partisipan dari segmen UMKM, menggunakan metode think-aloud untuk mengidentifikasi pain points navigasi dan pemahaman konten.

**Fase 2 — Design Review dengan Stakeholder**
Presentasi desain kepada tim development dan product manager untuk memvalidasi feasibility teknis dan kesesuaian dengan roadmap produk.

**Fase 3 — Iterasi Berdasarkan Feedback**
Melakukan 3 iterasi desain berdasarkan umpan balik, termasuk penyesuaian hierarki CTA, penambahan section FAQ, dan penyempurnaan responsive layout untuk mobile.`,
      },
      documentation: [
        { image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=85&w=1200&auto=format&fit=crop", caption: "Proses Wireframing & UI Design di Figma" },
      ],
    },

    portfolio: {
      title: "Personal Portfolio — Website Interaktif & Modern",
      sections: {
        problem: `Sebagai seorang fresh graduate yang akan memasuki dunia industri, diperlukan sebuah media presentasi diri yang mampu menampilkan keahlian, proyek, dan pengalaman secara profesional dan menarik. Portfolio konvensional berbasis PDF atau template statis tidak mampu menunjukkan kemampuan teknis secara langsung.

Dibutuhkan sebuah website portfolio yang tidak hanya informatif, tetapi juga menjadi bukti langsung kemampuan frontend development—menggabungkan desain premium, animasi yang sophisticated, dan pengalaman pengguna yang imersif.`,

        solution: `Saya membangun website portfolio single-page application dengan teknologi modern:

**Arsitektur Komponen React + TypeScript**
Seluruh UI dibangun menggunakan komponen React yang type-safe dengan TypeScript, memastikan maintainability dan developer experience yang baik.

**Animasi Framer Motion**
Implementasi animasi yang kaya dan beragam:
• Scroll-based hero expansion dengan physics-based interpolation
• Staggered fade-in menggunakan useInView
• Clip-path wipe transition pada project cards
• Spring physics pada navbar entry animation
• AnimatePresence untuk accordion expand/collapse

**Komponen UI Custom**
Membangun komponen interaktif dari nol:
• **MagneticDeck:** Physics simulation dengan neighbour force propagation
• **PortfolioStack:** 3D card deck dengan spring system custom
• **TiltPhotoCard:** Efek 3D tilt pada foto profil
• **ScrollBasedVelocity:** Direction-aware marquee text
• **Halo:** Atmospheric glow animation

**Fitur Bilingual (ID/EN)**
Sistem terjemahan custom menggunakan React Context API yang mendukung perpindahan bahasa secara seamless tanpa reload halaman.`,

        challenges: `**Tantangan 1: Physics-Based Animation Performance**
Komponen seperti MagneticDeck menjalankan physics loop pada setiap frame. Solusi: Menggunakan requestAnimationFrame dengan damping factor dan membatasi kalkulasi force propagation hanya pada kartu yang visible, serta menghormati prefers-reduced-motion untuk aksesibilitas.

**Tantangan 2: Scroll-Based Hero UX**
Hero section mengunci scroll selama animasi berlangsung, yang bisa membingungkan first-time visitors. Solusi: Menambahkan visual scroll indicator yang jelas dan memastikan animasi cukup cepat sehingga tidak menahan pengguna terlalu lama.

**Tantangan 3: Responsive Design untuk Komponen Kompleks**
Komponen seperti MagneticDeck dan PortfolioStack sulit diadaptasi untuk layar kecil. Solusi: Implementasi virtual cursor driving untuk mobile dan adaptive layout yang menyesuaikan jumlah kartu dan skala berdasarkan viewport.

**Tantangan 4: Bundle Size Optimization**
Penggunaan banyak library animasi bisa memperbesar bundle. Solusi: Tree-shaking yang ketat, lazy loading untuk komponen berat, dan code splitting per route.`,

        testing: `**Fase 1 — Cross-Browser Testing**
Pengujian kompatibilitas di Chrome, Firefox, Safari, dan Edge untuk memastikan animasi CSS (dvh, perspective, backdrop-blur) dan JavaScript berjalan konsisten.

**Fase 2 — Responsive Testing**
Pengujian pada berbagai breakpoint (320px, 375px, 768px, 1024px, 1440px, 1920px) untuk memastikan layout, tipografi, dan interaksi berfungsi di semua ukuran layar.

**Fase 3 — Performance Audit**
Audit menggunakan Lighthouse dan WebPageTest untuk memastikan Core Web Vitals (LCP, FID, CLS) berada pada level yang baik. Optimisasi gambar, lazy loading, dan minifikasi CSS/JS.

**Fase 4 — Accessibility Review**
Verifikasi keyboard navigation, focus states, screen reader compatibility, dan prefers-reduced-motion support.`,
      },
      documentation: [],
    },
  },

  en: {
    growsafe: {
      title: "Growsafe — Black Mold Risk Prediction & Mushroom Harvest Potential System Based on IoT and AI",
      sections: {
        problem: `The oyster mushroom cultivation sector is a promising agribusiness commodity, yet it is vulnerable to pathogen attacks. The greatest losses are often caused by **Black Mold (Mucor spp.)**, which emerges due to non-ideal environmental conditions—particularly excessively high room temperatures and excessive humidity.

The optimal temperature for mushroom growth ranges between **22°C - 28°C** with optimal humidity of **80% - 90%**. This disease not only damages the growing medium (baglog) but also significantly reduces the potential quantity and quality of harvest yields.

Traditionally, farmers rely on visual and manual observation of environmental conditions and disease symptoms. This approach is prone to **human error** and often detects contamination too late, causing the disease to spread rapidly. A **reactive rather than preventive** approach ultimately leads to significant financial losses.`,

        solution: `The system integrates three main technology pillars into one unified ecosystem:

**1. IoT Hardware (ESP32 + DHT22)**
High-precision DHT22 sensors connected to an ESP32 microcontroller read real-time temperature and humidity data from inside the mushroom cultivation house. Data is periodically transmitted to the backend server for analysis.

**2. AI Backend (Python FastAPI)**
The backend server serves as the system's brain, running two AI models:
• **YOLO Visual Detection (YOLOv11s):** Processes images from the mobile app's live camera scan to instantly detect the percentage of black mold symptom area on baglogs.
• **Risk Prediction — Polynomial Linear Regression:** Fuses IoT sensor data (temperature, humidity) with YOLO detection results to generate black mold risk predictions (0%-100%) based on 5 parameters: temperature, humidity, growth phase, environmental stress duration, and infected area percentage.
• **Harvest Potential Estimation:** Uses the Biological Efficiency method with a validated productivity constant of 0.4 kg/baglog, proportionally reduced based on Yield Loss principles from the prediction model output.

**3. Mobile Frontend (React Native)**
An interactive mobile interface serving as a real-time monitoring dashboard, live camera scanning feature (YOLO live scan), sensor graphs, and an Early Warning System through Push Notifications (FCM).`,

        challenges: `**Challenge 1: Multi-Source Data Fusion**
Combining real-time IoT sensor data with Computer Vision extraction results into a single input for the prediction model was a complex architectural challenge. Solution: Designed an asynchronous data pipeline in FastAPI that orchestrates data flow from ESP32 and YOLO inference results into a single feature vector before feeding it to the Polynomial Regression model.

**Challenge 2: Non-Linear Biological Patterns**
Black mold spread on mushrooms is exponential and non-linear—it cannot be modeled with simple linear regression. Solution: Used **Polynomial Features (Degree 2)** on Linear Regression so the model can capture quadratic interactions between features, achieving an R² Score of **0.9765**.

**Challenge 3: Visual Detection on Organic Objects**
Mushroom baglogs have high variation in color, texture, and shape, making black mold detection challenging. Solution: Trained the YOLOv11s model with a custom dataset using **overlap masking** technique for infection area filtration, and data augmentation to improve generalization.

**Challenge 4: Real-Time Scanning Latency on Mobile**
Processing images from the mobile camera and sending them to the AI server without UX-disrupting delay. Solution: Optimized image payload with JPEG compression before transmission, and implemented informative loading states on the frontend.`,

        testing: `**Phase 1 — Functional Testing (Black Box Testing)**
Tested the smooth flow of data from IoT sensors, backend processing, to mobile app display. All main features (real-time monitoring, camera scan, risk prediction, harvest estimation, push notification) were verified to function according to specifications.

**Phase 2 — Computer Vision Model Evaluation (YOLO)**
Measured YOLOv11s model accuracy in detecting black mold infection areas using standard metrics:
• **Precision:** Positive detection accuracy
• **Recall:** Ability to capture all target objects
• **mAP (Mean Average Precision):** Overall detection accuracy average

**Phase 3 — Machine Learning Model Evaluation (Polynomial Regression)**
Validated risk prediction and harvest estimation accuracy using standard evaluation metrics:
• **MAE (Mean Absolute Error):** Average absolute prediction deviation
• **RMSE (Root Mean Square Error):** Root of mean squared error
• **R² Score: 0.9765** — The model explains 97.65% of data variance

**Phase 4 — Integration & Simulation Testing**
Verified Biological Efficiency-based harvest potential estimation logic, two-way backend↔mobile communication, and early warning Push Notification trigger accuracy.`,
      },
      documentation: [
        { image: "/img/growsafe mockup.png", caption: "GrowSafe Mobile App Mockup — Dashboard & Login Screen" },
        { image: "/img/POSTER growsafe.jpg", caption: "Final Year Research Poster — System Architecture & Evaluation Results" },
      ],
    },

    rintisku: {
      title: "Rintisku.id — SME Digital Record-Keeping",
      sections: {
        problem: `Many local SMEs still rely on manual record-keeping that is prone to loss, damage, and difficult to monitor in real-time. This causes difficulties in controlling stock and monitoring daily cash flow.

Furthermore, end-of-month report compilation takes days because of the need to match paper receipts one by one.`,

        solution: `I built an Enterprise Resource Planning (ERP) platform specifically for SMEs, focusing on ease of use:

**Smart Inventory Module**
Recording incoming and outgoing goods with automatic low-stock notifications.

**HR & Payroll Module**
Geofencing API-based attendance system that automatically validates employee location, integrated with salary calculation.

**Integrated Financial Recording**
Every inventory transaction is automatically linked to the cash journal, minimizing manual input errors.

**Automated Reports**
Dashboard that generates profit & loss reports and transaction summaries in one click.`,

        challenges: `**Challenge 1: UI/UX for Non-Technical Users**
Many SME operators are not accustomed to complex applications. Solution: Using a minimalist design approach with large fonts and clear buttons, along with step-by-step wizard guided workflows.

**Challenge 2: Relational Data Integrity**
Ensuring that cost price changes in one transaction don't corrupt previous months' reports. Solution: Implementing price snapshots in the MySQL transaction table instead of directly relating to the master goods table.

**Challenge 3: Geofencing Accuracy**
GPS signals in dense urban areas often drift. Solution: Using dynamic tolerance radius and a combination of GPS + WiFi positioning to improve attendance location accuracy.`,

        testing: `**Phase 1 — Internal Function Testing**
Conducting a series of test scenarios using Postman and Jest to ensure APIs respond correctly to anomalous inputs (e.g., negative quantity).

**Phase 2 — User Acceptance Testing (UAT)**
Testing the prototype with 3 SMEs in Madiun. The feedback received was invaluable, including the addition of a "Save as Draft" feature when customers are queuing and the cashier hasn't finished inputting.`,
      },
      documentation: [
        { image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop", caption: "SME ERP Database Schema Design" },
        { image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=1200&auto=format&fit=crop", caption: "Backend API Implementation using Node.js" },
      ],
    },

    siakad: {
      title: "Academic Information System — School Administration Digitalization",
      sections: {
        problem: `Many schools still manage academic data manually using spreadsheets or even notebooks. The process of student registration, scheduling, attendance, and grading scattered across various files causes data inconsistency and slows down administrative processes.

Teachers spend excessive time on grade input and attendance reports, while school administrators struggle to get accurate and real-time academic reports. Parents also lack access to monitor their children's progress directly.`,

        solution: `I built a web-based Academic Information System that integrates all school administrative processes:

**Student & Teacher Data Management**
Centralized dashboard for managing master data of students, teachers, and classes with advanced search and filter features.

**Automated Scheduling**
Course scheduling system that minimizes time and room conflicts, with an intuitive timetable visualization.

**Digital Attendance**
Digital attendance recording for students and teachers with automatic reports per day, week, and month.

**Integrated Grading System**
Assignment, midterm, and final exam grade input with automatic calculation and digital report card generation accessible by parents.`,

        challenges: `**Challenge 1: Complex Data Relationship Schema**
Designing a database capable of relating students, teachers, classes, schedules, attendance, and grades without redundancy. Solution: Designing a normalized ERD (Entity Relationship Diagram) with strict relationship mapping.

**Challenge 2: Role-Based Access Control (RBAC)**
Each user (Admin, Teacher, Student, Parent) has different access rights. Solution: Implementing RBAC middleware in Express.js with JWT tokens storing role and permission information.

**Challenge 3: Query Performance on Large Data**
Schools with hundreds of students and thousands of grade records require efficient queries. Solution: Implementing strategic indexing on frequently queried columns, server-side pagination, and caching layer.`,

        testing: `**Phase 1 — Unit Testing & Integration Testing**
Testing API endpoints using Jest and Supertest, ensuring each module (student CRUD, scheduling, attendance, grading) functions independently and in integration.

**Phase 2 — Black Box Testing**
Comprehensive system functionality testing covering the workflow from student registration to report card printing, ensuring all features work according to requirement specifications.

**Phase 3 — User Acceptance Testing (UAT)**
System demonstration to partner schools to get direct feedback from end-users (school admin, teachers, and students).`,
      },
      documentation: [
        { image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=85&w=1200&auto=format&fit=crop", caption: "Academic Information System Dashboard" },
      ],
    },

    "rintisku-ui": {
      title: "Rintisku.id Landing Page — ERP Interface Design",
      sections: {
        problem: `The Rintisku.id ERP platform needed a landing page capable of effectively communicating the product's value proposition to its target SME audience. Without an attractive and informative landing page, potential users struggle to understand the platform's benefits and are reluctant to sign up.

The main challenge was how to present complex ERP features in a visual language that is simple and easy to understand for SME operators who are generally unfamiliar with digital technology.`,

        solution: `I designed the landing page UI/UX using Figma with a user-centered design approach:

**Research & Wireframing**
Conducted competitor analysis and SME user persona research, then designed low-fidelity wireframes to validate information flow before proceeding to visual design.

**Visual Design System**
Built a consistent design system encompassing typography, color palette, spacing, and reusable UI components—ensuring Rintisku.id's brand identity is maintained throughout the page.

**Visual Storytelling**
Structured content hierarchy guiding visitors from an eye-catching hero section, feature highlights with illustrations, testimonials, to a persuasive CTA (Call to Action).

**Interactive Prototyping**
Created high-fidelity prototypes with micro-interactions and page transitions to simulate the user experience before implementation.`,

        challenges: `**Challenge 1: Simplifying ERP Complexity**
ERP features like inventory management and payroll are inherently complex. Solution: Using a "show, don't tell" approach with visual illustrations and polished product screenshots, so visitors can directly envision the platform experience.

**Challenge 2: Accessibility for Non-Technical Audiences**
The SME target audience has varying levels of digital literacy. Solution: Using universal visual language, intuitive icons, and clear CTAs with direct action text like "Start Free" instead of technical jargon.

**Challenge 3: Consistency with Main Platform**
The landing page must feel seamless with the ERP dashboard without sacrificing promotional appeal. Solution: Extracting design system components from the main dashboard and adapting them for a marketing context.`,

        testing: `**Phase 1 — Usability Testing**
Conducted usability testing with 5 participants from the SME segment, using the think-aloud method to identify navigation pain points and content comprehension issues.

**Phase 2 — Design Review with Stakeholders**
Presented designs to the development team and product manager to validate technical feasibility and alignment with the product roadmap.

**Phase 3 — Feedback-Based Iteration**
Performed 3 design iterations based on feedback, including CTA hierarchy adjustments, FAQ section addition, and responsive layout refinements for mobile.`,
      },
      documentation: [
        { image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=85&w=1200&auto=format&fit=crop", caption: "Wireframing & UI Design Process in Figma" },
      ],
    },

    portfolio: {
      title: "Personal Portfolio — Interactive & Modern Website",
      sections: {
        problem: `As a fresh graduate entering the industry, a self-presentation medium is needed that can showcase skills, projects, and experience professionally and attractively. Conventional PDF-based or static template portfolios cannot demonstrate technical capabilities directly.

A portfolio website is needed that is not only informative but also serves as direct proof of frontend development skills—combining premium design, sophisticated animations, and an immersive user experience.`,

        solution: `I built a single-page application portfolio website with modern technologies:

**React + TypeScript Component Architecture**
The entire UI is built using type-safe React components with TypeScript, ensuring maintainability and good developer experience.

**Framer Motion Animations**
Implementation of rich and diverse animations:
• Scroll-based hero expansion with physics-based interpolation
• Staggered fade-in using useInView
• Clip-path wipe transition on project cards
• Spring physics on navbar entry animation
• AnimatePresence for accordion expand/collapse

**Custom UI Components**
Building interactive components from scratch:
• **MagneticDeck:** Physics simulation with neighbour force propagation
• **PortfolioStack:** 3D card deck with custom spring system
• **TiltPhotoCard:** 3D tilt effect on profile photo
• **ScrollBasedVelocity:** Direction-aware marquee text
• **Halo:** Atmospheric glow animation

**Bilingual Feature (ID/EN)**
Custom translation system using React Context API supporting seamless language switching without page reload.`,

        challenges: `**Challenge 1: Physics-Based Animation Performance**
Components like MagneticDeck run physics loops on every frame. Solution: Using requestAnimationFrame with damping factor and limiting force propagation calculations to visible cards only, while respecting prefers-reduced-motion for accessibility.

**Challenge 2: Scroll-Based Hero UX**
The hero section locks scroll during animation, which can confuse first-time visitors. Solution: Adding clear visual scroll indicators and ensuring the animation is fast enough not to hold users too long.

**Challenge 3: Responsive Design for Complex Components**
Components like MagneticDeck and PortfolioStack are difficult to adapt for small screens. Solution: Implementing virtual cursor driving for mobile and adaptive layouts that adjust card count and scale based on viewport.

**Challenge 4: Bundle Size Optimization**
Using many animation libraries can increase bundle size. Solution: Strict tree-shaking, lazy loading for heavy components, and code splitting per route.`,

        testing: `**Phase 1 — Cross-Browser Testing**
Compatibility testing on Chrome, Firefox, Safari, and Edge to ensure CSS animations (dvh, perspective, backdrop-blur) and JavaScript run consistently.

**Phase 2 — Responsive Testing**
Testing on various breakpoints (320px, 375px, 768px, 1024px, 1440px, 1920px) to ensure layout, typography, and interactions function on all screen sizes.

**Phase 3 — Performance Audit**
Audit using Lighthouse and WebPageTest to ensure Core Web Vitals (LCP, FID, CLS) are at good levels. Image optimization, lazy loading, and CSS/JS minification.

**Phase 4 — Accessibility Review**
Keyboard navigation verification, focus states, screen reader compatibility, and prefers-reduced-motion support.`,
      },
      documentation: [],
    },
  },
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/andrian-dwi-0250a3407/",
  github: "https://github.com/andriandwiii",
  email: "andriands025@gmail.com",
  instagram: "https://www.instagram.com/",
  threads: "https://www.threads.net/",
  facebook: "https://www.facebook.com/",
};

export const techStack: Record<string, string[]> = {
  "Hard Skills": ["Fullstack Development", "Mobile App Dev", "Web Dev", "RESTful API", "Database Management", "IoT", "Computer Vision", "YOLO", "Machine Learning", "FastAPI", "Deployment", "System Integration", "UI/UX"],
  "Tools & Core": ["React Native", "Node.js", "Knex.js", "MySQL", "ESP32", "Numpy", "Pandas", "Matplotlib", "Scikit-learn"],
  "Soft Skills": ["Problem Solving", "Analytical Thinking", "Critical Thinking", "Teamwork & Collaboration", "Continuous Learning"]
};
