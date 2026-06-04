"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar plugins una sola vez a nivel de app
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
