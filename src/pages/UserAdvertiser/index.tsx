import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { ListUserCars } from "../../components/ListUserCars"
import { ModalCreateAdvertiser } from "../../components/ModalCreateAdvertiser"
import { UserAdvertiserSection } from "../../components/UserAdvertiserSection"
import { useUserCar } from "../../hooks/useUserCar"
import { UserAdvertiserStyled } from "./styled"

export const UserAdvertiser = () => {
    
    const {modalCreateAdvertiser} = useUserCar()

    return (
        <UserAdvertiserStyled>
            <Header type={"dashboard"}/>
            <UserAdvertiserSection isPublic={false}/>
            <ListUserCars/>
            <Footer/>
            {modalCreateAdvertiser ? (
                <ModalCreateAdvertiser/>
            ):(
                null
            )}
        </UserAdvertiserStyled>
    )

}