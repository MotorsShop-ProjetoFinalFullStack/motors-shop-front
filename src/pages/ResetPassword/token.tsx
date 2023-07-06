import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./style";
import { useParams } from "react-router-dom";
import {
  TForgetDataToken,
  forgetPasswordTokenSchema,
} from "../../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";

export const ResetPassword = () => {
  const { forgetPasswordToken, setTokenPassword } = useAuth();

  const { token } = useParams();
  setTokenPassword(token!);
  // console.log(token);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TForgetDataToken>({
    resolver: yupResolver<TForgetDataToken>(forgetPasswordTokenSchema),
  });
  function submit(formData: TForgetDataToken) {
    if (formData) {
      console.log(formData);
      const passwordToken = {
        password: formData.confirmed_password,
      };
      forgetPasswordToken(passwordToken);
      reset();
    }
  }
  return (
    <S.DivResetPasswordToken>
      <div className="divGlobal">
        <div className="divHeader">
          <h3>Redefinir senha</h3>
        </div>
        <div className="divForm">
          <form onSubmit={handleSubmit(submit)}>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Digite sua senha"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmed_password")}
              placeholder="Confirme sua senha"
            />
            {errors.confirmed_password && (
              <p>{errors.confirmed_password.message}</p>
            )}
            <button type="submit" className="butFinal">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </S.DivResetPasswordToken>
  );
};
