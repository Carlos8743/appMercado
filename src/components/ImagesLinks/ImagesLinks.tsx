import { useEffect, useState } from "react";
type Props = {
  estilo?: string;
  src: string;
  alt: string;
};
const ImageCacheExample = ({ estilo, src, alt }: Props) => {
  const [cachedSrc, setCachedSrc] = useState<string>("");

  useEffect(() => {
    const cachedImage = localStorage.getItem(src);
    if (cachedImage) {
      // Se a imagem estiver em cache, use-a
      setCachedSrc(cachedImage);
    } else {
      // Se não estiver em cache, carregue-a e armazene-a em cache
      const image = new Image();
      image.src = src;
      image.onload = () => {
        // Armazena a imagem em cache
        localStorage.setItem(src, src);
        // Define a imagem carregada como a imagem exibida
        setCachedSrc(src);
      };
    }
  }, [src]);

  return <img className={estilo} src={cachedSrc} alt={alt} />;
};

export default ImageCacheExample;
