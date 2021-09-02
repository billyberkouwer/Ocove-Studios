import Projects from './projects.json';

const ProjectWindow = ( project ) => {
    const projectObjects = [];

    for (var i in Projects) {
        projectObjects.push(Projects[i]);
    };

    const projectTitles = [];
    const projectText = [];
    const projectImages = [];

    function produceProjectArrays() {
        for (let i = 0; i < projectObjects.length; i++) {
            const element = projectObjects[i];
            projectTitles.push(element.title);
            projectText.push(element.text);
            projectImages.push(element.images);
        }
    };

    produceProjectArrays();

    const allProjectTitles = projectTitles.map((projectTitles) => <h2>{projectTitles}</h2>);
    const allProjectText = projectText.map((projectText) => <p>{projectText}</p>);
    let projectArray = Object.values(project);
    let projectTitleContent = allProjectTitles[0];
    let projectTextContent = allProjectText[0];

    if (projectArray[0] === 0) {
        projectTitleContent = allProjectTitles[0];
        projectTextContent = allProjectText[0]
    }   else if (projectArray[0] === 1) {
        projectTitleContent = allProjectTitles[1];
        projectTextContent = allProjectText[1]
    }   else if (projectArray[0] === 2) {
        projectTitleContent = allProjectTitles[2];
        projectTextContent = allProjectText[2]
    }   else if (projectArray[0] === 3) {
        projectTitleContent = allProjectTitles[3];
        projectTextContent = allProjectText[3]
    }   else if (projectArray[0] === 4) {
        projectTitleContent = allProjectTitles[4];
        projectTextContent = allProjectText[4]
    }   else if (projectArray[0] === 5) {
        projectTitleContent = allProjectTitles[5];
        projectTextContent = allProjectText[5]
    }   else if (projectArray[0] === 6) {
        projectTitleContent = allProjectTitles[6];
        projectTextContent = allProjectText[6]
    }

    return ( 
        <div className="project-window">
            <div className="project-text">
                {projectTitleContent}
                {projectTextContent}
            </div>
            <div className="project-images horizontal-center vertical-center">
                <p>project-images</p>
            </div>
        </div>
     );
}
 
export default ProjectWindow;