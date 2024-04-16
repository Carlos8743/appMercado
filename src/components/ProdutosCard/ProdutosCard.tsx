import { BsCartPlus } from "react-icons/bs";
import "./ProdutosCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ComprasContext from "../../Context/ComprasContext";
import { ADICIONAR } from "../../Context/ComprasContext";

type ProdutoCard = {
  id: string;
  ImgProduto: string;
  NomeProduto: string;
  Descricao: string;
  Preco: string;
};

export function ProdutosCards({
  id,
  ImgProduto,
  NomeProduto,
  Descricao,
  Preco,
}: ProdutoCard) {
  const { dispatch } = useContext(ComprasContext);
  return (
    <section className="CardProdutos">
      <div className="Produto_Img">
        <img
          className="Img"
          alt={`${"imagem do Produto: "}${ImgProduto}`}
          src={ImgProduto}
        />
      </div>
      <Link to={`${"http:localhost:3000/Produto/" + id}`}>Produto</Link>
      <div className="Produto_Texto">
        <h1 className="Produto_Nome">{NomeProduto}</h1>
        <p className="Produto_Descricao">{Descricao.slice(0, 80)} ...</p>
        <h2 className="Preco">{Preco}</h2>
        <button
          className="Add"
          onClick={() =>
            dispatch({
              type: ADICIONAR,
              payload: { linkImg: ImgProduto, nome: NomeProduto },
            })
          }
        >
          Add + <BsCartPlus />
        </button>
      </div>
    </section>
  );
}
