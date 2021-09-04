import { useState } from "react";

const Navbar = () => {

    const [navBackground, setNavBackground] = useState('rgba(255, 255, 255, 0)');
    const bg1 = 'rgba(255, 255, 255, 0)';
    const bg2 = 'rgba(255, 255, 255, 1)';

    function changeNavBackground() {
        setInterval(function() {
            if (window.scrollY < 30) {
                setNavBackground(bg1);
            } else {
                setNavBackground(bg2);
            };
        }, 200);
    };

    changeNavBackground();

    const sectionNames = [
        'PROJECTS',
        'SERVICES',
        'CONTACT'
    ];

    const navLinks = sectionNames.map((sectionNames) => 
        <li key={sectionNames}><a href='/'>{sectionNames}</a></li>
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