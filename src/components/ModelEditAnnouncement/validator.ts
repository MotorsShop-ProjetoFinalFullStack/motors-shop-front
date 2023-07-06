import { z } from "zod";

export const schemaEditAnnouncement = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.string().optional(),
  fuel: z.string().optional(),
  km: z.string().optional(),
  color: z.string().optional(),
  fipePrice: z.string().optional(),
  price: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
});
export type EditAnnouncementData = z.infer<typeof schemaEditAnnouncement>;
