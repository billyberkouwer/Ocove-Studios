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
                            <h4>website development</h4>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon 3d-icon">
                            <ThreeDIcon />    {/* 3D and web icons produce a glitch on page
                        refresh and direct url access. Camera works fine. We should investigate
                        this issue */}
                        </div>
                        <div className="service-name">
                            <h4>3d modelling & rendering</h4>
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

            </section>

            <section className="services-2 wrapper">
                <div className="header-container no-select">
                    <h2>Tell us more</h2>
                </div>
                <div className="service-options-header">
                    <h4>Service:</h4>
                </div>

                <div className="service-options-container">
                    <div className="service-option"><input type="checkbox" id="service-checkbox"></input>
                        <label for="service-checkbox">Web Development</label></div>
                    <div className="service-option"><input type="checkbox" id="service-checkbox"></input>
                        <label for="service-checkbox">Web Design</label></div>
                    <div className="service-option"><input type="checkbox" id="service-checkbox"></input>
                        <label for="service-checkbox">Branding</label></div>
                    <div className="service-option"><input type="checkbox" id="service-checkbox"></input>
                        <label for="service-checkbox">3D Visuals</label></div>
                    <div className="service-option"><input type="checkbox" id="service-checkbox"></input>
                        <label for="service-checkbox">Photo Work</label></div>
                    <div className="service-option"><input type="checkbox" id="service-checkbox"></input>
                        <label for="service-checkbox">Video Work</label></div>
                </div>
                <div className="form-container">
                    <div className="form">
                        <form name="contact" method="POST" data-netlify="true">
                            <p>
                                <input type="text" name="name" placeholder="Name" />
                            </p>
                            <p>
                                <input type="email" name="email" placeholder="Email" />
                            </p>
                            <p>
                                <textarea name="message" placeholder="Message"></textarea>
                            </p>
                        </form>
                    </div>
                    <div className="form-button">
                        <button type="submit">SEND</button>
                    </div>
                </div>
            </section>

            <section className="services-3">
                <div className="header-container no-select">
                    <h2>Or contect us directly</h2>

                </div>

            </section>

        </div>
    );

}

export default ServiceSection;