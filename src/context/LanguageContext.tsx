import { createContext, useState, useContext, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    navAbout: "Tentang",
    navExperience: "Pengalaman",
    navProjects: "Proyek",
    navResume: "Unduh CV",
    heroRole: "FULLSTACK",
    heroDesc: "DEVELOPER",
    scroll: "GULIR",
    aboutMe: "Tentang Saya",
    aboutTitle: "Merancang pengalaman digital sebagai Fullstack Developer.",
    aboutP1: "Lulusan D3 Teknik Informatika Universitas Sebelas Maret (UNS) dengan IPK 3,72/4,00 yang berfokus pada pengembangan perangkat lunak (Fullstack Web & Mobile Development). Memiliki keahlian dalam membangun aplikasi menggunakan React Native, Next.js, dan Tailwind CSS, serta merancang arsitektur backend dan basis data relasional dengan Node.js (Express.js) dan MySQL.",
    aboutP2: "Berpengalaman menangani siklus pengembangan sistem secara menyeluruh mulai dari perancangan, pengembangan, deployment, hingga maintenance melalui peran sebagai Fullstack Developer Intern di PT Garapan Indonesia Sukses serta PT Marstech Global dalam membangun sistem informasi akademik (SIAKAD) sekolah.",
    aboutP3: "Selain pengalaman industri, saya aktif mengembangkan RINTISKU.ID, platform ERP untuk UMKM yang lolos pendanaan Sebelas Maret Startup Academy (SEMESTA UNS). Saya juga berpengalaman merancang sistem terintegrasi melalui proyek akhir 'Growsafe', yang menggabungkan Mobile App, IoT, dan AI (YOLO) untuk menciptakan solusi inovatif dan aplikatif.",
    aboutP4: "Terbiasa bekerja dalam lingkungan tim yang kolaboratif dengan pengelolaan version control menggunakan Git, adaptif terhadap teknologi baru, serta berorientasi pada penyediaan solusi digital yang efisien dan terukur bagi kebutuhan perusahaan.",
    techStack: "Teknologi & Alat",
    careerTitle: "Karir & Pendidikan",
    careerHeading1: "Pengalaman &",
    careerHeading2: "Pendidikan.",
    careerDesc: "Membangun solusi digital yang solid mulai dari logika arsitektur hingga pengalaman antarmuka pengguna.",
    period: "Periode",
    roleDesc: "Deskripsi Peran",
    focusArea: "Fokus Area",
    keyResp: "Tanggung Jawab Utama",
    eduOverview: "Ringkasan Studi",
    eduHighlights: "Pencapaian Akademik",
    contactStart: "Mulai proyek",
    contactDesc: "Menciptakan pengalaman digital premium, komponen yang imersif, dan solusi web kreatif yang dibangun untuk generasi berikutnya.",
    rights: "Semua hak dilindungi undang-undang.",
    certTitle1: "Pertumbuhan Profesional",
    certTitle2: "Sertifikat & Pelatihan.",
    certDesc: "Rekam jejak pencapaian, sertifikasi keahlian, dan pelatihan yang memvalidasi kompetensi profesional.",
    certYear: "Tahun",
    certOverview: "Ringkasan Sertifikasi",
    certFocus: "Fokus Area",
    certSkills: "Keterampilan & Kompetensi",
    certShow: "Lihat Kredensial",
    // Organizations
    orgTitle1: "Keterlibatan Kampus",
    orgTitle2: "Organisasi & Kepanitiaan.",
    orgDesc: "Pengalaman berorganisasi yang melatih kemampuan koordinasi, kerja sama tim, dan kepemimpinan.",
    orgPeriod: "Periode",
    orgOverview: "Deskripsi Organisasi",
    orgFocus: "Bidang Kegiatan",
    orgTasks: "Tanggung Jawab",
    orgDocs: "Dokumentasi Kegiatan",
    // Stats
    statProjects: "Proyek Selesai",
    statInternships: "Magang Industri",
    statExperience: "Tahun Pengalaman",
    statCoffee: "Cangkir Kopi",
    // MagneticDeck
    magneticTitle: "Dibangun dengan Stack Ini",
    magneticDesc: "Interaksi dengan kartu atau lihat mereka bergerak.",
    // HoverImageLinks
    hoverAbout: "Lebih jauh tentang perjalanan dan keahlian saya.",
    hoverExperience: "Rekam jejak profesional dan pendidikan.",
    hoverProjects: "Kumpulan karya dan eksplorasi teknis.",
    hoverCertificates: "Sertifikasi dan pelatihan profesional.",
    hoverOrganizations: "Pengalaman organisasi dan kepanitiaan kampus.",
    hoverContact: "Mari berkolaborasi membangun hal hebat.",
    // CaseStudy
    caseStudyLabel: "Dokumentasi Studi Kasus",
    caseStudyBack: "← Kembali ke Portfolio",
  },
  en: {
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navResume: "Resume",
    heroRole: "FULLSTACK",
    heroDesc: "DEVELOPER",
    scroll: "SCROLL",
    aboutMe: "About Me",
    aboutTitle: "Crafting digital experiences as a Fullstack Developer.",
    aboutP1: "An Informatics Engineering Diploma graduate from Universitas Sebelas Maret (UNS) with a 3.72/4.00 GPA, focused on software development (Fullstack Web & Mobile Development). Skilled in building applications using React Native, Next.js, and Tailwind CSS, as well as designing backend architecture and relational databases with Node.js (Express.js) and MySQL.",
    aboutP2: "Experienced in handling the full system development lifecycle—from design, development, deployment, to maintenance—through roles as a Fullstack Developer Intern at PT Garapan Indonesia Sukses and PT Marstech Global, building school academic information systems (SIAKAD).",
    aboutP3: "Beyond industry experience, I actively develop RINTISKU.ID, an ERP platform for SMEs that secured funding from the Sebelas Maret Startup Academy (SEMESTA UNS). I am also experienced in designing integrated systems through my final project 'Growsafe', which combines a Mobile App, IoT, and AI (YOLO) to create innovative and applicable solutions.",
    aboutP4: "Accustomed to working in collaborative team environments with version control management using Git, adaptive to new technologies, and oriented toward providing efficient and measurable digital solutions for company needs.",
    techStack: "Tech Stack & Tools",
    careerTitle: "Career & Education",
    careerHeading1: "Experience &",
    careerHeading2: "Education.",
    careerDesc: "Building solid digital solutions from architectural logic to user interface experiences.",
    period: "Period",
    roleDesc: "Role Description",
    focusArea: "Focus Area",
    keyResp: "Key Responsibilities",
    eduOverview: "Degree Overview",
    eduHighlights: "Academic Highlights",
    contactStart: "Start a project",
    contactDesc: "Crafting premium digital experiences, immersive components, and creative web solutions built for the next generation.",
    rights: "All rights reserved.",
    certTitle1: "Professional Growth",
    certTitle2: "Certificates & Training.",
    certDesc: "A track record of achievements, skill certifications, and training that validate professional competence.",
    certYear: "Year",
    certOverview: "Certification Overview",
    certFocus: "Focus Area",
    certSkills: "Skills & Competencies",
    certShow: "Show Credentials",
    // Organizations
    orgTitle1: "Campus Involvement",
    orgTitle2: "Organizations & Committees.",
    orgDesc: "Organizational experiences that hone coordination skills, teamwork, and leadership.",
    orgPeriod: "Period",
    orgOverview: "Organization Overview",
    orgFocus: "Activity Area",
    orgTasks: "Responsibilities",
    orgDocs: "Activity Documentation",
    // Stats
    statProjects: "Projects Completed",
    statInternships: "Industry Internships",
    statExperience: "Years Experience",
    statCoffee: "Cups of Coffee",
    // MagneticDeck
    magneticTitle: "Crafted with this Stack",
    magneticDesc: "Interact with the cards or watch them scatter.",
    // HoverImageLinks
    hoverAbout: "Learn more about my journey and expertise.",
    hoverExperience: "Professional and educational track record.",
    hoverProjects: "Collection of works and technical explorations.",
    hoverCertificates: "Professional certifications and training.",
    hoverOrganizations: "Campus organizational and committee experiences.",
    hoverContact: "Let's collaborate to build something great.",
    // CaseStudy
    caseStudyLabel: "Case Study Documentation",
    caseStudyBack: "← Back to Main Portfolio",
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  const t = (key: string) => {
    const text = translations[language][key as keyof typeof translations["id"]];
    return text !== undefined ? text : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
