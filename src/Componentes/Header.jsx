import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";

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
  const [mostrarModal,setMostrarModal]=useState(false);
  const LogOut = () => {
      setMostrarModal(true);
  };
  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      buttoActionLogout();
      handleClick("/");
      setMostrarModal(false);
      console.log("Se confirmó la acción.");
    } else {
      console.log("Se canceló la acción.");
      setMostrarModal(false);
    }
  };
  return (
    <nav className="barra-navegacion">
      <div className="containerImg">
        <Link className="logoLink" to="/home">
          <p className="logo">Logo</p>
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
      {mostrarModal && (
        <div className="confirm-window">
          <div className="confirm-content">
            <h2>Cerrar Sesión</h2>
            <p>¿Esta seguro que desea cerrar sesión?</p>
            <div className="confirm-buttons">
              <button onClick={() => handleConfirmation(true)} className="yesButton">Sí</button>
              <button onClick={() => handleConfirmation(false)} className="noButton">No</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
