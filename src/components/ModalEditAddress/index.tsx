import { useContext } from "react";
import { ModalEditAddressStyled } from "./styled";
import { Context } from "../../context/context";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { editAddress } from "../../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalEditAddress = () => {
  const { modalEditAddressState, setModalEditAddressState }: any =
    useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({
    mode: "onBlur",
    resolver: yupResolver<any>(editAddress),
  });

  const test = (data: any) => {
    console.log(data);
  };

  return (
    <ModalEditAddressStyled>
      <div className="white">
        <div className="header">
          <h4>Editar perfil</h4>
          <button
            className="button-close"
            onClick={() => setModalEditAddressState(false)}
          >
            X
          </button>
        </div>
        <h2 className="span-info">Informações pessoais</h2>
        <form onSubmit={handleSubmit(test)}>
          <Input
            label="CEP"
            nameError="state"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
          />
          <div className="display-flex">
            <Input
              label="Estado"
              nameError="city"
              placeholder="Digite seu nome aqui"
              register={register}
              type="text"
            />
            <Input
              label="Cidade"
              nameError="city"
              placeholder="Digite seu nome aqui"
              register={register}
              type="text"
            />
          </div>
          <Input
            label="Rua"
            nameError="street"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
          />
          <div className="display-flex">
            <Input
              label="Número"
              nameError="number"
              placeholder="Digite seu nome aqui"
              register={register}
              type="text"
            />
            <Input
              label="Complemento"
              nameError="complement"
              placeholder="Digite seu cep aqui"
              register={register}
              type="text"
            />
          </div>
          <div className="div-buttons">
            <button className="button-confirm">Salvar alterações</button>
          </div>
        </form>
      </div>
    </ModalEditAddressStyled>
  );
};
