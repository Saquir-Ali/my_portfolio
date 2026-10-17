"use client";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Exploration from "@/sections/Exploration";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#0c1110] min-h-screen text-[#eef2ef] font-sans antialiased">
        <Hero />
        <About />
        {/* <Experience /> */}
        <TechStack />
        <Projects />
        <Exploration />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
