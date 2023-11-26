import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export const ReviewComplete = ({ currentUser, logout }) => {
  const location = useLocation();
  const [dataReview, setdataReview] = useState(location.state);
  return (
    <section>
      <Header userLogged={currentUser.username} buttonLogout={logout}></Header>
      <div className="container-resenia">
        <h2>{dataReview.titulo_resenia}</h2>
        <img src={dataReview.urlImagen} alt="Imgen de la review"></img>
        <p>{dataReview.puntuacion}</p>
        <p>{dataReview.resenia}</p>
        <p>{dataReview.fecha_resenia}</p>
        <p>{dataReview.usuario_resenia}</p>
        <p>{dataReview.plataforma}</p>
        <p>{dataReview.url_compra}</p>
      </div>
      <div className="container-comments">
        <p>Hola soy la seccion de comentarios</p>
      </div>
      <Footer></Footer>
    </section>
  );
};
