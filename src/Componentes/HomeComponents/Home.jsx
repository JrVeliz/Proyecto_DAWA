import { Banner, LatestReviews, NewsUpdates } from "./HomeBarrel";

import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import imgBanner from "../../multimedia/Kurumi.jpg";
import imgBanner2 from "../../multimedia/kurumi2.jpg";
import "../../styles/Banner.css";

export default function Home({currentUser, logout}) {
  const [infoBanner, setinfoBanner] = useState({
    title: '"Las patas de Kurumi a la venta"',
    mess: "Según muchos internautas existe una página milagrosa en donde puedes comprar un diseño impreso en 3d moldeano con las patas de kurumi y en buena calidad...",
    imageUrl: imgBanner2,
  });

  /*
  const actualizarBanner = () => {
      setinfoBanner({
        title: '"Las patas de Kurumi a la venta"',
        mess: "Según muchos internautas existe una página milagrosa en donde puedes comprar un diseño impreso en 3d moldeano con las patas de kurumi y en buena calidad...",
        imageUrl: imgBanner2,
      });
    };
*/

  return (
    <>
      <Header userLogged= {currentUser} buttonLogout={logout}/>
      <Banner
        imageUrl={infoBanner.imageUrl}
        message={infoBanner.mess}
        title={infoBanner.title}
      />
      <LatestReviews
        urlImagen={imgBanner}
        gameName={"Reseña xd"}
        shortDescription={"xdxdxd"}
        calification={10}
        autor={"unu"}
      />
      <NewsUpdates />
      <Footer />
    </>
  );
}
