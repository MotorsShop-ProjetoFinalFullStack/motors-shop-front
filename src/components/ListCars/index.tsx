import { ListCarsStyled } from "./styled"
import { CardCar } from "../CardCar"
import { useCar } from "../../hooks/useCar"


export const ListCars = () => {

    const {allCars, carsSelected, isFiltered} = useCar()

    return (
        <ListCarsStyled>
            {isFiltered ? (
                carsSelected.map((car) => {
                    return (<CardCar key={car.id} car={car}/>)
                })
            ):(
                allCars.map((car) => {
                    return (<CardCar key={car.id} car={car}/>)
                })
            )}
        </ListCarsStyled>
    )

}