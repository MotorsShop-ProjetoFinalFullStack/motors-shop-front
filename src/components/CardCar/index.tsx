import { Car } from "../../providers/CarProvider"
import { CardCarStyled } from "./styled"

interface CardCarProps {
    car: Car
}

export const CardCar = ({car}: CardCarProps) => {

    const getYear = (year: string) => {
        const date = new Date(year)

        return date.getFullYear()
    }

    return (
        <CardCarStyled>
            <div className="divImage">
                <img src={car.image} alt="Imagem carro" />
            </div>
            <div className="divContent">
                <h3>{car.brand} - {car.model}</h3>
                <p>{car.description}</p>
                <div className="divUser">
                    <h4>{car.user.name[0]}</h4>
                    <h5>{car.user.name}</h5>
                </div>
                <div className="divTagsPrice">
                    <div className="divTags">
                        <span>{car.km} KM</span>
                        <span>{getYear(car.year)}</span>
                    </div>
                    <h3>R$ {(car.price).toFixed(2)}</h3>
                </div>
            </div>
        </CardCarStyled>
    )

}