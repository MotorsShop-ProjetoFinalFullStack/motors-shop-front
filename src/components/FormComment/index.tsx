import { useAuth } from "../../hooks/useAuth"
import { User } from "../../providers/CarProvider"
import { FormCommentStyled } from "./styled"
import { useForm } from "react-hook-form"
import { CreateCommentData, schemaCreateComment } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAnnouncementPage } from "../../hooks/useAnnouncementPage"


export const FormComment = () => {

    const {login, user} = useAuth()
    const {toComment} = useAnnouncementPage()

    const userDetails = (user: User, type: string) => {
        if(type === "nameCode"){
            return `${user.name[0]}${user.name[1]}`
        }else{
            return user.name
        }
    }

    const {register, handleSubmit, formState: {errors}} = useForm<CreateCommentData>({
        mode: "onSubmit",
        resolver: zodResolver(schemaCreateComment)
    })

    return (
        <FormCommentStyled>
            {login === true ? (
                <form onSubmit={handleSubmit(toComment)}>
                    <div className="divHead">
                        <p className="commentLetter">{userDetails(user, "nameCode")}</p>
                        <p className="commentName">{userDetails(user, "name")}</p>                                
                    </div>
                    <textarea id="addComments" cols={10} rows={4} {...register("content")}/>
                    <p>{errors.content?.message}</p>
                    <div className="divSubmit">
                        <div className="divResponses">
                            <p>Gostei Muito</p>
                            <p>Incrível</p>
                            <p>Recomendarei para meus amigos!</p>
                        </div>
                        <button type="submit">Comentar</button>
                    </div>
                </form>
            ):(
                <p className="paragraphIsNotLogged">
                    Entre com sua conta para poder comentar o anúncio!
                </p>
            )}
        </FormCommentStyled>
    )
    
}