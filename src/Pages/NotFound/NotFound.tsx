import "./NotFound.css";
import ImageLinks from "../../components/ImagesLinks/ImagesLinks";
export function NotFound() {
  return (
    <section className="NotFound">
      <ImageLinks
        estilo="Imagem"
        src="../../assets/NotFoundImage.svg"
        alt="Imagem de Pagina Não Encontrada"
      />
      <p className="Texto">
        Está pagina não está disponivel ou verifique sua conexão
      </p>
    </section>
  );
}
