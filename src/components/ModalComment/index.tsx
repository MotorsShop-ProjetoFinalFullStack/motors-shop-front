import { useAnnouncementPage } from "../../hooks/useAnnouncementPage"
import { ModalCommentStyled } from "./styled"

export const ModalComment = () => {

    const {isEdit, closeModal} = useAnnouncementPage()

    return (
        <ModalCommentStyled>
            <div className="modalContent">
                {isEdit ? (
                    <>
                        <div className="divTitleCloseModal">
                            <h1>Editar comentário</h1>
                            <button onClick={() => {closeModal()}}>x</button>
                        </div>
                        <form>
                            <textarea/>
                            <div className="divButtons">
                                <button type="submit">Confirmar alteração</button>
                                <button onClick={() => {closeModal()}}>Cancelar</button>
                            </div>
                        </form>
                    </>
                ):(
                    <>
                        <div className="divTitleCloseModal">
                            <h1>Remover</h1>
                            <button onClick={() => {closeModal()}}>x</button>
                        </div>
                        <p>Tem certeza que deseja excluir seu comentário?</p>
                        <div className="divButtons">
                            <button>Excluir comentário</button>
                            <button onClick={() => {closeModal()}}>Cancelar</button>
                        </div>
                    </>
                )}
            </div>
        </ModalCommentStyled>
    )

}