import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { HomeMain } from "../../components/HomeMain"
import { SectionHomeCar } from "../../components/SectionHomeCar"
import { useAuth } from "../../hooks/useAuth"
import { HomeStyled } from "./styled"

export const Home = () => {

    const {login} = useAuth()

    const typeHeader = () => {
        if(login){
            return "dashboard"
        }else{
            return "login"
        }
    }

    return (
        <HomeStyled>
            <Header type={typeHeader()}/>
            <SectionHomeCar/>
            <HomeMain/>
            <Footer/>
        </HomeStyled>
    )

}