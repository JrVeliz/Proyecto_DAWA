import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { selectReviews } from "../../utils/db_functions";
import "../../styles/LatestReviews.css";

//Importaciones para carrusel y sus estilos
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function LatestReviews() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  const obtenerReviews = async () => {
    const allReviews = await selectReviews();
    setReviews(allReviews.data);
    const sortedReviews = allReviews.data.sort(
      (a, b) => new Date(b.fecha_resenia) - new Date(a.fecha_resenia)
    );
    // Obtener solo las últimas 7 reseñas
    const latestReviews = sortedReviews.slice(0, 7);
    setReviews(latestReviews);
  };
  useEffect(() => {
    obtenerReviews();
  }, []);

  function handleReviews(idReview) {
    const reviewSelected = reviews[idReview - 1];
    navigate("/ReviewComplete", { state: reviewSelected });
    console.log("Desde LastReview: ", idReview);
  }

  const getColorClass = (puntuacion) => {
    if (puntuacion >= 8 && puntuacion <= 10) {
      return "green-rating";
    } else if (puntuacion >= 5 && puntuacion < 8) {
      return "yellow-rating";
    } else {
      return "grey-rating";
    }
  };

  const formatDate = (fecha) => {
    const date = new Date(fecha);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <section className="container-lastest-reviews">
      <h3>Ultimas Reseñas</h3>
      <p>
        <span>
          Mira las ultimas reseñas realizadas a los juegos de moda actualmente
        </span>
      </p>
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
        {reviews.map((review) => (
          <SwiperSlide
            className="slider-reviews"
            onClick={() => handleReviews(review.id)}
          >
            <div key={review.id} className="reviewU">
              <img src={review.urlImagen} alt="imagen reseña" />
              <div className="overlay"></div>
              <div className="resenia-text">
                <p
                  className={`review-rating ${getColorClass(
                    review.puntuacion
                  )}`}
                >
                  {review.puntuacion}
                </p>
                <h4>{review.titulo_resenia}</h4>
                <p>{review.usuario_resenia}</p>
                <p>{formatDate(review.fecha_resenia)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
