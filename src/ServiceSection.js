import CameraIcon from "./CameraIcon.js"
import WebIcon from "./WebIcon.js"
import ThreeDIcon from "./3dIcon.js"


const ServiceSection = () => {

    return (
        <div className="services">
            <section className="services-1 wrapper">
                <div className="services-container">
                    <div className="service-icon-container">
                        <div className="service-icon web-icon">
                            <WebIcon />    {/* 3D and web icons produce a glitch on page
                        refresh and direct url access. Camera works fine. We should investigate
                        this issue */}
                        </div>
                        <div className="service-name">
                            <h2>website development</h2>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon 3d-icon">
                            <ThreeDIcon />    {/* 3D and web icons produce a glitch on page
                        refresh and direct url access. Camera works fine. We should investigate
                        this issue */}
                        </div>
                        <div className="service-name">
                            <h2>3d modelling & rendering</h2>
                        </div>
                    </div>
                    <div className="service-icon-container">
                        <div className="service-icon video-icon">
                            <CameraIcon />    {/* 3D and web icons produce a glitch on page
                        refresh and direct url access. Camera works fine. We should investigate
                        this issue */}
                        </div>
                        <div className="service-name">
                            <h2>video production</h2>
                        </div>
                    </div>
                </div>
              
            </section>

            <section className="services-2 wrapper">

            </section>

            <section className="services-3 wrapper">

            </section>

        </div>
    );

}

export default ServiceSection;