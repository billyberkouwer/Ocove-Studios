import logo from './assets/company-name.png';

const HomeSection = () => {

    const companyTag = "The Creative Digital Services Company";
    const loremIpsum = "Proin gravida nibh vel auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit";

    return (
        <div>
            <img src={logo} alt="company-name" className="company-name" id="logo" draggable="false"></img>
            <div className="tag-container no-select">
                <h1 className="company-tag">{companyTag}</h1>
            </div>
            <div className="header-imgs-container"></div>
            <div className="header-text-container"><p>"{loremIpsum}"</p></div>
        </div>
     );
}
 
export default HomeSection;