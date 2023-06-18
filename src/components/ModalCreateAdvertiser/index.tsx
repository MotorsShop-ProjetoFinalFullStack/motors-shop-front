import { useForm } from "react-hook-form"
import { useUserCar } from "../../hooks/useUserCar"
import { InputModalCreate } from "../InputModalCreate"
import { ModalCreateAdvertiserStyled } from "./styled"
import { CreateAnnouncementData, schemaCreateAnnouncement } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"

export const ModalCreateAdvertiser = () => {

    const {setModalCreateAdvertiser, createAnnouncement} = useUserCar()

    const {register, handleSubmit, formState: {errors}} = useForm<CreateAnnouncementData>({
        mode: "onBlur",
        resolver: zodResolver(schemaCreateAnnouncement)
    })

    return (
        <ModalCreateAdvertiserStyled>
            <div className="modalContent">
                <div className="titleCloseModal">
                    <h1>Criar anúncio</h1>
                    <button onClick={() => {setModalCreateAdvertiser(false)}}>x</button>
                </div>
                <div className="carInfo">
                    <p>Informações do veículo</p>
                    <form onSubmit={handleSubmit(createAnnouncement)}>
                        <InputModalCreate label="Marca" placeholder="Digite a marca" type="text" width50={false} register={register} toRegister="brand"/>
                        <InputModalCreate label="Modelo" placeholder="Digite o modelo" type="text" width50={false} register={register} toRegister="model"/>
                        <div className="twoInputs">
                            <InputModalCreate label="Ano" placeholder="Ano" type="number" width50={true} register={register} toRegister="year"/>
                            <InputModalCreate label="Combustível" placeholder="Combustível" type="text" width50={true} register={register} toRegister="fuel"/>
                        </div>
                        <div className="twoInputs">
                            <InputModalCreate label="Quilometragem" placeholder="Quilometragem" type="number" width50={true} register={register} toRegister="km"/>
                            <InputModalCreate label="Cor" placeholder="Cor" type="text" width50={true} register={register} toRegister="color"/>
                        </div>
                        <div className="twoInputs">
                            <InputModalCreate label="Preço tabela FIPE" placeholder="Preço tabela" type="number" width50={true} register={register} toRegister="fipePrice"/>
                            <InputModalCreate label="Preço" placeholder="Preço" type="number" width50={true} register={register} toRegister="price"/>
                        </div>
                        <div className="divTextarea">
                            <label>Descrição</label>
                            <textarea {...register("description")}/>
                        </div>
                        <InputModalCreate label="Imagem da capa" placeholder="URL imagem" type="text" width50={false} register={register} toRegister="image"/>
                        <div className="divErrors">
                            <p>{errors.brand?.message}</p>
                            <p>{errors.model?.message}</p>
                            <p>{errors.year?.message}</p>
                            <p>{errors.fuel?.message}</p>
                            <p>{errors.km?.message}</p>
                            <p>{errors.color?.message}</p>
                            <p>{errors.fipePrice?.message}</p>
                            <p>{errors.price?.message}</p>
                            <p>{errors.description?.message}</p>
                            <p>{errors.image?.message}</p>
                        </div>
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