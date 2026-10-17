"use client";
import {
  SiPython,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiAwsamplify,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { label } from "framer-motion/client";

type Item = {
  name: string;
  label?: string;
  icon: JSX.Element;
};

const stack: Item[] = [
  { name: "Java", icon: <FaJava className="text-[#E76F00] text-3xl" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB] text-3xl" /> },
  { name: "SQL", icon: <SiMysql className="text-[#00618A] text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#10A44C] text-3xl" /> },

  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-3xl" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#6DB33F] text-3xl" />,
  },
  {
    name: "React",
    icon: <SiReact className="text-[#61DAFB] text-3xl" />,
  },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },

  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E] text-3xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6] text-3xl" />,
  },
  { name: "AWS", icon: <SiAwsamplify className="text-[#FF9900] text-3xl" /> },
  { name: "Vercel", icon: <SiVercel className="text-white text-3xl" /> },
];

export default function TechStack() {
  return (
    <section id="techstack" className="relative mx-auto max-w-6xl px-4 py-20">
      {/* soft radial vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 10%, rgba(127,164,149,0.06), transparent 60%)",
        }}
      />

      <div className="text-center mb-2 text-xs font-semibold tracking-wider uppercase text-[#7fa495]">
        My Tech Stack
      </div>
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#eef2ef]">
        Technologies I Worked On
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-[#7fa495]" />

      {/* grid cards */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {stack.map(({ name, icon }) => (
          <div
            key={name}
            className="group relative rounded-2xl border border-[#23312c] bg-[#131a18]/80 px-5 py-6 text-center
                       backdrop-blur-sm transition-all duration-300
                       hover:border-[#7fa495]/40 hover:bg-[#18221f] hover:-translate-y-1 shadow-sm"
          >
            {/* icon container */}
            <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0c1110] border border-[#23312c] shadow-inner">
              {icon}
            </div>
            <div className="mt-3 text-sm md:text-base font-medium text-[#eef2ef]">
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
