import { InputModalCreateStyled } from "./styled"

interface InputModalCreateProps {
    label: string,
    placeholder: string,
    type: string,
    width50: boolean
}

export const InputModalCreate = ({label, placeholder, type, width50}: InputModalCreateProps) => {

    return (
        <>
            {width50 ? (
                <InputModalCreateStyled $widthHalf>
                    <label>{label}</label>
                    <input type={type} placeholder={placeholder}/>
                </InputModalCreateStyled>
            ):(
                <InputModalCreateStyled>
                    <label>{label}</label>
                    <input type={type} placeholder={placeholder}/>
                </InputModalCreateStyled>
            )}
        </>
        
    )

}