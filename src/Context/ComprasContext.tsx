import React, { createContext, useReducer } from "react";

type Produto = {
  quantidade: number;
  nome: string;
  linkImg: string;
};

type ComprasContextValue = {
  state: Produto[];
  dispatch: React.Dispatch<Action>;
};

type Action = { type: string; payload?: number | any };

export const ComprasContext = createContext<ComprasContextValue>({
  state: [],
  dispatch: (action: { type: string }) => {},
});

export const INCREMENTAR = "incrementar";
export const DIMINUIR = "diminuir";
export const ADICIONAR = "adicionar";

export const ComprasProvider = ({ children }: any) => {
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
        const novoProduto = {
          quantidade: 1, // Defina a quantidade inicial conforme necessário
          nome: action.payload.nome, // Nome do novo produto vindo do payload da ação
          linkImg: action.payload.linkImg, // Link da imagem do novo produto vindo do payload da ação
        };
        return [...state, novoProduto]; // Retornar o estado atualizado com o novo produto adicionado

      default:
        alert("Produto não existe ou não pode ser lido");
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerCompras, inicial);

  return (
    <ComprasContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ComprasContext.Provider>
  );
};

export default ComprasContext;
