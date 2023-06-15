import { Footer } from "../../components/Footer";
import { Form } from "../../components/FormLogin/style";
import { Header } from "../../components/Header";
import { LoginStyled } from "./styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./validator";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <LoginStyled>
      <Header className="header-login" type="login" />
      <Form>
        <div>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <p className="FPassword">Esqueci minha senha</p>
        <button className="Entrar">Entrar</button>
        <span>Ainda não possui conta?</span>
        <button className="Cadastro">Cadastro</button>
      </Form>
      <Footer />
    </LoginStyled>
  );
};
