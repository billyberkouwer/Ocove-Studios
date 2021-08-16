import logo from './assets/company-name.png';

const HomeSection = () => {

    return (
        <div>
            <img src={logo} alt="company-name" className="company-name" id="logo" draggable="false"></img>
            <div className="tag-container no-select">
                <h1 className="company-tag">The Creative Digital Services Company</h1>
            </div>
            <div className="header-imgs-container"></div>
            <div className="header-text-container"><p>“Proin gravida nibh vel auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit”</p></div>
        </div>
     );
}
 
export default HomeSection;