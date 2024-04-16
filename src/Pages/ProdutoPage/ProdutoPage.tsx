import "./ProdutoPage.css";
import Produtos from "../../data/Produtos";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";

export function ProdutoPage() {
  const { id } = useParams();
  const produto = Produtos.find((prod) => prod.id === id);

  if (!produto) {
    return <NotFound />;
  }
  return (
    <div className="Produtos">
      <img className="ImagemProduto" alt={produto.nome} src={produto.linkImg} />
      <div className="Produtos_Texto">
        <h1 className="Nome">{produto.nome}</h1>
        <p className="descricao">{produto.descricao}</p>
        <h2 className="preco">{produto.preco}</h2>
        <h2 className="tabela">
          {produto.tabelaNutricional
            ? produto.tabelaNutricional
            : "Não possue tabela nuticional"}
        </h2>
      </div>
    </div>
  );
}
