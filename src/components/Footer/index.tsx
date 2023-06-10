import logo_footer from "../../assets/logo_footer.png"
import up from "../../assets/up arrow.png"
import { FooterStyled } from "./style"


export const Footer = () => {
    return (
        <FooterStyled>
            <img src={logo_footer} alt="" />
            <p>@ 2023 - Todos os direitos reservados</p>
            <a href="main"><img className="up" src={up} alt="" /></a>
        </FooterStyled>
    )
}