import { LeadType } from "../Types/LeadSchema";

export const leads: LeadType[] = [
  {
    id: "1",
    title: "Courses du quotidien",
    description: "Retrait gratuit en drive ou livrées chez vous en 1h",
    image: "https://side-projects-j0j0.s3.eu-west-3.amazonaws.com/download-1.webp",
    cta: "Faire mes courses",
    linkedTo: "https://www.carrefour.fr/",
  },
  {
    id: "2",
    title: "Maison & Loisirs",
    description: "Retrait magasin gratuit, livraison gratuite dès 30€ d'achat",
    image: "https://side-projects-j0j0.s3.eu-west-3.amazonaws.com/destock.webp",
    cta: "Découvrir",
    linkedTo: "https://www.carrefour.fr/",
  },
];
