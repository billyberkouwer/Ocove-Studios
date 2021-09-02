import ProjectWindow from "./ProjectWindow";
import Projects from './projects.json';
import { useState } from "react";

const ProjectSection = () => {

    /* --- PRODUCE PROJECT LINKS --- */

    const projectObjects = [];

    for (var i in Projects) {
        projectObjects.push(Projects[i]);
    };

    const projectTitles = [];

    function produceProjectTitleLinks() {
        for (let i = 0; i < projectObjects.length; i++) {
            const element = projectObjects[i];
            projectTitles.push(element.title);
        };
    };

    produceProjectTitleLinks();

    /* --- STATEFUL PROJECT LINKS --- */

    const [project, setProject] = useState('');

    const projectTitleLinks = projectTitles.map((projectTitles, index) => 
    <li onClick={() => setProject(index)}>{projectTitles}</li>);

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
                <ProjectWindow project={project}/>
            </div>
        </div>
    );
}

export default ProjectSection;