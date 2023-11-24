import Data from "./DataHome.json";
import { useNavigate } from "react-router-dom";
import { searchReview } from "./services";
import "../../styles/LatestReviews.css";
//Importaciones para carrusel y sus estilos
import { Autoplay,  Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function LatestReviews() {
  const navigate=useNavigate();

  function handleReviews(idReview){
    const reviewSelected=searchReview(idReview);
    navigate('/ejemploComponenteDestino', {state:reviewSelected})
    console.log("Desde LastReview: ",idReview);
  }
  const getColorClass = (puntuacion) => {
    if (puntuacion >= 8 && puntuacion <= 10) {
      return 'green-rating';
    } else if (puntuacion >= 5 && puntuacion < 8) {
      return 'yellow-rating';
    } else {
      return 'grey-rating';
    }
  };
  return (
    <section className="container-lastest-reviews">
      <h3>Ultimas Reseñas</h3>
      <p><span>Mira las ultimas reseñas realizadas a los juegos de moda actualmente</span></p>
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
        {Data.resenias
          .slice(Data.resenias.length / 2, Data.resenias.length - 1)
          .map((resenia) => (
            <SwiperSlide className="slider-reviews" onClick={()=>{handleReviews(resenia.id)}}>
              <div key={resenia.id} className="reviewU">
                <img src={resenia.urlImagen} alt="imagen reseña" />
                <div className="overlay"></div>
                <div className="resenia-text">
                <p className={`review-rating ${getColorClass(resenia.puntuacion)}`}>{resenia.puntuacion}</p>
                <h4>{resenia.titulo_resenia}</h4>
                <p>{resenia.fecha_resenia}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
