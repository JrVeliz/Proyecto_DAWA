import { useNavigate,Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  //funcion pa validad las credenciales
  const handleSignup = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2>Registrate</h2>
      <form>
        <div>
          <input type="text" placeholder="Nombre de Usuario" required />
        </div>
        <div>
          <input type="password" placeholder="Contraseña" required />
        </div>
        <button type="submit" onClick={handleSignup}>
          Registrar
        </button>
        <p>
        ¿Ya posees una cuenta?, <Link to="/login">Inicia Sesion!</Link>
      </p>
      </form>
    </div>
  );
}

export default Signup;
