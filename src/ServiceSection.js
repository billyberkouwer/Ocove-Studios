// import NewWebIcon from "./NewWebIcon.js";
// import New3DIcon from "./New3DIcon.js";
// import ThreeLogoTwo from './3dLogoV2.js';
// import NewCameraIcon from "./NewCameraIcon.js";
import React, { Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";


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
                y: -52,
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
                stagger: .2
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
                </div>
                <div className="services-container">
                    <div className="service-icon-container">
                        <div className="service-icon web-icon">
                            <Suspense fallback={<h1>...</h1>}>
                                <NewWebIcon />
                            </Suspense>
                        </div>
                        <div className="service-name">
                            <h4>web development</h4>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon 3d-icon">
                            <Suspense fallback={<h1>...</h1>}>
                                <New3DIcon />
                            </Suspense>

                        </div>
                        <div className="service-name">
                            <h4>3d visuals</h4>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon video-icon">
                            <Suspense fallback={<h1>...</h1>}>
                                <ThreeLogoTwo />
                            </Suspense>

                        </div>
                        <div className="service-name">
                            <h4>branding</h4>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon video-icon">
                            <Suspense fallback={<h1>...</h1>}>
                                <NewCameraIcon />
                            </Suspense>

                        </div>
                        <div className="service-name">
                            <h4>video production</h4>
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
                            <input ref={input1} type="text" name="name" placeholder="Name" />
                            <div className="horizontal-line" ref={formLine1}></div>
                            <input ref={input2} type="email" name="email" placeholder="Email" />
                            <div className="horizontal-line" ref={formLine2}></div>
                            <textarea ref={input3} name="message" placeholder="Message"></textarea>
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
                </div>
                <div className="contact-info-container">
                </div>
                <div className="contact-info-photo">
                </div>
                <div className="contact-info">
                </div>
                <div className="contact-info-photo">
                </div>
                <div className="contact-info">
                </div>
            </section>

        </div>
    );

}

export default ServiceSection;