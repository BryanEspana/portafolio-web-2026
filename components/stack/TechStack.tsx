"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const { tr } = useLang();
  const s = tr.stack;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".stack-bar-fill", { scaleX: 0, transformOrigin: "left center", duration: 1.2, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
        gsap.from(".stack-pill", { opacity: 0, scale: 0.75, duration: 0.4, ease: "back.out(1.7)", stagger: 0.04, scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const handleCategoryHover = (activeIdx: number) => {
    s.categories.forEach((_, i) => {
      gsap.to(`.category-block-${i}`, { opacity: i === activeIdx ? 1 : 0.25, duration: 0.3, ease: "power2.out" });
    });
  };

  const handleCategoryLeave = () => {
    s.categories.forEach((_, i) => {
      gsap.to(`.category-block-${i}`, { opacity: 1, duration: 0.3 });
    });
  };

  return (
    <>
      <section ref={sectionRef} id="stack" style={{ width: "100%", paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div className="stack-wrapper">
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#3a3a3c", textTransform: "uppercase", marginBottom: "0.75rem" }}>{s.label}</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "5rem" }}>
            {s.title1}{" "}
            <span style={{ color: "transparent", backgroundImage: "linear-gradient(90deg, #fff 0%, #3a3a3c 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              {s.title2}
            </span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {s.categories.map((cat, idx) => (
              <div key={cat.label} className={`category-block-${idx}`} onMouseEnter={() => handleCategoryHover(idx)} onMouseLeave={handleCategoryLeave}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: cat.highlight ? "#fff" : "#c0c0c2", minWidth: "80px" }}>
                    {cat.label}
                  </span>
                  <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "hidden", position: "relative" }}>
                    <div className="stack-bar-fill" style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${cat.level}%`, borderRadius: "999px", background: cat.highlight ? "linear-gradient(90deg, #fff 0%, #8a8a8e 100%)" : "rgba(255,255,255,0.18)" }} />
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "#e0e0e2", fontFamily: "monospace", minWidth: "36px", textAlign: "right" }}>{cat.level}%</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="stack-pill"
                      style={{ display: "inline-flex", alignItems: "center", borderRadius: "999px", border: `1px solid ${cat.highlight ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`, padding: "0.45rem 1rem", fontSize: "0.85rem", fontWeight: 300, color: cat.highlight ? "#ffffff" : "#c0c0c2", background: cat.highlight ? "rgba(255,255,255,0.04)" : "transparent", cursor: "default" }}
                      whileHover={{ borderColor: "rgba(255,255,255,0.35)", color: "#ffffff", backgroundColor: "rgba(255,255,255,0.07)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .stack-wrapper { max-width: 1152px; margin: 0 auto; padding-left: 1.5rem; padding-right: 1.5rem; }
        @media (min-width: 640px) { .stack-wrapper { padding-left: 2rem; padding-right: 2rem; } }
        @media (min-width: 1024px) { .stack-wrapper { padding-left: 3rem; padding-right: 3rem; } }
      `}</style>
    </>
  );
}
