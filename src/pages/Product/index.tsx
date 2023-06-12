import { HeaderStyled, MainStyled } from "./style"
import image from "../../assets/porsche2.png"
import logo from "../../assets/logo.png"
import { Footer } from "../../components/Footer"



const ProductPage = () => {

    

    return (
        
        <>
            
            <MainStyled>
                <HeaderStyled>
                    <img src={logo} alt="" />
                    <div className="divHead">
                        <p className="commentLetter">SL</p>
                        <p className="commentName">Samuel Leão</p>                                
                    </div>
                </HeaderStyled>
                <div className="divBg"></div>            
                <div className="divSections">
                    <section className="fistSection">
                        <div className="productImg">
                            <img src={image} alt="" />
                        </div>
                        <div className="productInfo">
                            <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN</h2>
                            <div className="kmAndPrice">
                                <div className="kmAndYear">
                                    <p>2013</p>
                                    <p>0 KM</p>
                                </div>
                                <p>R$ 245.000,00</p>
                            </div>
                            <button>Comprar</button>
                        </div>
                        <div className="productDescription">
                            <h2>Descrição</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
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
                            <p className="nameLetters">FG</p>
                            <p className="nameComplete">Fernando Guerino</p>
                            <p className="userDescription">Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry. Lorem Ipsum has been the industry's
                            </p>
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