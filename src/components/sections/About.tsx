"use client";

import Image from "next/image";
import { useLang } from "@/contexts/LangContext";
import { personal } from "@/data/personal";
import { AnimatedSection } from "@/components/AnimatedSection";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-widest">
              {t.about.sectionLabel}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              {t.about.title}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <AnimatedSection direction="left">
            <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80">
              <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-purple-200 dark:border-purple-800 shadow-xl">
                <Image
                  src="/WhatsApp Image 2026-04-06 at 23.14.00.jpeg"
                  alt="Photo de profil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Décoration */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-purple-200 dark:border-purple-900 -z-10" />
            </div>
          </AnimatedSection>

          {/* Texte */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-5">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {t.about.bio1}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.about.bio2}
              </p>

              {/* Infos rapides */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: "📍", label: "Localisation", value: "Togo" },
                  { icon: "🎓", label: "Formation", value: "Licence IA/BigData" },
                  { icon: "💼", label: "Statut", value: "Cherche stage" },
                  { icon: "🌐", label: "Langues", value: "FR / EN (B1)" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="text-xl mb-1">{item.icon}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bouton CV */}
              <a
                href={personal.cvUrl}
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900/30 mt-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t.about.downloadCV}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
