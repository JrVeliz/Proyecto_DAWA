import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const handleClick = (ruta) => {
    navigate(ruta);
  };

  return (
    <header>
      <button onClick={() => handleClick("/login")}>Log in</button>
      <button onClick={() => handleClick("/signup")}>Sign up</button>
    </header>
  );
}

export default Dashboard;
