"use client";

export default function Footer() {
  return (
    <>
      <footer style={{ width: "100%", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="footer-inner">
          <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "#3a3a3c", letterSpacing: "0.05em" }}>
            © 2025 Bryan España. Hecho con Next.js + GSAP.
          </p>
          <div className="footer-links">
            {[
              { label: "GitHub", href: "https://github.com/BryanEspana" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/bryan-espa%C3%B1a/" },
              { label: "Email", href: "mailto:bespana@infile.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ fontSize: "0.8rem", fontWeight: 300, color: "#3a3a3c", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#3a3a3c")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        .footer-inner {
          max-width: 1152px;
          margin: 0 auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }
        .footer-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .footer-inner {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
        @media (min-width: 1024px) {
          .footer-inner { padding-left: 3rem; padding-right: 3rem; }
        }
      `}</style>
    </>
  );
}
