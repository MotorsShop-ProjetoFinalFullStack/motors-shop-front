import * as yup from "yup";

export const schemaEditAnnouncement = yup.object({
  brand: yup.string().optional(),
  model: yup.string().optional(),
  year: yup.string().optional(),
  fuel: yup.string().optional(),
  km: yup.string().optional(),
  color: yup.string().optional(),
  fipePrice: yup.string().optional(),
  price: yup.string().optional(),
  description: yup.string().optional(),
  image: yup.string().optional(),
});
export type EditAnnouncementData = yup.InferType<typeof schemaEditAnnouncement>;
