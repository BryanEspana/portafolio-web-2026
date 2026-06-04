"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "4+", label: "Años de experiencia" },
  { value: "3", label: "Años en Infile S.A." },
  { value: "2×", label: "NASA Space Apps" },
  { value: "∞", label: "Dedicación" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".about-photo", {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
        gsap.from(".about-line", {
          opacity: 0,
          y: 28,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
        });
        gsap.from(".about-stat", {
          opacity: 0,
          y: 16,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-stats", start: "top 82%" },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ width: "100%", paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", paddingLeft: "3rem", paddingRight: "3rem" }}>

        {/* Label */}
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "#3a3a3c", textTransform: "uppercase", marginBottom: "4rem" }}>
          Sobre mí
        </p>

        {/* Layout 3 columnas: foto | separador | contenido */}
        <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "5rem", alignItems: "start" }}>

          {/* Columna izquierda — foto + nombre */}
          <div className="about-photo" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Marco de la foto */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3/4",
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              <Image
                src="/unnamed3.jpg"
                alt="Bryan España"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
              {/* Gradient overlay sutil en la parte baja */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
              }} />
              {/* Badge disponible encima de la foto */}
              <div style={{
                position: "absolute", bottom: "1.25rem", left: "1.25rem",
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px", padding: "0.4rem 0.9rem",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", flexShrink: 0 }} />
                <span style={{ fontSize: "0.65rem", fontWeight: 400, letterSpacing: "0.12em", color: "#f5f5f7", textTransform: "uppercase" }}>
                  Available for work
                </span>
              </div>
            </div>

            {/* Stats debajo de la foto */}
            <div className="about-stats" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {STATS.map((stat) => (
                <div key={stat.label} className="about-stat" style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  paddingTop: "1rem",
                }}>
                  <span style={{ display: "block", fontSize: "1.6rem", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "0.3rem" }}>
                    {stat.value}
                  </span>
                  <span style={{ fontSize: "0.7rem", fontWeight: 300, color: "#8a8a8e", letterSpacing: "0.04em" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — texto */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0rem", paddingTop: "0.5rem" }}>
            <h2 className="about-line" style={{
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 900, color: "#fff",
              lineHeight: 1.05, margin: 0, marginBottom: "2.5rem",
            }}>
              Hola, soy<br />
              <span style={{
                color: "transparent",
                backgroundImage: "linear-gradient(90deg, #fff 0%, #8a8a8e 100%)",
                WebkitBackgroundClip: "text", backgroundClip: "text",
              }}>
                Bryan España.
              </span>
            </h2>

            <p className="about-line" style={{ fontSize: "1.05rem", fontWeight: 300, color: "#f5f5f7", lineHeight: 1.8, margin: 0, marginBottom: "1.5rem" }}>
              Con más de 4 años inmerso en el desarrollo de software, he construido una trayectoria sólida que combina rigor técnico con una visión orientada al producto. Durante los últimos 3 años he formado parte del equipo de Infile S.A., donde he contribuido al desarrollo de aplicaciones móviles y web hoy en producción, utilizadas por miles de personas.
            </p>
            <p className="about-line" style={{ fontSize: "1.05rem", fontWeight: 300, color: "#8a8a8e", lineHeight: 1.8, margin: 0, marginBottom: "1.5rem" }}>
              Mi mayor pasión es el desarrollo móvil — especialmente con Flutter — aunque disfruto igual de construir interfaces web modernas y sistemas backend robustos. He participado en múltiples hackathons, incluyendo dos ediciones del NASA Space Apps Challenge, de las cuales salí ganador nacional con Astro State.
            </p>
            <p className="about-line" style={{ fontSize: "1.05rem", fontWeight: 300, color: "#8a8a8e", lineHeight: 1.8, margin: 0, marginBottom: "2.5rem" }}>
              Actualmente curso Ingeniería en Ciencias de la Computación en la Universidad del Valle de Guatemala. Me importa la calidad del código, la experiencia del usuario y el impacto real del producto final.
            </p>

            <motion.a
              className="about-line"
              href="https://github.com/BryanEspana"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                width: "fit-content",
                fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.12em",
                color: "#8a8a8e", textTransform: "uppercase", textDecoration: "none",
                borderBottom: "1px solid #3a3a3c", paddingBottom: "0.25rem",
              }}
              whileHover={{ color: "#fff", borderBottomColor: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              Ver GitHub →
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
