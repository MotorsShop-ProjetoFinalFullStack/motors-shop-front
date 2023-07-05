import { MainStyled } from "./style"
import image from "../../assets/porsche2.png"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { useAnnouncementPage } from "../../hooks/useAnnouncementPage"
import { useEffect } from "react"
import { SectionComments } from "../../components/SectionComments"
import { useAuth } from "../../hooks/useAuth"




const ProductPage = () => {

    const {carAnnouncement, setAnnouncementId} = useAnnouncementPage()
    const {login} = useAuth()

    const typeHeader = () => {
        if(login){
            return "dashboard"
        }else{
            return "login"
        }
    }
    
    const getYear = (year: string) => {
        const date = new Date(year)

        return date.getFullYear()
    }

    const getPrice = (price: number) => {
        if(price){
            return price.toFixed(2)
        }

        return "?"
    }

    const getUser = (type: string)  => {
        if(carAnnouncement.price){
            if(type === "nameCode"){
                return `${carAnnouncement.user.name[0]}${carAnnouncement.user.name[1]}`
            }

            if(type === "name"){
                return `${carAnnouncement.user.name}`
            }

            if(type === "description"){
                return `${carAnnouncement.user.description}`
            }
        }
        
        return "??"
    };

    useEffect(() => {
        const refreshPage = () => {
            const idAnnouncement: string | null= localStorage.getItem("@announcementId")

            if(idAnnouncement){
                setAnnouncementId(idAnnouncement)
            }
        }

        refreshPage()
    }, [])

    const handleBuyButton = () => {
        window.open(`https://api.whatsapp.com/send?phone=+55+${carAnnouncement.user.phone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20an%C3%BAncio%20na%20MotorShop%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20ve%C3%ADculo`, '_blank')
    }

    return (
        
        <>
            <MainStyled>
                <Header type={typeHeader()}/>
                <div className="divBg"></div>            
                <div className="divSections">
                    <section className="fistSection">
                        <div className="productImg">
                            <img src={carAnnouncement.image} alt="Imagem carro" />
                        </div>
                        <div className="productInfo">
                            <h2>{carAnnouncement.brand} {carAnnouncement.model}</h2>
                            <div className="kmAndPrice">
                                <div className="kmAndYear">
                                    <p>{getYear(carAnnouncement.year)}</p>
                                    <p>{carAnnouncement.km} KM</p>
                                </div>
                                <p>R$ {getPrice(carAnnouncement.price)}</p>
                            </div>
                            <button onClick={handleBuyButton}>Comprar</button>
                        </div>
                        <div className="productDescription">
                            <h2>Descrição</h2>
                            <p>{carAnnouncement.description}</p>
                        </div>                        
                    </section>
                    <section className="secondSection">
                        <div className="productImgs">
                            <p>Fotos</p>
                            <div className="divImgs">
                                <img src={image} alt="" />
                                <img src={image} alt="" />
                                <img src={image} alt="" />
                                <img src={image} alt="" />
                                <img src={image} alt="" />
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div className="userInfo">
                            <p className="nameLetters">{getUser("nameCode")}</p>
                            <p className="nameComplete">{getUser("name")}</p>
                            <p className="userDescription">{getUser("description")}</p>
                            <button>Ver todos os anuncios</button>
                        </div>
                    </section>
                    <SectionComments/>
                </div>
               <Footer/> 
            </MainStyled>
        </>
    )
}

export {ProductPage}