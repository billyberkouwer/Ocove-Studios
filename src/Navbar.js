import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [navBackground, setNavBackground] = useState('rgba(255, 255, 255, 0)');
    const bg1 = 'rgba(255, 255, 255, 0)';
    const bg2 = 'rgba(255, 255, 255, 1)';

    function changeNavBackground() {
        setInterval(function() {
            if (window.scrollY < 40) {
                setNavBackground(bg1);
            } else {
                setNavBackground(bg2);
            };
        }, 300);
    };

    changeNavBackground();

    return ( 
        <div className="navbar" style={{backgroundColor: navBackground}}>
            <ul className="nav-links">
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