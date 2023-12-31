import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>Sobre Nosotros</h2>
            <h3>Grupo # 3</h3>
            <p>
              Bienvenido a nuestra plataforma de reseñas de videojuegos. Aquí
              encontrarás las últimas reseñas, noticias y actualizaciones del
              mundo de los videojuegos. <br /> Esta página web fue hecha con
              javascript y Maicena
            </p>
          </div>

          <div className="footer-section links">
            <h2>Enlaces Rápidos</h2>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/noticias">Noticias</Link>
              </li>
              <li>
                <Link to="/topsjuegos">Top Juegos</Link>
              </li>
              <li>
                <Link to="/entretenimiento">Entretenimiento</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contacto:</h2>
            <p>Email: grupo3.DAWA@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Web de reseñas de videojuegos U-GG.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
