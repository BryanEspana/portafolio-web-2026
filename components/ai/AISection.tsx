"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const AI_ITEMS = {
  en: [
    {
      number: "01",
      title: "Architecture First, AI Second",
      body: "I design system architecture and component structure before involving AI. I use AI to implement well-defined interfaces, not to discover architecture.",
    },
    {
      number: "02",
      title: "Modular & Precise Prompts",
      body: "I break features into small, testable scopes before prompting. Each AI interaction has a clear responsibility and expected output.",
    },
    {
      number: "03",
      title: "AI-Assisted, Human-Reviewed",
      body: "AI writes fast but can miss edge cases. I always review logic, imports, error handling and security before shipping any AI-generated code.",
    },
    {
      number: "04",
      title: "Tools I Work With",
      body: "Claude, GitHub Copilot, Cursor, v0 by Vercel, ChatGPT and Gemini. I integrate these into my daily workflow for both mobile and web development.",
    },
    {
      number: "05",
      title: "Keep It Simple",
      body: "If AI suggests something clever I don't fully understand, I simplify it. I prefer maintainable code over elegant code I can't debug.",
    },
    {
      number: "06",
      title: "Continuous Learning",
      body: "I stay current with the latest AI models and developer tools. AI is not a shortcut — it's a force multiplier for developers who understand their craft.",
    },
  ],
  es: [
    {
      number: "01",
      title: "Arquitectura primero, IA después",
      body: "Diseño la arquitectura del sistema y la estructura de componentes antes de involucrar IA. Uso la IA para implementar interfaces bien definidas, no para descubrir la arquitectura.",
    },
    {
      number: "02",
      title: "Prompts modulares y precisos",
      body: "Divido funcionalidades en scopes pequeños y testeables antes de hacer un prompt. Cada interacción con IA tiene una responsabilidad clara y un output esperado.",
    },
    {
      number: "03",
      title: "Asistido por IA, revisado por humanos",
      body: "La IA escribe rápido pero puede omitir casos borde. Siempre reviso la lógica, imports, manejo de errores y seguridad antes de publicar código generado por IA.",
    },
    {
      number: "04",
      title: "Herramientas que utilizo",
      body: "Claude, GitHub Copilot, Cursor, v0 by Vercel, ChatGPT y Gemini. Las integro en mi flujo diario tanto para desarrollo móvil como web.",
    },
    {
      number: "05",
      title: "Mantenerlo simple",
      body: "Si la IA sugiere algo inteligente que no entiendo del todo, lo simplifico. Prefiero código mantenible sobre código elegante que no puedo depurar.",
    },
    {
      number: "06",
      title: "Aprendizaje continuo",
      body: "Me mantengo actualizado con los últimos modelos de IA y herramientas de desarrollo. La IA no es un atajo — es un multiplicador de fuerza para desarrolladores que dominan su oficio.",
    },
  ],
};

export default function AISection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const items = AI_ITEMS[lang];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".ai-card", {
          opacity: 0,
          y: 32,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section ref={sectionRef} style={{ width: "100%", paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div className="ai-wrapper">

          {/* Header */}
          <div style={{ marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#3a3a3c", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              {lang === "en" ? "AI & Workflow" : "IA & Flujo de trabajo"}
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1, margin: 0 }}>
              {lang === "en" ? "How I build" : "Cómo construyo"}{" "}
              <span style={{ color: "transparent", backgroundImage: "linear-gradient(90deg, #fff 0%, #3a3a3c 100%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                {lang === "en" ? "with AI." : "con IA."}
              </span>
            </h2>
          </div>

          {/* Grid de cards */}
          <div className="ai-grid">
            {items.map((item) => (
              <div
                key={item.number}
                className="ai-card"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "1.75rem",
                  paddingBottom: "1.75rem",
                }}
              >
                <span style={{
                  display: "block",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: "#3a3a3c",
                  marginBottom: "0.75rem",
                  fontFamily: "monospace",
                }}>
                  {item.number}
                </span>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                  marginBottom: "0.6rem",
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "#8a8a8e",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Footer tag */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#8a8a8e", textTransform: "uppercase" }}>
              {lang === "en" ? "Daily tools" : "Herramientas diarias"}
            </span>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["Claude", "Cursor", "GitHub Copilot", "v0", "ChatGPT", "Gemini"].map((tool) => (
                <span key={tool} style={{
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "0.25rem 0.8rem",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  color: "#e0e0e2",
                  letterSpacing: "0.04em",
                }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .ai-wrapper {
          max-width: 1152px;
          margin: 0 auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        .ai-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        @media (min-width: 640px) {
          .ai-wrapper { padding-left: 2rem; padding-right: 2rem; }
          .ai-grid { grid-template-columns: 1fr 1fr; gap: 0 4rem; }
        }
        @media (min-width: 1024px) {
          .ai-wrapper { padding-left: 3rem; padding-right: 3rem; }
          .ai-grid { grid-template-columns: 1fr 1fr 1fr; gap: 0 4rem; }
        }
      `}</style>
    </>
  );
}
