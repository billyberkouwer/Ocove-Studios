import ServiceIcon from "./ServiceIcon.js"

const ServiceSection = () => {

    return ( 
        <div className="section-container horizontal-center vertical-center">
            <div className="section-title services-title no-select">
                <h1>Services</h1>
            </div>
            <div className="services-section">
            <div className="services-container vertical-center">
                <div className="service-icon-container horizontal-center">
                    <div className="service-icon web-icon">
                        <ServiceIcon/>
                    </div>
                    <div className="service-name">
                        <h2>website development</h2>
                    </div>
                </div>
                <div className="service-icon-container horizontal-center">
                    <div className="service-icon 3d-icon"> 
                    <ServiceIcon/>
                    </div>
                    <div className="service-name">
                        <h2>3d modelling + rendering</h2>
                    </div>
                </div>
                <div className="service-icon-container horizontal-center">
                    <div className="service-icon video-icon">
                    <ServiceIcon/>
                    </div>
                    <div className="service-name">
                        <h2>video production</h2>
                    </div>
                </div>
            </div>
            <div className="enquire-button-container horizontal-center vertical-center">
                <div className="enquire-button">
                    <button>ENQUIRE</button>
                </div>
            </div> 
            </div>
        </div>
        );      

}

export default ServiceSection;
