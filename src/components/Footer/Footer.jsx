// Modules and libraries:
import { Link } from "react-router-dom";

// Assets and components:
import TransparentLogo from '../../assets/images/logo-transparent.png'
import { FooterCont } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterCont>
      <div className="copyright">
        <p>&copy; 2024 lucarl07</p>
        <p>Alguns direitos reservados.</p>
      </div>
      
    </FooterCont>
  );
}

export default Footer;