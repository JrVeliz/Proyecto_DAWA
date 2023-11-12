import noticas from "./Noticias.json";

function NewsUpdates() {
  return (
    <>
      <section>
        <h2>Ultimas noticias</h2>
        <ul>
          {noticas.map((noticia) => (
            <li key={noticia.id}>
              <h3>{noticia.titulo}</h3>
              <p>{noticia.descripcion}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default NewsUpdates;
