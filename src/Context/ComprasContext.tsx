import React, { createContext, useReducer, useState, ReactNode, ChangeEvent } from "react";

type Produto = {
  quantidade: number;
  nome: string;
  linkImg: string;
};

type ComprasContextValue = {
  state: Produto[];
  dispatch: React.Dispatch<Action>;
  pesquisa: string;
  setPesquisa: React.Dispatch<React.SetStateAction<string>>;
};

type Action = { type: string; payload?: any };

export const ComprasContext = createContext<ComprasContextValue>({
  state: [],
  dispatch: () => {},
  pesquisa: "",
  setPesquisa: () => {}
});

export const INCREMENTAR = "incrementar";
export const DIMINUIR = "diminuir";
export const ADICIONAR = "adicionar";

export const ComprasProvider = ({ children }: { children: ReactNode }) => {
  const inicial: Produto[] = [];

  function reducerCompras(state: Produto[], action: Action): Produto[] {
    switch (action.type) {
      case INCREMENTAR:
        return state.map((produto, index) => {
          if (index === action.payload) {
            return { ...produto, quantidade: produto.quantidade + 1 };
          }
          return produto;
        });
      case DIMINUIR:
        return state.map((produto, index) => {
          if (index === action.payload) {
            return { ...produto, quantidade: produto.quantidade - 1 };
          }
          return produto;
        });
      case ADICIONAR:
        const novoProduto: Produto = {
          quantidade: 1,
          nome: action.payload.nome,
          linkImg: action.payload.linkImg,
        };
        return [...state, novoProduto];

      default:
        alert("Produto não existe ou não pode ser lido");
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerCompras, inicial);
  const [pesquisa, setPesquisa] = useState<string>("");

  return (
    <ComprasContext.Provider
      value={{
        state,
        dispatch,
        pesquisa,
        setPesquisa
      }}
    >
      {children}
    </ComprasContext.Provider>
  );
};

export default ComprasContext;
