import { useUserCar } from "../../hooks/useUserCar"
import { InputModalCreate } from "../InputModalCreate"
import { ModalCreateAdvertiserStyled } from "./styled"

export const ModalCreateAdvertiser = () => {

    const {setModalCreateAdvertiser} = useUserCar()

    return (
        <ModalCreateAdvertiserStyled>
            <div className="modalContent">
                <div className="titleCloseModal">
                    <h1>Criar anúncio</h1>
                    <button onClick={() => {setModalCreateAdvertiser(false)}}>x</button>
                </div>
                <div className="carInfo">
                    <p>Informações do veículo</p>
                    <form>
                        <InputModalCreate label="Marca" placeholder="Digite a marca" type="text" width50={false}/>
                        <InputModalCreate label="Modelo" placeholder="Digite o modelo" type="text" width50={false}/>
                        <div className="twoInputs">
                            <InputModalCreate label="Ano" placeholder="Ano" type="text" width50={true}/>
                            <InputModalCreate label="Combustível" placeholder="Combustível" type="text" width50={true}/>
                        </div>
                        <div className="twoInputs">
                            <InputModalCreate label="Quilometragem" placeholder="Quilometragem" type="text" width50={true}/>
                            <InputModalCreate label="Cor" placeholder="Cor" type="text" width50={true}/>
                        </div>
                        <div className="twoInputs">
                            <InputModalCreate label="Preço tabela FIPE" placeholder="Preço tabela" type="text" width50={true}/>
                            <InputModalCreate label="Preço" placeholder="Preço" type="text" width50={true}/>
                        </div>
                        <div className="divTextarea">
                            <label>Descrição</label>
                            <textarea name="" id=""/>
                        </div>
                        <InputModalCreate label="Imagem da capa" placeholder="URL imagem" type="text" width50={false}/>
                        <div className="divButtons">
                            <button className="buttonCancel" onClick={() => {setModalCreateAdvertiser(false)}}>Cancelar</button>
                            <button type="submit" className="buttonCreate">Criar anúncio</button>
                        </div>
                    </form>
                </div>
            </div>
        </ModalCreateAdvertiserStyled>
    )

}