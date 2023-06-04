import * as z from "zod";

export const LeadSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
  cta: z.string(),
  linkedTo: z.string().url(),
});

export type LeadType = z.infer<typeof LeadSchema>;
