import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { HomeMain } from "../../components/HomeMain"
import { SectionHomeCar } from "../../components/SectionHomeCar"
import { HomeStyled } from "./styled"

export const Home = () => {

    return (
        <HomeStyled>
            <Header type="login"/>
            <SectionHomeCar/>
            <HomeMain/>
            <Footer/>
        </HomeStyled>
    )

}