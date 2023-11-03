import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Componentes/Home";
import Dashboard from "./Componentes/DashboardComponents/Dashboard";
import Login from "./Componentes/DashboardComponents/Login";
import SignUp from "./Componentes/DashboardComponents/Signup";
import Noticias from"./Componentes/Noticias";

function App() {
  return (
    //Enrutamiento de paginas
    <div className="App">
      <BrowserRouter>
        <Routes>            
              <Route path="/" element={<Dashboard/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="noticias" element={<Noticias/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
