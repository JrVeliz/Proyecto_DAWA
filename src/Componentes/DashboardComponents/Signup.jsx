import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  //funcion pa validad las credenciales
  const handleSignup = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2>Registro de Cuenta</h2>
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
      </form>
    </div>
  );
}

export default Register;
