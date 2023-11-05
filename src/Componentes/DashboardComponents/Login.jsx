import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import dataCuentas from "./Cuentas.json";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  //funciones pa manejar los datos ingresados
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  //funcion pa validad las credenciales
  const handleLogin = () => {
    //Busca la cuenta
    const cuentaValida = dataCuentas.find(
      (dataCuentas) =>
        dataCuentas.usuario === usuario && dataCuentas.contrasena === contrasena
    );
    //Salta la validacion
    if (cuentaValida) {
      navigate("/home");
    } else {
      setError(
        "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo."
      );
    }
  };
  return (
    //Formulario
    <div>
      <h2>Iniciar Sesión</h2>
      <div>
        <label>Usuario</label>
        <input
          type="text"
          name="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <br />
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      <button onClick={handleLogin}>Entrar</button>
      <p>
        ¿Nuevo por aqui?, <Link to="/signup">Registrate!</Link>
      </p>
    </div>
  );
}

export default Login;
