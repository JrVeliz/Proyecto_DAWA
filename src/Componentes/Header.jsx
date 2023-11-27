import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import logo from "../Asset/UGGLogo.png"; 

export default function Header({ userLogged, buttonLogout }) {
  return (
    <div className="header-container">
      <header>
        <BarraNavegacion
          userInfo={userLogged}
          buttoActionLogout={buttonLogout}
        />
      </header>
    </div>
  );
}

function BarraNavegacion({ userInfo, buttoActionLogout }) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = (ruta) => {
    navigate(ruta);
  };
  const LogOut = () => {
    const resultado = window.confirm("¿Estás seguro de cerrar sesión?");
    if (resultado) {
      buttoActionLogout();
      handleClick("/");
    }
  };

  return (
    <nav className="barra-navegacion">
      <div className="containerImg">
        <Link className="logoLink" to="/home">
        <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="containerMenus">
        <ul>
          <li className={location.pathname === "/home" ? "active" : ""}>
            <Link to="/home">Home</Link>
          </li>
          <li className={location.pathname === "/noticias" ? "active" : ""}>
            <Link to="/noticias">Noticias</Link>
          </li>
          <li className={location.pathname === "/topsjuegos" ? "active" : ""}>
            <Link to="/topsjuegos">Tops Juegos</Link>
          </li>
          <li
            className={location.pathname === "/reviews" ? "active" : ""}
          >
            <Link to="/reviews">Reseñas</Link>
          </li>
        </ul>
      </div>
      <div className="perfilSection">
        <button
          className="accountButton"
          onClick={() => handleClick("/account")}
        >
          {userInfo}
        </button>
        <button className="logoutButton" onClick={LogOut}>
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
}
