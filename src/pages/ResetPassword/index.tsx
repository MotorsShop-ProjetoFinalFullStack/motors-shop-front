import * as S from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordSchema } from "../../schema/schema";
import { useAuth } from "../../hooks/useAuth";

export interface iForgetPasswordData {
  email: string;
}
export const SendEmailResetPassword = () => {
  const { forgetPassword } = useAuth();

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
    reset();
  }
  return (
    <S.DivResetPassword>
      <div className="divGlobal">
        <div className="divHeader">
          <h3>Redefinir senha</h3>
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
    </S.DivResetPassword>
  );
};
