import { useState, useEffect } from "react";

const Navbar = () => {

    const [NavColor, setNavColor] = useState('');
    const bg1 = 'rgba(255, 255, 255, 0)';
    const bg2 = 'rgba(255, 255, 255, 1)';

    useEffect(() => {
        function scrollBehaviour(func) {
            window.onscroll = func;
        }
        
        function changeNavBackground() {
            setInterval(function() {
                if (window.scrollY < 40) {
                    setNavColor(bg1);
                } else {
                    setNavColor(bg2);
                };
            }, 300);
        }

        scrollBehaviour(changeNavBackground);
    }, []);

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
        <div className="navbar" style={{backgroundColor: NavColor}}>
            <ul className="nav-links">
                <div className="horizontal-line"></div>
                {navLinks}
            </ul>
        </div>
     );
}
 
export default Navbar;