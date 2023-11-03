import {Link} from 'react-router-dom';

function BarraNavegacion(){
    return (
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/noticias">Noticias</Link></li>
          </ul>
        </nav>
    );
}

export default BarraNavegacion