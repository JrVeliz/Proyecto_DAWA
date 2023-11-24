import Data from "./DataHome.json";
import { useNavigate } from "react-router-dom";
import { searchNew } from "./services";
import "../../styles/NewsUpdates.css";
//Importaciones para carrusel y sus estilos
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function NewsUpdates() {
  const navigate = useNavigate();

  function handleNews(idNew) {
    const newSelected = searchNew(idNew);
    navigate("/ejemploComponenteDestino", { state: newSelected });
    console.log("Desde NewsUpdates: ", idNew);
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
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        {Data.noticias
          .slice(Data.noticias.length / 2, Data.noticias.length - 1)
          .map((noticia) => (
            <SwiperSlide className="slider-news" onClick={()=>{handleNews(noticia.id)}}>
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
