"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { t, type Lang } from "./translations";

type Translations = typeof t["en"] | typeof t["es"];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  tr: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  tr: t["en"],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
