//Importanto createContext e useState, já vem com o react
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../service";
import { toast } from "react-toastify";
import { iRegisterData } from "../pages/Register";

//Criando nosso contexto
export const Context = createContext({});

//Função que vai englobar nosso contexto
export const Provider = ({ children }: any) => {
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
      await api.get("/UrlDosDadosDoUsuario", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch {
      navigate("/");
    }
  }

  async function userRegister(formData: iRegisterData) {
    try {
      await api.post("/users", formData);

      toast.success("Cadastro realizado com sucesso!", {
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("Oops, algo deu errado...");
    }
  }

  return (
    <Context.Provider value={{ routeProtection, autoLogin, userRegister }}>
      {children}
    </Context.Provider>
  );
};
