// import { useState, useEffect, useRef } from "react";
import video from './assets/single_loop_video_bg.mp4';

const LandingPage = () => {

//     const [fade, setFade] = useState('0');
//     let scrollpos = useRef(0);

//     useEffect(() => {
//         setInterval(function () {
//             const fadeStart = 100;
//             scrollpos.current = window.scrollY;
//             if (scrollpos.current < fadeStart) {
//                 setFade('0')
//             } else {
//                 console.log(scrollpos.current)
//                 setFade('1');
//             };
//         }, 100)
//     }, [])

    return (
        <div className="home">
                <section className="home-1 wrapper">
                    <video src={video} autoPlay loop playsinline muted></video>
                    <div className="brand-name wrapper">
                        <div className="brand-name-line-1 no-select">OCOVE</div>
                        <div className="brand-name-line-2 no-select">STUDIOS</div>
                    </div>
                </section>

            <section className="home-2 wrapper">
                <div className="info-container-1">
                    <div>
                        <p>We are a UK-based freelance collective specialising in website development,
                            video production and 3D visualisation, providing innovative digital products
                            for creatives, brands and businesses.</p>
                    </div>
                </div>
            </section>

            <section className="home-3 wrapper">
                <div className="home-3-left">
                    <div className="info-container-2">
                        <p>Working as a collective allows us to bring our best creative assets to projects.
                            Collaborating as individuals, we can make things together that we couldn't alone.</p>
                    </div>
                </div>
                <div className="home-3-right">
                    <div className="particle-container">
                    </div>
                    <button className="view-projects-button"> SEE OUR WORK </button>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;