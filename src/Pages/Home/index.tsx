import { ProdutosCards } from "../../components/ProdutosCard/ProdutosCard";
import { TbMeat } from "react-icons/tb";
import { GiPlantSeed } from "react-icons/gi";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
import Produtos from "../../data/Produtos";
import "./index.css";
import { useContext, useState } from "react";
import ComprasContext from "../../Context/ComprasContext";

export function Home() {
  const {pesquisa} = useContext(ComprasContext);
  // Create a regex pattern for the search input
  const regex = new RegExp(pesquisa, "i");

  // Filter products using the regex pattern
  const ProdutosFiltrados = Produtos.filter((prod) => 
    regex.test(prod.nome)
  );
  // const ProdutosFiltrados = Produtos.filter(((prod):any => pesquisa.toLowerCase() === prod.nome.toLocaleLowerCase()))
  return (
    <main className="Menu_Principal">
      <h1 className="Titulo">Produtos</h1>
      <div className="Catalago">
        <div className="Produto">
        {pesquisa && ProdutosFiltrados.map((Prod): any => {
            return (
                <ProdutosCards
                  key={Prod.id}
                  id={Prod.id}
                  NomeProduto={Prod.nome}
                  ImgProduto={Prod.linkImg}
                  Descricao={Prod.descricao}
                  Preco={Prod.preco}
                />
            );
          })}
        </div>
        <h2 className="Tipo_Produto">
          Açougue <TbMeat className="Icone" />
        </h2>
        <div className="Produto">
          {Produtos.map((Prod): any => {
            return (
              Prod.classe === "Açougue" && (
                <ProdutosCards
                  key={Prod.id}
                  id={Prod.id}
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
          {Produtos.map((Prod): any => {
            return (
              Prod.classe === "Bebida" && (
                <ProdutosCards
                  key={Prod.id}
                  id={Prod.id}
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
          {Produtos.map((Prod): any => {
            return (
              Prod.classe === "Horta" && (
                <ProdutosCards
                  key={Prod.id}
                  id={Prod.id}
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
          Produtos de Limpeza
          <MdCleanHands className="Icone" />
        </h2>
        <div className="Produto">
          {Produtos.map((Prod): any => {
            return (
              Prod.classe === "Limpeza" && (
                <ProdutosCards
                  key={Prod.id}
                  id={Prod.id}
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
