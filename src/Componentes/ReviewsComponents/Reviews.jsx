import {useNavigate } from "react-router-dom";
import "../../styles/Review.css";
import { selectReviews } from "../../utils/db_functions";
import { useState, useEffect } from "react";

function Reviews() {
  const navigate = useNavigate();
  const [Reviews, setreviews] = useState([]);

  const obtenerReviews = async () => {
    const allReviews = await selectReviews();
    setreviews(allReviews.data);
  };
  useEffect(() => {
    obtenerReviews();
  }, []);

  function handleBannerClick(idResenia) {
    const reviewSelected = Reviews[idResenia - 1];
    navigate("/ReviewComplete", { state: reviewSelected });
  }

  return (
    <section className="review-container">
      <h1 className="header-review">¡Mira las ultimas Reseñas!</h1>
      <div className="review-list">
        {Reviews.map((resenia) => (
          <div key={resenia.id} className="review-item" onClick={() => handleBannerClick(resenia.id)}>
            <div className="banner-container-review">
            <div className="banner-review">
            <br/>
              <img
               src={resenia.urlImagen} 
               alt="imagen reseña" 
               className="banner-image-review" />
              <div className="banner-text-review">
                <h3>{resenia.titulo_resenia}</h3>
                <p>{resenia.puntuacion}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
