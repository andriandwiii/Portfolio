import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const certificatesData = {
  id: [
    {
      id: "C1",
      company: "BNSP",
      role: "Pemrogram (Programmer)",
      period: "Apr 2026 - Apr 2029",
      description: (
        <>
          Sertifikasi kompetensi kerja profesi <strong>Pemrogram</strong> berskala nasional dari Badan Nasional Sertifikasi Profesi (BNSP).
        </>
      ),
      tags: ["Sertifikasi Profesi", "Programmer", "Nasional"],
      tasks: [
        <>Memenuhi standar kompetensi nasional dalam perancangan dan pembuatan perangkat lunak.</>,
        <>Menerapkan praktik terbaik dalam penulisan kode yang aman dan efisien.</>
      ],
      credentialUrl: "https://bnsp.go.id/",
      images: [
        { title: "Sertifikat BNSP", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop", alt: "Sertifikat BNSP" }
      ]
    },
    {
      id: "C2",
      company: "Meta",
      role: "Advanced MySQL Topics",
      period: "Feb 2025 - Mar 2025",
      description: (
        <>
          Mempelajari topik tingkat lanjut manajemen basis data relasional menggunakan MySQL melalui program pelatihan Meta di Coursera, mencakup <strong>optimasi kueri, indeks, dan pemecahan masalah data</strong>.
        </>
      ),
      tags: ["MySQL", "Database", "Meta", "Coursera"],
      tasks: [
        <>Menerapkan teknik optimasi kueri tingkat lanjut untuk performa tinggi.</>,
        <>Merancang dan mengelola indeks pada basis data skala besar.</>,
        <>Memecahkan masalah pada pengelolaan data yang kompleks.</>
      ],
      credentialUrl: "https://coursera.org/share/4eb3b138e0a325b78ff57153663ec506",
      images: [
        { title: "Certificate", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop", alt: "Certificate" }
      ]
    },
    {
      id: "C3",
      company: "Meta",
      role: "Database Engineer Capstone",
      period: "Feb 2025 - Mar 2025",
      description: (
        <>
          Menyelesaikan proyek akhir (capstone) sertifikasi Database Engineer dari Meta di Coursera, yang melibatkan perancangan, implementasi, dan pengujian <strong>sistem basis data secara end-to-end</strong>.
        </>
      ),
      tags: ["Database Engineer", "MySQL", "Meta", "Coursera"],
      tasks: [
        <>Merancang struktur dan relasi arsitektur basis data relasional.</>,
        <>Mengimplementasikan dan menguji sistem basis data dari tahap awal hingga akhir.</>
      ],
      credentialUrl: "https://coursera.org/share/4eb3b138e0a325b78ff57153663ec506",
      images: [
        { title: "Certificate", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop", alt: "Certificate" }
      ]
    },
    {
      id: "C4",
      company: "Meta",
      role: "The Full Stack",
      period: "Feb 2025 - Mar 2025",
      description: (
        <>
          Mengikuti program pelatihan komprehensif dari Meta via Coursera yang mencakup <strong>prinsip pengembangan perangkat lunak secara menyeluruh</strong> dari sisi antarmuka (frontend) hingga pengelolaan server (backend).
        </>
      ),
      tags: ["Full Stack", "Web Development", "Meta"],
      tasks: [
        <>Menguasai arsitektur pengembangan frontend modern.</>,
        <>Mengintegrasikan dan mengelola sistem backend secara efisien.</>
      ],
      credentialUrl: "https://coursera.org/share/4eb3b138e0a325b78ff57153663ec506",
      images: [
        { title: "Certificate", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", alt: "Certificate" }
      ]
    },
    {
      id: "C5",
      company: "Meta",
      role: "React Native",
      period: "Feb 2025 - Mar 2025",
      description: (
        <>
          Menyelesaikan kursus profesional bersertifikat dari Meta melalui Coursera yang membahas pengembangan aplikasi seluler lintas platform menggunakan <strong>React Native, pengelolaan komponen, serta navigasi aplikasi</strong>.
        </>
      ),
      tags: ["React Native", "Mobile Development", "Meta"],
      tasks: [
        <>Membangun aplikasi mobile lintas platform (iOS dan Android).</>,
        <>Mengimplementasikan navigasi kompleks dan pengelolaan state yang reaktif.</>
      ],
      credentialUrl: "https://coursera.org/share/4eb3b138e0a325b78ff57153663ec506",
      images: [
        { title: "Certificate", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", alt: "Certificate" }
      ]
    }
  ],
  en: [
    {
      id: "C1",
      company: "BNSP",
      role: "Programmer",
      period: "Apr 2026 - Apr 2029",
      description: (
        <>
          National competency certification for the <strong>Programmer</strong> profession from the National Professional Certification Board (BNSP).
        </>
      ),
      tags: ["Professional Certification", "Programmer", "National"],
      tasks: [
        <>Met national competency standards in software design and development.</>,
        <>Implemented best practices in writing secure and efficient code.</>
      ],
      credentialUrl: "https://bnsp.go.id/",
      images: [
        { title: "BNSP Certificate", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop", alt: "BNSP Certificate" }
      ]
    },
    {
      id: "C2",
      company: "Meta",
      role: "Advanced MySQL Topics",
      period: "Feb 2025 - Mar 2025",
      description: (
        <>
          Learned advanced relational database management topics using MySQL through Meta's training program on Coursera, including <strong>query optimization, indexing, and data troubleshooting</strong>.
        </>
      ),
      tags: ["MySQL", "Database", "Meta", "Coursera"],
      tasks: [
        <>Applied advanced query optimization techniques for high performance.</>,
        <>Designed and managed indexes on large-scale databases.</>,
        <>Troubleshot complex data management issues.</>
      ],
      credentialUrl: "https://coursera.org/share/4eb3b138e0a325b78ff57153663ec506",
      images: [
        { title: "Certificate", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop", alt: "Certificate" }
      ]
    },
    {
      id: "C3",
      company: "Meta",
      role: "Database Engineer Capstone",
      period: "Feb 2025 - Mar 2025",
      description: (
        <>
          Completed the final capstone project for the Database Engineer certification from Meta on Coursera, involving the design, implementation, and testing of an <strong>end-to-end database system</strong>.
        </>
      ),
      tags: ["Database Engineer", "MySQL", "Meta", "Coursera"],
      tasks: [
        <>Designed the structure and relations of a relational database architecture.</>,
        <>Implemented and tested the database system from start to finish.</>
      ],
      credentialUrl: "https://coursera.org/share/4eb3b138e0a325b78ff57153663ec506",
      images: [
        { title: "Certificate", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop", alt: "Certificate" }
      ]
    },
    {
      id: "C4",
      company: "Meta",
      role: "The Full Stack",
      period: "Feb 2025 - Mar 2025",
      description: (
        <>
          Participated in a comprehensive training program from Meta via Coursera covering <strong>end-to-end software development principles</strong>, from the user interface (frontend) to server management (backend).
        </>
      ),
      tags: ["Full Stack", "Web Development", "Meta"],
      tasks: [
        <>Mastered modern frontend development architectures.</>,
        <>Integrated and managed backend systems efficiently.</>
      ],
      credentialUrl: "https://coursera.org/share/4eb3b138e0a325b78ff57153663ec506",
      images: [
        { title: "Certificate", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", alt: "Certificate" }
      ]
    },
    {
      id: "C5",
      company: "Meta",
      role: "React Native",
      period: "Feb 2025 - Mar 2025",
      description: (
        <>
          Completed a certified professional course from Meta through Coursera covering cross-platform mobile application development using <strong>React Native, component management, and app navigation</strong>.
        </>
      ),
      tags: ["React Native", "Mobile Development", "Meta"],
      tasks: [
        <>Built cross-platform mobile applications (iOS and Android).</>,
        <>Implemented complex navigation and reactive state management.</>
      ],
      credentialUrl: "https://coursera.org/share/4eb3b138e0a325b78ff57153663ec506",
      images: [
        { title: "Certificate", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", alt: "Certificate" }
      ]
    }
  ]
};

export default function Certificates() {
  const { t, language } = useLanguage();
  const certificates = certificatesData[language] || certificatesData.id;
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  return (
    <section id="certificates" className="w-full bg-white px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-black/45 mb-4">
              {t("certTitle1")}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
              {t("certTitle2").split(" & ")[0]} & <br className="hidden md:block" /> {t("certTitle2").split(" & ")[1] || ""}
            </h2>
          </div>
          <p className="text-base md:text-lg text-justify text-black/60 max-w-sm">
            {t("certDesc")}
          </p>
        </div>

        {/* Certificates List */}
        <div className="flex flex-col border-t border-black/10">
          {certificates.map((cert, index) => {
            const isExpanded = expandedCert === index;

            return (
              <div
                key={cert.id}
                className="group border-b border-black/10 flex flex-col"
              >
                {/* Clickable Header */}
                <button
                  onClick={() => setExpandedCert(isExpanded ? null : index)}
                  className="w-full flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 text-left cursor-pointer transition-colors hover:bg-black/[0.02]"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                    <span className="text-sm font-medium text-black/30 w-8">
                      {cert.id}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                      {cert.company}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-12 ml-14 md:ml-0">
                    <span className="text-lg md:text-xl font-medium text-black">
                      {cert.role}
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
                              {t("certYear")}
                            </p>
                            <p className="text-black/80 font-medium">{cert.period}</p>
                          </div>

                          <div className="md:col-span-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              {t("certOverview")}
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-justify text-black/70">
                              {cert.description}
                            </p>
                          </div>

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
                              {t("certFocus")}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {cert.tags.map((tag, i) => (
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

                        {/* Tasks and Credentials */}
                        <div className="border-t border-black/5 pt-10">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-4">
                            {t("certSkills")}
                          </p>
                          <ul className="space-y-4 mb-10">
                            {cert.tasks.map((task, i) => (
                              <li key={i} className="flex items-start gap-3.5 text-black/75">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                                <span className="leading-relaxed text-[15px] md:text-[1.05rem] text-justify tracking-[-0.01em]">{task}</span>
                              </li>
                            ))}
                          </ul>

                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-[15px] font-medium hover:bg-black/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                          >
                            {t("certShow")}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                          </a>
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
