import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "./style";

export const Header = ({ type }: any) => {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <div className="flex">
        <h1>Motor</h1>
        <h3>shop</h3>
      </div>
      {type == "register" && (
        <div className="div-button">
          <button
            className="button-login"
            onClick={() => {
              navigate("/login");
            }}
          >
            Fazer Login
          </button>
          <button className="button-register">Cadastro</button>
        </div>
      )}
      {type == "login" && (
        <div className="div-button">
          <button className="button-login" onClick={() => {navigate("/login")}}>Fazer Login</button>
          <button
            className="button-register"
            onClick={() => {
              navigate("/register");
            }}
          >
            Cadastro
          </button>
        </div>
      )}
      {type == "dashboard" && (
        <div className="div-dashboard">
          <div className="img"></div>
          <h4>Neymar Jr</h4>
        </div>
      )}
    </HeaderStyled>
  );
};
