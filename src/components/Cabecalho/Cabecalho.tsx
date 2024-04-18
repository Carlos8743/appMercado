import { BsSearch } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Cabecalho.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Rodape } from "../Rodape/Rodape";
import { CarrinhoDeCompras } from "../../components/CarrinhoDeCompras/CarrinhoDeCompras";
import { NavegaBar } from "../../components/NavegaBar/NavegaBar";
import { ComprasContext } from "../../Context/ComprasContext";
import { useContext } from "react";
import { VisivelCompraContext } from "../../Context/VisibilidadeCompras";
export function Cabecalho() {
  const { state, dispatch } = useContext(ComprasContext);
  const { getVisivel, visibilidadeCompras, visibilidadeHamburgue } =
    useContext(VisivelCompraContext);
  const navigate = useNavigate();
  return (
    <>
      <NavegaBar>
        {state.length > 0 ? (
          state.map((states, index) => (
            <CarrinhoDeCompras
              key={index}
              index={index}
              state={states}
              dispatch={dispatch}
            />
          ))
        ) : (
          <h1 className="carrinho"> Carrinho sem Compras</h1>
        )}
      </NavegaBar>
      <header className="Cabecalho">
        <img
          onClick={() => navigate("/")}
          className="Logo"
          alt="Logo da empresa"
          src="../../assets/LogoMarca.png"
        />
        <div className="Barra_De_Pesquisa">
          <input type="text" placeholder="Nome Do Produto" />
          <BsSearch className="Lupa" />
        </div>
        <div className="Hamburger">
          <BsCartPlus
            className="icone"
            size={30}
            onClick={() => {
              visibilidadeCompras();
            }}
          />
          <BiSolidUserCircle className="icone" size={30} />
          <RxHamburgerMenu
            className="icone"
            size={30}
            onClick={() => {
              visibilidadeHamburgue();
            }}
          />
          <ul
            className="Hamburger_Links"
            style={{ display: getVisivel.hamburgue }}
          >
            <li>Açougue</li>
            <li>Bebidas</li>
            <li>Horta</li>
            <li>Limpeza</li>
          </ul>
        </div>
      </header>
      <Outlet />
      <Rodape />
    </>
  );
}
