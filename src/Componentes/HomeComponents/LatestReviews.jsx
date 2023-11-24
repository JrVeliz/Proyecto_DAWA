import Data from "./DataHome.json";
import { useNavigate } from "react-router-dom";
import { searchReview } from "./services";

//Importaciones para carrusel y sus estilos
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
  return (
    <section className="container-lastest-reviews">
      <h2>Ultimas Reseñas</h2>
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
        {Data.resenias
          .slice(Data.resenias.length / 2, Data.resenias.length - 1)
          .map((resenia) => (
            <SwiperSlide className="slider-reviews" onClick={()=>{handleReviews(resenia.id)}}>
              <div key={resenia.id}>
                <img src={resenia.urlImagen} alt="imagen reseña" />
                <h3>{resenia.titulo_resenia}</h3>
                <p>{resenia.fecha_resenia}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
