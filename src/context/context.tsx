//Importanto createContext e useState, já vem com o react
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../service";
import { iRegisterData } from "../pages/Register";

//Criando nosso contexto
export const Context = createContext({});

//Função que vai englobar nosso contexto
export const Provider = ({ children }: any) => {
  const [modalRegisterPage, setModalRegisterPage] = useState(false);
  const [modalEditProfileState, setModalEditProfileState] = useState(false);
  const [modalEditAddressState, setModalEditAddressState] = useState(false);
  const [modalEditAnnouncement, setModalEditAnnouncement] = useState(false);
  const [modalDeleteAnnouncement, setModalDeleteAnnouncement] = useState(false);
  const [idCar, setIdCar] = useState<number | undefined>(undefined);

  const [dataUser, setDataUser] = useState({});

  const navigate = useNavigate();

  async function autoLogin() {
    //Token salvo no LocalStorage
    const token = localStorage.getItem("@Token");

    //Se não existir token não acontece nada
    if (!token) {
      return null;
    }

    //Vai ver se o token é válido se for vai redirecionar para a dashboard
    try {
      await api.patch("/announcement", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      //redirecionando ele para a dashboard
      navigate("/dashboard");
    } catch {
      //caso o token não for válido não vai ser redirecionado
      console.log("erro");
    }
  }

  async function routeProtection() {
    //Buscando o token salvo no localStorage
    const token = localStorage.getItem("@Token");

    //Se não existir token vamos enviar o Usuário para o Login
    if (!token) {
      navigate("/login");
    }

    //Vai ver se o token é válido se for vai só capturar os dados
    try {
      const response = await api.get("/users/unique/users", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setDataUser(response.data);
    } catch {
      navigate("/");
    }
  }

  async function userRegister(formData: iRegisterData) {
    try {
      await api.post("/users", formData);

      setTimeout(() => {
        setModalRegisterPage(false);
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Context.Provider
      value={{
        routeProtection,
        autoLogin,
        userRegister,
        modalRegisterPage,
        setModalRegisterPage,
        modalEditProfileState,
        setModalEditProfileState,
        modalEditAddressState,
        setModalEditAddressState,
        modalEditAnnouncement,
        setModalEditAnnouncement,
        modalDeleteAnnouncement,
        setModalDeleteAnnouncement,
        dataUser,
        setDataUser,
        idCar,
        setIdCar,
      }}
    >
      {children}
    </Context.Provider>
  );
};
