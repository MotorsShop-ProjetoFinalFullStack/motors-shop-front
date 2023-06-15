import { ListUserCarsStyled } from "./styled"
import { useUserCar } from "./../../hooks/useUserCar"
import { CardUserCar } from "../CardUserCar"


export const ListUserCars = () => {

    const {allUserCars} = useUserCar()

    return (
        <ListUserCarsStyled>
            {allUserCars.map((car) => {
                return (<CardUserCar key={car.id} car={car}/>)
            })}
        </ListUserCarsStyled>
    )

}