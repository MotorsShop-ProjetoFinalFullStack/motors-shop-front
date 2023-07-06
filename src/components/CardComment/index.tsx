import { Comment } from "../../providers/AnnouncementPageProvider"
import { CardCommentStyled } from "./styled"
import editImage from "./../../assets/edit.png"
import removeImage from "./../../assets/remove.png"
import { useAuth } from "../../hooks/useAuth"
import { useAnnouncementPage } from "../../hooks/useAnnouncementPage"

interface CardCommentProps{
    comment: Comment
}

export const CardComment = ({comment}: CardCommentProps) => {

    const {user, login} = useAuth() 
    const {openModalComment} = useAnnouncementPage()

    const getTimeComment = (time: string) => {
        const dateComment: Date = new Date(time)
        const dateNow: Date = new Date(Date.now())

        const days = (dateNow.getTime() - dateComment.getTime())/(1000 * 60 * 60 * 24)

        if(days < 1){
            return "hoje"
        }else{
            return `há ${days.toFixed(0)} dias`
        }
    }

    const getNames = (name: string, type: string) => {
        if(name && type === "nameCode"){
            return `${name[0]}${name[1]}`
        }

        if(name && type === "name"){
            return `${name}`
        }

        return "??"
    }
    
    return (
        <CardCommentStyled>
            <div className="divContent">
                <div className="divHead">
                    <p className="commentLetter">{getNames(comment.user.name, "nameCode")}</p>
                    <p className="commentName">{getNames(comment.user.name, "name")}</p>
                    <p className="commentDate">{getTimeComment(comment.createdAt)}</p>
                </div>
                <p className="commentText">
                    {comment.content}
                </p>
            </div>
            {login && user.cpf === comment.user.cpf ? (
                <div className="divButtons">
                    <button onClick={() => {openModalComment("edit", comment.id)}}><img src={editImage} alt="Edit"/></button>
                    <button onClick={() => {openModalComment("remove", comment.id)}}><img src={removeImage} alt="Remove"/></button>
                </div>
            ):(
                null
            )}
        </CardCommentStyled>
    )
    
}