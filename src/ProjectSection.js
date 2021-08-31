const ProjectSection = () => {

    const loremIpsum = "Proin gravida nibh vel auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit";

    return ( 
        <div className="section-container">
            <div className="section-title no-select">
                <h1>Projects</h1>
            </div>
            <div className="project-container horizontal-center">
                <div className="project-menu">
                    <ul>
                        <li>Chappel Galleries</li>
                        <li>John Hounam Fine Art</li>
                        <li>Helen Howard Ceramics</li>
                        <li>Isabel Knowland Fine Art</li>
                        <li>Carluca Decorators</li>
                        <li>Dog Treats</li>
                        <li>3D</li>
                    </ul>
                </div>
                <div className="project-window">
                    <div className="project-text">
                        <h2>Test Title</h2>
                        <p>{loremIpsum}</p>
                    </div>
                    <div className="project-images horizontal-center vertical-center"><p>project-images</p></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;