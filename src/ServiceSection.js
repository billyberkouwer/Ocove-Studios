// import NewWebIcon from "./NewWebIcon.js";
// import New3DIcon from "./New3DIcon.js";
// import ThreeLogoTwo from './3dLogoV2.js';
// import NewCameraIcon from "./NewCameraIcon.js";
import React, { Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { DrawSVGPlugin } from "gsap";


const NewWebIcon = React.lazy(() => import('./NewWebIcon'));
const New3DIcon = React.lazy(() => import('./New3DIcon'));
const ThreeLogoTwo = React.lazy(() => import('./3dLogoV2'));
const NewCameraIcon = React.lazy(() => import('./NewCameraIcon'));

const ServiceSection = () => {

    const buttonRef = useRef();
    const formRef = useRef();

    const formLine1 = useRef();
    const formLine2 = useRef();
    const formLine3 = useRef();

    const buttonBorder1 = useRef();
    const buttonBorder2 = useRef();

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();

    const tl = gsap.timeline({ paused: true })

    useEffect(() => {

        const lineRef = [
            formLine1.current,
            formLine2.current,
            formLine3.current,
        ]

        const inputRef = [
            input1.current,
            input2.current,
            input3.current,
        ]

        const buttonBorder = [
            buttonBorder1.current,
            buttonBorder2.current,
        ]

        tl.to(buttonRef.current, {
            color: "white",
            duration: .3
        })
            .to(buttonRef.current, {
                scaleY: 0,
                transformOrigin: "top",
                duration: .35,
            })
            .to(buttonBorder2.current, {
                y: -57,
                duration: .4
            })
            .to(buttonBorder, {
                scaleX: 0,
                duration: .5
            })
            .from(formRef.current, {
                display: "none",
                duration: .02
            })
            .from(lineRef, {
                scaleX: 0,
                transformOrigin: "0%",
                duration: .5,
                stagger: .5
            })
            .from(inputRef, {
                y: 10,
                opacity: 0,
                duration: .4,
                stagger: .2
            })
    }, [tl])


    return (
        <div className="services margin-top">
            <section className="services-1 wrapper">
                <div className="header-container no-select">
                    <h2>What can we do for you?</h2>
                    <div className="header-arrow-wrapper">
                        <svg width="150" height="15" viewBox="0 0 262 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.681885" y1="6.11316" x2="250.622" y2="6.11316" stroke="black" stroke-width="3" />
                            <rect x="250.137" y="0.5" width="10.9744" height="11" fill="black" />
                        </svg>

                    </div>
                </div>
                <div className="services-container-desktop">
                    <div className="service-icon-container">
                        <div className="service-icon web-icon">
                            <Suspense fallback={<h1>...</h1>}>
                                <NewWebIcon />
                            </Suspense>
                        </div>
                        <div className="service-name">
                            <h4>Web Development</h4>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon 3d-icon">
                            <Suspense fallback={<h1>...</h1>}>
                                <New3DIcon />
                            </Suspense>

                        </div>
                        <div className="service-name">
                            <h4>3d Visuals</h4>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon video-icon">
                            <Suspense fallback={<h1>...</h1>}>
                                <ThreeLogoTwo />
                            </Suspense>

                        </div>
                        <div className="service-name">
                            <h4>Branding</h4>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon video-icon">
                            <Suspense fallback={<h1>...</h1>}>
                                <NewCameraIcon />
                            </Suspense>
                        </div>
                        <div className="service-name">
                            <h4>Video Production</h4>
                        </div>
                    </div>
                </div>

                <div className="services-container-mobile">
                    <div className="services-container-mobile-row-1">
                        <div className="service-icon-container">
                            <div className="service-icon web-icon">
                                <Suspense fallback={<h1>...</h1>}>
                                    <NewWebIcon />
                                </Suspense>
                            </div>
                            <div className="service-name">
                                <h4>Web Development</h4>
                            </div>
                        </div>
                        <div className="service-icon-container">
                            <div className="service-icon 3d-icon">
                                <Suspense fallback={<h1>...</h1>}>
                                    <New3DIcon />
                                </Suspense>

                            </div>
                            <div className="service-name">
                                <h4>3d Visuals</h4>
                            </div>
                        </div>
                    </div>
                    <div className="services-container-mobile-row-2">
                        <div className="service-icon-container">
                            <div className="service-icon video-icon">
                                <Suspense fallback={<h1>...</h1>}>
                                    <ThreeLogoTwo />
                                </Suspense>
                            </div>
                            <div className="service-name">
                                <h4>Branding</h4>
                            </div>
                        </div>
                        <div className="service-icon-container">
                            <div className="service-icon video-icon">
                                <Suspense fallback={<h1>...</h1>}>
                                    <NewCameraIcon />
                                </Suspense>
                            </div>
                            <div className="service-name">
                                <h4>Video Production</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-container">
                    <div className="form-button">
                        <div className="horizontal-line" ref={buttonBorder1}></div>
                        <button ref={buttonRef} onClick={() => tl.play()}>Tell Us More</button>
                        <div className="horizontal-line" ref={buttonBorder2}></div>

                    </div>
                    <div className="form" ref={formRef}>
                        <form name="contact" method="post" data-netlify="true">
                            <div className="form-1">
                                <input ref={input1} type="text" name="name" placeholder="NAME" />
                                <input ref={input2} type="email" name="email" placeholder="EMAIL" />
                                <div className="horizontal-line" ref={formLine1}></div>
                                <div className="horizontal-line" ref={formLine2}></div>
                            </div>
                            <textarea ref={input3} name="message" placeholder="MESSAGE"></textarea>
                            <div className="horizontal-line" ref={formLine3}></div>
                        </form>
                    </div>
                    {/* <div className="send-button">
                        <button type="submit">SEND</button>
                    </div> */}
                </div>

            </section >

            <section className="services-3">
                <div className="header-container no-select">
                    <h2>Or contact us directly</h2>
                    <div className="header-arrow-wrapper">
                        <svg width="150" height="15" viewBox="0 0 262 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.681885" y1="6.11316" x2="250.622" y2="6.11316" stroke="black" stroke-width="3" />
                            <rect x="250.137" y="0.5" width="10.9744" height="11" fill="black" />
                        </svg>

                    </div>
                </div>

                <div className="contact-info-container">

                    <div className="contact-info">
                        <p>Billy Myles-Berkouwer</p>
                        <p>Matt Congdon</p>
                        <p>Arran Baker</p>
                    </div>

                    <div className="contact-info">
                        <p>billy@email.com</p>
                        <p>matt@email.com</p>
                        <p>arran@email.com</p>
                    </div>

                    <div className="contact-info">
                        <a href="https://billyberkouwer.com" target="_blank" rel="noreferrer">Website</a>
                        <a href="https://mattcongdon.info" target="_blank" rel="noreferrer">Website</a>
                        <a href="" target="_blank" rel="noreferrer">Website</a>
                    </div>

                    <div className="contact-info">
                        <a href="https://www.linkedin.com/in/billy-myles-berkouwer-229679222/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a href="https://www.linkedin.com/in/mattcong/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a href="" target="_blank" rel="noreferrer">Linkedin</a>
                    </div>
                    <div className="contact-logo-wrapper">
                        <svg className="contact-logo" width="700" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.53 255.46">
                            <path className="contact-logo-path" d="M490,165a39.73,39.73,0,0,1-5,11,72.26,72.26,0,0,1-8.42,11.08,57.21,57.21,0,0,1-9.43,8.3c-12,8.44-24.25,16.55-36.25,25-10.6,7.46-20.86,15.4-31.54,22.75-15.09,10.38-31.21,18.66-49.3,22.74-12.79,2.89-25.61,3.55-38.45,1-5.49-1.09-10.32-4-14.76-7.46a2.81,2.81,0,0,0-2.58-.15c-20.45,13.25-42.88,21.47-66.67,26.18-4.64.92-6.2,1.2-8.6,1.59-1.5.25,0,0-7,1-6.18.88-13,1-25,0-3.14-.59-6.29-1.12-9.41-1.78-23.53-5-45.37-14.46-66.73-25.2-5-2.5-9.94-5-14.81-7.74-2.84-1.58-5.46-3.54-8.2-5.3-4-2.6-8.14-5-12.06-7.77-3.43-2.4-6.66-5.09-10-7.68C46.09,217,29.56,198.83,20.28,175a83.46,83.46,0,0,1-4.9-43.32c1.18-7.77,4.23-15,8-22A136.09,136.09,0,0,1,52.92,73.41a158,158,0,0,1,78.67-38.17c12.92-2.29,25.95-2.36,38.86-1.43,17.05,1.23,33.48,5.54,47.3,16.32,5.75,4.48,10.64,10.07,16.4,15.62,5.77-2.11,12.47-4.7,19.26-7a199.49,199.49,0,0,1,44-9.85,276.23,276.23,0,0,1,38-1.72c21.74.8,42.84,5,61.5,17.22,9.7,6.35,19.26,12.93,28.95,19.3,4,2.6,6.29,3.59,11,6.56A235.86,235.86,0,0,1,459,106c8.74,7.06,13.11,10.58,17.34,15.67s8.82,8.1,12.71,20.74A55.28,55.28,0,0,1,491,155,44.26,44.26,0,0,1,490,165ZM325.79,264.18c16.75.06,30.52-3.91,43.84-9.59,17.83-7.59,32.88-19.64,48.54-30.71q15.65-11,31.57-21.68c10-6.7,20-13.36,27.29-23.22,4.94-6.71,8.49-14.08,8.92-22.56.58-11.41-4.12-20.93-11.23-29.46-8-9.55-17.75-17-28-23.95-13.61-9.24-27.35-18.28-41.07-27.35-5.16-3.42-10.28-6.93-15.66-10-17.58-10-36.91-13.49-56.79-14.47a181.14,181.14,0,0,0-21.22.5,231.3,231.3,0,0,0-76,18.65c-3.89,1.69-4.48,1.16-7.21-2.08-4.15-4.94-8.32-10.07-13.35-14-13.78-10.8-30.22-15.08-47.27-16.41a141.27,141.27,0,0,0-64.36,9.85C85,55.23,67.92,65.51,53.15,79.44c-10.78,10.18-20.23,21.5-26.73,34.87a81.82,81.82,0,0,0-6.92,20.2c-2.49,13.15.21,26,4.95,38.34,6.92,18,18.34,32.82,32.39,45.85,14.86,13.78,31.53,25,49.22,34.63,19.9,10.78,40.65,19.9,62.52,26.12a109,109,0,0,0,27.52,4.38A158,158,0,0,0,221,282a169.37,169.37,0,0,0,48-14.47c7.94-3.72,15.46-8.35,23.17-12.56,2.47-1.36,4.84-2.44,7.19.37a14.07,14.07,0,0,0,3.23,2.36A38.72,38.72,0,0,0,325.79,264.18Zm-106,13.15c-11.53.12-21.4-4.54-30.85-10.23a278.87,278.87,0,0,1-39.53-28.44c-8.75-7.63-17.5-15.37-25.33-23.89a300.47,300.47,0,0,1-21.62-27.19,129.77,129.77,0,0,1-19.34-38.42c-2.94-9.63-4.71-19.43-3.85-29.46.9-10.55,3.87-20.57,9.88-29.48,10.71-15.87,24.84-27.4,43.31-33,17-5.13,33.91-5.23,50,3.1,9.85,5.09,16.46,13.48,20.9,23.56,1.08,2.46-.1,4.18-2.05,5.72-4.49,3.53-9,7-13.27,10.83A73.82,73.82,0,0,0,170.17,124c-7.73,16.33-5.61,31.65,5.14,45.87,7.81,10.31,18.2,17.63,29.26,24,16,9.27,33.16,16.28,50.06,23.77,11,4.88,21.8,10.4,29.93,19.77,1.9,2.19,3.69,4.49,5.51,6.75,1.62,2,1.51,3.9-.55,5.55-8.67,6.94-17.94,13.07-28.26,17.13a250.37,250.37,0,0,1-26.85,8.46C229.7,276.58,224.67,276.69,219.79,277.33Zm-21-192A41.87,41.87,0,0,0,182.6,65.85c-11.16-7.13-23.62-9.09-36.39-7.16-22.5,3.41-40.38,14.71-52.87,33.84-7.45,11.4-11.09,23.92-9.57,37.77a97.92,97.92,0,0,0,8.87,30.87,192.51,192.51,0,0,0,25.56,40A217.05,217.05,0,0,0,149.79,233c12,9.71,24.57,18.8,37.39,27.41A99.74,99.74,0,0,0,208.71,271c9.3,3.38,18.94,1.53,28.33-.69A126,126,0,0,0,270.67,257c5.28-3,10.2-6.67,15.67-10.3-2.75-3.16-5-6.08-7.59-8.63-7.56-7.41-17-11.87-26.4-16.34-15.38-7.33-31-14.07-46.27-21.69a105.78,105.78,0,0,1-31-23.17C164.14,164.87,159.4,151.1,162,135.08s11.93-27.89,23.31-38.51C189.53,92.63,194.2,89.15,198.76,85.37Zm202.85,86.69a87.68,87.68,0,0,1-6.41,35.49c-9.05,22.14-24,38.54-47.68,45-8.88,2.41-18.32,2.69-26.4-3.48a29.29,29.29,0,0,1-5.69-5.76c-2.43-3.26-1.9-5.42,1.41-9.07a55.67,55.67,0,0,0,12.4-21.37c3.6-11.78.91-22.46-5.92-32.27S306.88,164.43,297,158.32c-10.71-6.59-21.56-13-31.84-20.22s-16.94-17.6-20.1-30c-1.58-6.18-3.48-12.28-5.17-18.43-1.16-4.18-.73-5.24,2.93-7.44a130.41,130.41,0,0,1,32.71-13.77,201,201,0,0,1,29-6.17c14.36-1.73,28.81-1.55,42.64,3.77,7.61,2.92,13.2,8.47,17.43,15.17,7.59,12,14.86,24.23,22.06,36.49C396.15,133.94,401.84,151.31,401.61,172.06Zm-4.09-.76c0-16.81-4.56-32.48-12.72-47-7.81-13.9-16.16-27.5-24.51-41.1A31.4,31.4,0,0,0,343.5,69.61c-13.39-4.64-27.11-4.74-40.94-2.77a157.56,157.56,0,0,0-38,10.27c-6.18,2.54-12.22,5.44-18.27,8.29-1.75.82-2.68,2-1.82,4.36,1.31,3.52,1.93,7.3,3.2,10.84,2.47,6.9,4.57,14,7.94,20.48,4.66,8.92,13.15,14.24,21.36,19.6,13,8.48,27.1,15.14,38.95,25.37,9.59,8.29,17.09,17.6,18.69,30.83,1.08,9,0,17.47-4.11,25.34-2.68,5.1-6.4,9.67-9.68,14.46-1,1.51-2.72,2.69-.9,4.87,5.55,6.66,12.7,8.87,21,7.63,3.19-.48,6.23-1.84,9.41-2.46,6.36-1.24,11.44-5,16.32-8.74,4.49-3.43,8.28-7.82,12.12-12,7.58-8.3,12.28-18.29,15.07-29C396,188.65,397.79,171.35,397.52,171.3Zm-84,38.76a30.45,30.45,0,0,1-3.46,15.62c-1.36,2.58-4.11,3.07-5.86.74-9.11-12.12-22.48-17.6-35.75-23.25-14.73-6.28-29.61-12.24-44.17-18.88a71.71,71.71,0,0,1-22.26-16.08c-7.65-8.06-11.94-17.57-10.91-28.87.8-8.87,4.77-16.57,10.05-23.61a75.76,75.76,0,0,1,5.29-6.42c2.19-2.32,4-1.86,5.12,1.1,2.55,6.73,4.67,13.66,7.79,20.12,3.49,7.25,9,13,15.62,17.77,10.27,7.43,22,12.07,33.18,17.67,8.09,4,16.31,7.94,23.95,12.74,6.94,4.38,13.38,9.69,17.51,17.14C312.16,200.38,313.92,205.09,313.55,210.06ZM208.16,114.64a21.66,21.66,0,0,0-1.9,2.06c-1.89,2.74-3.94,5.4-5.55,8.31-3.17,5.71-5.85,11.82-5.42,18.43.6,9.12,5.06,16.77,11.51,23.05a69.56,69.56,0,0,0,20,13.8c14.53,6.5,29.21,12.64,43.91,18.74,13.31,5.51,26.17,11.65,36.28,22.7,1.4-4.76,3.31-9.32,2.06-14.38-1.37-5.53-3.27-10.75-7.81-14.6-4-3.38-7.51-7.43-11.9-10.12C281.74,178,273.68,174,265.73,170c-10.26-5.26-21.07-9.38-30.71-16a61.76,61.76,0,0,1-17.48-17.17,46.06,46.06,0,0,1-4.22-7.73C211.46,124.53,210,119.82,208.16,114.64Z"
                                transform="translate(-14.42 -33.25)" stroke="rgb(236, 236, 236)" stroke-width="1.5" fill="none" /></svg>
                    </div>
                </div>

            </section>

        </div >
    );

}

export default ServiceSection;