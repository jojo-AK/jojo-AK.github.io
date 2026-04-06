"use client";

import { createContext, useContext, useState } from "react";
import { fr } from "@/i18n/fr";
import { en } from "@/i18n/en";
import type { Translations } from "@/i18n/fr";

type Lang = "fr" | "en";

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: "fr",
  t: fr,
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const t = lang === "fr" ? fr : en;
  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
