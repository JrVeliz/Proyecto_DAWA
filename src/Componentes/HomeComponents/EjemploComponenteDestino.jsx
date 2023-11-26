import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ExampleReviews() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataItemJson, setDataItemJson] = useState(location.state);

  function handleClick() {
    setDataItemJson(location.state);
  }
  function back() {
    navigate("/home");
  }
  return (
    <section>
      <button onClick={back}>Atrassasdasd</button>
      <div className="container-resenia">
        <h2>{dataItemJson.titulo_resenia}</h2>
        <img src={dataItemJson.urlImagen}></img>
        <p>{dataItemJson.puntuacion}</p>
        <p>{dataItemJson.resenia}</p>
      </div>
      <div className="container-comments">
        <p>Hola soy la seccion de comentarios</p>
      </div>
    </section>
  );
}