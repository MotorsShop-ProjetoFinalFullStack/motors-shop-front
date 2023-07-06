import { createContext, ReactNode, useEffect, useState } from "react";
// import { databaseCars } from "./../components/ListCars/database";
import { api } from "../service";

interface CarProviderProps {
  children: ReactNode;
}

export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string | null;
  typeUser: string;
  createdAt: string;
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  fipePrice: number;
  price: number;
  description: string;
  image: string;
  user: User;
}

interface CarContextValues {
  allCars: Car[],
  carsSelected: Car[],
  isFiltered: boolean,
  filterByBrand: (value: string) => void,
  filterByModel: (value: string) => void,
  filterByColor: (value: string) => void,
  filterByYear: (value: number) => void,
  filterByFuel: (value: string) => void,
  filterByKm: (value: number, type: string) => void,
  filterByPrice: (value: number, type: string) => void,
  getAllCars: () => void
}

export const CarContext = createContext<CarContextValues>(
  {} as CarContextValues
);

export const CarProvider = ({ children }: CarProviderProps) => {
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [carsSelected, setCarsSelected] = useState<Car[]>([]);

  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const filterByBrand = (value: string) => {
    const filteredCars = allCars.filter((car) => {
      return car.brand === value;
    });
    setIsFiltered(true);
    setCarsSelected(filteredCars);
  };

  const filterByModel = (value: string) => {
    const filteredCars = allCars.filter((car) => {
      return car.model === value;
    });
    setIsFiltered(true);
    setCarsSelected(filteredCars);
  };

  const filterByColor = (value: string) => {
    const filteredCars = allCars.filter((car) => {
      return car.color === value;
    });
    setIsFiltered(true);
    setCarsSelected(filteredCars);
  };

  const filterByYear = (value: number) => {
    const filteredCars = allCars.filter((car) => {
      const carYear = new Date(car.year).getFullYear();
      return carYear === value;
    });
    setIsFiltered(true);
    setCarsSelected(filteredCars);
  };

  const filterByFuel = (value: string) => {
    const filteredCars = allCars.filter((car) => {
      return car.fuel === value;
    });
    setIsFiltered(true);
    setCarsSelected(filteredCars);
  };

  const getAllCars = () => {
    setIsFiltered(false);
  };

  const filterByKm = (value: number, type: string) => {
    if(type === "min"){
        const filteredCars = allCars.filter((car) => {
            return car.km > value
        })
        setIsFiltered(true)
        setCarsSelected(filteredCars)
    }else{
        const filteredCars = allCars.filter((car) => {
            return car.km < value
        })
        setIsFiltered(true)
        setCarsSelected(filteredCars)
    }
  }

  const filterByPrice = (value: number, type: string) => {
    if(type === "min"){
        const filteredCars = allCars.filter((car) => {
            return car.price > value
        })
        setIsFiltered(true)
        setCarsSelected(filteredCars)
    }else{
        const filteredCars = allCars.filter((car) => {
            return car.price < value
        })
        setIsFiltered(true)
        setCarsSelected(filteredCars)
    }
  }

  useEffect(() => {
    const getCars = async () => {
      try {
        const request = await api.get("/announcements");

        const requestData: Car[] = request.data;

        setAllCars(requestData);
      } catch (err) {
        console.log(err);
      }
    };
    getCars();
  }, []);

  return (
    <CarContext.Provider
      value={{
        allCars,
        carsSelected,
        isFiltered,
        filterByBrand,
        filterByModel,
        filterByColor,
        filterByYear,
        filterByFuel,
        filterByKm,
        filterByPrice,
        getAllCars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
