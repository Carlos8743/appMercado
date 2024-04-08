import { useState } from "react";
import { ProdutosCards } from "../../components/ProdutosCard/ProdutosCard";
import Produtos from "../../data/Produtos";
import "./index.css";

export function Home() {
  const [Produto, setProduto] = useState(Produtos);
  return (
    <main className="Menu_Principal">
      <h1 className="Titulo">Produtos</h1>
      <div className="Catalago">
        <h2 className="Tipo_Produto">Açouge</h2>
        <div className="Produto">
          {Produto.map((Prod): any => {
            return (
              <ProdutosCards
                key={Prod.id}
                NomeProduto={Prod.nome}
                ImgProduto={Prod.linkImg}
                Descricao={Prod.descricao}
                Preco={Prod.preco}
                Classe="Açouge"
              />
            );
          })}
        </div>
        <h2 className="Tipo_Produto">Bebidas</h2>
        <h2 className="Tipo_Produto">HortFruit</h2>
      </div>
    </main>
  );
}
