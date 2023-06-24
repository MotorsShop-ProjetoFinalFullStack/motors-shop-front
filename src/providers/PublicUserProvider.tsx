import { ReactNode, createContext, useEffect, useState } from "react";
import { Car, User } from "./CarProvider";
import { api } from "../service";
import { useNavigate } from "react-router-dom";
import { useCar } from "../hooks/useCar";

interface PublicUserProviderProps {
    children: ReactNode
}

interface PublicUserContextValues {
    goPublicPage: (id: string) => void,
    publicUser: User,
    carsUserPublic: Car[]
}

export const PublicUserContext = createContext<PublicUserContextValues>({} as PublicUserContextValues)

export const PublicUserProvider = ({children}: PublicUserProviderProps) => {

    const {allCars} = useCar()

    const navigate = useNavigate()

    const [publicUser, setPublicUser] = useState<User>({} as User)
    
    const [carsUserPublic, setCarsUserPublic]= useState<Car[]>([] as Car[])

    const goPublicPage = async (id: string) => {

        const tokenPublicUser: string | null = localStorage.getItem("@PublicUser")
        
        if(tokenPublicUser){
            localStorage.removeItem("@PublicUser")
        }

        try{

            const request = await api.get(`/users/${id}`)

            const userRequest: User = request.data
            setPublicUser(userRequest)

            localStorage.setItem("@PublicUser", userRequest.id)

            const arrayCarsUserPublic: Car[] = allCars.filter((car) => {
                return car.user.id === userRequest.id
            })

            setCarsUserPublic(arrayCarsUserPublic)

            navigate("/userAdvertiserPublic")

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {

        const getPublicUser = async () => {
            const token: string | null = localStorage.getItem("@PublicUser")

            if(token){
                const request = await api.get(`/users/${token}`)

                const userRequest: User = request.data

                setPublicUser(userRequest)
            }
        }

        const getCarsUserPublic = () => {
            const arrayCarsUserPublic: Car[] = allCars.filter((car) => {
                return car.user.id === publicUser.id
            })

            setCarsUserPublic(arrayCarsUserPublic)
        }

        getPublicUser()
        getCarsUserPublic()

    }, [allCars])

    return (
        <PublicUserContext.Provider value={{goPublicPage, publicUser, carsUserPublic}}>
            {children}
        </PublicUserContext.Provider>
    )

}
