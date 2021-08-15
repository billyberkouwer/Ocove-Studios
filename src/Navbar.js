import { useState } from "react";

const Navbar = () => {

    const [NavColor, setNavColor] = useState('');
    const bg1 = 'rgba(255, 255, 255, 0)';
    const bg2 = 'rgba(255, 255, 255, 1)';

    window.onscroll = function() {changeColor()};

    function changeColor() {
            if (window.scrollY <= 30) {
                setNavColor(bg1);
            } else {
                setNavColor(bg2);
            };
    };

    return ( 
        <div className="navbar" style={{backgroundColor: NavColor}}>
            <ul className="nav-links">
                <div className="horizontal-line"></div>
                <li><a href="/">Home</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
     );
}
 
export default Navbar;