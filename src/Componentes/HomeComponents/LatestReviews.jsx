function LatestReviews({
  urlImagen,
  gameName,
  shortDescription,
  calification,
  autor,
}) {
  return (
    <>
      <h2>Ultimas Reseñas</h2>
      <div>
        <img src={urlImagen} alt={`Imagen del juego ${gameName}`} />
        <div>
          <h3>{gameName}</h3>
          <p>Autor:{autor}</p>
          <p>Calificación:{calification}</p>
          <p>{shortDescription}</p>
        </div>
      </div>
    </>
  );
}
export default LatestReviews;
