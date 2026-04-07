"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { personal } from "@/data/personal";

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-slate-950 pt-16"
    >
      {/* Blobs décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Badge disponibilité */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {personal.available && (
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {t.hero.available}
            </div>
          )}
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg shadow-purple-200 dark:shadow-purple-900/30 overflow-hidden border-4 border-purple-200 dark:border-purple-800"
        >
          <Image
            src="/WhatsApp Image 2026-04-06 at 23.14.00.jpeg"
            alt="AKPATCHA Joseph"
            width={96}
            height={96}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4"
        >
          {t.hero.greeting}{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {personal.firstName}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-semibold mb-10"
        >
          {personal.title}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900/30 hover:-translate-y-0.5"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-8 md:gap-12 justify-center mt-16 pt-12 border-t border-slate-100 dark:border-slate-800"
        >
          {personal.stats.map((stat) => (
            <div key={stat.labelFr} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                {stat.number}
              </div>
              <div className="text-slate-500 text-sm mt-1">
                {lang === "fr" ? stat.labelFr : stat.labelEn}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600">
        <span className="text-xs">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-600 animate-pulse" />
      </div>
    </section>
  );
}
