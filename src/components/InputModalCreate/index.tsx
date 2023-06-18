import { InputModalCreateStyled } from "./styled"

interface InputModalCreateProps {
    label: string,
    placeholder: string,
    type: string,
    width50: boolean,
    register: any,
    toRegister: string
}

export const InputModalCreate = ({label, placeholder, type, width50, register, toRegister}: InputModalCreateProps) => {

    return (
        <>
            {width50 ? (
                <InputModalCreateStyled $widthHalf>
                    <label>{label}</label>
                    <input type={type} placeholder={placeholder} {...register(toRegister)}/>
                </InputModalCreateStyled>
            ):(
                <InputModalCreateStyled>
                    <label>{label}</label>
                    <input type={type} placeholder={placeholder} {...register(toRegister)}/>
                </InputModalCreateStyled>
            )}
        </>
        
    )

}