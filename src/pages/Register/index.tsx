import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { RegisterStyled } from "./styled";
import { Input } from "../../components/Input";
import { registerSchema } from "../../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../context/context";
import { ModalPageRegister } from "../../components/ModalRegisterPage";

export interface iRegisterData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description?: string | null;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string | null;
  typeUser?: string | null;
  password: string;
  confirmed_password?: string;
}

export const RegisterPage = () => {
  const { userRegister, modalRegisterPage, setModalRegisterPage }: any =
    useContext(Context);

  const [accountType, setAccountType] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterData>({
    resolver: yupResolver<iRegisterData>(registerSchema),
  });
  useEffect(() => {
    if (accountType) {
      register("typeUser");
    }
  }, [accountType, register]);

  function submit(formData: iRegisterData) {
    // console.log(formData);
    formData.typeUser = accountType;

    const address: any = {
      street: formData.street,
      number: formData.number,
      complement: formData.complement,
      cep: formData.cep,
      city: formData.city,
      state: formData.state,
    };
    const user: any = {
      name: formData.name,
      email: formData.email,
      cpf: formData.cpf,
      phone: formData.phone,
      birthdate: formData.birthdate,
      description: formData.description,
      typeUser: formData.typeUser,
      password: formData.password,
      address: address,
    };
    delete formData.confirmed_password;
    userRegister(user);
    reset();
  }

  function handleButtonClick(type: string) {
    setActiveButton(type);
    setAccountType(type);
  }
  return (
    <RegisterStyled>
      <Header type="register"></Header>
      <main>
        <form onSubmit={handleSubmit(submit)}>
          <h2>Cadastro</h2>
          <h3>Infomações pessoais</h3>
          <Input
            label="Nome"
            nameError="name"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <Input
            label="E-mail"
            nameError="email"
            placeholder="Digite seu email aqui"
            register={register}
            type="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <Input
            label="CPF"
            nameError="cpf"
            placeholder="000.000.000-00"
            register={register}
            type="text"
          />
          {errors.cpf && <p>{errors.cpf.message}</p>}
          <Input
            label="Celular"
            nameError="phone"
            placeholder="(DDD) 90000-0000"
            register={register}
            type="text"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
          <Input
            label="Data de nascimento"
            nameError="birthdate"
            placeholder="1999-01-01"
            register={register}
            type="text"
          />
          {errors.birthdate && <p>{errors.birthdate.message}</p>}
          <Input
            label="Descrição"
            nameError="description"
            placeholder="Digitar descrição"
            register={register}
            type="text"
          />
          {errors.description && <p>{errors.description.message}</p>}
          <h3 className="h3Info">Infomações de endereço</h3>
          <Input
            label="CEP"
            nameError="cep"
            placeholder="00000.000"
            register={register}
            type="text"
          />
          {errors.cep && <p>{errors.cep.message}</p>}
          <div className="InputDuplo">
            <div className="test">
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
              <div className="flex-column">
                <Input
                  label="Cidade"
                  nameError="city"
                  placeholder="Digitar cidade"
                  register={register}
                  type="text"
                />
                {errors.city && <p>{errors.city.message}</p>}
              </div>
            </div>
          </div>
          <Input
            label="Rua"
            nameError="street"
            placeholder="Digite o nome da rua"
            register={register}
            type="text"
          />
          {errors.street && <p>{errors.street.message}</p>}

          <div className="InputDuplo">
            <div className="test">
              <div className="flex-column">
                <Input
                  label="Número"
                  nameError="number"
                  placeholder="Digitar número"
                  register={register}
                  type="text"
                />
                {errors.number && <p>{errors.number.message}</p>}
              </div>
              <Input
                label="Complemento"
                nameError="complement"
                placeholder="Ex: apart 307"
                register={register}
                type="text"
              />
            </div>
          </div>
          <h3>Tipo de conta</h3>
          <div className="ButtonsAccontType">
            <button
              type="button"
              onClick={() => handleButtonClick("Comprador")}
              className={activeButton === "Comprador" ? "active" : ""}
            >
              Comprador
            </button>
            <button
              id="buttonRight"
              type="button"
              onClick={() => handleButtonClick("Anunciante")}
              className={activeButton === "Anunciante" ? "active" : ""}
            >
              Anunciante
            </button>
          </div>

          <Input
            label="Senha"
            nameError="password"
            placeholder="Digite sua senha aqui"
            register={register}
            type="password"
          />
          {errors.password && <p>{errors.password.message}</p>}
          <Input
            label="Confirmar senha"
            nameError="confirmed_password"
            placeholder="Digite sua senha novamente"
            register={register}
            type="password"
          />
          {errors.confirmed_password && (
            <p>{errors.confirmed_password.message}</p>
          )}
          <button type="submit" className="butFinal">
            Finalizar cadastro
          </button>
        </form>
        {modalRegisterPage && <ModalPageRegister />}
      </main>
      <Footer />
    </RegisterStyled>
  );
};
