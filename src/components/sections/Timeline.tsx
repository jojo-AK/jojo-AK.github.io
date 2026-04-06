"use client";

import { useLang } from "@/contexts/LangContext";
import { timeline } from "@/data/timeline";
import { AnimatedSection } from "@/components/AnimatedSection";

export function Timeline() {
  const { t, lang } = useLang();

  return (
    <section id="timeline" className="py-24 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-widest">
              {t.timeline.sectionLabel}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              {t.timeline.title}
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-transparent dark:from-purple-600 dark:via-blue-600 md:-translate-x-0.5" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Contenu */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all hover:shadow-lg hover:shadow-purple-50 dark:hover:shadow-purple-900/10">
                      {/* Badge type */}
                      <span
                        className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${
                          item.type === "education"
                            ? "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                            : "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                        }`}
                      >
                        {item.type === "education"
                          ? t.timeline.education
                          : t.timeline.experience}
                      </span>

                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        {lang === "fr" ? item.titleFr : item.titleEn}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mt-0.5">
                        {lang === "fr" ? item.placeFr : item.placeEn}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                        {lang === "fr" ? item.descriptionFr : item.descriptionEn}
                      </p>
                    </div>
                  </div>

                  {/* Point central + année */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 shadow ${
                        item.type === "education"
                          ? "bg-purple-500"
                          : "bg-blue-500"
                      }`}
                    />
                    <span className="text-xs text-slate-500 dark:text-slate-500 mt-2 whitespace-nowrap font-medium hidden md:block">
                      {item.year}
                    </span>
                  </div>

                  {/* Espace opposé (desktop) */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>

                {/* Année mobile */}
                <p className="ml-12 md:hidden text-xs text-slate-500 dark:text-slate-500 mt-1 font-medium">
                  {item.year}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
