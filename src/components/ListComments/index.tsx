import { useEffect } from "react"
import { useAnnouncementPage } from "../../hooks/useAnnouncementPage"
import { CardComment } from "../CardComment"
import { ListCommentsStyled } from "./styled"


export const ListComments = () => {

    const {comments, messageNoComments} = useAnnouncementPage()


    return (
        <ListCommentsStyled>
            <h2>Comentários</h2>
            {messageNoComments === false ? (
                comments.map((comment) => {
                    return (<CardComment key={comment.id} comment={comment}/>)
                })
            ):(
                <p>Não possui comentários!</p>
            )}
        </ListCommentsStyled>
    )

}