import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { ListCars } from "../../components/ListCars"
import { UserAdvertiserSection } from "../../components/UserAdvertiserSection"
import { useAuth } from "../../hooks/useAuth"
import { PublicUserAdvertiserStyled } from "./styled"

export const PublicUserAdvertiser = () => {

    const {login} = useAuth()

    const typeHeader = () => {
        if(login){
            return "dashboard"
        }else{
            return "login"
        }
    }

    return (
        <PublicUserAdvertiserStyled>
            <Header type={typeHeader()}/>
            <UserAdvertiserSection isPublic={true}/>
            <main>
                <div className="contentPublicPage">
                    <h2>Anúncios</h2>
                    <ListCars isPublic={true}/>
                </div>
            </main>
            <Footer/>
        </PublicUserAdvertiserStyled>
    )

}