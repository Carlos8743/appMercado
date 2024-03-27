import { BsSearch } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Cabecalho.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Rodape } from "../Rodape/Rodape";
export function Cabecalho() {
  const [getVisivel, setVisivel] = useState("none");
  function Visibilidade() {
    if (getVisivel === "none") {
      setVisivel("flex");
      return;
    }
    setVisivel("none");
  }
  return (
    <>
      <header className="Cabecalho">
        <img
          className="Logo"
          alt="Logo da empresa"
          src="../../assets/LogoMarca.png"
        />
        <div className="Barra_De_Pesquisa">
          <input type="text" placeholder="Nome Do Produto" />
          <BsSearch className="Lupa" />
        </div>
        <div className="Hamburger">
          <BsCartPlus size={30} />
          <BiSolidUserCircle size={30} />
          <RxHamburgerMenu
            size={30}
            onClick={() => {
              Visibilidade();
            }}
          />
          <ul className="Hamburger_Links" style={{ display: getVisivel }}>
            <li>Carnes</li>
            <li>Hortfruit</li>
            <li>Padaria</li>
            <li>Vegetais</li>
            <li>Eletrodomésticos</li>
          </ul>
        </div>
      </header>
      <Outlet />
      <Rodape />
    </>
  );
}
