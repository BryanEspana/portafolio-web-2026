import GSAPProvider from "@/components/GSAPProvider";
import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import BentoGrid from "@/components/projects/BentoGrid";
import TechStack from "@/components/stack/TechStack";
import Footer from "@/components/nav/Footer";

export default function Home() {
  return (
    <GSAPProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BentoGrid />
        <TechStack />
      </main>
      <Footer />
    </GSAPProvider>
  );
}
