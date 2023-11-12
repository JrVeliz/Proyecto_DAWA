import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentes/HomeComponents/Home";
import Dashboard from "./Componentes/DashboardComponents/Dashboard";
import Noticias from "./Componentes/Noticias";
import Entretenimiento from "./Componentes/Entretenimiento";
import ResenaJuego from "./Componentes/ResenaJuego";
import TopJuegos from "./Componentes/TopJuegos";
import Account from "./Componentes/Account";
import Login from "./Componentes/DashboardComponents/Login.js";
import SignUp from "./Componentes/DashboardComponents/Signup.js";

function App() {
  return (
    //Enrutamiento de paginas
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="account" element={<Account />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="topsjuegos" element={<TopJuegos />} />
          <Route path="entretenimiento" element={<Entretenimiento />} />
          <Route path="resenajuego" element={<ResenaJuego />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
