import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/Banner.css";
import { selectNews } from "../../utils/db_functions";
export default function Banner() {
  const navigate=useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerNews = async () => {
    try {
      const allNews = await selectNews();
      setNews(allNews.data);
      setLoading(false);
    } catch (error) {
      setError("Hubo un problema al cargar las noticias");
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerNews();
  }, []);

  if (loading) {
    return <p>Cargando noticias...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (news.length === 0) {
    return <p>No hay noticias disponibles</p>;
  }
  const latestNews = news[news.length - 1];
  
  function viewNew() {
    navigate("/ejemploComponenteDestino", { state: latestNews });
    console.log("Desde LastReview: ", latestNews);
  }

  return (
    <section onClick={()=>{viewNew()}}>
      <div className="banner-container">
        <div className="banner">
          <img
            src={latestNews.urlImagen}
            alt="Banner"
            className="banner-image"
          />
          <div className="banner-text">
            <h3>{latestNews.titulo}</h3>
            <p>{latestNews.fecha_publicacion}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
