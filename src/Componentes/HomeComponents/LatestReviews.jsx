import Data from "./DataHome.json";

function LatestReviews() {
  
  return (

    <section>
    <h2>Ultimas Reseñas</h2>
    <ul>
      {Data.reviews.map((review) => (
        <li key={review.id}>
          <img src={review.imageUrl} alt="imagen reseña"/>
          <h3>{review.gameName}</h3>
          <p>{review.shortDescription}</p>
        </li>
      ))}
    </ul>
  </section>
  );
}
export default LatestReviews;
