import "./CarrinhoDeCompras.css";
export function CarrinhoDeCompras() {
  return (
    <>
      <h1 className="Titulo">Carrinho de compras</h1>
      <img
        className="ImgProduto"
        src="../../assets/image.jpg"
        alt="Imagem do Produto"
      />
      <h1 className="NomePorduto"> Nome do Produto</h1>
      <section className="Layout_Quantidade">
        <button> - </button>
        <h2 className="Quantidade">0</h2>
        <button> + </button>
      </section>
    </>
  );
}
