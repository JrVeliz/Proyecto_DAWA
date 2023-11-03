import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentes/Home";
import Dashboard from "./Componentes/DashboardComponents/Dashboard";
import Login from "./Componentes/DashboardComponents/Login";
import SignUp from "./Componentes/DashboardComponents/Signup";
import Noticias from"./Componentes/Noticias";
import Entretenimiento from "./Componentes/Entretenimiento";
import ResenaJuego from "./Componentes/ResenaJuego";
import TopJuegos from "./Componentes/TopJuegos";

function App() {
  return (
    //Enrutamiento de paginas
    <div className="App">
      <BrowserRouter>
        <Routes>            
              <Route path="/" element={<Dashboard/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="noticias" element={<Noticias/>}/>
              <Route path="topsjuegos" element={<TopJuegos/>}/>
              <Route path="entretenimiento" element={<Entretenimiento/>}/>
              <Route path="resenajuego" element={<ResenaJuego/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
