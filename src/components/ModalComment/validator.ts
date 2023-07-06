import { z } from "zod"

export const schemaUpdateComment = z.object({
    content: z.string().nonempty("Conteúdo obrigatório.")
})

export type UpdateCommentData = z.infer<typeof schemaUpdateComment>