import { useForm } from "react-hook-form"
import { useAnnouncementPage } from "../../hooks/useAnnouncementPage"
import { ModalCommentStyled } from "./styled"
import { UpdateCommentData, schemaUpdateComment } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"

export const ModalComment = () => {

    const {isEdit, closeModal, removeComment, updateComment} = useAnnouncementPage()

    const {register, handleSubmit, formState: {errors}} = useForm<UpdateCommentData>({
        mode: "onSubmit",
        resolver: zodResolver(schemaUpdateComment)
    })

    return (
        <ModalCommentStyled>
            <div className="modalContent">
                {isEdit ? (
                    <>
                        <div className="divTitleCloseModal">
                            <h1>Editar comentário</h1>
                            <button onClick={() => {closeModal()}}>x</button>
                        </div>
                        <form onSubmit={handleSubmit(updateComment)}>
                            <textarea {...register("content")}/>
                            <div className="divButtons">
                                <button type="submit">Confirmar alteração</button>
                                <button onClick={() => {closeModal()}}>Cancelar</button>
                            </div>
                        </form>
                    </>
                ):(
                    <>
                        <div className="divTitleCloseModal">
                            <h1>Remover comentário</h1>
                            <button onClick={() => {closeModal()}}>x</button>
                        </div>
                        <p>Tem certeza que deseja excluir seu comentário?</p>
                        <div className="divButtons">
                            <button onClick={() => {removeComment()}}>Excluir</button>
                            <button onClick={() => {closeModal()}}>Cancelar</button>
                        </div>
                    </>
                )}
            </div>
        </ModalCommentStyled>
    )

}