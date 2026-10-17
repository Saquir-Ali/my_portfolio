"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const flipVariants = {
  hidden: { rotateX: 90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
  exit: { rotateX: -90, opacity: 0 },
};

const WORDS = [
  "Software Engineer",
  "Full Stack Developer",
  "Frontend Specialist",
  "Problem Solver",
];

export default function Hero() {
  const [flipTag, setFlipTag] = useState(false);

  // Typing state
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === WORDS[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % WORDS.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 100,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const t = setInterval(() => setFlipTag((p) => !p), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0c1110] text-[#eef2ef] px-6 pt-32 pb-20 overflow-hidden">
      {/* Organic Pine & Sage Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 left-1/3 w-[36rem] md:w-[48rem] h-[36rem] md:h-[48rem] bg-[#7fa495]/[0.07] rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] md:w-[38rem] h-[28rem] md:h-[38rem] bg-[#5e8876]/[0.05] rounded-full blur-[130px] mix-blend-screen" />
      </div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center z-10 relative gap-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={flipTag ? "seeking" : "freelance"}
            variants={flipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full bg-[#131a18]/90 border border-[#23312c] px-4 py-1.5 text-[#8db1a3] text-xs md:text-sm font-medium shadow-sm backdrop-blur-md"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {flipTag ? "Seeking opportunities" : "Available for freelance"}
          </motion.div>
        </AnimatePresence>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-extrabold leading-tight text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#eef2ef]"
        >
          Hi, I&apos;m Saquir
        </motion.h1>

        <div className="h-[48px] md:h-[72px] lg:h-[80px]">
          <h2 className="font-serif italic text-[#7fa495] leading-tight text-[32px] md:text-[56px] lg:text-[64px] flex items-center justify-center">
            <span>{WORDS[index].substring(0, subIndex)}</span>
            <span
              className={`${
                blink ? "opacity-100" : "opacity-0"
              } transition-opacity ml-1 text-[#8db1a3] not-italic`}
            >
              |
            </span>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-2xl text-base md:text-xl text-[#93a19b] font-normal leading-relaxed"
        >
          Passionate about creating impactful digital experiences, solving
          real-world problems, and continuously learning new technologies to
          grow as a developer.
        </motion.p>

        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href="https://drive.google.com/file/d/1ZCWuFuOXDnW0ZoZ2192KGnkLQ5eV50IN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-[#7fa495] hover:bg-[#8db1a3] px-8 py-4 font-semibold text-[#0c1110] shadow-[0_8px_25px_rgba(127,164,149,0.22)] transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#7fa495]/30"
            aria-label="Download Resume"
          >
            Resume
            <FaDownload className="text-sm transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href="#projects"
            className="rounded-full border border-[#23312c] bg-[#131a18]/80 hover:bg-[#18221f] hover:border-[#7fa495]/50 px-8 py-4 font-semibold text-[#eef2ef] transition-all hover:-translate-y-0.5 shadow-sm"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
