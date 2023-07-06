import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "./style";
import { useAuth } from "../../hooks/useAuth";
import { ModalHeader } from "../ModalHeader";
import { useContext, useState } from "react";
import { Context } from "../../context/context";

export const Header = ({ type }: any) => {
  const navigate = useNavigate();
  const { modalHeaderState, setModalHeaderState }: any = useContext(Context);

  const { user } = useAuth();
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
    if (modalHeaderState) {
      setModalHeaderState(false);
    } else {
      setModalHeaderState(true);
    }
  };

  return (
    <HeaderStyled>
      <div className="space">
        <div className="flex">
          <h1>Motors</h1>
          <h3>shop</h3>
        </div>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>
      {type == "register" && (
        <div>
          <div className="div-button">
            <button
              className="button-login"
              onClick={() => {
                setModalHeaderState(false);
                navigate("/login");
              }}
            >
              Fazer Login
            </button>
            <button className="button-register">Cadastro</button>
          </div>
          {modalHeaderState && <ModalHeader type="buttons" />}
        </div>
      )}
      {type == "login" && (
        <div>
          <div className="div-button">
            <button
              className="button-login"
              onClick={() => {
                setModalHeaderState(false);
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
          </div>
          {modalHeaderState && <ModalHeader type="buttons" />}
        </div>
      )}
      {type == "dashboard" && (
        <div>
          <div className="div-dashboard">
            <div className="img"></div>
            <h4>{user.name}</h4>
          </div>
          {modalHeaderState && <ModalHeader type="dashboard" />}
        </div>
      )}
    </HeaderStyled>
  );
};
