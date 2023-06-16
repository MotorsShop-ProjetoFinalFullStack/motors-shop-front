//Importanto createContext e useState, já vem com o react
import { createContext, useState } from "react";

//Criando nosso contexto
export const Context = createContext({});

//Função que vai englobar nosso contexto
export const Provider = ({ children }: any) => {
  /*Aqui passaremos oq queremos, coisas que vamos usar posteriormente 
                    Exemplo: Variáveis, funções...*/

  return (
    /*Chamamos nosso contexto com ".Provider" e passamos pro "value" 
        oq queremos exportar daqui*/
    <Context.Provider value={{}}>{children}</Context.Provider>
  );
};
