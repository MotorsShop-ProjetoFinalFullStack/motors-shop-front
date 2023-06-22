import { SectionHomeCarStyled } from "./styled"
import homeCar from "./../../assets/homeCar.png"


export const SectionHomeCar = () => {

    return (
        <SectionHomeCarStyled>
            <section className="sectionImg">
                <img src={homeCar} alt="Imagem de um carro" />
            </section>
            <section className="sectionContent">
                <h1>Motors Shop</h1>
                <p>A melhor plataforma de anúncios de carros do país</p>
            </section>
        </SectionHomeCarStyled>
    )

}