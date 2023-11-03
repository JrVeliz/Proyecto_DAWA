import { useNavigate } from 'react-router-dom';
import cuentas from '../Usuarios';
import { useState } from 'react';


function Login(){
    //funciones pa manejar los datos ingresados
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const [error, setError] = useState(null);

    //funcion pa validad las credenciales
    const handleLogin = () => {
        const cuentaValida = cuentas.find(
          cuenta => cuenta.usuario === usuario && cuenta.contrasena === contrasena
        );
        
        if (cuentaValida) {
          navigate('/home');
        } else {
          setError('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
    };

    return(
        //Formulario
        <body>
          <div>
            <h2>Iniciar Sesión</h2>
            <div>
              <label>Usuario</label>
              <input
                type='text'
                name='usuario'
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
              <br />

              <label>Contraseña</label>
              <input
                type='password'
                name='password'
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
              <br/>
            </div>
            {error && <div>{error}</div>}
            <button onClick={handleLogin}>
                Entrar
              </button>
        </div>        
      </body>
    );
}

export default Login;