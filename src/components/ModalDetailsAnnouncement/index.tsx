import { useEffect, useState } from "react"
import { useUserCar } from "../../hooks/useUserCar"
import { ModalDetailsAnnouncementStyled } from "./styled"
import { api } from "../../service"
import { Car } from "../../providers/CarProvider"

export const ModalDetailsAnnouncement = () => {

    const { closeModalDetail, carDetailId } = useUserCar()

    const [car, setCar] = useState<Car>({} as Car)

    const getYear = (year: string) => {
        const date = new Date(year);
    
        return date.getFullYear();
      };

    useEffect(() => {

        const getCar = async () => {
            try{
                const request = await api.get(`/announcements/unique/${carDetailId}`)

                const carRequest: Car = request.data
                setCar(carRequest)
            }catch(err){
                console.log(err)
            }
        }

        getCar()

    }, [carDetailId])

    return (
        <ModalDetailsAnnouncementStyled>
            <div className="modalContent">
                <div className="divTitleCloseModal">
                    <h1>{car.brand} - {car.model}</h1>
                    <button onClick={() => {closeModalDetail()}}>x</button>
                </div>
                <div className="divImage">
                    <img src={car.image} alt="Imagem do carro"/>
                </div>
                <div className="details">
                    <h1>Detalhes</h1>
                    <div className="contentDetails">
                        <p><span>Ano:</span> {getYear(car.year)}</p>
                        <p><span>Cor:</span> {car.color}</p>
                        <p><span>Combustível:</span> {car.fuel}</p>
                        <p><span>Preço:</span> R${car.price}</p>
                        <p><span>Tabela FIPE:</span> R${car.fipePrice}</p>
                    </div>
                </div>
                <div className="description">
                    <h1>Descrição</h1>
                    <div className="descriptionContent">
                        <p>{car.description}</p>
                    </div>
                </div>
            </div>
        </ModalDetailsAnnouncementStyled>
    )

}