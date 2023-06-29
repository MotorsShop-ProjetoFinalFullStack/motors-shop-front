import { ReactNode, createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../service"
import { Car, User } from "./CarProvider"

interface Comment {
    id: string,
    content: string,
    createdAt: string,
    user: User
}

interface AnnouncementPageProviderProps {
    children: ReactNode
}

interface AnnouncementPageContextValues {
    goAnnouncementPage:  (id: string) => void,
    carAnnouncement: Car,
    comments: Comment[],
    setAnnouncementId: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const AnnouncementPageContext = createContext<AnnouncementPageContextValues>({} as AnnouncementPageContextValues)

export const AnnouncementPageProvider = ({children}: AnnouncementPageProviderProps) => {

    const navigate = useNavigate()

    const [announcementId, setAnnouncementId] = useState<string | undefined>()
    const [carAnnouncement, setCarAnnouncement] = useState<Car>({} as Car)
    const [comments, setComments] = useState<Comment[]>([])
    
    const goAnnouncementPage = (id: string) => {
        setAnnouncementId(id)
        navigate("/announcement")
    }

    useEffect(() => {
        const getAnnouncement = async (id: string | undefined) => {

            const idAnnouncement: string | null = localStorage.getItem("@announcementId")

            if(idAnnouncement){
                localStorage.removeItem("@announcementId")
            }

            if(id){
                try{
                    const request = await api.get(`/announcements/${announcementId}`)

                    const carResponse: Car = request.data

                    localStorage.setItem("@announcementId", announcementId!)
                    setCarAnnouncement(carResponse)
                }catch(err){
                    console.log(err)
                }
            }
        }

        const getComments = async (id: string | undefined) => {
            if(id){
                try{

                    const request = await api.get(`/comments/announcements/${announcementId}`)

                    const commentsResponse: Comment[] = request.data
                    
                    setComments(commentsResponse)
                }catch(err){
                    console.log(err)
                }
            }
        }

        getAnnouncement(announcementId)
        getComments(announcementId)
    }, [announcementId])

    return (
        <AnnouncementPageContext.Provider value={{goAnnouncementPage, carAnnouncement, comments, setAnnouncementId}}>
            {children}
        </AnnouncementPageContext.Provider>
    )
    
}