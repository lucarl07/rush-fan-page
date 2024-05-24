// Modules and libraries:
import { Link } from "react-router-dom";

// Assets and components:
import TransparentLogo from '../../assets/images/logo-transparent.png'
import { Navbar, Navigation, NavImg, NavItem } from "./HeaderStyle.js";

const Header = () => {
  return (
    <Navbar>
      <Link className="nav-img" to="/">
        <NavImg src={TransparentLogo} alt="Logo da banda Rush" />
      </Link>

      <Navigation>
        <NavItem>
          <Link to="/" className="routerLink">Início</Link>
        </NavItem>
        <NavItem>
          <Link to="/sobre" className="routerLink">Sobre</Link>
        </NavItem> 
        <NavItem>
          <Link to="/discografia" className="routerLink">Discografia</Link>
        </NavItem> 
        <NavItem>
          <Link to="/contato" className="routerLink">Contato</Link>
        </NavItem> 
        <NavItem>
          <Link to="/login" className="routerLink">Entrar</Link>
        </NavItem>
      </Navigation>
    </Navbar>
  );
}

export default Header;