import ProjectWindow from "./ProjectWindow";
import { useState } from "react";

const ProjectSection = ( props ) => {

    /* --- STATEFUL PROJECT LINKS --- */

    const projectTitles = props.projectTitles;
    const [project, setProject] = useState('0');

    const projectTitleLinks = projectTitles.map((projectTitles, index) => 
    <li key={projectTitles} onClick={() => setProject(index)}>{projectTitles}</li>);

    return ( 
        <div className="section-container margin-top">
            <div className="project-container horizontal-center">
                <div className="project-menu">
                    <ul>
                        {projectTitleLinks}
                    </ul>
                </div>
                <ProjectWindow {...props} project={project} />
            </div>
        </div>
    );
}

export default ProjectSection;