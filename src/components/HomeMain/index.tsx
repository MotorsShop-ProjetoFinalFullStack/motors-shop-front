import { useState } from "react"
import { FilterCarSection } from "../FilterCarSection"
import { ListCars } from "../ListCars"
import { HomeMainStyled } from "./styled"
import { useCar } from "../../hooks/useCar"


export const HomeMain = () => {

    const {getAllCars} = useCar()

    const [filterOpen, setFilterOpen] = useState<boolean>(false)

    const backAllCars = () => {
        getAllCars()
        setFilterOpen(false)
    }

    return (
        <HomeMainStyled>
            <div className="filterSectionDesktop">
                <FilterCarSection setFilterOpen={setFilterOpen}/>
            </div>
            <ListCars/>
            <button className="filterButton" onClick={() => {setFilterOpen(true)}}>Filtros</button>
            {filterOpen ? (
                <div className="filterSectionMobile">
                    <div className="divButtonClose">
                        <h3>Filtro</h3>
                        <button onClick={() => {setFilterOpen(false)}}>X</button>
                    </div>
                    <FilterCarSection setFilterOpen={setFilterOpen}/>
                    <button className="backToListCars" onClick={() => {backAllCars()}}>Ver anúncios</button>
                </div>
            ):(
                null
            )}
        </HomeMainStyled>
    )

}