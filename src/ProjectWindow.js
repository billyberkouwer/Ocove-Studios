import Projects from './projects.json';

const ProjectWindow = ( project ) => {

    /* --- COMPOSE DATA --- */

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

    /* --- DYNAMICALLY SET PROJECTS --- */

    const allProjectTitles = projectTitles.map((projectTitles) => <h2>{projectTitles}</h2>);
    const allProjectText = projectText.map((projectText) => <p>{projectText}</p>);
    const projectIndex = Object.values(project);
    let projectTitleContent = allProjectTitles[0];
    let projectTextContent = allProjectText[0];

    console.log(projectIndex[0]);

    for (let i = 0; i < allProjectTitles.length; i++) {
        const title = allProjectTitles[i];
        const text = allProjectText[i];
        if (projectIndex[0] === i) {
            projectTitleContent = title;
            projectTextContent = text;
        };
    };

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