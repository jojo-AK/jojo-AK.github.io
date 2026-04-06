export interface Project {
  slug: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "salon-coiffure",
    titleFr: "Salon Coiffure",
    titleEn: "Hair Salon App",
    descriptionFr:
      "Application web complète de gestion pour salon de coiffure : prise de rendez-vous en ligne, suivi des clients et gestion du personnel.",
    descriptionEn:
      "Full web management app for a hair salon: online booking, client tracking and staff management.",
    image: "/projects/salon-coiffure.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/jojo-AK/salon-coiffure",
    featured: true,
  },
  {
    slug: "jo-finance",
    titleFr: "Jo Finance",
    titleEn: "Jo Finance",
    descriptionFr:
      "Tableau de bord de gestion financière personnelle avec suivi des dépenses, revenus et objectifs d'épargne.",
    descriptionEn:
      "Personal finance dashboard to track expenses, income, and savings goals with interactive charts.",
    image: "/projects/jo-finance.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Chart.js"],
    github: "https://github.com/jojo-AK/jo-finance",
    featured: true,
  },
];
