"use client";

import { useLang } from "@/contexts/LangContext";
import { projects } from "@/data/projects";
import { personal } from "@/data/personal";
import { AnimatedSection } from "@/components/AnimatedSection";

const projectIcons: Record<string, string> = {
  "salon-coiffure": "✂️",
  "jo-finance": "📊",
  "parc-informatique": "🖥️",
  "portfolio": "🧑‍💻",
  "github-pages": "🌐",
  "projet-git": "🔀",
};

export function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-widest">
              {t.projects.sectionLabel}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              {t.projects.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.projects.description}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.15}>
              <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-100 dark:hover:shadow-purple-900/20 h-full flex flex-col">
                {/* Thumbnail */}
                <div className="relative h-52 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {projectIcons[project.slug] ?? "💻"}
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                      {lang === "fr" ? project.titleFr : project.titleEn}
                    </p>
                  </div>
                  {project.featured && (
                    <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {t.projects.featured}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-2">
                    {lang === "fr" ? project.titleFr : project.titleEn}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed flex-1">
                    {lang === "fr" ? project.descriptionFr : project.descriptionEn}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-purple-50 dark:bg-slate-700 text-purple-700 dark:text-slate-300 text-xs px-3 py-1 rounded-full border border-purple-100 dark:border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        {t.projects.github}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {t.projects.demo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 px-6 py-3 rounded-xl font-medium transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              {t.projects.viewAll}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
