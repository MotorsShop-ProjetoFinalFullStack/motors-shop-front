import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { HomeMain } from "../../components/HomeMain"
import { HomeStyled } from "./styled"

export const Home = () => {

    return (
        <HomeStyled>
            <Header type="login"/>
            <HomeMain/>
            <Footer/>
        </HomeStyled>
    )

}