"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiOracle, SiNextdotjs } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 md:px-12 py-20 flex justify-center overflow-hidden font-sans">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

        {/* Card 1: The Bio (Spans 2 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:col-span-2 bg-[#131a18]/90 border border-[#23312c] rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col justify-center"
        >
          <h2 className="mb-6 text-4xl md:text-5xl font-extrabold tracking-tight text-[#eef2ef]">
            About{" "}
            <span className="font-serif italic font-normal text-[#8db1a3]">
              Me
            </span>
          </h2>
          <div className="space-y-6 text-[#93a19b] text-base md:text-lg leading-relaxed">
            <p>
              I’m Saquir Ali — a <strong className="text-[#eef2ef] font-semibold">Full Stack Developer</strong> currently pursuing a B.Tech in CSE (IoT & CS). I specialize in building responsive, scalable platforms using React, Next.js, and Node.js, merging clean frontend design with robust backend logic.
            </p>
            <p>
              My focus is on translating complex business requirements into high-performance, maintainable web applications. Whether it&apos;s architecting RESTful APIs, designing scalable database schemas, or crafting interactive UIs, I build with intention and a user-first mindset.
            </p>
          </div>
        </motion.div>

        {/* Card 2: The Interactive Snippet (Spans 1 column) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-1 bg-[#131a18]/90 border border-[#23312c] rounded-[2rem] shadow-xl overflow-hidden flex flex-col h-full"
        >
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-[#23312c] bg-[#18221f]/60 px-5 py-4 shrink-0">
            <span className="inline-block h-3 w-3 rounded-full bg-rose-500/80 shadow-sm" />
            <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" />
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80 shadow-sm" />
            <span className="ml-3 text-sm text-[#93a19b] font-mono tracking-wide">profile.ts</span>
          </div>

          {/* code body */}
          <div className="relative flex-1 overflow-x-auto overflow-y-hidden p-6 flex items-center">
            <pre className="relative z-10 text-[13px] md:text-[14px] leading-relaxed font-mono w-full">
              {String.raw`const `}
              <span className="text-[#eef2ef]">coder</span> {`= {`}
              {"\n  "}
              <span className="text-[#8db1a3]">name</span>: <span className="text-[#dce3df]">{`'Saquir Ali'`}</span>,{"\n  "}
              <span className="text-[#8db1a3]">skills</span>: [
              {"\n    "}<span className="text-[#dce3df]">{`'React'`}</span>,
              {"\n    "}<span className="text-[#dce3df]">{`'Next.js'`}</span>,
              {"\n    "}<span className="text-[#dce3df]">{`'Node.js'`}</span>,
              {"\n    "}<span className="text-[#dce3df]">{`'Express.js'`}</span>,
              {"\n    "}<span className="text-[#dce3df]">{`'JavaScript'`}</span>,
              {"\n    "}<span className="text-[#dce3df]">{`'TypeScript'`}</span>,
              {"\n    "}<span className="text-[#dce3df]">{`'SQL'`}</span>
              {"\n  "}],
              {"\n  "}
              <span className="text-[#8db1a3]">hireable</span>: <span className="text-emerald-400">true</span>
              {"\n"}
              {`};`}
            </pre>
          </div>
        </motion.div>

        {/* Card 3: Tech Stack (Spans 3 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="md:col-span-3 bg-[#131a18]/90 border border-[#23312c] rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-[#eef2ef] font-bold text-xl md:text-2xl tracking-tight mb-2">My Tech Stack</h3>
            <p className="text-[#93a19b] text-sm md:text-base">Core technologies I use to bring products to life.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-4xl md:text-5xl text-[#93a19b]">
            <div className="group relative flex justify-center">
              <FaReact className="hover:text-[#61DAFB] hover:scale-110 transition-all duration-300 cursor-pointer" />
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs text-[#61DAFB] transition-opacity font-medium">React</span>
            </div>
            <div className="group relative flex justify-center">
              <SiNextdotjs className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" />
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs text-white transition-opacity font-medium">Next.js</span>
            </div>
            <div className="group relative flex justify-center">
              <FaNodeJs className="hover:text-[#339933] hover:scale-110 transition-all duration-300 cursor-pointer" />
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs text-[#339933] transition-opacity font-medium">Node.js</span>
            </div>
            <div className="group relative flex justify-center">
              <SiTailwindcss className="hover:text-[#38B2AC] hover:scale-110 transition-all duration-300 cursor-pointer" />
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs text-[#38B2AC] transition-opacity font-medium">Tailwind</span>
            </div>
            <div className="group relative flex justify-center">
              <SiOracle className="hover:text-[#F80000] hover:scale-110 transition-all duration-300 cursor-pointer" />
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs text-[#F80000] transition-opacity font-medium">Oracle SQL</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
