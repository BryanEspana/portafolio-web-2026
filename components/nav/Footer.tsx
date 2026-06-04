export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-light text-[#3a3a3c] tracking-wide">
          © 2025 Bryan España. Hecho con Next.js + GSAP.
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/BryanEspana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light text-[#3a3a3c] hover:text-white transition-colors duration-200 tracking-wide"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-espa%C3%B1a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light text-[#3a3a3c] hover:text-white transition-colors duration-200 tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href="mailto:bespana@infile.com"
            className="text-sm font-light text-[#3a3a3c] hover:text-white transition-colors duration-200 tracking-wide"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
