import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bryan España — Web & Mobile Developer | Guatemala",
  description:
    "Bryan España, desarrollador Web y Mobile con más de 4 años de experiencia. Especialista en Flutter, React y Node.js. Ganador NASA Space Apps Challenge Guatemala. Desarrollador en Infile S.A.",
  keywords: [
    "Bryan España",
    "Bryan Carlos Roberto España Machorro",
    "Bryan España desarrollador",
    "Bryan España Guatemala",
    "desarrollador móvil Guatemala",
    "Flutter developer Guatemala",
    "web developer Guatemala",
    "portafolio Bryan España",
    "Infile S.A.",
    "NASA Space Apps Guatemala",
  ],
  authors: [{ name: "Bryan España", url: "https://bryanespana.dev" }],
  creator: "Bryan España",
  metadataBase: new URL("https://bryanespana.dev"),
  alternates: {
    canonical: "https://bryanespana.dev",
  },
  openGraph: {
    title: "Bryan España — Web & Mobile Developer",
    description: "Desarrollador Web y Mobile con más de 4 años de experiencia. Especialista en Flutter y React. Ganador NASA Space Apps Guatemala.",
    type: "website",
    url: "https://bryanespana.dev",
    siteName: "Bryan España Portfolio",
    locale: "es_GT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan España — Web & Mobile Developer",
    description: "Desarrollador Web y Mobile | Flutter | React | Guatemala",
    creator: "@bryanespana",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
