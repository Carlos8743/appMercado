import "./NotFound.css";
export function NotFound() {
  return (
    <section className="NotFound">
      <img
        className="Imagem"
        src="../../assets/NotFoundImage.svg"
        alt="Imagem de Pagina Não Encontrada"
      />
      <p className="Texto">
        Está pagina não está disponivel ou verifique sua conexão
      </p>
    </section>
  );
}
