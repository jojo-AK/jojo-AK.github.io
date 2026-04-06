export interface TimelineItem {
  year: string;
  titleFr: string;
  titleEn: string;
  placeFr: string;
  placeEn: string;
  descriptionFr: string;
  descriptionEn: string;
  type: "education" | "experience";
}

export const timeline: TimelineItem[] = [
  {
    year: "2024 — présent",
    titleFr: "Cycle Ingénieur / Master",
    titleEn: "Engineering Cycle / Master's",
    placeFr: "À compléter — Université / École",
    placeEn: "To fill in — University / School",
    descriptionFr:
      "Spécialisation en développement logiciel et systèmes d'information.",
    descriptionEn:
      "Specialization in software development and information systems.",
    type: "education",
  },
  {
    year: "2021 — 2024",
    titleFr: "Licence Informatique",
    titleEn: "Bachelor's in Computer Science",
    placeFr: "À compléter — Université / École",
    placeEn: "To fill in — University / School",
    descriptionFr:
      "Formation en algorithmique, développement web, bases de données et réseaux.",
    descriptionEn:
      "Training in algorithms, web development, databases and networking.",
    type: "education",
  },
  {
    year: "2023",
    titleFr: "Stage Développeur Web",
    titleEn: "Web Developer Internship",
    placeFr: "À compléter — Entreprise",
    placeEn: "To fill in — Company",
    descriptionFr:
      "Développement de fonctionnalités frontend et intégration d'API REST.",
    descriptionEn:
      "Development of frontend features and REST API integration.",
    type: "experience",
  },
];
