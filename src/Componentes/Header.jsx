import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

export default function Header({userLogged, buttonLogout}) {
  return (
    <>
      <header>
        <BarraNavegacion userInfo={userLogged} buttoActionLogout={buttonLogout}/>
      </header>
    </>
  );
}

function BarraNavegacion({userInfo, buttoActionLogout}) {
  const navigate = useNavigate();
  const LogOut = () => {
    const resultado = window.confirm("¿Estás seguro de cerrar sesión?");
    if (resultado) {
      buttoActionLogout();
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
      <p>{userInfo}</p>
      <button className="boton-cerrar-sesion" onClick={LogOut}>
        Cerrar Sesión
      </button>
    </nav>
  );
}
