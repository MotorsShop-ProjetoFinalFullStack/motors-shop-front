import { ReactNode, createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../service"
import { Car, User } from "./CarProvider"
import { CreateCommentData } from "../components/FormComment/validator"
import { UpdateCommentData } from "../components/ModalComment/validator"

export interface Comment {
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
    setAnnouncementId: React.Dispatch<React.SetStateAction<string | undefined>>,
    messageNoComments: boolean,
    toComment: (data: CreateCommentData) => void,
    openModalComment: (type: string, id: string) => void,
    modalComment: boolean,
    isEdit: boolean,
    closeModal: () => void,
    removeComment: () => void,
    updateComment: (data: UpdateCommentData) => void
}

export const AnnouncementPageContext = createContext<AnnouncementPageContextValues>({} as AnnouncementPageContextValues)

export const AnnouncementPageProvider = ({children}: AnnouncementPageProviderProps) => {

    const navigate = useNavigate()

    const [announcementId, setAnnouncementId] = useState<string | undefined>()
    const [carAnnouncement, setCarAnnouncement] = useState<Car>({} as Car)
    const [comments, setComments] = useState<Comment[]>([])
    const [messageNoComments, setMessageNoComments] = useState<boolean>(false)
    const [commentId, setCommentId] = useState<string>("")
    const [modalComment, setModalComment] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    
    const goAnnouncementPage = (id: string) => {
        setAnnouncementId(id)
        navigate("/announcement")
    }

    const toComment = async (data: CreateCommentData) => {
        const token: string | null = localStorage.getItem("@Token")
        const tokenIdAnnouncement: string | null = localStorage.getItem("@announcementId")

        if(token && tokenIdAnnouncement){
            try{
                await api.post(`/comments/announcements/${announcementId}`, data, {headers: {authorization: `Bearer ${token}`}})

                setAnnouncementId(tokenIdAnnouncement)
                window.location.reload()
            }catch(err){
                console.log(err)
            }
        }
    }

    const openModalComment = (type: string, id:string) => {
        if(type === "edit"){
            setIsEdit(true)
        }else{
            setIsEdit(false)
        }
        setModalComment(true)
        setCommentId(id)
    }

    const closeModal = () => {
        setIsEdit(false)
        setModalComment(false)
    }

    const updateComment = async (data: UpdateCommentData) => {
        const token: string | null = localStorage.getItem("@Token")
        console.log(data)
        try{
            await api.patch(`/comments/update/${commentId}`, data, {headers: {authorization: `Bearer ${token}`}})

            setIsEdit(false)
            setModalComment(false)

            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const removeComment = async () => {

        const token: string | null = localStorage.getItem("@Token")

        try{
            await api.delete(`/comments/delete/${commentId}`, {headers: { authorization: `Bearer ${token}`}})
            setIsEdit(false)
            setModalComment(false)

            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        const getAnnouncement = async (id: string | undefined) => {

            const idAnnouncement: string | null = localStorage.getItem("@announcementId")

            if(idAnnouncement){
                localStorage.removeItem("@announcementId")
            }

            if(id){
                try{
                    const request = await api.get(`/announcements/unique/${announcementId}`)

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
                    setMessageNoComments(false)
                    setComments(commentsResponse.sort((a, b): number => {
                        const timeA = a.createdAt
                        const timeB = b.createdAt

                        if(timeA < timeB){
                            return 1
                        }

                        if(timeA > timeB){
                            return -1
                        }

                        return 0
                    }))
                }catch(err){
                    setMessageNoComments(true)
                }
            }
        }

        getAnnouncement(announcementId)
        getComments(announcementId)
    }, [announcementId])

    return (
        <AnnouncementPageContext.Provider value={{goAnnouncementPage, carAnnouncement, comments, setAnnouncementId, messageNoComments, toComment, openModalComment, modalComment, isEdit, closeModal, removeComment, updateComment}}>
            {children}
        </AnnouncementPageContext.Provider>
    )
    
}