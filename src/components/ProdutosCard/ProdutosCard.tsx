import { BsCartPlus } from "react-icons/bs";
import "./ProdutosCard.css";
type ProdutoCard = {
  ImgProduto: string;
  NomeProduto: string;
  Descricao: string;
  Preco: string;
  Classe: string;
};
export function ProdutosCards({
  ImgProduto,
  NomeProduto,
  Descricao,
  Preco,
}: ProdutoCard) {
  return (
    <section className="CardProdutos">
      <div className="Produto_Img">
        <img
          className="Img"
          alt={`${"imagem do Produto: "}${ImgProduto}`}
          src={ImgProduto}
        />
      </div>
      <div className="Produto_Texto">
        <h1 className="Produto_Nome">{NomeProduto}</h1>
        <p className="Produto_Descricao">{Descricao}</p>
        <h2 className="Preco">{Preco}</h2>
        <button className="Add">
          Add + <BsCartPlus />
        </button>
      </div>
    </section>
  );
}
