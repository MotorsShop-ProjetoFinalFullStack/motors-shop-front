import { CardCarStyled } from "./styled"

interface Car {
    id: number,
    brand: string,
    model: string,
    year: number,
    fuel: string,
    km: number,
    color: string,
    fipePrice: number,
    price: number,
    description: string,
    image: string,
    user: string
}

interface CardCarProps {
    car: Car
}

export const CardCar = ({car}: CardCarProps) => {

    return (
        <CardCarStyled>
            <div className="divImage">
                <img src={car.image} alt="Imagem carro" />
            </div>
            <div className="divContent">
                <h3>{car.brand} - {car.model}</h3>
                <p>{car.description}</p>
                <div className="divUser">
                    <h4>{car.user[0]}</h4>
                    <h5>{car.user}</h5>
                </div>
                <div className="divTagsPrice">
                    <div className="divTags">
                        <span>{car.km} KM</span>
                        <span>{car.year}</span>
                    </div>
                    <h3>R$ {(car.price).toFixed(2)}</h3>
                </div>
            </div>
        </CardCarStyled>
    )

}