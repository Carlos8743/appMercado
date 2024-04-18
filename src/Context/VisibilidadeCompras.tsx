import React, { createContext, useState } from "react";

type Visivel = {
  getVisivel: {
    hamburgue: string;
    compras: string;
  };
  setVisivel: (newState: { hamburgue: string; compras: string }) => void;
  visibilidadeHamburgue: () => void;
  visibilidadeCompras: () => void;
};

export const VisivelCompraContext = createContext<Visivel>({
  getVisivel: { hamburgue: "none", compras: "none" },
  setVisivel: (newState) => {},
  visibilidadeHamburgue: () => {},
  visibilidadeCompras: () => {},
});

export function VisivelCompraProvider({
  children,
}: {
  children: React.ReactNode | any;
}) {
  const [getVisivel, setVisivel] = useState<{
    hamburgue: string;
    compras: string;
  }>({
    hamburgue: "none",
    compras: "none",
  });

  function visibilidadeHamburgue() {
    setVisivel((prevState) => ({
      ...prevState,
      hamburgue: prevState.hamburgue === "none" ? "flex" : "none",
    }));
  }

  function visibilidadeCompras() {
    setVisivel((prevState) => ({
      ...prevState,
      compras: prevState.compras === "none" ? "flex" : "none",
    }));
  }

  return (
    <VisivelCompraContext.Provider
      value={{
        getVisivel,
        setVisivel,
        visibilidadeHamburgue,
        visibilidadeCompras,
      }}
    >
      {children}
    </VisivelCompraContext.Provider>
  );
}
