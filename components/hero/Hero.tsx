"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

const LINES = ["Web & Mobile", "Developer."];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-badge", { opacity: 0, y: 12, duration: 0.6 })
          .from(".hero-line", { yPercent: 110, duration: 0.9, stagger: 0.12 }, "-=0.2")
          .from(".hero-sub", { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 }, "-=0.4")
          .from(".hero-btn", { opacity: 0, y: 12, duration: 0.5, stagger: 0.1 }, "-=0.3")
          .from(".hero-scroll", { opacity: 0, duration: 0.6 }, "-=0.2");
        return () => tl.kill();
      });
      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <>
      <section
        ref={containerRef}
        style={{
          position: "relative", display: "flex", flexDirection: "column",
          justifyContent: "center", minHeight: "100vh",
          paddingTop: "7rem", paddingBottom: "5rem",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10rem", left: "-10rem", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(255,255,255,0.015)", filter: "blur(80px)" }} />
        </div>

        <div className="hero-container" style={{ maxWidth: "1152px", margin: "0 auto", width: "100%", paddingLeft: "3rem", paddingRight: "3rem" }}>

          {/* Badge */}
          <div className="hero-badge" style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "2.5rem" }}>
            <span style={{ position: "relative", display: "flex", width: "8px", height: "8px" }}>
              <span className="animate-ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#34d399", opacity: 0.75 }} />
              <span style={{ position: "relative", display: "flex", width: "8px", height: "8px", borderRadius: "50%", background: "#34d399" }} />
            </span>
            <span style={{ fontSize: "0.7rem", fontWeight: 300, letterSpacing: "0.25em", color: "#8a8a8e", textTransform: "uppercase" }}>
              Available for work
            </span>
          </div>

          {/* Título */}
          <h1 className="hero-title" style={{ margin: 0, marginBottom: "2rem", lineHeight: 1, letterSpacing: "-0.02em" }}>
            {LINES.map((line, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <span
                  className="hero-line"
                  style={{
                    display: "block",
                    fontWeight: 900,
                    color: i === 1 ? "transparent" : "#fff",
                    backgroundImage: i === 1 ? "linear-gradient(90deg, #fff 0%, #8a8a8e 100%)" : undefined,
                    WebkitBackgroundClip: i === 1 ? "text" : undefined,
                    backgroundClip: i === 1 ? "text" : undefined,
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </h1>

          {/* Subtítulos */}
          <div style={{ marginBottom: "3rem" }}>
            <p className="hero-sub" style={{ fontWeight: 300, letterSpacing: "0.22em", color: "#e0e0e2", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              Bryan España — Guatemala
            </p>
            <p className="hero-sub" style={{ fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.2em", color: "#c0c0c2", textTransform: "uppercase" }}>
              UVG · Infile S.A. · NASA Space Apps ◎
            </p>
          </div>

          {/* Botones */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <MagneticButton href="#projects" variant="primary" className="hero-btn">
              Ver Proyectos ↓
            </MagneticButton>
            <MagneticButton href="https://github.com/BryanEspana" target="_blank" rel="noopener noreferrer" variant="ghost" className="hero-btn">
              GitHub →
            </MagneticButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.4 }}>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a8a8e" }}>Scroll</span>
          <motion.div
            style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #8a8a8e, transparent)" }}
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      <style>{`
        .hero-title { font-size: clamp(3rem, 12vw, 8.5rem); }
        .hero-sub { font-size: clamp(0.65rem, 2vw, 1rem); }
        .hero-container { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        @media (min-width: 640px) {
          .hero-container { padding-left: 2rem !important; padding-right: 2rem !important; }
        }
        @media (min-width: 1024px) {
          .hero-container { padding-left: 3rem !important; padding-right: 3rem !important; }
        }
      `}</style>
    </>
  );
}

/* ── Magnetic Button ─────────────────────────────────────────── */
interface MagneticButtonProps {
  href?: string; target?: string; rel?: string;
  variant?: "primary" | "ghost"; className?: string; children: React.ReactNode;
}

function MagneticButton({ children, variant = "primary", className = "", href, target, rel }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    gsap.to(el, { x: (e.clientX - rect.left - rect.width / 2) * 0.25, y: (e.clientY - rect.top - rect.height / 2) * 0.25, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
  };

  const isPrimary = variant === "primary";

  return (
    <motion.a
      ref={ref} href={href} target={target} rel={rel} className={className}
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        borderRadius: "999px", padding: "0.9rem 2rem",
        fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.03em",
        cursor: "pointer", userSelect: "none", textDecoration: "none",
        background: isPrimary ? "#fff" : "transparent",
        color: isPrimary ? "#000" : "#8a8a8e",
        border: isPrimary ? "none" : "1px solid #3a3a3c",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}
