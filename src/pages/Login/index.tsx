import { Footer } from "../../components/Footer";
import { Form } from "../../components/FormLogin/style";
import { Header } from "../../components/Header";
import { LoginStyled } from "./styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TLoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { singIn, messageError } = useAuth();

  const { register, handleSubmit } = useForm<TLoginData>({
    resolver: zodResolver(schema),
  });

  const linkResetPassword = () => {
    navigate("/resetPassword/");
  };

  return (
    <LoginStyled>
      <Header className="header-login" type="login" />
      <Form onSubmit={handleSubmit(singIn)}>
        <div>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        {messageError === true ? (
          <>
            <p className="messageError">Email ou senha inválidos.</p>
          </>
        ) : null}
        <a
          className="FPassword"
          onClick={() => {
            linkResetPassword();
          }}
        >
          Esqueci minha senha
        </a>
        <button className="Entrar" type="submit">
          Entrar
        </button>
        <span>Ainda não possui conta?</span>
        <button className="Cadastro">Cadastro</button>
      </Form>
      <Footer />
    </LoginStyled>
  );
};
