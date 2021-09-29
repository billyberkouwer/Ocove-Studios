import ProjectWindow from "./ProjectWindow";
import { useState, useEffect, useRef } from "react";

const ProjectSection = ( props ) => {

    /* --- STATEFUL PROJECT LINKS --- */

    const projectTitles = props.projectTitles;
    const projectText = props.projectText;
    const [project, setProject] = useState('0');

    const projectTitleLinks = projectTitles.map((projectTitles, index) => 
    <li key={projectTitles} onClick={() => setProject(index)}>{projectTitles}</li>);

    /* --- DYNAMICALLY SET PROJECT CONTENT --- */

    const projectTitleContent = useRef(projectTitles[0]);
    const projectTextContent = useRef(projectText[0]);

    useEffect(() => {
        setTimeout(function() {
            for (let i = 0; i < projectTitles.length; i++) {
                if (project === i) {
                    projectTitleContent.current = projectTitles[i];
                    projectTextContent.current = projectText[i];
                };
            };
        }, 495);
    }, [project, projectTitleContent, projectTitles, projectText]);

    return ( 
        <div className="section-container section-theme">
            <div className="section-title no-select">
                <h1>Projects</h1>
            </div>
            <div className="project-container horizontal-center">
                <div className="project-menu">
                    <ul>
                        {projectTitleLinks}
                    </ul>
                </div>
                <ProjectWindow project={project} projectTextContent={projectTextContent} projectTitleContent={projectTitleContent}/>
            </div>
        </div>
    );
}

export default ProjectSection;