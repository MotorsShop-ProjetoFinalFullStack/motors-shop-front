import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { ModalEditProfileStyled } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Context } from "../../context/context";
import { api } from "../../service";
import { useAuth } from "../../hooks/useAuth";

export const ModalEditProfile = () => {
  const { setModalEditProfileState, dataUser, setDataUser }: any =
    useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({
    mode: "onBlur",
    // resolver: yupResolver<any>(registerSchema),
  });

  async function teste(data: any) {
    const body = {
      name: data.name ? data.name : dataUser.name,
      email: data.email ? data.email : dataUser.email,
      cpf: data.cpf ? data.cpf : dataUser.cpf,
      phone: data.phone ? data.phone : dataUser.phone,
      birthdate: data.birthdate ? data.birthdate : dataUser.birthdate,
      description: data.description ? data.description : dataUser.description,
      typeUser: data.typeUser ? data.typeUser : dataUser.typeUser,
    };
    console.log(body);
    const token = localStorage.getItem("@Token");
    window.location.reload();

    try {
      await api.patch(`/users/${dataUser.id}`, body, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log("Funcionou!");
      setDataUser(body);
    } catch {
      console.log("asasa");
    }
  }

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
            placeholder={dataUser.name}
            register={register}
            type="text"
          />
          <Input
            label="Email"
            nameError="email"
            placeholder={dataUser.email}
            register={register}
            type="text"
          />
          <Input
            label="CPF"
            nameError="cpf"
            placeholder={dataUser.cpf}
            register={register}
            type="text"
          />
          <Input
            label="Celular"
            nameError="phone"
            placeholder={dataUser.phone}
            register={register}
            type="text"
          />
          <Input
            label="Data de Nascimento"
            nameError="birthdate"
            placeholder={dataUser.birthdate}
            register={register}
            type="text"
          />
          <Input
            label="Descrição"
            nameError="description"
            placeholder={dataUser.description}
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
