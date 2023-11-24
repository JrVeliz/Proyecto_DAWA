import { Link,useNavigate } from "react-router-dom";
import "../../styles/Banner.css";
import { useState } from "react";
import Data from "./DataHome.json";

export default function Banner() {

  //SETEA EL BANNER CON LA ULTIMA NOTICIA ACTUALMENTE
  const noticias = Data.noticias;
  const ultimaNoticia = noticias.length - 1;
  const ultimoItem = noticias[ultimaNoticia];
  const [dataBanner, setDataBanner] = useState({
    imageUrl: ultimoItem.urlImagen,
    descripcion: ultimoItem.descripcionCorta,
    titulo: ultimoItem.titulo,
  });
  const navigate=useNavigate();
  function handleBanner(){
    navigate('/ejemploComponenteDestino', {state:ultimoItem})
  }
  return (
    
    <section onClick={()=>{handleBanner()}}>
      <div className="banner-container">
        <div className="banner">
          <img
            src={dataBanner.imageUrl}
            alt="Banner"
            className="banner-image"
          />
          <div className="banner-text">
            <h3>{dataBanner.titulo}</h3>
            <p>{dataBanner.descripcion}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
