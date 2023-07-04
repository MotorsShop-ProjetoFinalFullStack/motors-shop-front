import React, { createContext, ReactNode, useEffect, useState } from "react"
import { CreateAnnouncementData } from "../components/ModalCreateAdvertiser/validator"
import { User } from "./CarProvider"
import { api } from "../service"
import { useAuth } from "../hooks/useAuth"

interface UserCarProviderProps {
    children: ReactNode
}

interface Car {
    id: number,
    brand: string,
    model: string,
    year: string,
    fuel: string,
    km: number,
    color: string,
    fipePrice: number,
    price: number,
    description: string,
    image: string,
    user: User
}

interface UserCarContextValues {
    allUserCars: Car[],
    modalCreateAdvertiser: boolean,
    setModalCreateAdvertiser: React.Dispatch<React.SetStateAction<boolean>>,
    createAnnouncement: (data: CreateAnnouncementData) => void,
    modalSuccess: boolean,
    setModalSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    createAdvertiserError: boolean,
    setCreateAdvertiserError: React.Dispatch<React.SetStateAction<boolean>>

}

export const UserCarContext = createContext<UserCarContextValues>({} as UserCarContextValues)

export const UserCarProvider = ({children}: UserCarProviderProps) => {

    const {login} = useAuth()

    const [allUserCars, setAllUserCars] = useState<Car[]>([])

    const [modalCreateAdvertiser, setModalCreateAdvertiser] = useState<boolean>(false)
    const [modalSuccess, setModalSuccess] = useState<boolean>(false)

    const [createAdvertiserError, setCreateAdvertiserError] = useState<boolean>(false)

    const createAnnouncement = async (data: CreateAnnouncementData) => {
        const dataToRegister = {
            brand: data.brand,
            model: data.model,
            year: `${data.year}-02-02`,
            fuel: data.fuel,
            km: parseInt(data.km),
            color: data.color,
            fipePrice: parseInt(data.fipePrice),
            price: parseInt(data.price),
            description: data.description,
            image: data.image
        }

        const token: string | null = localStorage.getItem("@Token")
        
        try{
            await api.post("/announcements", dataToRegister, {headers: {authorization: `Bearer ${token}`}})

            setModalSuccess(true)
        }catch(err){
            setCreateAdvertiserError(true)
        }
    }

    useEffect(() => {

        const getAllUserCars = async () => {

            const token: string | null = localStorage.getItem("@Token")

            if(!token){
                return null
            }

            try{
                const requestUserAnnouncements = await api.get("/announcements/users", {headers: {authorization: `Bearer ${token}`}})

                const userCars: Car[] = requestUserAnnouncements.data

                setAllUserCars(userCars)
                setCreateAdvertiserError(false)
            }catch(err){
                setCreateAdvertiserError(true)
            }
        }

        getAllUserCars()

    }, [login, modalSuccess])

    return (
        <UserCarContext.Provider value={{allUserCars, modalCreateAdvertiser, setModalCreateAdvertiser, createAnnouncement, modalSuccess, setModalSuccess, createAdvertiserError, setCreateAdvertiserError}}>
            {children}
        </UserCarContext.Provider>
    )

}