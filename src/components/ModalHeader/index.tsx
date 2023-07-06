import { useNavigate } from "react-router-dom";
import { ModalHeaderStyled } from "./styled";
import { useContext } from "react";
import { Context } from "../../context/context";
import { useAuth } from "../../hooks/useAuth";

export const ModalHeader = ({ type }: { type: string }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  if (type == "buttons") {
    return (
      <ModalHeaderStyled>
        <button
          className="button-login"
          onClick={() => {
            navigate("/login");
          }}
        >
          Fazer Login
        </button>
        <button
          className="button-register"
          onClick={() => {
            navigate("/register");
          }}
        >
          Cadastro
        </button>
      </ModalHeaderStyled>
    );
  } else if (type == "dashboard") {
    return (
      <ModalHeaderStyled>
        <div className="div-dashboard">
          <div className="img"></div>
          <h4>{user.name}</h4>
        </div>
      </ModalHeaderStyled>
    );
  }

  return <></>;
};
