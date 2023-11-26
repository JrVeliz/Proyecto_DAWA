import {useNavigate } from "react-router-dom";
import "../../styles/News.css"; // Importa el CSS proporcionado
import { selectNews } from "../../utils/db_functions";
import { useState, useEffect } from "react";
function News() {
  const navigate = useNavigate();
  const [news, setnews] = useState([]);

  const obtenerNews = async () => {
    const allNews = await selectNews();
    setnews(allNews.data);
  };
  useEffect(() => {
    obtenerNews();
  }, []);

  function handleBannerClick(idNoticia) {
    const newSelected = news[idNoticia - 1];
    navigate("/NewComplete", { state: newSelected });
  }

  return (
    <section className="news-container">
      <h1 className="header">Noticias</h1>
      <div className="news-list">
        {news.map((noticia) => (
          <div key={noticia.id} className="news-item" onClick={() => handleBannerClick(noticia.id)}>
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
