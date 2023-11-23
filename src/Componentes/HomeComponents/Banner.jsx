import { Link } from "react-router-dom";
import "../../styles/Banner.css";
import { useState } from "react";
import Data from "./DataHome.json";

export default function Banner(){
  const [dataBanner, setDataBanner]=useState({
    imageUrl:Data.noticias[0].urlImagen,
    descripcion:Data.noticias[0].descripcionCorta,
    titulo:Data.noticias[0].titulo
  });

  return (
    <Link to="/noticias">
      <div className="banner-container">
        <div className="banner">
          <img src={dataBanner.imageUrl} alt="Banner" className="banner-image" />
          <div className="banner-text">
            <h3>{dataBanner.titulo}</h3>
            <p>{dataBanner.descripcion}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
