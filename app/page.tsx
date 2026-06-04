import GSAPProvider from "@/components/GSAPProvider";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import AISection from "@/components/ai/AISection";
import BentoGrid from "@/components/projects/BentoGrid";
import TechStack from "@/components/stack/TechStack";
import Footer from "@/components/nav/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <GSAPProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <AISection />
          <BentoGrid />
          <TechStack />
        </main>
        <Footer />
      </GSAPProvider>
    </LanguageProvider>
  );
}
