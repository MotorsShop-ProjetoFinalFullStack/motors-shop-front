import { useEffect, useState } from "react"
import { useCar } from "../../hooks/useCar"
import { FilterCarSectionStyled } from "./styled"

interface FilterCarSectionProps{
    setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export const FilterCarSection = ({setFilterOpen}: FilterCarSectionProps) => {

    const {allCars, filterByBrand, filterByModel, filterByColor, filterByYear, filterByFuel, isFiltered, getAllCars} = useCar()

    const [brands, setBrands] = useState<string[]>([])
    const [models, setModels] = useState<string[]>([])
    const [colors, setColors] = useState<string[]>([])
    const [years, setYears] = useState<number[]>([])
    const fuels: string[] = ["Gasolina", "Etanol", "Diesel", "Flex"]

    useEffect(() => {
        const getBrands = () => {
            const brandsArray: string[] = []
            

            allCars.forEach((car) => {
                let counter = 0

                brandsArray.forEach((brand) => {
                    if(brand === car.brand){
                        counter++
                    }
                })
                if(counter === 0){
                    brandsArray.push(car.brand)
                }
            })
            
            setBrands(brandsArray)
        }

        const getModels = () => {
            const modelsArray: string[] = []

            allCars.forEach((car) => {
                let counter = 0

                modelsArray.forEach((model) => {
                    if(model === car.model){
                        counter++
                    }
                })
                if(counter === 0){
                    modelsArray.push(car.model)
                }
            })

            setModels(modelsArray)
        }

        const getColors = () => {
            const colorsArray: string[] = []

            allCars.forEach((car) => {
                let counter = 0

                colorsArray.forEach((color) => {
                    if(color === car.color){
                        counter++
                    }
                })
                if(counter === 0){
                    colorsArray.push(car.color)
                }
            })

            setColors(colorsArray)
        }

        const getYears = () => {
            const yearsArray: number[] = []

            allCars.forEach((car) => {
                let counter = 0

                const carYear = new Date(car.year).getFullYear()

                yearsArray.forEach((year) => {
                    if(year === carYear){
                        counter++
                    }
                })
                if(counter === 0){
                    yearsArray.push(carYear)
                }
            })

            setYears(yearsArray)
        }

        getBrands()
        getModels()
        getColors()
        getYears()
    }, [allCars])

    const filterBrand = (brand: string) => {
        filterByBrand(brand)
        setFilterOpen(false)
    }

    const filterModel = (model: string) => {
        filterByModel(model)
        setFilterOpen(false)
    }

    const filterColor = (color: string) => {
        filterByColor(color)
        setFilterOpen(false)
    }

    const filterYear = (year: number) => {
        filterByYear(year)
        setFilterOpen(false)
    }

    const filterFuel = (fuel: string) => {
        filterByFuel(fuel)
        setFilterOpen(false)
    }

    return (
        <FilterCarSectionStyled>
            <div className="firstDiv">
                <h2>Marca</h2>
                <div>
                    {brands.sort().map((brand) => {
                        return(<button key={brand} onClick={() => {filterBrand(brand)}}>{brand}</button>)
                    })}
                </div>
            </div>
            <div className="firstDiv">
                <h2>Modelo</h2>
                <div>
                    {models.sort().map((model) => {
                        return(<button key={model} onClick={() => {filterModel(model)}}>{model}</button>)
                    })}
                </div>
            </div>
            <div className="firstDiv">
                <h2>Cor</h2>
                <div>
                    {colors.sort().map((color) => {
                        return(<button key={color} onClick={() => {filterColor(color)}}>{color}</button>)
                    })}
                </div>
            </div>
            <div className="firstDiv">
                <h2>Ano</h2>
                <div>
                    {years.sort().map((year) => {
                        return (<button key={year} onClick={() => {filterYear(year)}}>{year}</button>)
                    })}
                </div>
            </div>
            <div className="firstDiv">
                <h2>Combustível</h2>
                <div>
                    {fuels.sort().map((fuel) => {
                        return(<button key={fuel} onClick={() => {filterFuel(fuel)}}>{fuel}</button>)
                    })}
                </div>
            </div>
            {isFiltered ? (
                <button className="clearFilter" onClick={() => {getAllCars()}}>Limpar Filtros</button>
            ):(
                null
            )}
        </FilterCarSectionStyled> 
    )

}