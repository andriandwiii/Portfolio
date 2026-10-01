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
      hasCaseStudy: false,
      gradient: "from-emerald-500 to-teal-800",
      monogram: "GS",
      tagline: "IoT & AI Mushroom Monitoring",
      accentColor: "#a7f3d0",
      category: "IoT & AI",
      imageUrl: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=85&w=800&auto=format&fit=crop",
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
      hasCaseStudy: false,
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
      hasCaseStudy: false,
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
      hasCaseStudy: false,
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
      hasCaseStudy: false,
      gradient: "from-emerald-500 to-teal-800",
      monogram: "GS",
      tagline: "IoT & AI Mushroom Monitoring",
      accentColor: "#a7f3d0",
      category: "IoT & AI",
      imageUrl: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=85&w=800&auto=format&fit=crop",
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
      hasCaseStudy: false,
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
      hasCaseStudy: false,
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
      hasCaseStudy: false,
      gradient: "from-gray-100 to-slate-200",
      monogram: "PF",
      tagline: "Interactive Web Experience",
      accentColor: "#f1f5f9",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=85&w=800&auto=format&fit=crop",
    },
  ]
};

export const caseStudies: Record<string, CaseStudyData> = {
  rintisku: {
    title: "Rintisku.id — Digitalisasi Pencatatan UMKM",
    sections: {
      problem: `Banyak UMKM lokal masih menggunakan pencatatan manual yang rentan hilang, kotor, dan sulit dipantau secara real-time. Hal ini menyebabkan kesulitan dalam mengontrol stok barang dan memonitor arus kas harian.
      
Selain itu, rekapan laporan akhir bulan memakan waktu berhari-hari karena harus mencocokkan nota kertas satu per satu.`,

      solution: `Saya membangun platform Enterprise Resource Planning (ERP) khusus UMKM yang berfokus pada kemudahan penggunaan:

**Modul Inventaris Cerdas**
Pencatatan barang masuk dan keluar dengan notifikasi stok menipis otomatis.

**Pencatatan Keuangan Terintegrasi**
Setiap transaksi inventaris akan otomatis terhubung ke jurnal kas, meminimalisir kesalahan input manual.

**Laporan Otomatis**
Dashboard yang menghasilkan laporan laba rugi dan ringkasan transaksi dalam satu klik.`,

      challenges: `**Tantangan 1: UI/UX untuk Pengguna Awam**
Banyak pelaku UMKM yang belum terbiasa dengan aplikasi kompleks. Solusi: Menggunakan pendekatan desain minimalis dengan font besar dan tombol yang jelas, serta alur kerja yang dipandu lapis demi lapis (step-by-step wizard).

**Tantangan 2: Integritas Data Relasional**
Memastikan bahwa perubahan harga modal di satu transaksi tidak merusak laporan bulan-bulan sebelumnya. Solusi: Implementasi snapshot harga pada tabel transaksi di MySQL alih-alih merelasikan langsung ke tabel master barang.`,

      testing: `**Fase 1 — Uji Fungsi Internal**
Melakukan serangkaian skenario pengujian menggunakan Postman dan Jest untuk memastikan API merespons dengan benar terhadap input anomali (misal: qty negatif).

**Fase 2 — User Acceptance Testing (UAT)**
Mengujicobakan purwarupa ke 3 UMKM di Madiun. Umpan balik yang diterima sangat berharga, salah satunya adalah penambahan fitur "Simpan Sementara/Draft" saat pelanggan sedang mengantri dan kasir belum selesai menginput.`,
    },
    documentation: [
      { image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop", caption: "Perancangan Skema Database ERP UMKM" },
      { image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=1200&auto=format&fit=crop", caption: "Implementasi Backend API menggunakan Node.js" }
    ]
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
