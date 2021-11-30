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
                stagger: .15
            })
    }, [])


    return (
        <div className="services margin-top">
            <section className="services-1 wrapper">
                <div className="header-container no-select">
                    <h2>What can we do for you?</h2>
                    <div className="header-arrow-wrapper">
                        <svg width="120" height="16" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M159.528 8.69148C159.919 8.30096 159.919 7.66779 159.528 7.27727L153.164 0.913307C152.774 0.522783 152.14 0.522783 151.75 0.913307C151.359 1.30383 151.359 1.937 151.75 2.32752L157.407 7.98438L151.75 13.6412C151.359 14.0318 151.359 14.6649 151.75 15.0554C152.14 15.446 152.774 15.446 153.164 15.0554L159.528 8.69148ZM0.410889 8.98438H158.821V6.98438H0.410889V8.98438Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <div className="services-container">
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

                <div className="form-container">
                    <div className="form-button">
                        <div className="horizontal-line" ref={buttonBorder1}></div>
                        <button ref={buttonRef} onClick={() => tl.play()}>Tell Us More</button>
                        <div className="horizontal-line" ref={buttonBorder2}></div>

                    </div>
                    <div className="form" ref={formRef}>
                        <form name="contact" method="POST" data-netlify="true">
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

            </section>

            <section className="services-3">
                <div className="header-container no-select">
                    <h2>Or contact us directly</h2>
                    <div className="header-arrow-wrapper">
                        <svg width="120" height="16" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M159.528 8.69148C159.919 8.30096 159.919 7.66779 159.528 7.27727L153.164 0.913307C152.774 0.522783 152.14 0.522783 151.75 0.913307C151.359 1.30383 151.359 1.937 151.75 2.32752L157.407 7.98438L151.75 13.6412C151.359 14.0318 151.359 14.6649 151.75 15.0554C152.14 15.446 152.774 15.446 153.164 15.0554L159.528 8.69148ZM0.410889 8.98438H158.821V6.98438H0.410889V8.98438Z" fill="black" />
                        </svg>
                    </div>
                </div>

                <div className="contact-info-container">
                    <div className="contact-info-photo">

                    </div>
                    <div className="contact-info">
                        <p className="contact-name">Billy Myles-Berkouwer</p>
                        <p className="contact-email">billy@email.com</p>
                        <a className="contact-link" href="https://billyberkouwer.com" rel="noreferrer">Website</a>
                        <a className="contact-link" href="https://www.linkedin.com/in/billy-myles-berkouwer-229679222/" rel="noreferrer">Linkedin</a>
                    </div>
                    <div className="contact-info-photo">
                    </div>
                    <div className="contact-info">
                        <p className="contact-name">Matt Congdon</p>
                        <p className="contact-email">matt@email.com</p>
                        <a className="contact-link" href="https://mattcongdon.info" rel="noreferrer">Website</a>
                        <a className="contact-link" href="https://www.linkedin.com/in/mattcong/" rel="noreferrer">Linkedin</a>
                    </div>
                </div>

            </section>

        </div>
    );

}

export default ServiceSection;