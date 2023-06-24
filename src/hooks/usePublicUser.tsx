import { useContext } from "react"
import { PublicUserContext } from "../providers/PublicUserProvider"

export const usePublicUser = () => {
    const publicUserContext = useContext(PublicUserContext)

    return publicUserContext
}