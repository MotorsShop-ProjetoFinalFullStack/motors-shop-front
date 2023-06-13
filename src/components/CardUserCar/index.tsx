import { CardUserCarStyled } from "./styled"

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

interface CardUserCarProps {
    car: Car
}

export const CardUserCar = ({car}: CardUserCarProps) => {

    return (
        <CardUserCarStyled>
            <div className="divImage">
                <img src={car.image} alt="Imagem carro" />
            </div>
            <div className="divContent">
                <h3>{car.brand} - {car.model}</h3>
                <p>{car.description}</p>
                <div className="divTagsPrice">
                    <div className="divTags">
                        <span>{car.km} KM</span>
                        <span>{car.year}</span>
                    </div>
                    <h3>R$ {(car.price).toFixed(2)}</h3>
                </div>
                <div className="divButtons">
                    <button>Editar</button>
                    <button>Ver detalhes</button>
                </div>
            </div>
        </CardUserCarStyled>
    )

}