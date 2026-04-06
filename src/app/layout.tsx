import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LangProvider } from "@/contexts/LangContext";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AKPATCHA Joseph — Développeur Full Stack",
  description:
    "Portfolio de AKPATCHA Joseph, développeur Full Stack passionné par React, Next.js, Node.js. Disponible pour un stage de mémoire.",
  keywords: [
    "développeur full stack",
    "React",
    "Next.js",
    "Node.js",
    "portfolio",
    "stage",
    "AKPATCHA Joseph",
  ],
  openGraph: {
    title: "AKPATCHA Joseph — Développeur Full Stack",
    description: "Portfolio de AKPATCHA Joseph, développeur Full Stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LangProvider>
            <Navbar />
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
