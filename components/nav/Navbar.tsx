"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "GitHub", href: "https://github.com/BryanEspana", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 3rem",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        background: scrolled ? "rgba(0,0,0,0.75)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
    >
      <a href="/" style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", color: "#fff", textTransform: "uppercase", textDecoration: "none" }}>
        Bryan España
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            style={{ fontSize: "0.85rem", fontWeight: 300, letterSpacing: "0.05em", color: "#8a8a8e", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8a8a8e")}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
