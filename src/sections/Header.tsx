"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [shrunk, setShrunk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#exploration" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 md:mt-6 px-4 transition-all duration-300">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex items-center justify-between px-6 py-3 transition-all duration-500 ease-in-out
          ${
            shrunk
              ? "w-full max-w-4xl bg-[#131a18]/80 backdrop-blur-xl border border-[#23312c] rounded-full shadow-2xl"
              : "w-full max-w-6xl bg-transparent border border-transparent rounded-full"
          }`}
      >
        {/* Logo - Left */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-[#eef2ef] hover:text-[#7fa495] transition-colors"
        >
          Saquir<span className="text-[#7fa495]">.</span>
        </Link>

        {/* Center Navigation Links - Desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-8 items-center bg-[#131a18]/70 px-6 py-2 rounded-full border border-[#23312c] shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#93a19b] hover:text-[#eef2ef] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7fa495] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/Saquir-Ali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#93a19b] hover:text-[#eef2ef] hover:scale-105 transition-all"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/saquir-ali-909158257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#93a19b] hover:text-[#7fa495] hover:scale-105 transition-all"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://drive.google.com/file/d/1ZCWuFuOXDnW0ZoZ2192KGnkLQ5eV50IN/view?usp=sharing"
            target="_blank"
            className="ml-2 bg-[#7fa495] hover:bg-[#8db1a3] text-[#0c1110] px-5 py-2 rounded-full text-sm font-semibold shadow-[0_4px_16px_rgba(127,164,149,0.2)] hover:shadow-[0_4px_22px_rgba(127,164,149,0.35)] transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#eef2ef] p-2 hover:bg-[#18221f] rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-4 right-4 bg-[#131a18]/95 backdrop-blur-2xl border border-[#23312c] rounded-3xl p-6 flex flex-col gap-6 md:hidden shadow-2xl origin-top"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#93a19b] hover:text-[#7fa495] transition-colors p-2 rounded-xl hover:bg-[#18221f]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-px w-full bg-[#23312c]" />
            <div className="flex justify-center gap-8">
              <a href="https://github.com/Saquir-Ali" target="_blank" rel="noopener noreferrer" className="text-[#93a19b] hover:text-[#eef2ef] text-3xl transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/saquir-ali-909158257/" target="_blank" rel="noopener noreferrer" className="text-[#93a19b] hover:text-[#7fa495] text-3xl transition-colors">
                <FaLinkedin />
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1ZCWuFuOXDnW0ZoZ2192KGnkLQ5eV50IN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#7fa495] hover:bg-[#8db1a3] text-[#0c1110] px-6 py-4 rounded-xl font-semibold transition-all shadow-[0_4px_16px_rgba(127,164,149,0.2)]"
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
