import Projects from './projects.json';

const ProjectWindow = () => {
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

    const projectTitlesContent = projectTitles.map((projectTitles) => 
    <h2>{projectTitles}</h2>)

    const projectTextContent = projectText.map((projectText) =>
    <p>{projectText}</p>);

    return ( 
        <div className="project-window">
            <div className="project-text">
                {projectTitlesContent[0]}
                {projectTextContent[0]}
            </div>
            <div className="project-images horizontal-center vertical-center">
                <p>project-images</p>
            </div>
        </div>
     );
}
 
export default ProjectWindow;