import { UseFormRegister } from "react-hook-form";
import * as S from "./style";
import { iRegisterData } from "../../pages/Register";

interface iInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<iRegisterData>;
  nameError:
    | "number"
    | "name"
    | "email"
    | "password"
    | "cpf"
    | "phone"
    | "birthdate"
    | "description"
    | "cep"
    | "state"
    | "city"
    | "street"
    | "complement"
    // | "typeUser"
    | "confirmed_password";
}

export function Input({
  label,
  type,
  placeholder,
  register,
  nameError,
}: iInputProps) {
  return (
    <S.StyledFieldset>
      <label>{label}</label>
      <S.Input type={type} placeholder={placeholder} {...register(nameError)} />
    </S.StyledFieldset>
  );
}
