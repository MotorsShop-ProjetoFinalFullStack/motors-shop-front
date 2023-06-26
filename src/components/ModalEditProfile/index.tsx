import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { ModalEditProfileStyled } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Context } from "../../context/context";

export const ModalEditProfile = () => {
  const { setModalEditProfileState }: any = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({
    mode: "onBlur",
    // resolver: yupResolver<any>(registerSchema),
  });

  const teste = (data: any) => {
    console.log(data);
  };

  return (
    <ModalEditProfileStyled>
      <div className="white">
        <div className="header">
          <h4>Editar perfil</h4>
          <button
            className="button-close"
            onClick={() => setModalEditProfileState(false)}
          >
            X
          </button>
        </div>
        <h2 className="span-info">Informações pessoais</h2>
        <form onSubmit={handleSubmit(teste)}>
          <Input
            label="Nome"
            nameError="name"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
          />
          <Input
            label="Email"
            nameError="email"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
          />
          <Input
            label="CPF"
            nameError="cpf"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
          />
          <Input
            label="Celular"
            nameError="phone"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
          />
          <Input
            label="Data de Nascimento"
            nameError="birthdate"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
          />
          <Input
            label="Descrição"
            nameError="description"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
          />
          <div className="div-buttons">
            <h6
              className="button-cancel"
              onClick={() => setModalEditProfileState(false)}
            >
              Cancelar
            </h6>
            <h6 className="button-delete">Excluir Perfil</h6>
            <button className="button-confirm">Salvar alterações</button>
          </div>
        </form>
      </div>
    </ModalEditProfileStyled>
  );
};
