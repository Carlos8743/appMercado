import "./CarrinhoDeCompras.css";
import { INCREMENTAR, DIMINUIR } from "../../Context/ComprasContext";
type Props = {
  state: { quantidade: number; nome: string; linkImg: string };
  dispatch: any;
  index: number;
};
export function CarrinhoDeCompras({ index, state, dispatch }: Props) {
  return (
    <>
      <img className="ImgProduto" src={state.linkImg} alt={state.nome} />
      <h1 className="NomePorduto"> {state.nome}</h1>
      <section className="Layout_Quantidade">
        <button onClick={() => dispatch({ type: DIMINUIR, payload: index })}>
          -
        </button>
        <h2 className="Quantidade">{state.quantidade}</h2>
        <button onClick={() => dispatch({ type: INCREMENTAR, payload: index })}>
          +
        </button>
      </section>
    </>
  );
}
