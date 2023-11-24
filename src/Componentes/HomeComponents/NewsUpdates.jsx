import Data from "./DataHome.json";
import { useNavigate } from "react-router-dom";
import { searchNew } from "./services";

//Importaciones para carrusel y sus estilos
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
    <section className="container-lastest-noticias">
      <h2>Ultimas Noticias</h2>
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Data.noticias
          .slice(Data.noticias.length / 2, Data.noticias.length - 1)
          .map((noticia) => (
            <SwiperSlide className="slider-news" onClick={()=>{handleNews(noticia.id)}}>
              <div key={noticia.id} className="noticia">
                <img src={noticia.urlImagen} alt="imagen noticia" />
                <h3>{noticia.titulo}</h3>
                <p>{noticia.descripcionCorta}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
