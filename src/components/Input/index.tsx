import * as S from "./style";

interface iInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  nameError: string;
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
