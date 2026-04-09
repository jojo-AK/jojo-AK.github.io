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
    year: "2023 — 2026 (en cours)",
    titleFr: "Licence IA / Big Data",
    titleEn: "Bachelor's in AI / Big Data (ongoing)",
    placeFr: "Collège de Paris Supérieur",
    placeEn: "Collège de Paris Supérieur",
    descriptionFr:
      "Formation en intelligence artificielle, Big Data, développement web full-stack et analyse de données.",
    descriptionEn:
      "Training in artificial intelligence, Big Data, full-stack web development and data analysis.",
    type: "education",
  },
];
