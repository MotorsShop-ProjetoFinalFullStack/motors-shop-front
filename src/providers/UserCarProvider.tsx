import React, { createContext, ReactNode, useEffect, useState } from "react"
import { databaseCars } from "./../components/ListCars/database"
import { CreateAnnouncementData } from "../components/ModalCreateAdvertiser/validator"

interface UserCarProviderProps {
    children: ReactNode
}

interface Car {
    id: number,
    brand: string,
    model: string,
    year: number,
    fuel: string,
    km: number,
    color: string,
    fipePrice: number,
    price: number,
    description: string,
    image: string,
    user: string
}

interface UserCarContextValues {
    allUserCars: Car[],
    modalCreateAdvertiser: boolean,
    setModalCreateAdvertiser: React.Dispatch<React.SetStateAction<boolean>>,
    createAnnouncement: (data: CreateAnnouncementData) => void

}

export const UserCarContext = createContext<UserCarContextValues>({} as UserCarContextValues)

export const UserCarProvider = ({children}: UserCarProviderProps) => {

    const [allUserCars, setAllUserCars] = useState<Car[]>([])

    const [modalCreateAdvertiser, setModalCreateAdvertiser] = useState<boolean>(false)

    const createAnnouncement = async (data: CreateAnnouncementData) => {
        const dataToRegister = {
            brand: data.brand,
            model: data.model,
            year: parseInt(data.year),
            fuel: data.fuel,
            km: parseInt(data.km),
            color: data.color,
            fipePrice: parseInt(data.fipePrice),
            price: parseInt(data.fipePrice),
            description: data.description,
            image: data.image
        }
        console.log(dataToRegister)
    }

    useEffect(() => {

        const getAllUserCars = () => {
            setAllUserCars(databaseCars)
        }

        getAllUserCars()

    }, [])

    return (
        <UserCarContext.Provider value={{allUserCars, modalCreateAdvertiser, setModalCreateAdvertiser, createAnnouncement}}>
            {children}
        </UserCarContext.Provider>
    )

}