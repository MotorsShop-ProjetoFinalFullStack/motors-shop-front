import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { RegisterStyled } from "./styled";
import { Input } from "../../components/Input";
import { registerSchema } from "../../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export interface iRegisterData {
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  dateOfBirth: string;
  description?: string;
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement?: string;
  accountType: string;
  password: string;
  confirmed_password?: string;
}

export const RegisterPage = () => {
  const [accountType, setAccountType] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterData>({
    mode: "onBlur",
    resolver: yupResolver<iRegisterData>(registerSchema),
  });

  useEffect(() => {
    if (accountType) {
      register("accountType");
    }
  }, [accountType, register]);

  function submit(data: iRegisterData) {
    data.accountType = accountType;
    delete data.confirmed_password;
    // userRegister(data);
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
            nameError="telephone"
            placeholder="(DDD) 90000-0000"
            register={register}
            type="text"
          />
          {errors.telephone && <p>{errors.telephone.message}</p>}
          <Input
            label="Data de nascimento"
            nameError="dateOfBirth"
            placeholder="00/00/00"
            register={register}
            type="text"
          />
          {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
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
                <Input
                  label="Estado"
                  nameError="state"
                  placeholder="Digitar Estado"
                  register={register}
                  type="text"
                />
                {errors.state && <p>{errors.state.message}</p>}
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
            nameError="road"
            placeholder="Digite o nome da rua"
            register={register}
            type="text"
          />
          {errors.road && <p>{errors.road.message}</p>}

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
          {accountType && (
            <input type="text" name="accountType" value={accountType} hidden />
          )}
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
      </main>
      <Footer />
    </RegisterStyled>
  );
};
