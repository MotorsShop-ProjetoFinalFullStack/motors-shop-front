import { ReactNode, createContext, useState } from "react"
import { TLoginData } from "../pages/Login/validator"
import { api } from "../service"

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    singIn: (data: TLoginData) => void,
    login: boolean,
    messageError: boolean
}


export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) => {

    const [login, setLogin] = useState<boolean>(false)
    const [messageError, setMessageError] = useState<boolean>(false)

    const singIn = async (data: TLoginData) => {
        try{
            const response = await api.post("/login", data)

            localStorage.setItem("@Token", response.data.token)

            setMessageError(false)
            setLogin(true)
        }catch(err){
            setMessageError(true)
        }
    }

    return (
        <AuthContext.Provider value={{singIn, login, messageError}}>
            {children}
        </AuthContext.Provider>
    )

}