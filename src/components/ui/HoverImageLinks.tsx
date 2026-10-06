import React, { useRef } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export const HoverImageLinks = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#151515] p-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Link
          heading="About"
          subheading={t("hoverAbout")}
          imgSrc="/img/profile.jpeg"
          href="#about"
        />
        <Link
          heading="Experience"
          subheading={t("hoverExperience")}
          imgSrc={["/img/Dokumentasi.jpeg", "/img/dokumentasi2.png"]}
          href="#experience"
        />
        <Link
          heading="Projects"
          subheading={t("hoverProjects")}
          imgSrc={["/img/growsafe mockup.png", "/img/rintisku1.png"]}
          href="#projects"
        />
        <Link
          heading="Certificates"
          subheading={t("hoverCertificates")}
          imgSrc="/img/sertif.png"
          href="#certificates"
        />
        <Link
          heading="Contact"
          subheading={t("hoverContact")}
          imgSrc="/img/contact.jpg"
          href="#contact"
        />
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  subheading: string;
  imgSrc: string | string[];
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["30%", "70%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["50%", "80%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-white/10 py-6 md:py-10 transition-colors duration-500 hover:border-white/40"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-white/30 transition-colors duration-500 group-hover:text-white md:text-6xl"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base md:text-lg text-white/40 transition-colors duration-500 group-hover:text-white/80">
          {subheading}
        </span>
      </div>

      {Array.isArray(imgSrc) ? (
        imgSrc.map((src, index) => {
          const isLast = index === imgSrc.length - 1;
          const rotationAngle = isLast ? "12.5deg" : "-5deg";
          const initialRotation = isLast ? "-12.5deg" : "-20deg";
          const xOffset = isLast ? "0%" : "-15%";
          const yOffset = isLast ? "0%" : "10%";
          
          return (
            <motion.img
              key={index}
              style={{
                top,
                left,
                translateX: "-50%",
                translateY: "-50%",
                zIndex: index,
              }}
              variants={{
                initial: { scale: 0, rotate: initialRotation, x: 0, y: 0 },
                whileHover: { scale: 1, rotate: rotationAngle, x: xOffset, y: yOffset },
              }}
              transition={{ type: "spring", delay: isLast ? 0.04 : 0 }}
              src={src}
              className={`absolute h-32 w-40 rounded-2xl object-cover md:h-56 md:w-72 shadow-2xl ${
                !isLast ? 'border-4 border-[#151515] opacity-80' : 'border-4 border-[#151515]'
              }`}
              alt={`Image ${index + 1} representing a link for ${heading}`}
            />
          );
        })
      ) : (
        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-0 h-32 w-40 rounded-2xl object-cover md:h-56 md:w-72 shadow-2xl"
          alt={`Image representing a link for ${heading}`}
        />
      )}

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </motion.div>
    </motion.a>
  );
};
