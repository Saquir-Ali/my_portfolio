"use client";
import { motion, Variants } from "framer-motion";
import {
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaPlug,
  FaPalette,
  FaBrain,
} from "react-icons/fa";

const skills = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern web applications using React, Next.js, and Tailwind CSS, focusing on smooth UX and clean UI architecture.",
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
  },
  {
    title: "Backend Development",
    description: "Creating robust backend systems and REST APIs using Node.js and Express, emphasizing scalability, auth, and real-time data.",
    icon: <FaServer className="text-emerald-400 text-3xl" />,
  },
  {
    title: "Database Management",
    description: "Designing efficient database structures with SQL/MySQL and MongoDB to manage dynamic application data effectively.",
    icon: <FaDatabase className="text-[#7fa495] text-3xl" />,
  },
  {
    title: "API & Third-Party Integrations",
    description: "Integrating powerful services like TMDB, Razorpay, Appwrite, and GitHub APIs to build feature-rich applications.",
    icon: <FaPlug className="text-purple-400 text-3xl" />,
  },
  {
    title: "UI/UX & Animations",
    description: "Designing visually engaging interfaces with Tailwind CSS and Framer Motion, ensuring responsive and interactive experiences.",
    icon: <FaPalette className="text-pink-400 text-3xl" />,
  },
  {
    title: "Problem Solving & DSA",
    description: "Solving Data Structures & Algorithms problems on platforms like LeetCode, with a strong interest in optimized coding solutions.",
    icon: <FaBrain className="text-amber-400 text-3xl" />,
  },
];

const container: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Exploration() {
  return (
    <section id="exploration" className="relative mx-auto max-w-6xl px-4 py-20">
      {/* soft radial vignette behind section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 320px at 50% 0%, rgba(127,164,149,0.06), transparent 70%)",
        }}
      />

      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#eef2ef]">
          Things I <span className="font-serif italic font-normal text-[#8db1a3]">Love</span>
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-[#7fa495]" />
      </div>

      {/* cards container */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {skills.map(({ title, description, icon }) => (
          <motion.div key={title} variants={item} className="h-full">
            <Card title={title} description={description} icon={icon} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Card({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="
      group relative overflow-hidden rounded-2xl
      border border-[#23312c] bg-[#131a18]/85 backdrop-blur-sm
      px-6 py-7
      shadow-sm
      transition-all duration-300
      hover:border-[#7fa495]/40 hover:bg-[#18221f] hover:-translate-y-1
      h-full flex flex-col
      "
    >
      {/* content */}
      <div className="relative z-10 flex flex-col items-center text-center h-full">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0c1110] border border-[#23312c] shadow-inner">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#eef2ef]">{title}</h3>
        <p className="text-sm text-[#93a19b] leading-relaxed flex-1">{description}</p>

        {/* bottom accent line */}
        <div className="mt-auto w-full flex justify-center pt-5">
          <div className="h-px w-8 rounded bg-[#7fa495]/40 group-hover:w-14 group-hover:bg-[#7fa495] transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}
