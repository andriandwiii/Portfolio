import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

interface OrgImage {
  src: string;
  caption: string;
  position?: string;
}

interface OrgData {
  id: string;
  name: string;
  role: string;
  location: string;
  period: string;
  description: React.ReactNode;
  tasks: React.ReactNode[];
  tags: string[];
  images: OrgImage[];
}

const organizationsData: Record<string, OrgData[]> = {
  id: [
    {
      id: "O1",
      name: "Himpunan Mahasiswa",
      role: "Staf Divisi Sosial dan Humas (Soshum)",
      location: "Madiun, Jawa Timur",
      period: "Jan 2024 - Jan 2025",
      description: (
        <>
          Himpunan Mahasiswa (HIMA) merupakan organisasi kemahasiswaan di Universitas Sebelas Maret PSDKU Madiun yang menaungi tiga program studi, yaitu <strong>Akuntansi, Teknik Informatika, dan Teknologi Hasil Pertanian</strong>.
        </>
      ),
      tasks: [
        <>Melaksanakan program kerja pengabdian kepada masyarakat.</>,
        <>Mengoordinasikan kegiatan sosial seperti kunjungan ke panti asuhan dan kegiatan berbagi makanan.</>,
        <>Mengelola program sosial kemasyarakatan serta menjalin hubungan masyarakat (<em>public relations</em>).</>,
      ],
      tags: ["Sosial & Humas", "Public Relations", "Pengabdian Masyarakat"],
      images: [
        {
          src: "/img/soshumkunanti.jpg",
          caption: "Dokumentasi Kunjungan dan Pengabdian ke Panti Asuhan",
          position: "object-center",
        },
        {
          src: "/img/soshumberbaginasi.jpg",
          caption: "Dokumentasi Kegiatan Sosial Berbagi Makanan kepada Masyarakat",
          position: "object-center",
        },
      ],
    },
    {
      id: "O2",
      name: "MYTHIC 1.0",
      role: "Divisi Perlengkapan",
      location: "Madiun, Jawa Timur",
      period: "Sep 2024",
      description: (
        <>
          MYTHIC (<em>Madiun Youth IT Competition</em>) 1.0 merupakan <strong>kompetisi tingkat nasional</strong> yang diselenggarakan oleh Program Studi D3 Teknik Informatika PSDKU Universitas Sebelas Maret Madiun.
        </>
      ),
      tasks: [
        <>Melakukan pendataan dan identifikasi seluruh perlengkapan, peralatan, serta kebutuhan acara pada setiap sesi kegiatan.</>,
        <>Berkoordinasi dengan divisi lain seperti divisi acara, keamanan, dan konsumsi untuk memastikan kelancaran pelaksanaan.</>,
      ],
      tags: ["Event Organizer", "Kompetisi IT Nasional", "Logistik"],
      images: [
        {
          src: "/img/mythic1.jpg",
          caption: "Dokumentasi Kepanitiaan & Pelaksanaan Kompetisi MYTHIC 1.0",
          position: "object-center",
        },
        {
          src: "/img/mythic2.jpg",
          caption: "Koordinasi Teknis & Manajemen Perlengkapan Acara MYTHIC 1.0",
          position: "object-center",
        },
      ],
    },
    {
      id: "O3",
      name: "Farewell Party 2023",
      role: "Divisi Perlengkapan",
      location: "Madiun, Jawa Timur",
      period: "Des 2023",
      description: (
        <>
          Acara perpisahan yang diselenggarakan sebagai bentuk <strong>penghargaan atas kebersamaan</strong> yang telah terjalin, sekaligus memberikan apresiasi kepada pihak yang akan meninggalkan lingkungan tersebut.
        </>
      ),
      tasks: [
        <>Bertanggung jawab memastikan kelancaran pelaksanaan teknis acara, termasuk pengelolaan perlengkapan.</>,
        <>Koordinasi dengan tim serta penataan dan persiapan tempat kegiatan.</>,
      ],
      tags: ["Event Organizer", "Logistik", "Koordinasi Tim"],
      images: [
        {
          src: "/img/farewallparty1.jpg",
          caption: "Dokumentasi Kepanitiaan Farewell Party 2023",
          position: "object-bottom",
        },
        {
          src: "/img/farewallparty2.jpg",
          caption: "Persiapan dan Pelaksanaan Acara Farewell Party 2023",
          position: "object-bottom",
        },
      ],
    },
  ],
  en: [
    {
      id: "O1",
      name: "Student Association",
      role: "Social & Public Relations Division Staff",
      location: "Madiun, East Java",
      period: "Jan 2024 - Jan 2025",
      description: (
        <>
          The Student Association (HIMA) is a student organization at Universitas Sebelas Maret PSDKU Madiun covering three study programs: <strong>Accounting, Informatics Engineering, and Agricultural Product Technology</strong>.
        </>
      ),
      tasks: [
        <>Implemented community service programs.</>,
        <>Coordinated social activities such as orphanage visits and food-sharing events.</>,
        <>Managed community social programs and public relations.</>,
      ],
      tags: ["Social & PR", "Public Relations", "Community Service"],
      images: [
        {
          src: "/img/soshumkunanti.jpg",
          caption: "Orphanage Visit & Community Service Documentation",
          position: "object-center",
        },
        {
          src: "/img/soshumberbaginasi.jpg",
          caption: "Food-Sharing Social Activity Documentation for the Community",
          position: "object-center",
        },
      ],
    },
    {
      id: "O2",
      name: "MYTHIC 1.0",
      role: "Logistics Division",
      location: "Madiun, East Java",
      period: "Sep 2024",
      description: (
        <>
          MYTHIC (<em>Madiun Youth IT Competition</em>) 1.0 is a <strong>national-level competition</strong> organized by the D3 Informatics Engineering Program at Universitas Sebelas Maret Madiun.
        </>
      ),
      tasks: [
        <>Managed inventory and identification of all equipment and event requirements for each session.</>,
        <>Coordinated with other divisions such as events, security, and catering to ensure smooth execution.</>,
      ],
      tags: ["Event Organizer", "National IT Competition", "Logistics"],
      images: [
        {
          src: "/img/mythic1.jpg",
          caption: "MYTHIC 1.0 Competition Execution & Committee Documentation",
          position: "object-center",
        },
        {
          src: "/img/mythic2.jpg",
          caption: "Technical Coordination & Event Logistics Management for MYTHIC 1.0",
          position: "object-center",
        },
      ],
    },
    {
      id: "O3",
      name: "Farewell Party 2023",
      role: "Logistics Division",
      location: "Madiun, East Java",
      period: "Dec 2023",
      description: (
        <>
          A farewell event organized as a form of <strong>appreciation for the bonds</strong> that were built, while also honoring those who were leaving.
        </>
      ),
      tasks: [
        <>Ensured smooth technical execution of the event, including equipment management.</>,
        <>Coordinated with the team and managed venue setup and preparation.</>,
      ],
      tags: ["Event Organizer", "Logistics", "Team Coordination"],
      images: [
        {
          src: "/img/farewallparty1.jpg",
          caption: "Farewell Party 2023 Committee Documentation",
          position: "object-bottom",
        },
        {
          src: "/img/farewallparty2.jpg",
          caption: "Event Preparation & Execution of Farewell Party 2023",
          position: "object-bottom",
        },
      ],
    },
  ],
};

export default function Organizations() {
  const { t, language } = useLanguage();
  const orgs = organizationsData[language] || organizationsData.id;
  const [expandedOrg, setExpandedOrg] = useState<number | null>(null);

  const title1 =
    t("orgTitle1") !== "orgTitle1"
      ? t("orgTitle1")
      : language === "en"
      ? "Campus Involvement"
      : "Keterlibatan Kampus";

  const rawTitle2 =
    t("orgTitle2") !== "orgTitle2"
      ? t("orgTitle2")
      : language === "en"
      ? "Organizations & Committees."
      : "Organisasi & Kepanitiaan.";

  const desc =
    t("orgDesc") !== "orgDesc"
      ? t("orgDesc")
      : language === "en"
      ? "Organizational experiences that hone coordination skills, teamwork, and leadership."
      : "Pengalaman berorganisasi yang melatih kemampuan koordinasi, kerja sama tim, dan kepemimpinan.";

  const title2Parts = rawTitle2.includes(" & ")
    ? rawTitle2.split(" & ")
    : [rawTitle2, ""];

  const labelPeriod =
    t("orgPeriod") !== "orgPeriod"
      ? t("orgPeriod")
      : language === "en"
      ? "Period"
      : "Periode";

  const labelOverview =
    t("orgOverview") !== "orgOverview"
      ? t("orgOverview")
      : language === "en"
      ? "Organization Overview"
      : "Deskripsi Organisasi";

  const labelFocus =
    t("orgFocus") !== "orgFocus"
      ? t("orgFocus")
      : language === "en"
      ? "Activity Area"
      : "Bidang Kegiatan";

  const labelTasks =
    t("orgTasks") !== "orgTasks"
      ? t("orgTasks")
      : language === "en"
      ? "Responsibilities"
      : "Tanggung Jawab";

  const labelDocs =
    t("orgDocs") !== "orgDocs"
      ? t("orgDocs")
      : language === "en"
      ? "Activity Documentation"
      : "Dokumentasi Kegiatan";

  return (
    <section id="organizations" className="w-full bg-white px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-black/45 mb-4">
              {title1}
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tighter text-black"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {title2Parts[0]} & <br className="hidden md:block" /> {title2Parts[1]}
            </h2>
          </div>
          <p className="text-base md:text-lg text-justify text-black/60 max-w-sm">
            {desc}
          </p>
        </div>

        {/* Organization List */}
        <div className="flex flex-col border-t border-black/10">
          {orgs.map((org, index) => {
            const isExpanded = expandedOrg === index;

            return (
              <div
                key={org.id}
                className="group border-b border-black/10 flex flex-col"
              >
                {/* Clickable Header */}
                <button
                  onClick={() => setExpandedOrg(isExpanded ? null : index)}
                  className="w-full flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 text-left cursor-pointer transition-colors hover:bg-black/[0.02]"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                    <span className="text-sm font-medium text-black/30 w-8">
                      {org.id}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                      {org.name}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-12 ml-14 md:ml-0">
                    <span className="text-lg md:text-xl font-medium text-black">
                      {org.role}
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
                              {labelPeriod}
                            </p>
                            <p className="text-black/80 font-medium">{org.period}</p>
                            <p className="text-sm text-black/50 mt-1">{org.location}</p>
                          </div>

                          <div className="md:col-span-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              {labelOverview}
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-justify text-black/70">
                              {org.description}
                            </p>
                          </div>

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
                              {labelFocus}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {org.tags.map((tag, i) => (
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

                        {/* Tasks */}
                        <div className="border-t border-black/5 pt-10">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-4">
                            {labelTasks}
                          </p>
                          <ul className="space-y-4 mb-10">
                            {org.tasks.map((task, i) => (
                              <li key={i} className="flex items-start gap-3.5 text-black/75">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                                <span className="leading-relaxed text-[15px] md:text-[1.05rem] text-justify tracking-[-0.01em]">
                                  {task}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Documentation Photos */}
                          {org.images.length > 0 && (
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-4">
                                {labelDocs}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {org.images.map((img, i) => (
                                  <figure key={i} className="flex flex-col gap-2.5">
                                    <div className="w-full aspect-[16/10] bg-black/5 rounded-2xl overflow-hidden border border-black/10 shadow-sm group/img">
                                      <img
                                        src={img.src}
                                        alt={img.caption}
                                        className={`w-full h-full object-cover ${img.position || "object-bottom"} group-hover/img:scale-105 transition-transform duration-500`}
                                        loading="lazy"
                                      />
                                    </div>
                                    <figcaption className="text-xs md:text-sm text-center text-black/60 font-medium">
                                      {img.caption}
                                    </figcaption>
                                  </figure>
                                ))}
                              </div>
                            </div>
                          )}
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

