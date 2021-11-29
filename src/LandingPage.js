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

    const bgVideo = useRef();

    const brandName1 = useRef();
    const brandName2 = useRef();

    const bgLogo = useRef();

    const infoLine1 = useRef();
    const infoLine2 = useRef();
    const infoLine3 = useRef();
    const infoLine4 = useRef();
    const infoLine5 = useRef();

    const infoBlock = useRef();
    const particles = useRef();

    const projectsButton = useRef();

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
            // y: 90,
            opacity: 0,
            duration: .5,
            delay: .4
        })
        gsap.from(brandName2.current, {
            // y: -90,
            opacity: 0,
            duration: .5,
            delay: .8
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".home-2",
                scrub: true,
                start: "top 30%",
                end: "bottom -50%",
                toggleActions: "play reverse play reverse",
            }
        })
        tl
            .to(bgLogo.current, { opacity: .6, duration: 0.5 })
            .to(bgLogo.current, { opacity: 0, duration: 0.5 }, 0.5);

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

        gsap.from(particles.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: ".home-3-left",
                scrub: true,
                start: "top 50%",
                end: "top top",
            }
        })

        gsap.from(infoBlock.current, {
            x: -10,
            opacity: 0,
            duration: .5,
            scrollTrigger: {
                trigger: ".home-3-right",
                start: "top 50%",
                end: "top top",
                scrub: true
            }
        })

        gsap.from(projectsButton.current, {
            x: 10,
            opacity: 0,
            duration: .5,
            scrollTrigger: {
                trigger: ".view-projects-button",
                start: "bottom bottom",
                end: "top 75%",
                scrub: true,
            }
        })

    }, []);

    return (
        <div className="home">
            <section className="home-1 wrapper">
                <video src={video} autoPlay loop playsinline muted ref={bgVideo} class="bg-video"></video>
                <div className="brand-name wrapper">
                    <svg width="1000" height="470" viewBox="0 0 1217 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M142.24 4.096C71.968 4.096 14.944 49.6 14.944 106.048C14.944 162.208 71.968 207.712 142.24 207.712C212.512 207.712 269.536 162.208 269.536 106.048C269.536 49.6 212.512 4.096 142.24 4.096ZM174.784 191.872C105.376 191.872 34.816 135.136 34.816 79.84C34.816 44.416 65.056 19.936 109.408 19.936C178.816 19.936 249.376 76.672 249.376 131.968C249.376 167.68 219.136 191.872 174.784 191.872ZM301.205 78.976C301.205 43.264 330.293 17.056 375.797 17.056C418.709 17.056 460.181 39.232 485.237 66.016L511.445 44.128C487.829 17.056 449.813 0.351995 408.629 0.351995C336.341 0.351995 281.333 49.312 281.333 106.048C281.333 162.784 336.341 211.744 408.629 211.744C442.613 211.744 474.869 200.224 498.485 180.64L495.029 178.048C480.917 189.856 461.333 195.04 441.173 195.04C370.037 195.04 301.205 134.848 301.205 78.976ZM644.08 4.096C573.808 4.096 516.784 49.6 516.784 106.048C516.784 162.208 573.808 207.712 644.08 207.712C714.352 207.712 771.376 162.208 771.376 106.048C771.376 49.6 714.352 4.096 644.08 4.096ZM676.624 191.872C607.216 191.872 536.656 135.136 536.656 79.84C536.656 44.416 566.896 19.936 611.248 19.936C680.656 19.936 751.216 76.672 751.216 131.968C751.216 167.68 720.976 191.872 676.624 191.872ZM986.501 4.384H916.805C940.133 13.024 951.653 38.656 951.653 57.952C951.653 61.12 951.077 66.592 949.637 69.472L889.445 192.448L811.109 4.384H773.381L858.053 208H895.781L891.461 197.632L986.501 4.384ZM989.414 4.67199V208.576H994.022L1024.55 184.096C1040.1 201.376 1065.16 212.32 1091.94 212.32C1108.93 212.32 1125.35 208 1139.17 200.224V155.008C1122.76 174.304 1091.08 196.192 1059.97 196.192C1045.86 196.192 1027.14 187.84 1027.14 174.592V79.552H1078.98L1111.81 106.048V75.808H1027.14V8.70399H1107.21L1140.33 34.912V4.67199H989.414Z" fill="black" />
                        <path d="M101.529 435.22C134.676 435.22 162.864 417.994 162.864 381.976C162.864 348.046 138.591 331.603 91.611 298.717C56.637 274.444 43.326 265.57 43.326 247.561C43.326 231.901 56.115 220.939 77.517 220.939C111.186 220.939 124.758 248.605 131.022 276.01L157.383 265.309C136.242 231.379 111.708 215.98 79.344 215.98C47.763 215.98 23.229 231.118 23.229 260.089C23.229 287.494 39.672 300.544 79.605 329.254C120.321 358.486 142.767 373.102 142.767 394.504C142.767 417.994 126.846 430.261 103.878 430.261C69.426 430.261 43.848 398.419 36.801 354.571L10.44 368.665C31.059 417.994 61.857 435.22 101.529 435.22ZM252.377 430C250.55 409.12 250.028 397.897 250.028 376.234V226.159H253.16C266.471 226.159 285.263 227.986 307.187 239.209L320.759 221.2H143.54L157.112 239.209C179.036 227.986 197.828 226.159 211.139 226.159H214.271V376.234C214.271 397.897 213.749 409.12 211.922 430H252.377ZM413.404 435.22C461.167 435.22 483.874 409.642 483.874 341.26V274.966C483.874 253.303 484.396 242.08 486.223 221.2H476.566C478.393 242.08 478.915 253.303 478.915 274.966V341.26C478.915 405.205 458.818 427.39 419.407 427.39C378.169 427.39 363.031 402.595 363.031 341.26V274.966C363.031 253.303 363.553 242.08 365.38 221.2H324.925C326.752 242.08 327.274 253.303 327.274 274.966V341.26C327.274 415.906 361.987 435.22 413.404 435.22ZM563.438 430C632.081 430 673.841 392.938 673.841 325.6C673.841 255.391 630.776 221.2 563.438 221.2H499.754C501.581 242.08 502.103 253.303 502.103 274.966V376.234C502.103 397.897 501.581 409.12 499.754 430H563.438ZM537.86 226.159H562.394C605.459 226.159 635.213 257.74 635.213 325.6C635.213 390.85 605.459 425.041 562.394 425.041H537.86V226.159ZM725.172 430C723.345 409.12 722.823 397.897 722.823 376.234V274.966C722.823 253.303 723.345 242.08 725.172 221.2H684.717C686.544 242.08 687.066 253.303 687.066 274.966V376.234C687.066 397.897 686.544 409.12 684.717 430H725.172ZM865.867 228.22C796.327 228.22 739.897 273.25 739.897 329.11C739.897 384.685 796.327 429.715 865.867 429.715C935.407 429.715 991.837 384.685 991.837 329.11C991.837 273.25 935.407 228.22 865.867 228.22ZM898.072 414.04C829.387 414.04 759.562 357.895 759.562 303.175C759.562 268.12 789.487 243.895 833.377 243.895C902.062 243.895 971.887 300.04 971.887 354.76C971.887 390.1 941.962 414.04 898.072 414.04ZM1088.51 435.22C1121.66 435.22 1149.84 417.994 1149.84 381.976C1149.84 348.046 1125.57 331.603 1078.59 298.717C1043.62 274.444 1030.31 265.57 1030.31 247.561C1030.31 231.901 1043.1 220.939 1064.5 220.939C1098.17 220.939 1111.74 248.605 1118 276.01L1144.36 265.309C1123.22 231.379 1098.69 215.98 1066.32 215.98C1034.74 215.98 1010.21 231.118 1010.21 260.089C1010.21 287.494 1026.65 300.544 1066.59 329.254C1107.3 358.486 1129.75 373.102 1129.75 394.504C1129.75 417.994 1113.83 430.261 1090.86 430.261C1056.41 430.261 1030.83 398.419 1023.78 354.571L997.421 368.665C1018.04 417.994 1048.84 435.22 1088.51 435.22Z" fill="black" />
                    </svg>
                </div>
            </section>

            <section className="home-2 wrapper">
                <div className="three-logo three-logo-model" ref={bgLogo}>
                    <ThreeLogo />
                    <div className="three-logo three-logo-overlay"></div>
                </div>
                <div className="info-container-1">
                    <p><div ref={infoLine1}> <div class="paragraph-arrow"> <svg width="70" height="23" viewBox="0 0 122 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M121.389 12.3136C121.975 11.7278 121.975 10.7781 121.389 10.1923L111.843 0.646328C111.258 0.0605412 110.308 0.0605412 109.722 0.646328C109.136 1.23211 109.136 2.18186 109.722 2.76765L118.207 11.2529L109.722 19.7382C109.136 20.324 109.136 21.2737 109.722 21.8595C110.308 22.4453 111.258 22.4453 111.843 21.8595L121.389 12.3136ZM0.918732 12.7529H120.329V9.75293H0.918732V12.7529Z" fill="black" />
                    </svg>
                    </div> We are a UK-based freelance collective</div>
                        <div ref={infoLine2}> specialising in website development, video </div>
                        <div ref={infoLine3}> production and 3D visualisation, providing </div>
                        <div ref={infoLine4}> innovative digital products for creatives, </div>
                        <div ref={infoLine5}> brands and businesses.</div></p>
                </div>
            </section>

            <section className="home-3 wrapper">
                <div className="home-3-left">
                    <div className="info-container-2" ref={infoBlock}>
                        <p>Working as a collective allows us to bring our best creative assets to projects.</p>
                        <p><div class="paragraph-arrow">
                            <svg width="60" height="23" viewBox="0 0 122 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M121.389 12.3136C121.975 11.7278 121.975 10.7781 121.389 10.1923L111.843 0.646328C111.258 0.0605412 110.308 0.0605412 109.722 0.646328C109.136 1.23211 109.136 2.18186 109.722 2.76765L118.207 11.2529L109.722 19.7382C109.136 20.324 109.136 21.2737 109.722 21.8595C110.308 22.4453 111.258 22.4453 111.843 21.8595L121.389 12.3136ZM0.918732 12.7529H120.329V9.75293H0.918732V12.7529Z" fill="black" />
                            </svg>
                        </div>Collaborating as individuals, we can make things together that we couldn't alone.</p>
                    </div>
                </div>
                <div className="home-3-right">
                    <div className="particle-container" ref={particles}>
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
                                        speed: 1.5,
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
                                        value: 0.8,
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
                    <button className="view-projects-button" ref={projectsButton}> SEE OUR WORK </button>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;