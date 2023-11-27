import "../../styles/Top.css";
import { selectTopGames } from "../../utils/db_functions";
import { useState, useEffect } from "react";
function Tops() {
  const [topGames, setTopGames] = useState([]);

  const obtenerTopGames = async () => {
    const allTGamesTop = await selectTopGames();
    setTopGames(allTGamesTop.data);
  };
  useEffect(() => {
    obtenerTopGames();
  }, []);

  return (
    <section className="topsSection">
    <h1 className="header">Top 10 juegos del 2023</h1>
    <ul className="topsList">
      {topGames.map((Top) => (
        <li key={Top.id} className="gameItem">
          <h3>{Top.gameName}</h3>
          <img src={Top.imageUrl} alt="imagen reseña"/>
          <p>{Top.shortDescription}</p>
          <p>{Top.releasedate}</p>
          <p>{Top.tags}</p>
          <p>{Top.platforms}</p>
          <p>{Top.Rating}</p>
          <p><a href={Top.Buy} target="_blank" rel="noopener noreferrer">¡Comprar ya!</a> </p>
          <br />
          <p style={{ fontWeight: 'bold', color: '#007bff' }}>{Top.autor}</p>
        </li>
      ))}
    </ul>
  </section>
  );
}
export default Tops;
