import { Link } from "react-router-dom";

function Banner({ imageUrl, message, title }) {
  return (
    <Link to="/noticias">
      <div className="banner-container">
        <div className="banner">
          <img src={imageUrl} alt="Banner" className="banner-image" />
          <div className="banner-text">
            <h3>{title}</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Banner;
