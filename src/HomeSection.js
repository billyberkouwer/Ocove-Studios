import logo from './assets/company-name.png';
import { useState } from 'react';

const HomeSection = () => {

    const companyTag = "The Creative Digital Services Company";
    const loremIpsum = "Proin gravida nibh vel auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit";
    
    const [textDisplace, setTextDisplace] = useState('translate(-10%)');
    const [textFade, setTextFade] = useState('0');

    function displaceText() {
        setInterval(function() {
                if (window.scrollY < 80) {
                    setTextDisplace('translate(-10%)');
                    setTextFade('0')
                } else {
                    setTextDisplace('translate(0%)');
                    setTextFade('1')
                };
            }, 300);
        };
    
    displaceText();

    return (
        <div>
            <div>
                <img src={logo} alt="company-name" className="company-name" id="logo" draggable="false"></img>
            </div>
            <div className="section-container">
                <div className="tag-container no-select">
                    <h1 className="company-tag">{companyTag}</h1>
                </div>
                <div className="header-imgs-container"></div>
                <div className="header-text-container no-select"><p style={{transform: textDisplace, opacity: textFade}}>"{loremIpsum}"</p></div>
            </div>
        </div>
     );
}
 
export default HomeSection;