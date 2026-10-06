import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioStack } from "./ui/PortfolioStack";
import { useLanguage } from "../context/LanguageContext";

const educationData = {
  id: [
    {
      id: "ED1",
      company: "Universitas Sebelas Maret",
      role: "Diploma 3 Teknik Informatika",
      period: "2023 — 2026",
    description: (
      <>
        Fokus pada <strong>pengembangan perangkat lunak, pemrograman web modern</strong>, dan basis data dengan IPK <strong>3.72/4.00 (Cum Laude)</strong>.
      </>
    ),
    tags: ["Software Engineering", "Web Development", "Mobile Development", "Database Architecture"],
    tasks: [
      <><strong>Mata Kuliah Utama:</strong> Algoritma, Pemrograman Web Berbasis Framework (Next.js, Laravel), dan Kecerdasan Buatan.</>,
      <><strong>Proyek Praktikum:</strong> Mengembangkan berbagai sistem informasi dan aplikasi terintegrasi dengan RESTful API.</>,
      <><strong>Fokus Studi:</strong> Menjadi Fullstack Developer yang mampu menangani masalah skalabilitas aplikasi web.</>
    ],
    images: [
      { title: "Software Engineering", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop", alt: "Programming and coding", objectFit: "cover" as const },
      { title: "Sebelas Maret University", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Gerbang_Depan_UNS_Universitas_Sebelas_Maret_Surakarta_03.jpg", alt: "University Campus", objectFit: "cover" as const },
    ]
  },
  {
    id: "ED2",
    company: "SMAN 1 Pilangkenceng",
    role: "Jurusan IPS (Double Track Multimedia)",
    period: "2020 — 2023",
    description: (
      <>
        Mengikuti program vokasi <strong>Double Track</strong> dengan fokus pada pengolahan media digital dan multimedia.
      </>
    ),
    tags: ["Multimedia", "Double Track", "Creative"],
    tasks: [
      <>Berpartisipasi aktif dalam kegiatan ekstrakurikuler sekolah untuk mengasah kerjasama tim.</>,
      <>Mempelajari dasar-dasar pengolahan citra dan desain grafis.</>
    ],
    images: [
      { title: "Multimedia & Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=85&w=1200&auto=format&fit=crop", alt: "Multimedia Design", objectFit: "cover" as const }
      ]
    }
  ],
  en: [
    {
      id: "ED1",
      company: "Sebelas Maret University",
      role: "Diploma 3 Informatics Engineering",
      period: "2023 — 2026",
      description: (
        <>
          Focused on <strong>software engineering, modern web programming</strong>, and databases with a GPA of <strong>3.72/4.00 (Cum Laude)</strong>.
        </>
      ),
      tags: ["Software Engineering", "Web Development", "Mobile Development", "Database Architecture"],
      tasks: [
        <><strong>Core Subjects:</strong> Algorithms, Framework-based Web Programming (Next.js, Laravel), and Artificial Intelligence.</>,
        <><strong>Practicum Projects:</strong> Developed various information systems and applications integrated with RESTful APIs.</>,
        <><strong>Study Focus:</strong> Becoming a Fullstack Developer capable of handling web application scalability issues.</>
      ],
      images: [
        { title: "Software Engineering", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop", alt: "Programming and coding", objectFit: "cover" as const },
        { title: "Sebelas Maret University", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Gerbang_Depan_UNS_Universitas_Sebelas_Maret_Surakarta_03.jpg", alt: "University Campus", objectFit: "cover" as const },
      ]
    },
    {
      id: "ED2",
      company: "SMAN 1 Pilangkenceng",
      role: "Social Sciences (Multimedia Double Track)",
      period: "2020 — 2023",
      description: (
        <>
          Participated in the <strong>Double Track</strong> vocational program focusing on digital media processing and multimedia.
        </>
      ),
      tags: ["Multimedia", "Double Track", "Creative"],
      tasks: [
        <>Actively participated in school extracurricular activities to hone teamwork skills.</>,
        <>Learned the fundamentals of image processing and graphic design.</>
      ],
      images: [
        { title: "Multimedia & Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=85&w=1200&auto=format&fit=crop", alt: "Multimedia Design", objectFit: "cover" as const }
      ]
    }
  ]
};

const experiencesData = {
  id: [
    {
      id: "01",
      company: "PT Garapan Indonesia Sukses",
      role: "Full Stack Developer Intern",
      period: "Feb 2026 — Mar 2026",
    description: (
      <>
        Bertanggung jawab mengembangkan <strong>platform ERP berbasis web</strong> untuk mengotomatisasi pencatatan operasional harian dan pengelolaan keuangan UMKM lokal.
      </>
    ),
    tags: ["Next.js", "Express.js", "MySQL", "ERP"],
    tasks: [
      <>Membangun platform Enterprise Resource Planning (ERP) berbasis web terintegrasi.</>,
      <>Merancang struktur basis data dan alur antarmuka aplikasi.</>,
      <>Mengelola kontrol versi kode menggunakan Git dan GitHub secara kolaboratif.</>
    ],
    images: [
      { title: "Team Discussion", image: "/img/Dokumentasi.jpeg", alt: "Team Discussion", objectFit: "cover" as const },
      { title: "Workspace", image: "/img/dokumentasi2.png", alt: "Workspace setup", objectFit: "cover" as const },
    ]
  },
  {
    id: "02",
    company: "PT Marstech Global",
    role: "Full Stack Developer Intern",
    period: "Sep 2025 — Dec 2025",
    description: (
      <>
        Membangun dan merancang <strong>Sistem Informasi Akademik (SIAKAD)</strong> menggunakan teknologi web modern untuk meningkatkan efisiensi administrasi akademik.
      </>
    ),
    tags: ["Next.js", "Express.js", "MySQL", "SIAKAD"],
    tasks: [
      <>Mengembangkan arsitektur dan antarmuka Sistem Informasi Akademik.</>,
      <>Merancang sistem backend dan integrasi basis data relasional untuk ribuan data.</>,
      <>Berkolaborasi bersama tim pengembang dalam siklus hidup perangkat lunak secara agile.</>
    ],
    images: [
      { title: "SIAKAD Mockup", image: "/img/mockup siakad.png", alt: "SIAKAD Mockup", objectFit: "cover" as const },
      { title: "SIAKAD Interface", image: "/img/siakad.png", alt: "SIAKAD Interface", objectFit: "cover" as const },
    ]
  }],
  en: [
    {
      id: "01",
      company: "PT Garapan Indonesia Sukses",
      role: "Full Stack Developer Intern",
      period: "Feb 2026 — Mar 2026",
      description: (
        <>
          Responsible for developing a <strong>web-based ERP platform</strong> to automate daily operational recording and financial management for local SMEs.
        </>
      ),
      tags: ["Next.js", "Express.js", "MySQL", "ERP"],
      tasks: [
        <>Built an integrated web-based Enterprise Resource Planning (ERP) platform.</>,
        <>Designed database structures and application interface flows.</>,
        <>Managed source code version control using Git and GitHub collaboratively.</>
      ],
      images: [
        { title: "Team Discussion", image: "/img/Dokumentasi.jpeg", alt: "Team Discussion", objectFit: "cover" as const },
        { title: "Workspace", image: "/img/dokumentasi2.png", alt: "Workspace setup", objectFit: "cover" as const },
      ]
    },
    {
      id: "02",
      company: "PT Marstech Global",
      role: "Full Stack Developer Intern",
      period: "Sep 2025 — Dec 2025",
      description: (
        <>
          Built and designed an <strong>Academic Information System (SIAKAD)</strong> using modern web technologies to improve academic administration efficiency.
        </>
      ),
      tags: ["Next.js", "Express.js", "MySQL", "SIAKAD"],
      tasks: [
        <>Developed the architecture and interface of the Academic Information System.</>,
        <>Designed backend systems and relational database integration for thousands of data entries.</>,
        <>Collaborated with the development team in an agile software lifecycle.</>
      ],
      images: [
        { title: "SIAKAD Mockup", image: "/img/mockup siakad.png", alt: "SIAKAD Mockup", objectFit: "cover" as const },
        { title: "SIAKAD Interface", image: "/img/siakad.png", alt: "SIAKAD Interface", objectFit: "cover" as const },
      ]
    }
  ]
};


export default function InternshipExperience() {
  const { t, language } = useLanguage();
  
  const experiences = experiencesData[language as keyof typeof experiencesData];
  const education = educationData[language as keyof typeof educationData];

  const [expandedEdu, setExpandedEdu] = useState<number | null>(null);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  return (
    <section id="experience" className="w-full bg-white px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-black/45 mb-4">
              {t("careerTitle")}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
              {t("careerHeading1")} <br className="hidden md:block" /> {t("careerHeading2")}
            </h2>
          </div>
          <p className="text-base md:text-lg text-justify text-black/60 max-w-sm">
            {t("careerDesc")}
          </p>
        </div>

        {/* Experience List */}
        <div className="flex flex-col border-t border-black/10 mb-20">
          {experiences.map((exp, index) => {
            const isExpanded = expandedExp === index;

            return (
              <div
                key={exp.id}
                className={`group border-b border-black/10 flex flex-col transition-colors duration-300 ${isExpanded ? "bg-[#f8fafc] border-l-[6px] border-l-cyan-600 pl-4" : ""}`}
              >
                {/* Clickable Header */}
                <button
                  onClick={() => setExpandedExp(isExpanded ? null : index)}
                  className="w-full flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 text-left cursor-pointer transition-colors hover:bg-black/[0.02]"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                    <span className="text-sm font-medium text-black/30 w-8">
                      {exp.id}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-12 ml-14 md:ml-0">
                    <span className="text-lg md:text-xl font-medium text-black">
                      {exp.role}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      className="hidden md:flex w-8 h-8 rounded-full border border-black/20 items-center justify-center text-xl"
                    >
                      +
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-14 md:pl-[5.5rem] pr-4 md:pr-0">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              {t("period")}
                            </p>
                            <p className="text-black/80 font-medium">{exp.period}</p>
                          </div>

                          <div className="md:col-span-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              {t("roleDesc")}
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-justify text-black/70">
                              {exp.description}
                            </p>
                          </div>

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
                              {t("focusArea")}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs font-medium border border-black/10 rounded-full text-black/70"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* Tasks and Image */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-t border-black/5 pt-10">
                          <div className="md:col-span-6 lg:col-span-7">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-4">
                              {t("keyResp")}
                            </p>
                            <ul className="space-y-4">
                              {exp.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-3.5 text-black/75">
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                                  <span className="leading-relaxed text-[15px] md:text-[1.05rem] text-justify tracking-[-0.01em]">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="md:col-span-6 lg:col-span-5 h-[300px] md:h-[380px] lg:h-[420px] flex items-center justify-center relative -mt-4 md:-mt-8">
                            <div className="w-full h-full transform md:scale-105 lg:scale-110 z-10 hover:z-20">
                              <PortfolioStack items={exp.images} />
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Education List */}
        <div className="flex flex-col border-t border-black/10">
          {education.map((edu, index) => {
            const isExpanded = expandedEdu === index;

            return (
              <div
                key={edu.id}
                className={`group border-b border-black/10 flex flex-col transition-colors duration-300 ${isExpanded ? "bg-[#f8fafc] border-l-[6px] border-l-cyan-600 pl-4" : ""}`}
              >
                {/* Clickable Header */}
                <button
                  onClick={() => setExpandedEdu(isExpanded ? null : index)}
                  className="w-full flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 text-left cursor-pointer transition-colors hover:bg-black/[0.02]"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                    <span className="text-sm font-medium text-black/30 w-8">
                      {edu.id}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                      {edu.company}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-12 ml-14 md:ml-0">
                    <span className="text-lg md:text-xl font-medium text-black">
                      {edu.role}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      className="hidden md:flex w-8 h-8 rounded-full border border-black/20 items-center justify-center text-xl"
                    >
                      +
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-14 md:pl-[5.5rem] pr-4 md:pr-0">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              Period
                            </p>
                            <p className="text-black/80 font-medium">{edu.period}</p>
                          </div>

                          <div className="md:col-span-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              {t("eduOverview")}
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-justify text-black/70">
                              {edu.description}
                            </p>
                          </div>

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
                              Focus Area
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {edu.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs font-medium border border-black/10 rounded-full text-black/70"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* Tasks and Image */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-t border-black/5 pt-10">
                          <div className="md:col-span-6 lg:col-span-7">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-4">
                              {t("eduHighlights")}
                            </p>
                            <ul className="space-y-4">
                              {edu.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-3.5 text-black/75">
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                                  <span className="leading-relaxed text-[15px] md:text-[1.05rem] text-justify tracking-[-0.01em]">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="md:col-span-6 lg:col-span-5 h-[300px] md:h-[380px] lg:h-[420px] flex items-center justify-center relative -mt-4 md:-mt-8">
                            <div className="w-full h-full transform md:scale-105 lg:scale-110 z-10 hover:z-20">
                              <PortfolioStack items={edu.images} />
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
