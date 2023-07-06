import * as yup from "yup";
import { z } from "zod";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome precisa ter no mínimo 3 caracteres"),

  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O email digitado é inválido"),

  cpf: yup
    .string()
    .required("O CPF é obrigatório")
    .matches(/^\d{11}$/, "O CPF precisa ter 11 dígitos"),

  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .matches(/^\d{11}$/, "O telefone precisa ter 11 dígitos"),

  birthdate: yup.string().required("A data de nascimento é obrigatória"),

  description: yup.string().nullable().optional(),

  cep: yup
    .string()
    .required("O CEP é obrigatório")
    .matches(/^\d{8}$/, "O CEP precisa ter 8 dígitos"),

  state: yup.string().required("O estado é obrigatório"),

  city: yup.string().required("A cidade é obrigatória"),

  street: yup.string().required("A rua é obrigatória"),

  number: yup.string().required("O número é obrigatório"),

  complement: yup.string().nullable().optional(),

  typeUser: yup.string().nullable().optional(),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(
      /(?=.*?[A-Z])/,
      "A senha precisa ter pelo menos uma letra maiúscula"
    )
    .matches(
      /(?=.*?[a-z])/,
      "A senha precisa ter pelo menos uma letra minúscula"
    )
    .matches(/(?=.*?[0-9])/, "A senha precisa ter pelo menos um dígito")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha precisa ter pelo menos um caractere especial"
    )
    .min(8, "A senha precisa ter pelo menos oito caracteres"),

  confirmed_password: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
});

export const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O email digitado é inválido"),
});
export const forgetPasswordTokenSchema = yup.object().shape({
  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(
      /(?=.*?[A-Z])/,
      "A senha precisa ter pelo menos uma letra maiúscula"
    )
    .matches(
      /(?=.*?[a-z])/,
      "A senha precisa ter pelo menos uma letra minúscula"
    )
    .matches(/(?=.*?[0-9])/, "A senha precisa ter pelo menos um dígito")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha precisa ter pelo menos um caractere especial"
    )
    .min(8, "A senha precisa ter pelo menos oito caracteres"),

  confirmed_password: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
});

export type TForgetData = yup.InferType<typeof forgetPasswordSchema>;
export type TForgetDataToken = yup.InferType<typeof forgetPasswordTokenSchema>;

export const editAddress: any = yup.object().shape({
  cep: yup.string().when("$isCepProvided", {
    is: true,
    then: yup
      .string()
      .required("O CEP é obrigatório")
      .matches(/^\d{8}$/, "O CEP precisa ter 8 dígitos"),
  }),

  state: yup.string().when("$isStateProvided", {
    is: true,
    then: yup.string().required("O estado é obrigatório"),
  }),

  city: yup.string().when("$isCityProvided", {
    is: true,
    then: yup.string().required("A cidade é obrigatória"),
  }),

  street: yup.string().when("$isStreetProvided", {
    is: true,
    then: yup.string().required("A rua é obrigatória"),
  }),

  number: yup.string().when("$isNumberProvided", {
    is: true,
    then: yup.string().required("O número é obrigatório"),
  }),

  complement: yup.string().nullable().optional(),

  typeUser: yup.string().nullable().optional(),
});
