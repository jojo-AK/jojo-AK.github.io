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
    titleFr: "Salon de Coiffure",
    titleEn: "Hair Salon App",
    descriptionFr:
      "Application web complète : présentation du salon, réservation en ligne et gestion des rendez-vous.",
    descriptionEn:
      "Full web app: salon presentation, online booking and appointment management.",
    image: "/projects/salon-coiffure.png",
    tags: ["HTML", "CSS", "Python", "Flask"],
    github: "https://github.com/jojo-AK/salon-coiffure",
    featured: true,
  },
  {
    slug: "jo-finance",
    titleFr: "Gestion Finance",
    titleEn: "Finance Dashboard",
    descriptionFr:
      "App web de suivi des dépenses avec visualisation graphique des KPIs financiers : solde, tendances, catégories.",
    descriptionEn:
      "Web app to track expenses with graphical visualization of financial KPIs: balance, trends, categories.",
    image: "/projects/jo-finance.png",
    tags: ["HTML", "CSS", "Python", "Matplotlib"],
    github: "https://github.com/jojo-AK/jo-finance",
    featured: true,
  },
  {
    slug: "parc-informatique",
    titleFr: "Parc Informatique",
    titleEn: "IT Asset Manager",
    descriptionFr:
      "Application PHP de gestion et suivi d'un parc informatique : inventaire, affectations et historique.",
    descriptionEn:
      "PHP application to manage and track IT assets: inventory, assignments and history.",
    image: "/projects/parc-informatique.png",
    tags: ["PHP", "CSS", "JavaScript"],
    github: "https://github.com/jojo-AK",
    featured: true,
  },
  {
    slug: "portfolio",
    titleFr: "Portfolio Personnel",
    titleEn: "Personal Portfolio",
    descriptionFr:
      "Site portfolio en React/TypeScript pour mettre en valeur mes projets et compétences.",
    descriptionEn:
      "Portfolio website in React/TypeScript to showcase my projects and skills.",
    image: "/projects/portfolio.png",
    tags: ["React", "TypeScript"],
    github: "https://github.com/jojo-AK/portfolio_joseph",
    featured: false,
  },
  {
    slug: "github-pages",
    titleFr: "Site GitHub Pages",
    titleEn: "GitHub Pages Site",
    descriptionFr:
      "Site statique personnel publié sur GitHub Pages, construit avec TypeScript.",
    descriptionEn:
      "Personal static site published on GitHub Pages, built with TypeScript.",
    image: "/projects/github-pages.png",
    tags: ["TypeScript", "GitHub Pages"],
    github: "https://github.com/jojo-AK/jojo-AK.github.io",
    demo: "https://jojo-ak.github.io",
    featured: false,
  },
  {
    slug: "projet-git",
    titleFr: "Projet Git & Versionning",
    titleEn: "Git & Versioning Project",
    descriptionFr:
      "Initiation au versionnage et aux bonnes pratiques Git avec un projet de test.",
    descriptionEn:
      "Introduction to versioning and Git best practices with a test project.",
    image: "/projects/projet-git.png",
    tags: ["Git", "GitHub"],
    github: "https://github.com/jojo-AK/mon_projet_git_joseph",
    featured: false,
  },
];
