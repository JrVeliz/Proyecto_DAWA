import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../styles/Ampliado.css"; // Importa el CSS proporcionado

export const NewComplete = ({ currentUser, logout }) => {
  const location = useLocation();
  const [dataNew] = useState(location.state);

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
        <img src={dataNew.urlImagen} alt="Imgen de la noticia" className="banner-image-ampliado"></img>
        <div className="banner-text-ampliacion">
        <h2>{dataNew.titulo}</h2>
        <div className="metadata-container">
            <p className="author">{dataNew.autor}</p>
            <p className="publish-date">{formatDate(dataNew.fecha_publicacion)}</p>
        </div>
        </div>
        
      </div>
      </div>
      <p className="default-text">Noticia:</p>
      <p className="review-section">{dataNew.descripcion}</p>
      <div className="text-container">
      <p className="default-text">LeerMas:</p>
      <a href={dataNew.urlMasInfo} className="link-style">{dataNew.urlMasInfo}</a>
      </div>
      </div>
      <br/>
      <div className="container-comments">
        {/* <p>Hola soy la seccion de comentarios</p> */}
      </div>
      <Footer></Footer>
    </section>
  );
};
