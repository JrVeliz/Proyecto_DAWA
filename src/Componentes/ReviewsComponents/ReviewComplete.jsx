import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/Ampliado.css"; // Importa el CSS proporcionado


export const ReviewComplete = ({ currentUser, logout }) => {
  const location = useLocation();
  const [dataReview] = useState(location.state);

  // Función para formatear la fecha
  const formatDate = (dateString) => {
   const options = { year: "numeric", month: "long", day: "numeric" };
   const date = new Date(dateString);
   return date.toLocaleDateString(undefined, options);
 };


  return (
    <section>
      <Header userLogged={currentUser.username} buttonLogout={logout}></Header>
      <div className="container-resenia">
        
        <div className="banner-container-ampliado">
        <div className="banner-ampliado">
        <img src={dataReview.urlImagen} alt="Imgen de la review" className="banner-image-ampliado"></img>
        <div className="banner-text-ampliacion">
        <h2>{dataReview.titulo_resenia}</h2>
        <div className="metadata-container">
        <p className="publish-date">{formatDate(dataReview.fecha_resenia)}</p>
        <p className="author">{dataReview.usuario_resenia}</p>
        </div>
        </div>
      </div>
      </div>
      <p className="default-text">Reseña:</p>
      <p className="review-section">{dataReview.resenia}</p>
      <div className="text-container">
          <p className="default-text">Calificación final:</p>
          <p className="review-section">{dataReview.puntuacion}</p>
      </div>
      <div className="text-container">
      <p className="default-text">Disponible en:</p>
      <p className="review-section">{dataReview.plataforma}</p>
      </div>
      <div className="text-container">
      <p className="default-text">¡Consiguelo!</p>
      <a href={dataReview.url_compra} className="link-style">{dataReview.url_compra}</a>
      </div>
      </div>
      <div className="container-comments">
        <p>Hola soy la seccion de comentarios</p>
      </div>
      <Footer></Footer>
    </section>
  );
};
