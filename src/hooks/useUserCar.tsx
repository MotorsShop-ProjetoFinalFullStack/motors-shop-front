import { useContext } from "react"
import { UserCarContext } from "../providers/UserCarProvider"

export const useUserCar = () => {
    const userCarContext = useContext(UserCarContext)

    return userCarContext
}