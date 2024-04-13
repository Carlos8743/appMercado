import "./NavegaBar.css";
import { ComprasContext } from "../../Context/ComprasContext";
import { useContext } from "react";
type Props = {
  children: React.ReactNode;
};

export function NavegaBar({ children }: Props) {
  const { getVisivel } = useContext(ComprasContext);
  return (
    <nav className="BarraNavega" style={{ display: getVisivel.compras }}>
      {children}
    </nav>
  );
}
