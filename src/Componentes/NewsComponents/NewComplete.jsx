import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export const NewComplete = ({ currentUser, logout }) => {
  const location = useLocation();
  const [dataNew, setdataReview] = useState(location.state);
  return (
    <section>
      <Header userLogged={currentUser.username} buttonLogout={logout}></Header>
      <div className="container-resenia">
        <h2>{dataNew.titulo}</h2>
        <img src={dataNew.urlImagen} alt="Imgen de la noticia"></img>
        <p>{dataNew.descripcion}</p>
        <p>{dataNew.fecha_publicacion}</p>
        <p>{dataNew.autor}</p>
        <p>{dataNew.urlMasInfo}</p>
      </div>
      <div className="container-comments">
        <p>Hola soy la seccion de comentarios</p>
      </div>
      <Footer></Footer>
    </section>
  );
};
