import { FormComment } from "../FormComment"
import { ListComments } from "../ListComments"
import { SectionCommentsStyled } from "./styled"


export const SectionComments = () => {
    
    return (
        <SectionCommentsStyled>
            <ListComments/>
            <FormComment/>
        </SectionCommentsStyled>
    )
    
}