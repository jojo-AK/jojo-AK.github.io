export interface SkillCategory {
  nameFr: string;
  nameEn: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    nameFr: "Frontend",
    nameEn: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    nameFr: "Backend",
    nameEn: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "Python", level: 70 },
      { name: "REST API", level: 85 },
      { name: "Prisma / ORM", level: 72 },
    ],
  },
  {
    nameFr: "Base de données",
    nameEn: "Databases",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    nameFr: "Outils",
    nameEn: "Tools",
    icon: "🚀",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 60 },
      { name: "Vercel / Deploy", level: 80 },
    ],
  },
];
