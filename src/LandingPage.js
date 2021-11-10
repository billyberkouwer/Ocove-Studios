import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from 'react-tsparticles';

const LandingPage = () => {

    // ANIMATIONS

    const e = useRef();
    const q = gsap.utils.selector(e);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.from(q(".brand-name-line-1"), {
            y: 250,
            duration: 0.5
        })
        gsap.from(q(".brand-name-line-2"), {
            y: -250,
            duration: 0.5
        })

        ScrollTrigger.create({
            trigger: ".home-2",
            pin: true,
            start: "top top",
            end: "+=30%"
        })

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
                        <Particles
                            id="tsparticles"
                            options={{
                                background: {
                                    color: {
                                        value: "#FFFFF",
                                    },
                                },
                                fullScreen: {
                                    enable: false
                                },
                        fpsLimit: 60,
                                interactivity: {
                                    events: {
                                        onClick: {
                                            enable: false,
                                            mode: "push",
                                        },
                                        onHover: {
                                            enable: true,
                                            mode: "repulse",
                                        },
                                        resize: true,
                                    },
                                    modes: {
                                        bubble: {
                                            distance: 100,
                                            duration: 2,
                                            opacity: 0.8,
                                            size: 30,
                                        },
                                        push: {
                                            quantity: 4,
                                        },
                                        repulse: {
                                            distance: 80,
                                            duration: 0.4,
                                        },
                                    },
                                },
                                particles: {
                                    color: {
                                        value: "#000000",
                                    },
                                    links: {
                                        color: "#000000",
                                        distance: 180,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                    },
                                    collisions: {
                                        enable: false,
                                    },
                                    move: {
                                        direction: "none",
                                        enable: true,
                                        outMode: "bounce",
                                        random: false,
                                        speed: 3,
                                        straight: false,
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            value_area: 800,
                                        },
                                        value: 100,
                                    },
                                    opacity: {
                                        value: 0.5,
                                    },
                                    shape: {
                                        type: "circle",
                                    },
                                    size: {
                                        random: true,
                                        value: 5,
                                    },
                                },
                                detectRetina: true,
                            }
                            } />
                    </div>
                    <button className="view-projects-button"> SEE OUR WORK </button>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;