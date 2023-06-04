import * as z from "zod";

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.string(),
  description: z.object({
    heading: z.string(),
    piecies: z.number().optional(),
    weight: z.number().optional(),
    unit: z.string().optional(),
    origin: z
      .object({
        country: z.string(),
        flag: z.string(),
      })
      .optional(),
  }),
  price: z.number(),
  isFavorite: z.boolean(),
  promo: z.string().optional(),
  image: z.string(),
  rate: z.number(),
  totalRates: z.number(),
});

export type ProductType = z.infer<typeof ProductSchema>;
