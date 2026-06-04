"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { PROJECTS, type Project } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

type CardTexts = { description: string; linkLabel: string };

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const { tr } = useLang();
  const p = tr.projects;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".bento-card", {
          opacity: 0, y: 40, scale: 0.97, duration: 0.7,
          stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const getTexts = (id: string) => p.items[id as keyof typeof p.items];

  return (
    <>
      <section ref={sectionRef} id="projects" style={{ width: "100%", paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div className="bento-wrapper">
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#3a3a3c", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            {p.label}
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1, margin: 0, marginBottom: "4rem" }}>
            {p.title1}{" "}
            <span style={{ color: "transparent", backgroundImage: "linear-gradient(90deg, #fff 0%, #3a3a3c 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              {p.title2}
            </span>
          </h2>

          {/* Fila 0: FerreInnova — card hero horizontal */}
          <div style={{ marginBottom: "1rem" }}>
            <HeroCard project={PROJECTS[0]} texts={getTexts(PROJECTS[0].id)} confidentialLabel={p.confidential} />
          </div>

          {/* Filas 1-7: grid uniforme de cards con preview */}
          <div className="bento-grid">
            {PROJECTS.slice(1).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                texts={getTexts(project.id)}
                confidentialLabel={p.confidential}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .bento-wrapper { max-width: 1152px; margin: 0 auto; padding-left: 1.5rem; padding-right: 1.5rem; }
        .bento-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 640px) {
          .bento-wrapper { padding-left: 2rem; padding-right: 2rem; }
          .bento-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .bento-wrapper { padding-left: 3rem; padding-right: 3rem; }
          .bento-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </>
  );
}

/* ── Hero Card (FerreInnova) ────────────────────────────────── */
function HeroCard({ project, texts, confidentialLabel }: { project: Project; texts: CardTexts; confidentialLabel: string }) {
  return (
    <motion.a
      href={project.link} target="_blank" rel="noopener noreferrer"
      className="bento-card"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, background: project.accent ?? "#111", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", textDecoration: "none", minHeight: "320px" }}
      whileHover={{ scale: 1.008, borderColor: "rgba(255,255,255,0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
    >
      {/* Izquierda: info */}
      <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          {/* Icon + badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {project.icon && (
              <div style={{ width: "44px", height: "44px", flexShrink: 0 }}>
                <Image src={project.icon} alt={project.title} width={44} height={44} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
              </div>
            )}
            {project.badge && (
              <span style={{ display: "inline-block", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", padding: "0.2rem 0.8rem", fontSize: "0.65rem", fontWeight: 600, color: "#e0e0e2", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {project.badge}
              </span>
            )}
          </div>
          <h3 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.1, marginBottom: "0.75rem" }}>
            {project.title}
          </h3>
          <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "#b0b0b4", lineHeight: 1.7, margin: 0 }}>
            {texts.description}
          </p>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", padding: "0.2rem 0.65rem", fontSize: "0.7rem", fontWeight: 300, color: "#8a8a8e" }}>{tag}</span>
            ))}
          </div>
          <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", color: "#fff", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.25)", paddingBottom: "0.2rem" }}>
            {texts.linkLabel}
          </span>
        </div>
      </div>

      {/* Derecha: preview */}
      <div style={{ position: "relative", overflow: "hidden", background: "#0a0a0a" }}>
        <PreviewArea project={project} />
      </div>
    </motion.a>
  );
}

/* ── Project Card (grid uniforme) ───────────────────────────── */
function ProjectCard({ project, texts, confidentialLabel }: { project: Project; texts: CardTexts; confidentialLabel: string }) {
  return (
    <motion.a
      href={project.link} target="_blank" rel="noopener noreferrer"
      className="bento-card"
      style={{ display: "flex", flexDirection: "column", background: project.accent ?? "#0a0a0a", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", textDecoration: "none" }}
      whileHover={{ scale: 1.015, borderColor: "rgba(255,255,255,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
    >
      {/* Preview area */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "#0a0a0a", flexShrink: 0 }}>
        <PreviewArea project={project} />
      </div>

      {/* Info */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Icon + badge + confidential */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
          {project.icon && project.previewType === "mobile" && (
            <div style={{ width: "36px", height: "36px", borderRadius: "9px", overflow: "hidden", flexShrink: 0 }}>
              <Image src={project.icon} alt={project.title} width={36} height={36} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
          )}
          {project.badge && (
            <span style={{ borderRadius: "999px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", padding: "0.15rem 0.7rem", fontSize: "0.65rem", fontWeight: 600, color: "#e0e0e2", letterSpacing: "0.07em", textTransform: "uppercase" }}>
              {project.badge}
            </span>
          )}
          {project.confidential && (
            <span style={{ borderRadius: "999px", border: "1px solid rgba(255,255,255,0.08)", padding: "0.15rem 0.7rem", fontSize: "0.65rem", fontWeight: 300, color: "#5a5a5e", letterSpacing: "0.07em", fontStyle: "italic" }}>
              {confidentialLabel}
            </span>
          )}
        </div>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", margin: 0, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "#8a8a8e", lineHeight: 1.6, margin: 0, flex: 1 }}>
          {texts.description}
        </p>

        <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
            {!project.confidential && project.tags.map(tag => (
              <span key={tag} style={{ borderRadius: "999px", border: "1px solid rgba(255,255,255,0.08)", padding: "0.15rem 0.55rem", fontSize: "0.65rem", fontWeight: 300, color: "#5a5a5e" }}>{tag}</span>
            ))}
          </div>
          <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", color: "#c0c0c2", textTransform: "uppercase" }}>
            {texts.linkLabel}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

/* ── Preview Area ────────────────────────────────────────────── */
function PreviewArea({ project }: { project: Project }) {
  const [loaded, setLoaded] = React.useState(false);
  if (project.previewType === "web" && project.previewUrl) {
    return (
      <>
        {/* Skeleton shimmer mientras carga */}
        {!loaded && (
          <div style={{ position: "absolute", inset: 0, background: "#111", overflow: "hidden" }}>
            {/* Líneas de skeleton */}
            <div style={{ position: "absolute", top: "12%", left: "6%", right: "6%", height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px" }} />
            <div style={{ position: "absolute", top: "26%", left: "6%", width: "40%", height: "6px", background: "rgba(255,255,255,0.04)", borderRadius: "4px" }} />
            <div style={{ position: "absolute", top: "40%", left: "6%", right: "6%", height: "60px", background: "rgba(255,255,255,0.04)", borderRadius: "8px" }} />
            <div style={{ position: "absolute", top: "65%", left: "6%", width: "55%", height: "6px", background: "rgba(255,255,255,0.04)", borderRadius: "4px" }} />
            <div style={{ position: "absolute", top: "78%", left: "6%", width: "35%", height: "6px", background: "rgba(255,255,255,0.03)", borderRadius: "4px" }} />
            {/* Shimmer sweep */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
              animation: "shimmer 1.8s infinite",
            }} />
            <style>{`@keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }`}</style>
          </div>
        )}
        <Image
          src={project.previewUrl}
          alt={`Preview de ${project.title}`}
          fill
          style={{ objectFit: "cover", objectPosition: "top left", opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
          sizes="(max-width: 768px) 100vw, 500px"
          unoptimized
          onLoad={() => setLoaded(true)}
        />
        {/* Overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.75) 100%)",
        }} />
      </>
    );
  }

  if (project.previewType === "mobile" && project.icon) {
    return (
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)" }}>
        <div style={{ width: "90px", height: "90px", borderRadius: "22px", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}>
          <Image src={project.icon} alt={project.title} width={90} height={90} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </div>
      </div>
    );
  }

  // Private
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
      <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.08)" }} />
      <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#3a3a3c", textTransform: "uppercase" }}>Private</span>
      <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.08)" }} />
    </div>
  );
}
