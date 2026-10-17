"use client";
import { FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative max-w-6xl mx-auto py-32 px-4 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 z-0 flex justify-center pointer-events-none overflow-hidden">
        <div className="w-[32rem] h-[32rem] bg-[#7fa495]/[0.05] rounded-full blur-[140px] -bottom-10" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-[#7fa495]/60"></div>
          <span className="text-xs font-semibold tracking-[0.2em] text-[#7fa495] uppercase">Get in touch</span>
          <div className="w-8 h-px bg-[#7fa495]/60"></div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-[#eef2ef] mb-8 tracking-tight">
          Got a project <span className="font-serif italic font-normal text-[#8db1a3]">in mind?</span>
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl text-base md:text-lg text-[#93a19b] leading-relaxed mb-12">
          I&apos;m currently available for new projects. Whether you need a backend
          built from scratch, a full product shipped, or an existing codebase
          rescued — DM me on X or drop a message below.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://x.com/Saquir_ali"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#7fa495] hover:bg-[#8db1a3] text-[#0c1110] px-8 py-4 rounded-full font-semibold text-xs md:text-sm tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(127,164,149,0.25)] hover:-translate-y-0.5"
          >
            DM ME ON X <FaArrowRight />
          </a>
          <a
            href="mailto:shakirali9581@gmail.com"
            className="flex items-center justify-center gap-2 bg-[#131a18] hover:bg-[#18221f] border border-[#23312c] hover:border-[#7fa495]/40 text-[#eef2ef] px-8 py-4 rounded-full font-semibold text-xs md:text-sm tracking-wider uppercase transition-all hover:-translate-y-0.5"
          >
            SEND A MESSAGE
          </a>
        </div>
      </div>
    </section>
  );
}
