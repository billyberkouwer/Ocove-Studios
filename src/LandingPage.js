import { useState, useEffect, useRef } from "react";

const LandingPage = () => {

    const [fade, setFade] = useState('0');
    let scrollpos = useRef(0);

    useEffect(() => {
        setInterval(function() {
            const fadeStart = 120;
            scrollpos.current = window.scrollY;
            if (scrollpos.current < fadeStart) {
                setFade('0')
            } else {
                console.log(scrollpos.current)
                setFade('1');
            };
        }, 100)
    }, [])

    return ( 
        <div className="section-container-scroll">
            <div className="landing-page-bg no-select"></div>
            <div className="landing-page-container">
                <div className="brand-name no-select">Ocove Studios</div>
                <div style={{width: "50%", margin: "0 25%", height: "2px"}} className="horizontal-line"></div>
                <div className="brand-tag no-select">The Creative Digital Services Specialists</div>
            </div>
            <div className="info-container" style={{opacity: fade}}>
                <p>Morbi lobortis eros a libero placerat aliquam. Nulla nec nisi id neque fermentum vestibulum. Praesent sit amet arcu id sapien sodales iaculis malesuada sed massa. Donec lacinia at turpis ac tincidunt. Nulla euismod fringilla urna, vel vehicula tellus commodo a. Proin dui ligula, ullamcorper id velit id, vulputate sollicitudin neque. Donec id luctus mi. Sed sed ex vitae urna scelerisque mollis. Aenean sollicitudin, felis id mollis auctor, dui mi eleifend ex, quis varius neque mi in arcu.</p>
            </div>
        </div>
     );
}
 
export default LandingPage;