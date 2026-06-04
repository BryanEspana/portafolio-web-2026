import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bryan España — Web & Mobile Developer",
  description:
    "Desarrollador Web y Mobile apasionado por Flutter, React y experiencias digitales de alto impacto. Ganador NASA Space Apps Guatemala.",
  openGraph: {
    title: "Bryan España — Web & Mobile Developer",
    description: "Portfolio de Bryan España, desarrollador en Infile S.A. y ganador NASA Space Apps Guatemala.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
