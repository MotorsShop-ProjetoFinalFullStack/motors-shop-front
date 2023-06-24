import { ListCarsStyled } from "./styled"
import { CardCar } from "../CardCar"
import { useCar } from "../../hooks/useCar"
import { usePublicUser } from "../../hooks/usePublicUser"

interface ListCarsProps {
    isPublic?: boolean
}


export const ListCars = ({isPublic}: ListCarsProps) => {

    const {allCars, carsSelected, isFiltered} = useCar()
    const {carsUserPublic} = usePublicUser()

    return (
        <ListCarsStyled>
            {isFiltered ? (
                carsSelected.map((car) => {
                    return (<CardCar key={car.id} car={car}/>)
                })
            ):(
                isPublic ? (
                    carsUserPublic.map((car) => {
                        return (<CardCar key={car.id} car={car}/>)
                    })
                ):(
                    allCars.map((car) => {
                        return (<CardCar key={car.id} car={car}/>)
                    })
                )
            )}
        </ListCarsStyled>
    )

}