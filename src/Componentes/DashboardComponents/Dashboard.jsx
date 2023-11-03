import { useNavigate } from 'react-router-dom';

function Dashboard(){
    const navigate = useNavigate();
    const handleClick = (ruta) => {
        navigate(ruta)
      }
    return (
        <header>
            <button onClick={()=>handleClick('/login')}>Log in</button>
            <button onClick={()=>handleClick('/register')}>Sign up</button>
        </header>
    );
}

export default Dashboard;