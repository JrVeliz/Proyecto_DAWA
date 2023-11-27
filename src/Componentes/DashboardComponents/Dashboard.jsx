import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/NeonButton.css";
import topImage from "../../Asset/UGGLogo.png"; 

function Dashboard() {
  const navigate = useNavigate();
  const handleClick = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="bg-dark text-light vh-100 d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: 'url("https://2.bp.blogspot.com/-zvieefMOj2E/WNCKCLFvo0I/AAAAAAAAACE/pxvztGmFgBoA4jPLiPj1VXhGEkc96wrhwCLcB/s1600/Metal-Slug-%2528Animated-GIF%2529.gif")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>

      <img src={topImage} alt="topImage" style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '20px' }} />

      <header className="d-grid gap-2 col-3 mx-auto">
        <button className="btn btn-neon btn-lg" onClick={() => handleClick("/login")}>Log in</button>
        <button className="btn btn-neon btn-lg" onClick={() => handleClick("/signup")}>Sign up</button>
      </header>
    </div>
  );
}

export default Dashboard;
