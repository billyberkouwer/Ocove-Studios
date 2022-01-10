import { Link } from "react-router-dom";
import logo from './assets/logo.png';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {

    const e = useRef();

    useEffect(() => {
        const q = gsap.utils.selector(e);
        gsap.from(q(".nav-link"), {
            y: -15,
            opacity: 0,
            duration: 0.6,
            stagger: 0.18,
            delay: 1.1
        })
        gsap.from(q(".horizontal-line"), {
            scaleX: 0,
            transformOrigin: "0%",
            duration: 0.8,
            delay: 0.4
        })
        gsap.from(q(".ocove-logo"), {
            opacity: 0,
            duration: 0.5,
            delay: 0.3
        })
        
    }, []);

    return (
        <div className="navbar" ref={e}>
            <ul className="nav-links">
                <img alt="Ocove logo" src={logo} className="ocove-logo"></img>
                <div className="horizontal-line"></div>
                <li className="nav-link" key="homepage"><Link to="/">HOME</Link></li>
                <li className="nav-link" key="projects"><Link to="/projects">PROJECTS</Link></li>
                <li className="nav-link" key="services"><Link to="/services">SERVICES</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;