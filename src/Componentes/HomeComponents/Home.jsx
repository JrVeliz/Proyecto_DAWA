import {
  BarraNavegacion,
  Banner,
  FeaturedReviews,
  LatestReviews,
  NewsUpdates,
  Footer,
} from "./HomeBarrel";
function Home() {
  return (
    <>
      <p>Hola soy Home xd</p>
      <header>
        <BarraNavegacion />
      </header>
      <body>
        <Banner />
        <FeaturedReviews />
        <LatestReviews />
        <NewsUpdates />
        <footer />
      </body>
      <Footer></Footer>
    </>
  );
}

export default Home;
