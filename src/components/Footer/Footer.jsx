// Modules and libraries:
import { Link } from "react-router-dom";

// Assets and components:
// import TransparentLogo from '../../assets/images/logo-transparent.png'
import { FooterCont, MiddleBar, LowerBar, FooterNav, SectionLine } from "./FooterStyle";
import { NavItem } from "../Header/HeaderStyle"

const Footer = () => {
  return (
    <FooterCont>
      <FooterNav>
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
      </FooterNav>
      <SectionLine/>
      <MiddleBar>
        <div className="copyright">
          <p>&copy; 2024 lucarl07</p>
          <p>Alguns direitos reservados.</p>
        </div>
      </MiddleBar>
      <LowerBar>
        <p>Digite aqui alguma rede social...</p>
      </LowerBar>
    </FooterCont>
  );
}

export default Footer;