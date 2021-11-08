import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LandingPage = () => {

    const e = useRef();
    const q = gsap.utils.selector(e);

    useEffect  (() => {
    gsap.from(q(".brand-name-line-1"), {
        y: 250,
        duration: 0.5
    },)
    gsap.from(q(".brand-name-line-2"), {
        y: -250,
        duration: 0.5
    },)
    }, []);

    return (
        <div className="home" ref={e}>
            <section className="home-1 wrapper">
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