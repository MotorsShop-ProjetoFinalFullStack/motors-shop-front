import { ListCarsStyled } from "./styled"
import { databaseCars } from "./database"
import { CardCar } from "../CardCar"


export const ListCars = () => {

    return (
        <ListCarsStyled>
            {databaseCars.map((car) => {
                return (
                    <CardCar key={car.id} car={car}/>
                )
            })}
        </ListCarsStyled>
    )

}