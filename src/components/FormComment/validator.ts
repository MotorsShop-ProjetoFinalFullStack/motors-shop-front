import { z } from "zod"

export const schemaCreateComment = z.object({
    content: z.string().nonempty("Conteúdo do comentário obrigatório")
})

export type CreateCommentData = z.infer<typeof schemaCreateComment>

