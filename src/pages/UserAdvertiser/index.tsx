import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { ListUserCars } from "../../components/ListUserCars"
import { UserAdvertiserSection } from "../../components/UserAdvertiserSection"
import { UserAdvertiserStyled } from "./styled"

export const UserAdvertiser = () => {   

    return (
        <UserAdvertiserStyled>
            <Header/>
            <UserAdvertiserSection/>
            <ListUserCars/>
            <Footer/>
        </UserAdvertiserStyled>
    )

}