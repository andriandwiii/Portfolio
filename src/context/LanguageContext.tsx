"use client";

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
    aboutP1: "Lulusan D3 Teknik Informatika Universitas Sebelas Maret (UNS) dengan IPK 3,72/4,00 yang memiliki pengalaman kerja dan pemahaman mendalam dalam pengembangan perangkat lunak (Fullstack Development) serta pengelolaan data.",
    aboutP2: "Terbiasa mengoperasikan perangkat lunak profesional, mengelola administrasi sistem informasi, bekerja secara teliti, serta berkolaborasi dalam tim untuk mencapai target perusahaan.",
    aboutP3: "Adaptif terhadap sistem digital baru, dan siap berkontribusi secara optimal baik dalam peran teknis maupun administratif.",
    aboutP4: "Selain Web Development, saya juga berpengalaman merancang sistem terintegrasi. Hal ini saya wujudkan dalam proyek akhir 'Growsafe', di mana saya menggabungkan Mobile App, IoT, dan AI (YOLO) untuk menciptakan solusi inovatif dan aplikatif.",
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
    certTitle2: "Sertifikat & Penghargaan.",
    certDesc: "Rekam jejak pencapaian, sertifikasi keahlian, dan penghargaan yang memvalidasi kompetensi profesional.",
    certYear: "Tahun",
    certOverview: "Ringkasan Sertifikasi",
    certFocus: "Fokus Area",
    certSkills: "Keterampilan & Kompetensi",
    certShow: "Lihat Kredensial"
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
    aboutP1: "An Informatics Engineering Diploma graduate from Universitas Sebelas Maret (UNS) with a 3.72/4.00 GPA, possessing work experience and a deep understanding of software development (Fullstack Development) and data management.",
    aboutP2: "Accustomed to operating professional software, managing information system administration, working meticulously, and collaborating within teams to achieve company targets.",
    aboutP3: "Adaptive to new digital systems and ready to contribute optimally in both technical and administrative roles.",
    aboutP4: "In addition to Web Development, I am also experienced in designing integrated systems. This was realized in my final project 'Growsafe', where I combined a Mobile App, IoT, and AI (YOLO) to create an innovative and applicable solution.",
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
    certTitle2: "Certificates & Awards.",
    certDesc: "A track record of achievements, skill certifications, and awards that validate professional competence.",
    certYear: "Year",
    certOverview: "Certification Overview",
    certFocus: "Focus Area",
    certSkills: "Skills & Competencies",
    certShow: "Show Credentials"
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
