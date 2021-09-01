import ProjectWindow from "./ProjectWindow";
import Projects from './projects.json';

const ProjectSection = () => {
    const projectObjects = [];

    for (var i in Projects) {
        projectObjects.push(Projects[i]);
    };

    const projectTitles = [];

    function produceProjectTitleLinks() {
        for (let i = 0; i < projectObjects.length; i++) {
            const element = projectObjects[i];
            projectTitles.push(element.title);
        }
    };

    produceProjectTitleLinks();

    const projectTitleLinks = projectTitles.map((projectTitles) => 
    <li>{projectTitles}</li>);

    return ( 
        <div className="section-container">
            <div className="section-title no-select">
                <h1>Projects</h1>
            </div>
            <div className="project-container horizontal-center">
                <div className="project-menu">
                    <ul>
                        {projectTitleLinks}
                    </ul>
                </div>
                <ProjectWindow />
            </div>
        </div>
    );
}

export default ProjectSection;