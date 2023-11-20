import Data from "./DataHome.json";
function NewsUpdates() {
  return (
    <>
      <section>
        <h2>Ultimas noticias</h2>
        <ul>
          {Data.news.map((noticia) => (
            <li key={noticia.id}>
              <img src={noticia.imgUrl} alt="imagen noticia"/>
              <h3>{noticia.titulo}</h3>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default NewsUpdates;
