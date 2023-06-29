import { useContext } from "react"
import { AnnouncementPageContext } from "../providers/AnnouncementPageProvider"

export const useAnnouncementPage = () => {
    const useAnnouncementPageContext = useContext(AnnouncementPageContext)

    return useAnnouncementPageContext
}