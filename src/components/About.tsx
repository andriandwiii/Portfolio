import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techStack } from "../data/portfolio";
import { ScrollBasedVelocity } from "./ui/ScrollBasedVelocity";
import { useLanguage } from "../context/LanguageContext";

const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "2", label: "Industry Internships" },
  { value: "1+", label: "Years Experience" },
  { value: "∞", label: "Cups of Coffee" },
];

const categoryAccent: Record<string, string> = {
  "Programming & Frameworks": "bg-cyan-50 border-brand/20 text-brand",
  "Database & Tools": "bg-fuchsia-50 border-fuchsia-100 text-fuchsia-700",
  "Soft Skills & Others": "bg-violet-50 border-violet-100 text-violet-700",
};

const categoryDot: Record<string, string> = {
  "Programming & Frameworks": "bg-brand",
  "Database & Tools": "bg-fuchsia-500",
  "Soft Skills & Others": "bg-violet-500",
};

// Typed cubic-bezier ease
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function TiltPhotoCard() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-black/5 shadow-2xl bg-black/5 group w-full"
    >
      <img
        src="/img/profile.jpeg"
        alt="Andrian Dwi Saputra"
        className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
        draggable={false}
      />
      {/* Inner glass overlay for premium feel */}
      <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
    </motion.div>
  );
}

export default function About() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  // Helper: generate motion props with staggered delay
  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: EASE },
  });

  return (
    <section
      id="about"
      ref={ref}
      className="w-full bg-white py-24 md:py-36 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col gap-12 lg:gap-16 mb-24">
          {/* Label & Headline Full Width */}
          <div className="w-full">
            <motion.p
              {...fade(0.1)}
              className="text-xs font-semibold uppercase tracking-[0.32em] text-black/38 mb-6"
            >
              {t("aboutMe")}
            </motion.p>
            <motion.h2
              {...fade(0.15)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-black leading-[1.1] max-w-5xl"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t("aboutTitle")}
            </motion.h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Photo Card */}
            <motion.div
              {...fade(0.2)}
              className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-none mx-auto lg:mx-0 lg:w-[30%] flex-shrink-0 perspective-[1200px]"
            >
              <TiltPhotoCard />
            </motion.div>

            {/* Text Content */}
            <motion.div
              {...fade(0.25)}
              className="w-full lg:w-[70%] flex flex-col gap-6 max-w-[650px]"
            >
              <p className="text-base md:text-[17px] leading-[1.6] md:leading-[1.7] text-justify text-black/70">
                {t("aboutP1")}
              </p>
              <p className="text-base md:text-[17px] leading-[1.6] md:leading-[1.7] text-justify text-black/70">
                {t("aboutP2")}
              </p>
              <p className="text-base md:text-[17px] leading-[1.6] md:leading-[1.7] text-justify text-black/70">
                {t("aboutP3")}
              </p>
              {t("aboutP4") && (
                <p className="text-base md:text-[17px] leading-[1.6] md:leading-[1.7] text-justify text-black/70">
                  {t("aboutP4")}
                </p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          {...fade(0.21)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="border border-black/7 rounded-2xl p-6 hover:border-black/15 transition-colors"
            >
              <p
                className="text-4xl font-bold tracking-[-0.03em] mb-1.5 text-black"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {s.value}
              </p>
              <p className="text-sm text-black/45">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div {...fade(0.28)} className="w-full border-t border-black/10 pt-16 mb-8" />

        {/* Tech Stack label */}
        <motion.p
          {...fade(0.32)}
          className="text-xs font-semibold uppercase tracking-[0.32em] text-black/38 mb-8"
        >
          {t("techStack")}
        </motion.p>

        {/* Tech stack grid */}
        <motion.div {...fade(0.38)} className="grid sm:grid-cols-3 gap-5">
          {Object.entries(techStack).map(([category, tools]) => (
            <div
              key={category}
              className="bg-black/[0.018] border border-black/6 rounded-2xl p-6 hover:border-black/12 transition-colors"
            >
              <div className="flex items-center gap-2 mb-5">
                <span
                  className={`w-2 h-2 rounded-full ${categoryDot[category]}`}
                />
                <p className="text-xs uppercase tracking-[0.22em] text-black/45 font-semibold">
                  {category}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className={`px-4 py-2 rounded-lg text-[13px] font-medium border hover:-translate-y-1 transition-transform cursor-default ${categoryAccent[category]}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Based Velocity Marquee */}
      <motion.div
        {...fade(0.44)}
        className="-mx-6 md:-mx-12 lg:-mx-24 mt-24 md:mt-36 overflow-hidden border-y border-black/5 bg-black/[0.02]"
      >
        <ScrollBasedVelocity
          text="Fullstack Developer - Web Development - Mobile Development - Backend Development -"
          default_velocity={1.5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]"
        />
        <ScrollBasedVelocity
          text="Fullstack Developer - Web Development - Mobile Development - Backend Development -"
          default_velocity={-1.5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]"
        />
      </motion.div>
    </section>
  );
}
