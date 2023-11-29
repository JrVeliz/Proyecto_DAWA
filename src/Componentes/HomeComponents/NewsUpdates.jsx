import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectNews } from "../../utils/db_functions";
import "../../styles/NewsUpdates.css";

//Importaciones para carrusel y sus estilos
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function NewsUpdates() {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  const obtenerNews = async () => {
    try {
      const allNews = await selectNews();
      // Obtener solo las últimas 7 noticias
      const latestNews = allNews.data.slice(0, -1).slice(-6);
      setNews(latestNews);
    } catch (error) {
      console.error('Hubo un error al obtener las noticias:', error);
    }
  };

  useEffect(() => {
    obtenerNews();
  }, []);

  function handleNews(newID) {
    const newSelected = news.find(dataNew => dataNew.id === newID);
    if (newSelected) {
      navigate("/NewComplete", { state: newSelected });
      console.log("Desde LastNews: ", newID);
    } else {
      console.error("La new seleccionada no fue encontrada.");
    }
  }
  return (
    <section className="container-lastest-news">
      <h3>Ultimas Noticias</h3>
      <p> <span>Enterate de las ultimas noticias del mundo gamer, anime y más!</span></p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {news.map((noticia) => (
          <SwiperSlide className="slider-news" onClick={() => { handleNews(noticia.id) }}>
            <div key={noticia.id} className="noticiaU">
              <img src={noticia.urlImagen} alt="imagen noticia" />
              <div className="new-text">
                <h4>{noticia.titulo}</h4>
                <p>{noticia.descripcionCorta}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
