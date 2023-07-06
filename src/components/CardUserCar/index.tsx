import { useContext } from "react";
import { User } from "../../providers/CarProvider";
import { CardUserCarStyled } from "./styled";
import { Context } from "../../context/context";
import { useUserCar } from "../../hooks/useUserCar";

interface Car {
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

interface CardUserCarProps {
  car: Car;
}

export const CardUserCar = ({ car }: CardUserCarProps) => {
  const { setModalEditAnnouncement, setIdCar }: any = useContext(Context);
  const {openModalDetail} = useUserCar()

  const getYear = (year: string) => {
    const date = new Date(year);

    return date.getFullYear();
  };
  const openModal = () => {
    setIdCar(car.id);
    setModalEditAnnouncement(true);
  };

  return (
    <CardUserCarStyled>
      <div className="divImage">
        <img src={car.image} alt="Imagem carro" />
      </div>
      <div className="divContent">
        <h3>
          {car.brand} - {car.model}
        </h3>
        <p>{car.description}</p>
        <div className="divTagsPrice">
          <div className="divTags">
            <span>{car.km} KM</span>
            <span>{getYear(car.year)}</span>
          </div>
          <h3>R$ {car.price.toFixed(2)}</h3>
        </div>
        <div className="divButtons">
          <button
            onClick={() => {
              openModal();
            }}
          >
            Editar
          </button>
          <button onClick={() => {openModalDetail(car.id)}}>Ver detalhes</button>
        </div>
      </div>
    </CardUserCarStyled>
  );
};
