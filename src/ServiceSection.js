import CameraIcon from "./CameraIcon.js"
import WebIcon from "./WebIcon.js"
import ThreeDIcon from "./3dIcon.js"


const ServiceSection = () => {

    return (
        <div className="services">
            <section className="services-1 wrapper">
                <div className="header-container no-select">
                    <h2>What can we do for you?</h2>
                </div>
                <div className="services-container">
                    <div className="service-icon-container">
                        <div className="service-icon web-icon">
                            <WebIcon />    {/* 3D and web icons produce a glitch on page
                        refresh and direct url access. Camera works fine. We should investigate
                        this issue */}
                        </div>
                        <div className="service-name">
                            <h4>web development</h4>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon 3d-icon">
                            <ThreeDIcon />    {/* 3D and web icons produce a glitch on page
                        refresh and direct url access. Camera works fine. We should investigate
                        this issue */}
                        </div>
                        <div className="service-name">
                            <h4>3d visuals</h4>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon video-icon">
                            <CameraIcon />    {/* 3D and web icons produce a glitch on page
                        refresh and direct url access. Camera works fine. We should investigate
                        this issue */}
                        </div>
                        <div className="service-name">
                            <h4>branding</h4>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon video-icon">
                            <CameraIcon />    {/* 3D and web icons produce a glitch on page
                        refresh and direct url access. Camera works fine. We should investigate
                        this issue */}
                        </div>
                        <div className="service-name">
                            <h4>video production</h4>
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <div className="form">
                        <form name="contact" method="POST" data-netlify="true">
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email" />
                            <textarea name="message" placeholder="Message"></textarea>
                        </form>
                    </div>
                    <div className="form-button">
                        <button type="submit">SEND</button>
                    </div>
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