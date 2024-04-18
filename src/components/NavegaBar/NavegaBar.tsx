import { VisivelCompraContext } from "../../Context/VisibilidadeCompras";
import "./NavegaBar.css";

import { useContext } from "react";
type Props = {
  children: React.ReactNode | any;
};

export function NavegaBar({ children }: Props) {
  const { getVisivel, visibilidadeCompras } = useContext(VisivelCompraContext);
  return (
    <nav className="BarraNavega" style={{ display: getVisivel.compras }}>
      <h1 onClick={() => visibilidadeCompras()} className="Titulo">
        Carrinho de compras
      </h1>
      {children}
    </nav>
  );
}
