import { createContext, useState } from "react";

type ComprasContextValue = {
  getVisivel: {
    hamburgue: string;
    compras: string;
  };
  setVisivel: (newState: { hamburgue: string; compras: string }) => void;
  visibilidadeHamburgue: () => void;
  visibilidadeCompras: () => void;
};

export const ComprasContext = createContext<ComprasContextValue>({
  getVisivel: { hamburgue: "none", compras: "none" },
  setVisivel: (newState) => newState,
  visibilidadeHamburgue: () => {},
  visibilidadeCompras: () => {},
});

export const ComprasProvider = ({ children }: any) => {
  const [getVisivel, setVisivel] = useState({
    hamburgue: "none",
    compras: "none",
  });
  // const addCompra(id:string, nome:string){
  // }
  function visibilidadeHamburgue() {
    setVisivel((prevState) => ({
      ...prevState,
      hamburgue: prevState.hamburgue === "none" ? "flex" : "none",
    }));
    console.log(getVisivel.hamburgue);
  }

  function visibilidadeCompras() {
    setVisivel((prevState) => ({
      ...prevState,
      compras: prevState.compras === "none" ? "flex" : "none",
    }));
    console.log(getVisivel.compras);
  }

  return (
    <ComprasContext.Provider
      value={{
        getVisivel,
        setVisivel,
        visibilidadeHamburgue,
        visibilidadeCompras,
      }}
    >
      {children}
    </ComprasContext.Provider>
  );
};

export default ComprasContext;
