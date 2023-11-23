import Data from "./DataHome.json";

function LatestReviews() {
  
  return (

    <section>
    <h2>Ultimas Reseñas</h2>
    <ul>
      {Data.resenias.map((resenia) => (
        <li key={resenia.id}>
          <img src={resenia.urlImagen} alt="imagen reseña"/>
          <h3>{resenia.titulo_resenia}</h3>
          <p>{resenia.fecha_resenia}</p>
        </li>
      ))}
    </ul>
  </section>
  );
}
export default LatestReviews;
