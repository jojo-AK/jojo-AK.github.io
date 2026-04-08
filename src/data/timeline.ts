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
    year: "2022 — 2025",
    titleFr: "Licence IA / Big Data",
    titleEn: "Bachelor's in AI / Big Data",
    placeFr: "Collège de Paris Supérieur",
    placeEn: "Collège de Paris Supérieur",
    descriptionFr:
      "Formation en intelligence artificielle, Big Data, développement web full-stack et analyse de données.",
    descriptionEn:
      "Training in artificial intelligence, Big Data, full-stack web development and data analysis.",
    type: "education",
  },
];
