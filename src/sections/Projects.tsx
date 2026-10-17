"use client";
import Image from "next/image";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  video: string; // public path or external link
  link: string;
  repo?: string;
};

const featureds: Project[] = [
  {
    title: "NextLayer",
    subtitle: "Portfolio Generator Platform",
    description:
      "NextLayer is a web-based portfolio generator platform that enables users to instantly create and publish personalized portfolio websites with real-time template selection and content customization. I co-developed the project, leading frontend development with ReactJS and Tailwind CSS, ensuring responsive, modular, and visually engaging templates.",
    tags: [
      "ReactJS",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    video: "/videos/nextlayer-demo.mp4",
    link: "https://nextlayertech.in/",
    repo: "https://github.com/Saquir-Ali/nextlayer",
  },
  {
    title: "CodeMate",
    subtitle: "Video Calling Interview Platform",
    description:
      "CodeMate is a real-time video calling platform designed for coding interviews, featuring integrated video calls, screen sharing, and recording to enhance remote assessments. Built with Next.js and TypeScript, it leverages Stream and Convex for robust real-time messaging and video streaming, enabling interviewers to manage and review sessions effectively.",
    tags: [
      "Next.js",
      "TypeScript",
      "Stream",
      "Convex",
      "Clerk",
      "Tailwind CSS",
      "Shadcn",
    ],
    video: "https://youtu.be/xEnnRNH_lyw?si=XP732lY_b_p-D1Bz",
    link: "https://code-mate-liard.vercel.app/",
    repo: "https://github.com/Saquir-Ali/codemate",
  },
  {
    title: "TrendScreen",
    subtitle: "Movie Discovery Platform",
    description:
      "TrendScreen is a ReactJS-based movie discovery app featuring real-time trending movie recommendations based on user searches. It integrates the TMDB API for fetching movie data, includes a powerful search functionality, and leverages Tailwind CSS for an optimized UI. The app also features responsive design and robust fallback handling for missing data, ensuring a smooth experience across devices and network conditions.",
    tags: ["ReactJS", "JavaScript", "Tailwind CSS", "Appwrite", "TMDB API"],
    video: "/videos/trendscreen-demo.mp4", // replace with actual demo video or screen recording if available
    link: "https://your-live-demo-link-for-trendscreen.com", // replace with deployed link if hosted
    repo: "https://github.com/Saquir-Ali/trendscreen",
  },
  {
    title: "Nike Landing Page",
    subtitle: "Modern E-Commerce Landing UI",
    description:
      "Nike Landing Page is a sleek, responsive e-commerce landing page built with React and Tailwind CSS. It showcases Nike products with a clean UI, smooth animations, and a mobile-first design approach. The project emphasizes modern web aesthetics, optimized layout, and user-friendly navigation to deliver a professional brand-style shopping experience.",
    tags: ["ReactJS", "JavaScript", "Tailwind CSS", "Framer Motion", "UI/UX"],
    video: "/videos/nike-landing-demo.mp4", // replace with your screen recording if available
    link: "https://nike-landing-page-eosin.vercel.app",
    repo: "https://github.com/Saquir-Ali/nike-landing-page",
  },
  {
    title: "To-Do App",
    subtitle: "Productivity Task Manager",
    description:
      "A clean, intuitive To-Do app designed to help users track and manage daily tasks effectively. It includes features such as task creation, editing, deletion, and marking tasks as complete. Built with React and styled with Tailwind CSS, it ensures responsive design and a seamless user experience across devices.",
    tags: ["ReactJS", "JavaScript", "Tailwind CSS", "UI/UX", "Web App"],
    video: "/videos/todoapp-demo.mp4", // replace with your demo screen recording if available
    link: "https://to-do-ten-roan.vercel.app/",
    repo: "https://github.com/Saquir-Ali/todo-app", // adjust if your actual repo name is different
  },
  // add more...
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      {/* Heading */}
      <div className="mb-12 text-center">
        <div className="mb-2 text-xs font-semibold tracking-wider uppercase text-[#7fa495]">
          Featured Projects
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#eef2ef]">
          My Recent Work
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-14 rounded-full bg-[#7fa495]" />
      </div>

      <div className="space-y-20">
        {featureds.map((p, idx) => (
          <ProjectRow key={p.title} p={p} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ p, reverse }: { p: Project; reverse?: boolean }) {
  // Map project titles to custom CTA labels
  const buttonLabels: Record<string, string> = {
    NextLayer: "Generate Portfolio",
    CodeMate: "Try Demo",
  };

  const buttonText = buttonLabels[p.title] || "View Project";

  return (
    <div
      className={`relative grid grid-cols-1 gap-10 md:grid-cols-12 ${
        reverse
          ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
          : ""
      }`}
    >
      {/* Left/Right: Details card */}
      <div className="relative md:col-span-6">
        {/* pine ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2 rounded-3xl"
          style={{
            background:
              "radial-gradient(500px 220px at 10% 10%, rgba(127,164,149,0.08), transparent 65%)",
            filter: "blur(6px)",
          }}
        />
        <div className="relative rounded-3xl border border-[#23312c] bg-[#131a18]/90 p-8 shadow-xl">
          {p.subtitle && (
            <div className="mb-2 text-sm font-medium text-[#8db1a3]">
              {p.subtitle}
            </div>
          )}
          <h3 className="mb-3 text-3xl md:text-4xl font-extrabold text-[#eef2ef]">{p.title}</h3>
          <p className="mb-5 text-base leading-7 text-[#93a19b]">
            {p.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#18221f] border border-[#23312c] px-3 py-1 text-xs font-medium text-[#8db1a3]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#18221f] border border-[#23312c] px-4 py-2 font-medium text-[#eef2ef] transition hover:bg-[#202b27]"
              >
                GitHub
              </a>
            )}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#7fa495] hover:bg-[#8db1a3] px-4 py-2 font-semibold text-[#0c1110] shadow-[0_4px_16px_rgba(127,164,149,0.2)] transition-all"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Connector curve (SVG) */}
      <ConnectorCurve reverse={!!reverse} />

      {/* Right/Left: Video window */}
      <div className="md:col-span-6 flex items-center justify-center">
        <div className="w-full max-w-2xl rounded-3xl border border-[#23312c] bg-[#131a18]/80 shadow-xl">
          <div className="flex items-center gap-2 rounded-t-3xl border-b border-[#23312c] bg-[#18221f]/70 px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <div className="ml-3 text-xs text-[#93a19b]">demo.mp4</div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-b-3xl">
            <video
              className="h-full w-full object-cover"
              src={p.video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// SVG connector curve
function ConnectorCurve({ reverse }: { reverse: boolean }) {
  return (
    <svg
      className={`pointer-events-none absolute hidden md:block ${
        reverse ? "right-[46%]" : "left-[46%]"
      } top-1/2 -translate-y-1/2 h-[220px] w-[220px]`}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d={
          reverse
            ? "M 200 20 C 120 80, 120 140, 200 200"
            : "M 20 20 C 100 80, 100 140, 20 200"
        }
        stroke="rgba(127,164,149,0.35)"
        strokeWidth="2"
        fill="transparent"
        filter="url(#glow)"
      />
    </svg>
  );
}
