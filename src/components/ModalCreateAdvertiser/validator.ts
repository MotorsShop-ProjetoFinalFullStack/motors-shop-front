import { z } from "zod"

export const schemaCreateAnnouncement = z.object({
    brand: z.string().nonempty("Marca obrigatória"),
    model: z.string().nonempty("Modelo obrigatório"),
    year: z.string().nonempty("Ano obrigatório"),
    fuel: z.string().nonempty("Tipo de combustível obrigatório"),
    km: z.string().nonempty("Quilometragem obrigatória"),
    color: z.string().nonempty("Cor obrigatória"),
    fipePrice: z.string().nonempty("Preço da tabela obrigatório"),
    price: z.string().nonempty("Preço obrigatório"),
    description: z.string().nonempty("Descrição obrigatória"),
    image: z.string().nonempty("Imagem obrigatória")
})

export type CreateAnnouncementData = z.infer<typeof schemaCreateAnnouncement>