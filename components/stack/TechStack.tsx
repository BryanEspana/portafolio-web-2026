"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    label: "Frontend",
    level: 93,
    skills: ["HTML/CSS", "TypeScript", "JavaScript", "React", "Angular", "Ruby on Rails", "Next.js"],
    highlight: false,
  },
  {
    label: "Mobile",
    level: 96,
    skills: ["Flutter ★", "Dart", "iOS", "Android", "Kotlin", "React Native", "Swift"],
    highlight: true,
  },
  {
    label: "Backend",
    level: 88,
    skills: ["Node.js", "Express.js", "Firebase", "Java", "Ruby", "GraphQL"],
    highlight: false,
  },
  {
    label: "Bases de datos",
    level: 90,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Firebase Firestore", "Redis", "SQLite"],
    highlight: false,
  },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".stack-bar-fill", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
        gsap.from(".stack-pill", {
          opacity: 0,
          scale: 0.75,
          duration: 0.4,
          ease: "back.out(1.7)",
          stagger: 0.04,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const handleCategoryHover = (activeIdx: number) => {
    CATEGORIES.forEach((_, i) => {
      gsap.to(`.category-block-${i}`, {
        opacity: i === activeIdx ? 1 : 0.25,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  };

  const handleCategoryLeave = () => {
    CATEGORIES.forEach((_, i) => {
      gsap.to(`.category-block-${i}`, { opacity: 1, duration: 0.3 });
    });
  };

  return (
    <section
      ref={sectionRef}
      id="stack"
      style={{ width: "100%", paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", paddingLeft: "3rem", paddingRight: "3rem" }}>
        {/* Header */}
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#3a3a3c", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          Stack
        </p>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "5rem" }}>
          Herramientas{" "}
          <span style={{ color: "transparent", backgroundImage: "linear-gradient(90deg, #fff 0%, #3a3a3c 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
            que domino.
          </span>
        </h2>

        {/* Categorías */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.label}
              className={`category-block-${idx}`}
              onMouseEnter={() => handleCategoryHover(idx)}
              onMouseLeave={handleCategoryLeave}
            >
              {/* Label + barra */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.2rem" }}>
                <span style={{
                  fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: cat.highlight ? "#fff" : "#8a8a8e",
                  minWidth: "90px"
                }}>
                  {cat.label}
                </span>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "hidden", position: "relative" }}>
                  <div
                    className="stack-bar-fill"
                    style={{
                      position: "absolute", left: 0, top: 0, height: "100%",
                      width: `${cat.level}%`, borderRadius: "999px",
                      background: cat.highlight
                        ? "linear-gradient(90deg, #fff 0%, #8a8a8e 100%)"
                        : "rgba(255,255,255,0.18)",
                    }}
                  />
                </div>
                <span style={{ fontSize: "0.7rem", color: "#3a3a3c", fontFamily: "monospace", minWidth: "36px", textAlign: "right" }}>
                  {cat.level}%
                </span>
              </div>

              {/* Píldoras */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="stack-pill"
                    style={{
                      display: "inline-flex", alignItems: "center",
                      borderRadius: "999px",
                      border: `1px solid ${cat.highlight ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`,
                      padding: "0.45rem 1rem",
                      fontSize: "0.85rem", fontWeight: 300,
                      color: cat.highlight ? "#f5f5f7" : "#8a8a8e",
                      background: cat.highlight ? "rgba(255,255,255,0.04)" : "transparent",
                      cursor: "default",
                    }}
                    whileHover={{
                      borderColor: "rgba(255,255,255,0.35)",
                      color: "#ffffff",
                      backgroundColor: "rgba(255,255,255,0.07)",
                    }}
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
  );
}
