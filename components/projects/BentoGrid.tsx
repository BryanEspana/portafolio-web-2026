"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { PROJECTS, type Project } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".bento-card", {
          opacity: 0,
          y: 50,
          scale: 0.96,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{ width: "100%", paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      {/* Header */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", paddingLeft: "3rem", paddingRight: "3rem", marginBottom: "4rem" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#3a3a3c", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          Proyectos
        </p>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1, margin: 0 }}>
          Trabajo real,{" "}
          <span style={{ color: "transparent", backgroundImage: "linear-gradient(90deg, #fff 0%, #3a3a3c 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
            en producción.
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", paddingLeft: "3rem", paddingRight: "3rem" }}>
        {/* Row 0: FerreInnova — proyecto estrella, fila completa */}
        <div style={{ marginBottom: "1rem" }}>
          <StarCard project={PROJECTS[0]} />
        </div>
        {/* Row 1: Astro State 2fr + BilletesGT 1fr */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <BentoCard project={PROJECTS[1]} minHeight="300px" />
          <BentoCard project={PROJECTS[2]} minHeight="300px" />
        </div>
        {/* Row 2: FilApp + Space Access + Filpro */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.5fr", gap: "1rem" }}>
          <BentoCard project={PROJECTS[3]} minHeight="240px" />
          <BentoCard project={PROJECTS[4]} minHeight="240px" />
          <BentoCard project={PROJECTS[5]} minHeight="240px" />
        </div>
      </div>
    </section>
  );
}

/* ── Proyecto estrella — layout horizontal full-width ────────── */
function StarCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "3rem",
        minHeight: "180px",
        background: project.accent ?? "#0d1a0d",
        borderRadius: "1.5rem",
        border: "1px solid rgba(255,255,255,0.12)",
        padding: "2.5rem 3rem",
        cursor: "pointer",
        overflow: "hidden",
        textDecoration: "none",
      }}
      whileHover={{ scale: 1.012, borderColor: "rgba(255,255,255,0.22)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Izquierda: badge + título + descripción */}
      <div style={{ flex: 1 }}>
        <span style={{
          display: "inline-block",
          borderRadius: "999px", border: "1px solid rgba(253,224,71,0.35)",
          background: "rgba(253,224,71,0.07)", padding: "0.25rem 0.9rem",
          fontSize: "0.7rem", fontWeight: 600, color: "#fde047",
          letterSpacing: "0.08em", marginBottom: "1rem", textTransform: "uppercase"
        }}>
          {project.badge}
        </span>
        <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.1, marginBottom: "0.6rem" }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "#8a8a8e", lineHeight: 1.7, margin: 0, maxWidth: "520px" }}>
          {project.description}
        </p>
      </div>

      {/* Derecha: tags + CTA */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1.5rem", flexShrink: 0 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", justifyContent: "flex-end" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)",
              padding: "0.25rem 0.75rem", fontSize: "0.72rem", fontWeight: 300, color: "#8a8a8e"
            }}>
              {tag}
            </span>
          ))}
        </div>
        <span style={{
          fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.12em",
          color: "#fff", textTransform: "uppercase",
          borderBottom: "1px solid rgba(255,255,255,0.25)", paddingBottom: "0.2rem"
        }}>
          {project.linkLabel}
        </span>
      </div>
    </motion.a>
  );
}

/* ── Card normal ─────────────────────────────────────────────── */
function BentoCard({ project, minHeight }: { project: Project; minHeight: string }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card"
      style={{
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        minHeight, background: project.accent ?? "#0a0a0a",
        borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.07)",
        padding: "2rem", cursor: "pointer", overflow: "hidden",
        position: "relative", textDecoration: "none",
      }}
      whileHover={{ scale: 1.015, borderColor: "rgba(255,255,255,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Top: badge + tags + arrow */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {project.badge && (
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              borderRadius: "999px", border: "1px solid rgba(234,179,8,0.3)",
              background: "rgba(234,179,8,0.08)", padding: "0.2rem 0.75rem",
              fontSize: "0.7rem", fontWeight: 500, color: "#fbbf24", letterSpacing: "0.05em"
            }}>
              {project.badge}
            </span>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.confidential ? (
              <span style={{
                borderRadius: "999px", border: "1px solid rgba(255,255,255,0.08)",
                padding: "0.2rem 0.65rem", fontSize: "0.7rem", fontWeight: 300,
                color: "#3a3a3c", letterSpacing: "0.08em", fontStyle: "italic"
              }}>
                🔒 Stack confidencial
              </span>
            ) : project.tags.map((tag) => (
              <span key={tag} style={{
                borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)",
                padding: "0.2rem 0.65rem", fontSize: "0.7rem", fontWeight: 300,
                color: "#8a8a8e", letterSpacing: "0.05em"
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span style={{ color: "#3a3a3c", fontSize: "1.1rem", flexShrink: 0 }}>↗</span>
      </div>

      {/* Bottom: title + description + link */}
      <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.2 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "0.83rem", fontWeight: 300, color: "#8a8a8e", lineHeight: 1.6, marginBottom: "1rem" }}>
          {project.description}
        </p>
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#3a3a3c", textTransform: "uppercase" }}>
          {project.linkLabel}
        </span>
      </div>
    </motion.a>
  );
}
