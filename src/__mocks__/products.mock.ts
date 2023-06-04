import { ProductType } from "../Types/ProductSchema";

export const products: ProductType[] = [
  {
    id: "1",
    name: "Fusilli 00",
    brand: "Martinelli's",
    description: {
      heading: "Pâtes artisanale italienne, farine 00.",
      piecies: undefined,
      weight: 400,
      unit: "g",
      origin: {
        country: "Italie",
        flag: "🇮🇹",
      },
    },
    price: 4.25,
    isFavorite: false,
    promo: undefined,
    image: "https://side-projects-j0j0.s3.eu-west-3.amazonaws.com/bozhin-karaivanov-m5Ft3bsalhQ-unsplash.jpg",
    rate: 4.3,
    totalRates: 100,
  },
  {
    id: "2",
    name: "Tomates Grappes",
    brand: "Carrefour Bio",
    description: {
      heading: "Tomates gorgées de soleil provenant de la région niçoise.",
      piecies: 8,
      weight: 1000,
      unit: "g",
      origin: {
        country: "France",
        flag: "🇫🇷",
      },
    },
    price: 6.35,
    isFavorite: true,
    promo: "4.99€ l'un si 2 achetés",
    image: "https://side-projects-j0j0.s3.eu-west-3.amazonaws.com/josephine-baran-g4wzhY8qiMw-unsplash.jpg",
    rate: 3.9,
    totalRates: 88,
  },
];
