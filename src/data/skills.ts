export interface SkillCategory {
  nameFr: string;
  nameEn: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    nameFr: "Développement Web",
    nameEn: "Web Development",
    icon: "🌐",
    skills: [
      { name: "HTML / CSS / JS", level: 90 },
      { name: "PHP / Flask", level: 75 },
      { name: "React / Next.js", level: 80 },
      { name: "REST API", level: 80 },
    ],
  },
  {
    nameFr: "Data & Analyse",
    nameEn: "Data & Analysis",
    icon: "📊",
    skills: [
      { name: "Python", level: 80 },
      { name: "SQL / MySQL", level: 78 },
      { name: "Pandas / Matplotlib", level: 75 },
      { name: "Power BI / Tableau", level: 70 },
      { name: "Scikit-learn", level: 65 },
    ],
  },
  {
    nameFr: "Outils",
    nameEn: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code / Jupyter", level: 88 },
      { name: "Postman", level: 75 },
      { name: "Google Colab", level: 78 },
    ],
  },
];
