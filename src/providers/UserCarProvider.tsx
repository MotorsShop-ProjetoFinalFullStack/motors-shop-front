import React, { createContext, ReactNode, useEffect, useState } from "react"
import { databaseCars } from "./../components/ListCars/database"

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
    setModalCreateAdvertiser: React.Dispatch<React.SetStateAction<boolean>>

}

export const UserCarContext = createContext<UserCarContextValues>({} as UserCarContextValues)

export const UserCarProvider = ({children}: UserCarProviderProps) => {

    const [allUserCars, setAllUserCars] = useState<Car[]>([])

    const [modalCreateAdvertiser, setModalCreateAdvertiser] = useState<boolean>(false)

    useEffect(() => {

        const getAllUserCars = () => {
            setAllUserCars(databaseCars)
        }

        getAllUserCars()

    }, [])

    return (
        <UserCarContext.Provider value={{allUserCars, modalCreateAdvertiser, setModalCreateAdvertiser}}>
            {children}
        </UserCarContext.Provider>
    )

}