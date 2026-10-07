import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Halo } from "./ui/Halo";
import { useLanguage } from "../context/LanguageContext";

const MEDIA_SRC_DESKTOP = "/img/bg2A.png";
const MEDIA_SRC_MOBILE = "/img/bg2AMobile.png";

interface HeroProps {
  onExpanded: () => void;
}

export default function Hero({ onExpanded }: HeroProps) {
  const { t } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const [progress, setProgressState] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const progressRef = useRef(0);
  const expandedFiredRef = useRef(false);

  const setProgress = useCallback(
    (val: number) => {
      const clamped = Math.max(0, Math.min(1, val));
      progressRef.current = clamped;
      setProgressState(clamped);

      if (clamped >= 1 && !expandedFiredRef.current) {
        expandedFiredRef.current = true;
        onExpanded();
      }
      if (clamped < 1) {
        expandedFiredRef.current = false;
      }
    },
    [onExpanded]
  );

  // Viewport size
  useEffect(() => {
    const update = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Wheel + touch scroll handlers
  useEffect(() => {
    let startY = 0;

    const handleWheel = (e: WheelEvent) => {
      const p = progressRef.current;
      if (p < 1 || (p === 1 && e.deltaY < 0 && window.scrollY <= 0)) {
        e.preventDefault();
        setProgress(p + e.deltaY * 0.0009);
        if (p < 1) window.scrollTo(0, 0);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      const p = progressRef.current;
      if (p < 1 || (p === 1 && deltaY < -20 && window.scrollY <= 0)) {
        e.preventDefault();
        const mult = deltaY > 0 ? 0.005 : 0.008;
        setProgress(p + deltaY * mult);
        startY = currentY;
        if (p < 1) window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [setProgress]);

  // Body overflow lock
  useEffect(() => {
    document.body.style.overflow = progress >= 1 ? "auto" : "hidden";
    document.body.style.overscrollBehavior = progress >= 1 ? "auto" : "none";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overscrollBehavior = "auto";
    };
  }, [progress]);

  // Derived values
  const isMobile = windowSize.width < 768;
  const mediaWidth = 300 + progress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + progress * (isMobile ? 200 : 400);
  const displayedH = Math.min(mediaHeight, windowSize.height * 0.85);
  const indicatorTop = windowSize.height / 2 + displayedH / 2 + 34;
  const bgScale = 1 + progress * 0.05;
  const mediaOverlay = 0.5 - progress * 0.28;
  const titleX = progress * (isMobile ? 180 : 150);
  const mediaOpacity = Math.min(1, progress * 2.5); // Fades in quickly as you scroll
  const mediaScale = 0.8 + progress * 0.2; // Scales up from 0.8 to 1.0

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        height: "100dvh",
        background: "radial-gradient(130% 90% at 50% 8%, #082f49 0%, #042f2e 48%, #020617 80%, #020617 100%)"
      }}
    >
      {/* Background Texture & Gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] md:w-full h-full z-0 pointer-events-none">
        <motion.div
          className="w-full h-full"
          animate={{ scale: bgScale }}
          transition={{ duration: 0.1, ease: "linear" }}
        >
          <Halo variant="bottom" className="w-full h-full" />
        </motion.div>
      </div>

      {/* White overlay fades in as progress increases */}
      <motion.div
        className="absolute inset-0 z-0 bg-white pointer-events-none"
        animate={{ opacity: progress }}
        transition={{ duration: 0.1, ease: "linear" }}
      />

      {/* Expanding media card */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none will-change-transform"
        style={{
          opacity: mediaOpacity,
          transform: `translate(-50%, -50%) scale(${mediaScale})`
        }}
      >
        <div
          className="relative rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
          style={{
            width: mediaWidth,
            height: mediaHeight,
            maxWidth: "95vw",
            maxHeight: "85vh",
          }}
        >
          <picture className="w-full h-full block">
            <source media="(min-width: 768px)" srcSet={MEDIA_SRC_DESKTOP} />
            <img
              src={MEDIA_SRC_MOBILE}
              alt="Portfolio hero"
              className="w-full h-full object-cover object-top block bg-black"
              draggable={false}
            />
          </picture>

          {/* Image overlay */}
          <motion.div
            className="absolute inset-0 bg-black pointer-events-none"
            animate={{ opacity: mediaOverlay }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>

      {/* Split giant text */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col items-center justify-center gap-2 px-4">
        <motion.div
          style={{ x: `-${titleX}vw`, fontFamily: "'Outfit', sans-serif" }}
          className="will-change-transform flex justify-center w-full relative h-[clamp(3.2rem,13vw,14rem)] md:h-[clamp(4rem,10vw,14rem)]"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex === 0 ? "ANDRIAN" : t("heroRole")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute font-bold text-[clamp(3.2rem,13vw,14rem)] md:text-[clamp(4rem,10vw,14rem)] leading-[0.8] tracking-[-0.04em] text-center uppercase whitespace-nowrap"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)", color: "transparent" }}
            >
              {wordIndex === 0 ? "ANDRIAN" : t("heroRole")}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        <motion.div
          style={{ x: `${titleX}vw`, fontFamily: "'Outfit', sans-serif" }}
          className="will-change-transform flex justify-center w-full relative h-[clamp(3.2rem,13vw,14rem)] md:h-[clamp(4rem,10vw,14rem)]"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex === 0 ? "DWI SAPUTRA" : t("heroDesc")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
              className="absolute font-bold text-[clamp(3.2rem,13vw,14rem)] md:text-[clamp(4rem,10vw,14rem)] leading-[0.8] tracking-[-0.04em] text-center uppercase whitespace-nowrap"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)", color: "transparent" }}
            >
              {wordIndex === 0 ? "DWI SAPUTRA" : t("heroDesc")}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Minimalist scroll indicator */}
      <div
        style={{ top: indicatorTop }}
        className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      >
        <motion.div
          animate={{
            opacity: progress > 0.16 ? 0 : 1,
            y: progress > 0.16 ? 12 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex flex-col items-center gap-3 text-brand"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em]">
            {t("scroll")}
          </span>

          <div className="w-7 h-11 rounded-full border border-brand/50 p-1.5 flex justify-center">
            <motion.div
              animate={{
                y: [0, 20, 0],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-brand"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}