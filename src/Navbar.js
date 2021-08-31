import { useState } from "react";

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

    const sectionNames = [
        'Home',
        'Projects',
        'Services',
        'About',
        'Contact'
    ];

    const navLinks = sectionNames.map((sectionNames) => 
        <li><a href='/'>{sectionNames}</a></li>
    );

    return ( 
        <div className="navbar" style={{backgroundColor: navBackground}}>
            <ul className="nav-links">
                <div className="horizontal-line"></div>
                {navLinks}
            </ul>
        </div>
     );
}
 
export default Navbar;