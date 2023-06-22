import { useContext } from "react";
import * as S from "./style";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";

export const ModalPageRegister = () => {
  const { setModalRegisterPage }: any = useContext(Context);

  const navigate = useNavigate();

  const closeModal = () => {
    setModalRegisterPage(false);
  };

  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <S.DivMoodal>
      <div className="divGlobal">
        <div className="divHeader">
          <p>Sucesso!</p>
          <button
            id="ButClose"
            onClick={() => {
              closeModal();
            }}
          >
            x
          </button>
        </div>
        <div className="divArticle">
          <h3>Sua conta foi criada com sucesso!</h3>
          <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
        </div>
        <button
          id="ButLogin"
          onClick={() => {
            navigateLogin();
          }}
        >
          Ir para o login
        </button>
      </div>
    </S.DivMoodal>
  );
};
