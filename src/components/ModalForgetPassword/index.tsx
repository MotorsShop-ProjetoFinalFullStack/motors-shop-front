import { useContext } from "react";
import * as S from "./style";
import { Context } from "../../context/context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordSchema } from "../../schema/schema";

export interface iForgetPasswordData {
  email: string;
}

export const ModalForgetPassword = () => {
  const { setModalForgetPassword, forgetPassword }: any = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iForgetPasswordData>({
    resolver: yupResolver<iForgetPasswordData>(forgetPasswordSchema),
  });
  function submit(formData: iForgetPasswordData) {
    forgetPassword(formData);
    // setModalForgetPassword(false);
    reset();
  }

  const closeModal = () => {
    setModalForgetPassword(false);
  };
  return (
    <S.DivModal>
      <div className="divGlobal">
        <div className="divHeader">
          <h3>Redefinir senha</h3>
          <button
            id="ButClose"
            onClick={() => {
              closeModal();
            }}
          >
            x
          </button>
        </div>
        <div className="divForm">
          <form onSubmit={handleSubmit(submit)}>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Digite seu email aqui"
            />
            {errors.email && <p>{errors.email.message}</p>}
            <button type="submit" className="butFinal">
              Enviar email
            </button>
          </form>
        </div>
      </div>
    </S.DivModal>
  );
};
