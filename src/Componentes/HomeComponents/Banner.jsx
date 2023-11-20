import { Link } from "react-router-dom";
import "../../styles/Banner.css";
import { useState } from "react";
import Data from "./DataHome.json";

export default function Banner({ imageUrl, message, title }) {
  const [dataBanner, setDataBanner]=useState({
    imageUrl:Data.banners[0].imageUrl,
    message:Data.banners[0].message,
    title:Data.banners[0].title
  });

  return (
    <Link to="/noticias">
      <div className="banner-container">
        <div className="banner">
          <img src={dataBanner.imageUrl} alt="Banner" className="banner-image" />
          <div className="banner-text">
            <h3>{dataBanner.title}</h3>
            <p>{dataBanner.message}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
