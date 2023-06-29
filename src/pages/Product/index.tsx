import { MainStyled } from "./style"
import image from "../../assets/porsche2.png"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { useAnnouncementPage } from "../../hooks/useAnnouncementPage"
import { useEffect } from "react"



const ProductPage = () => {

    const {carAnnouncement, setAnnouncementId} = useAnnouncementPage()
    
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

    return (
        
        <>
            
            <MainStyled>
                <Header type="login"/>
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
                            <button>Comprar</button>
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
                    <section className="thirdSection">
                        <ul className="coments">
                            <h2>Comentários</h2>
                            <li className="userComents">
                                <div className="divHead">
                                    <p className="commentLetter">JL</p>
                                    <p className="commentName">Júlia Lima</p>
                                    <p className="commentDate">há 3 dias</p>
                                </div>
                                <p className="commentText">Lorem Ipsum is simply dummy 
                                text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="userComents">
                                <div className="divHead">
                                    <p className="commentLetter">JL</p>
                                    <p className="commentName">Júlia Lima</p>
                                    <p className="commentDate">há 3 dias</p>
                                </div>
                                <p className="commentText">Lorem Ipsum is simply dummy 
                                text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                            <li className="userComents">
                                <div className="divHead">
                                    <p className="commentLetter">JL</p>
                                    <p className="commentName">Júlia Lima</p>
                                    <p className="commentDate">há 3 dias</p>
                                </div>
                                <p className="commentText">Lorem Ipsum is simply dummy 
                                text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </li>
                        </ul>
                        <div className="doComents">
                            <div className="divHead">
                                <p className="commentLetter">SL</p>
                                <p className="commentName">Samuel Leão</p>                                
                            </div>
                            <textarea name="addComments" id="addComments" cols={10} rows={4}></textarea>
                            <div className="divSubmit">
                                <div className="divResponses">
                                    <p>Gostei Muito</p>
                                    <p>Incrível</p>
                                    <p>Recomendarei para meus amigos!</p>
                                </div>
                                <button>Comentar</button>
                            </div>
                        </div>
                    </section>
                </div>
               <Footer/> 
            </MainStyled>
        </>
    )
}

export {ProductPage}