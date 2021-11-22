import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeLogo from './3dLogo.js';
import video from './assets/single_loop_video_bg.mp4';
import Particles from 'react-tsparticles';

const LandingPage = () => {

    // ANIMATIONS

    const e = useRef();
    const q = gsap.utils.selector(e);

    const tl = gsap.timeline({ paused: true })

    const bgVideo = useRef();

    const brandName1 = useRef();
    const brandName2 = useRef();

    const infoLine1 = useRef();
    const infoLine2 = useRef();
    const infoLine3 = useRef();
    const infoLine4 = useRef();
    const infoLine5 = useRef();

    const infoBlock = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const infoLines = [
            infoLine1.current,
            infoLine2.current,
            infoLine3.current,
            infoLine4.current,
            infoLine5.current,
        ]

        gsap.to(bgVideo.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: ".bg-video",
                scrub: true,
                pin: ".bg-video"
            }
        })

        gsap.from(brandName1.current, {
            y: 90,
            opacity: 0,
            duration: 0.5,
            delay: .2
        })
        gsap.from(brandName2.current, {
            y: -90,
            opacity: 0,
            duration: 0.5,
            delay: .2
        })

        gsap.from(infoLines, {
            y: 50,
            skewX: 20,
            skewY: 1,
            opacity: 0,
            stagger: 1,
            duration: 1,
            delay: .2,
            scrollTrigger: {
                trigger: ".home-2",
                scrub: true,
                pin: true,
            }
        })

        gsap.from(infoBlock.current, {
            x: -50,
            opacity: 0,
            stagger: 1,
            duration: .5,
            scrollTrigger: {
                trigger: ".home-3-right",
                start: "top 20%"
            }
        })

    }, []);

    return (
        <div className="home">
            <section className="home-1 wrapper">
                <video src={video} autoPlay loop playsinline muted ref={bgVideo} class="bg-video"></video>
                <div className="brand-name wrapper">
                    <div className="brand-name-line-1 no-select" ref={brandName1}>OCOVE</div>
                    <div className="brand-name-line-2 no-select" ref={brandName2}>STUDIOS</div>
                </div>
            </section>

            <section className="home-2 wrapper">
                <div className="three-logo three-logo-model">
                    <ThreeLogo />
                    <div className="three-logo three-logo-overlay"></div>
                </div>
                <div className="info-container-1">
                    <p><div ref={infoLine1}>We are a UK-based freelance collective</div>
                        <div ref={infoLine2}> specialising in website development,</div>
                        <div ref={infoLine3}> video production and 3D visualisation,</div>
                        <div ref={infoLine4}> providing innovative digital products</div>
                        <div ref={infoLine5}> for creatives, brands and businesses.</div></p>
                </div>
            </section>

            <section className="home-3 wrapper">
                <div className="home-3-left">
                    <div className="info-container-2" ref={infoBlock}>
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