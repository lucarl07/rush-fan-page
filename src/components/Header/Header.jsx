import { Link } from "react-router-dom";
import TransparentLogo from '../../assets/images/logo-transparent.png'
import './HeaderStyle.js'

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link className="nav-img" to="/">
          <img src={TransparentLogo} alt="Logo da banda Rush" />
        </Link>

        <ul className="navigation">
          <li className="nav-item">
            <Link to="/">Início</Link>
          </li> 
          <li className="nav-item">
            <Link to="/sobre">Sobre o Rush</Link>
          </li> 
          <li className="nav-item">
            <Link to="/discografia">Discografia</Link>
          </li> 
          <li className="nav-item">
            <Link to="/contato">Contato</Link>
          </li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;