import { string } from "zod";
import * as S from "./style";
import { useParams } from "react-router-dom";

export const ResetPassword = () => {
  const { token } = useParams();
  console.log(token);

  return (
    <S.DivResetPassword>
      <div className="divGlobal">
        <div className="divHeader">
          <h3>Redefinir senha</h3>
        </div>
        <div className="divForm">
          <form /*onSubmit={handleSubmit(submit)}*/>
            <input
              type="password"
              id="password"
              //   {...register("password")}
              placeholder="Digite sua senha"
            />
            {/* {errors.email && <p>{errors.email.message}</p>} */}
            <input
              type="password"
              id="confirmPassword"
              //   {...register("confirmPassword")}
              placeholder="Confirme sua senha"
            />
            <button type="submit" className="butFinal">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </S.DivResetPassword>
  );
};
