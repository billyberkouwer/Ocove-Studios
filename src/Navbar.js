import { Link } from "react-router-dom";
import logo from './assets/logo.png';

const Navbar = () => {

    return ( 
        <div className="navbar">
            <ul className="nav-links">
                <img alt="Ocove logo" src={logo} className="ocove-logo"></img>
                <div className="horizontal-line"></div>
                <li key="homepage"><Link to="/">Home</Link></li>
                <li key="projects"><Link to="/projects">Projects</Link></li>
                <li key="services"><Link to="/services">Services</Link></li>
                <li key="contact"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
     );
}
 
export default Navbar;