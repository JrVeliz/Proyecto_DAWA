import {useNavigate } from "react-router-dom";
import "../../styles/News.css"; // Importa el CSS proporcionado
import Data from "./DataNews.json";

function News() {
  const navigate = useNavigate();

  function handleBannerClick(noticia) {
    navigate('/ejemploComponenteDestino', { state: noticia });
  }

  return (
    <section className="news-container">
      <h1 className="header">Noticias</h1>
      <div className="news-list">
        {Data.noticias.map((noticia) => (
          <div key={noticia.id} className="news-item" onClick={() => handleBannerClick(noticia)}>
            <div className="banner-container">
            <div className="banner">
              <img
               src={noticia.urlImagen} 
               alt="imagen reseña" 
               className="banner-image" />
              <div className="banner-text">
                <h3>{noticia.titulo}</h3>
                <p>{noticia.descripcionCorta}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
