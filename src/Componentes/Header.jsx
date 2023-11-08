import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <BarraNavegacion />
      </header>
    </>
  );
}

function BarraNavegacion() {
  const navigate = useNavigate();
  const LogOut = () => {
    const resultado = window.confirm("¿Estás seguro de cerrar sesión?");
    if (resultado) {
      navigate("/");
    }
  };

  return (
    <nav className="barra-navegacion">
      <p className="logo">Logo</p>
      <ul className="lista-enlaces">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/noticias">Noticias</Link>
        </li>
        <li>
          <Link to="/topsjuegos">Tops Juegos</Link>
        </li>
        <li>
          <Link to="/entretenimiento">Entretenimiento</Link>
        </li>
      </ul>
      <button className="boton-cerrar-sesion" onClick={LogOut}>
        Cerrar Sesión
      </button>
    </nav>
  );
}
