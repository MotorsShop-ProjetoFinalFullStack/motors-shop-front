import { useContext } from "react";
import { ModalEditAddressStyled } from "./styled";
import { Context } from "../../context/context";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { api } from "../../service";
import { toast } from "react-toastify";

export const ModalEditAddress = () => {
  const { modalEditAddressState, setModalEditAddressState, dataUser }: any =
    useContext(Context);

  const { register, handleSubmit } = useForm<any>({
    mode: "onBlur",
  });

  async function updatedAddress(data: any) {
    const body = {
      name: data.name ? data.name : dataUser.name,
      email: data.email ? data.email : dataUser.email,
      cpf: data.cpf ? data.cpf : dataUser.cpf,
      phone: data.phone ? data.phone : dataUser.phone,
      birthdate: data.birthdate ? data.birthdate : dataUser.birthdate,
      description: data.description ? data.description : dataUser.description,
      typeUser: data.typeUser ? data.typeUser : dataUser.typeUser,
      address: {
        street: data.street ? data.street : dataUser.address.street,
        number: data.number ? data.number : dataUser.address.number,
        complement: data.complement
          ? data.complement
          : dataUser.address.complement,
        cep: data.cep ? data.cep : dataUser.address.cep,
        city: data.city ? data.city : dataUser.address.city,
        state: data.state ? data.state : dataUser.address.state,
      },
    };
    const token = localStorage.getItem("@Token");
    console.log(body);

    try {
      await api.patch(`/users/${dataUser.id}`, body, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Endereço atualizado com Sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch {
      toast.error("Algo deu Errado!");
    }
  }

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
        <form onSubmit={handleSubmit(updatedAddress)}>
          <Input
            label="CEP"
            nameError="cep"
            placeholder={dataUser.address.cep}
            register={register}
            type="text"
          />
          <div className="display-flex">
            <div className="flex-column">
              <p>Estado</p>
              <select {...register("state")}>
                <option value="">Selecione um estado</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
            </div>
            <Input
              label="Cidade"
              nameError="city"
              placeholder={dataUser.address.city}
              register={register}
              type="text"
            />
          </div>
          <Input
            label="Rua"
            nameError="street"
            placeholder={dataUser.address.street}
            register={register}
            type="text"
          />
          <div className="display-flex">
            <Input
              label="Número"
              nameError="number"
              placeholder={dataUser.address.number}
              register={register}
              type="text"
            />
            <Input
              label="Complemento"
              nameError="complement"
              placeholder={dataUser.address.complement}
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
