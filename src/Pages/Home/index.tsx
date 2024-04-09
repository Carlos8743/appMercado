import { useState } from "react";
import { ProdutosCards } from "../../components/ProdutosCard/ProdutosCard";
import { TbMeat } from "react-icons/tb";
import { GiPlantSeed } from "react-icons/gi";
import { FaGlassMartiniAlt } from "react-icons/fa";
import Produtos from "../../data/Produtos";
import "./index.css";

export function Home() {
  const [Produto, setProduto] = useState(Produtos);
  return (
    <main className="Menu_Principal">
      <h1 className="Titulo">Produtos</h1>
      <div className="Catalago">
        <h2 className="Tipo_Produto">
          Açougue <TbMeat className="Icone" />
        </h2>
        <div className="Produto">
          {Produto.map((Prod): any => {
            return (
              Prod.classe === "Açougue" && (
                <ProdutosCards
                  key={Prod.id}
                  NomeProduto={Prod.nome}
                  ImgProduto={Prod.linkImg}
                  Descricao={Prod.descricao}
                  Preco={Prod.preco}
                />
              )
            );
          })}
        </div>
        <h2 className="Tipo_Produto">
          Bebidas
          <FaGlassMartiniAlt className="Icone" />
        </h2>
        <div className="Produto">
          {Produto.map((Prod): any => {
            return (
              Prod.classe === "Bebida" && (
                <ProdutosCards
                  key={Prod.id}
                  NomeProduto={Prod.nome}
                  ImgProduto={Prod.linkImg}
                  Descricao={Prod.descricao}
                  Preco={Prod.preco}
                />
              )
            );
          })}
        </div>
        <h2 className="Tipo_Produto">
          Horta
          <GiPlantSeed className="Icone" />
        </h2>
        <div className="Produto">
          {Produto.map((Prod): any => {
            return (
              Prod.classe === "Horta" && (
                <ProdutosCards
                  key={Prod.id}
                  NomeProduto={Prod.nome}
                  ImgProduto={Prod.linkImg}
                  Descricao={Prod.descricao}
                  Preco={Prod.preco}
                />
              )
            );
          })}
        </div>
      </div>
    </main>
  );
}
