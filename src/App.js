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
import { useState } from "react";
import EjemploComponenteDestino from "./Componentes/HomeComponents/EjemploComponenteDestino.jsx";
function App() {
  const [userLogged, setuserLogged]=useState(null);
  
  const handleUserLogin=(dataUser)=>{
    setuserLogged(dataUser);
    console.log('Desde App funcion set logged, user actual',userLogged);
  };
  const handleUserLogout=()=>{
    setuserLogged(null);
    console.log('Desde App funcion set logout, user actual',userLogged);
  }
  return (
    //Enrutamiento de paginas
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="home" element={<Home currentUser={userLogged} logout={handleUserLogout}/>} />
          <Route path="login" element={<Login  setUser={handleUserLogin}/>} />
          <Route path="signup" element={<SignUp />} />
          <Route path="account" element={<Account currentUser={userLogged} logout={handleUserLogout} setUser={handleUserLogin}/>} />
          <Route path="noticias" element={<Noticias currentUser={userLogged} logout={handleUserLogout}/>} />
          <Route path="topsjuegos" element={<TopJuegos currentUser={userLogged} logout={handleUserLogout}/>} />
          <Route path="entretenimiento" element={<Entretenimiento currentUser={userLogged} logout={handleUserLogout}/>} />
          <Route path="resenajuego" element={<ResenaJuego />} />
          <Route path="ejemploComponenteDestino" element={<EjemploComponenteDestino />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
