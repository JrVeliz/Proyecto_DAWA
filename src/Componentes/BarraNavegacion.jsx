import {Link, useNavigate} from 'react-router-dom';

function BarraNavegacion(){
  const navigate = useNavigate();
  const LogOut = () => {
    const resultado = window.confirm('¿Estás seguro de cerrar sesión?');
      if (resultado) {
        navigate('/');
      }
    };

    return (
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/noticias">Noticias</Link></li>
            <li><Link to="/topsjuegos">Tops Juegos</Link></li>
            <li><Link to="/entretenimiento">Entretenimiento</Link></li>
          </ul>
          <button onClick={LogOut}>Cerrar Sesion</button>
        </nav>
    );
}

export default BarraNavegacion;