"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS, type Project } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const { tr } = useLang();
  const p = tr.projects;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".bento-card", { opacity: 0, y: 50, scale: 0.96, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section ref={sectionRef} id="projects" style={{ width: "100%", paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div className="bento-wrapper">
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#3a3a3c", textTransform: "uppercase", marginBottom: "0.75rem" }}>{p.label}</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1, margin: 0, marginBottom: "4rem" }}>
            {p.title1}{" "}
            <span style={{ color: "transparent", backgroundImage: "linear-gradient(90deg, #fff 0%, #3a3a3c 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              {p.title2}
            </span>
          </h2>

          <div style={{ marginBottom: "1rem" }}>
            <StarCard project={PROJECTS[0]} texts={p.items[PROJECTS[0].id as keyof typeof p.items]} confidentialLabel={p.confidential} />
          </div>
          <div className="bento-row-2" style={{ marginBottom: "1rem" }}>
            <BentoCard project={PROJECTS[1]} minHeight="300px" texts={p.items[PROJECTS[1].id as keyof typeof p.items]} confidentialLabel={p.confidential} />
            <BentoCard project={PROJECTS[2]} minHeight="300px" texts={p.items[PROJECTS[2].id as keyof typeof p.items]} confidentialLabel={p.confidential} />
          </div>
          <div className="bento-row-3" style={{ marginBottom: "1rem" }}>
            <BentoCard project={PROJECTS[3]} minHeight="240px" texts={p.items[PROJECTS[3].id as keyof typeof p.items]} confidentialLabel={p.confidential} />
            <BentoCard project={PROJECTS[4]} minHeight="240px" texts={p.items[PROJECTS[4].id as keyof typeof p.items]} confidentialLabel={p.confidential} />
            <BentoCard project={PROJECTS[5]} minHeight="240px" texts={p.items[PROJECTS[5].id as keyof typeof p.items]} confidentialLabel={p.confidential} />
          </div>
          <div className="bento-row-2">
            <BentoCard project={PROJECTS[6]} minHeight="240px" texts={p.items[PROJECTS[6].id as keyof typeof p.items]} confidentialLabel={p.confidential} />
            <BentoCard project={PROJECTS[7]} minHeight="240px" texts={p.items[PROJECTS[7].id as keyof typeof p.items]} confidentialLabel={p.confidential} />
          </div>
        </div>
      </section>

      <style>{`
        .bento-wrapper { max-width: 1152px; margin: 0 auto; padding-left: 1.5rem; padding-right: 1.5rem; }
        .bento-row-2 { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .bento-row-3 { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 640px) { .bento-wrapper { padding-left: 2rem; padding-right: 2rem; } }
        @media (min-width: 768px) { .bento-row-2 { grid-template-columns: 1fr 1fr; } .bento-row-3 { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1100px) { .bento-wrapper { padding-left: 3rem; padding-right: 3rem; } .bento-row-2 { grid-template-columns: 2fr 1fr; } .bento-row-3 { grid-template-columns: 1fr 1fr 1.5fr; } }
      `}</style>
    </>
  );
}

type CardTexts = { description: string; linkLabel: string };

function StarCard({ project, texts, confidentialLabel }: { project: Project; texts: CardTexts; confidentialLabel: string }) {
  return (
    <motion.a
      href={project.link} target="_blank" rel="noopener noreferrer"
      className="bento-card star-card"
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: project.accent ?? "#111", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.1)", padding: "2rem", cursor: "pointer", overflow: "hidden", textDecoration: "none" }}
      whileHover={{ scale: 1.012, borderColor: "rgba(255,255,255,0.25)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div>
        {/* Icon + badge row */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
          {project.icon && (
            <div style={{ width: "72px", height: "72px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src={project.icon} alt={project.title} width={72} height={72} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
            </div>
          )}
          <span style={{ display: "inline-block", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", padding: "0.25rem 0.9rem", fontSize: "0.7rem", fontWeight: 600, color: "#e0e0e2", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {project.badge}
          </span>
        </div>
        <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.1, marginBottom: "0.6rem" }}>{project.title}</h3>
        <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "#b0b0b4", lineHeight: 1.7, margin: 0 }}>{texts.description}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", padding: "0.25rem 0.75rem", fontSize: "0.72rem", fontWeight: 300, color: "#8a8a8e" }}>{tag}</span>
          ))}
        </div>
        <span style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.12em", color: "#fff", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.25)", paddingBottom: "0.2rem", width: "fit-content" }}>
          {texts.linkLabel}
        </span>
      </div>
    </motion.a>
  );
}

function BentoCard({ project, minHeight, texts, confidentialLabel }: { project: Project; minHeight: string; texts: CardTexts; confidentialLabel: string }) {
  return (
    <motion.a
      href={project.link} target="_blank" rel="noopener noreferrer"
      className="bento-card"
      style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight, background: project.accent ?? "#0a0a0a", borderRadius: "1.5rem", border: "1px solid rgba(255,255,255,0.07)", padding: "1.75rem", cursor: "pointer", overflow: "hidden", position: "relative", textDecoration: "none" }}
      whileHover={{ scale: 1.015, borderColor: "rgba(255,255,255,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {project.badge && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.75rem", fontSize: "0.7rem", fontWeight: 500, color: "#e0e0e2", letterSpacing: "0.05em" }}>
              {project.badge}
            </span>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.confidential ? (
              <span style={{ borderRadius: "999px", border: "1px solid rgba(255,255,255,0.08)", padding: "0.2rem 0.65rem", fontSize: "0.7rem", fontWeight: 300, color: "#8a8a8e", letterSpacing: "0.08em", fontStyle: "italic" }}>
                {confidentialLabel}
              </span>
            ) : project.tags.map((tag) => (
              <span key={tag} style={{ borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", padding: "0.2rem 0.65rem", fontSize: "0.7rem", fontWeight: 300, color: "#8a8a8e", letterSpacing: "0.05em" }}>{tag}</span>
            ))}
          </div>
        </div>
        {/* Icon en esquina superior derecha */}
        {project.icon ? (
          project.id === "billetesgt" || project.id === "filapp" ? (
            // App Store icons — con fondo y bordes redondeados tipo iOS
            <div style={{ width: "64px", height: "64px", borderRadius: "16px", overflow: "hidden", flexShrink: 0 }}>
              <Image src={project.icon} alt={project.title} width={64} height={64} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </div>
          ) : (
            // Logos sin fondo — sin contenedor
            <div style={{ width: "64px", height: "64px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src={project.icon} alt={project.title} width={64} height={64} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
            </div>
          )
        ) : (
          <span style={{ color: "#8a8a8e", fontSize: "1.1rem", flexShrink: 0 }}>↗</span>
        )}
      </div>
      <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
        <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem", lineHeight: 1.2 }}>{project.title}</h3>
        <p style={{ fontSize: "0.83rem", fontWeight: 300, color: "#b0b0b4", lineHeight: 1.6, marginBottom: "1rem" }}>{texts.description}</p>
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#c0c0c2", textTransform: "uppercase" }}>{texts.linkLabel}</span>
      </div>
    </motion.a>
  );
}
