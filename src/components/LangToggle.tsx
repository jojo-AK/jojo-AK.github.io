"use client";

import { useLang } from "@/contexts/LangContext";

export function LangToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
      aria-label="Switch language"
    >
      <span className={lang === "fr" ? "text-purple-600 dark:text-purple-400" : "opacity-40"}>
        FR
      </span>
      <span className="opacity-30">|</span>
      <span className={lang === "en" ? "text-purple-600 dark:text-purple-400" : "opacity-40"}>
        EN
      </span>
    </button>
  );
}
