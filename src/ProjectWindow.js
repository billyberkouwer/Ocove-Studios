import { useEffect, useState, useRef } from "react";

const ProjectWindow = ( props ) => {

    const projectTitles = props.projectTitles;
    const projectText = props.projectText;
    const project = props.project;
    const projectImages = props.projectImages;

    const [fade, setFade] = useState('0');
    const [translation, setTranslation] = useState('translateX(5%)');
    const projectTitleObject = useRef(projectTitles[0]);
    const projectTextObject = useRef(projectText[0]);
    const projectTitleContent = Object.values(projectTitleObject);
    const projectTextContent = Object.values(projectTextObject);

    const imageIteration = useRef(0);
    const [image, setImage] = useState(projectImages[0][0]);

    /* --- DYNAMICALLY SET PROJECT CONTENT FROM JSON --- */

    useEffect(() => {
        setTimeout(function() {
            for (let i = 0; i < projectTitles.length; i++) {
                if (project === i) {
                    projectTitleObject.current = projectTitles[i];
                    projectTextObject.current = projectText[i];
                };
            };
            if (imageIteration.current !== 0) {
                imageIteration.current = 0;
                setImage(projectImages[project][imageIteration.current]);
            };
        }, 495);
    }, [project, projectImages, projectTitleObject, projectTextObject, projectTitles, projectText]);

    /* --- ANIMATE SET PROJECT --- */ 

    useEffect(() => {
        setFade('0');
        setTranslation('translateX(5%)');
        setTimeout(function(){
            setFade('1'); 
            setTranslation('translateX(0%)');
        }, 500);
    }, [project]);

    /* --- CYCLE IMAGES FROM JSON --- */

    useEffect(() => {
        const imageInterval = setInterval(() => {
            if (imageIteration.current >= projectImages[project].length - 1) {
                imageIteration.current = 0;
                setImage(projectImages[project][imageIteration.current]);      
            }   else if (imageIteration.current < projectImages[project].length - 1) {
                imageIteration.current++;
                setImage(projectImages[project][imageIteration.current]);
                console.log(image);
            }
        }, 1500);
        return () => {clearInterval(imageInterval)}
    }, [project, projectImages, image, imageIteration]);


    return ( 
        <div className="project-window" style={{opacity: fade, transform: translation}}>
            <div className="project-text">
                <h3>{projectTitleContent}</h3>
                <p>{projectTextContent}</p>
            </div>
            <div className="project-images-container horizontal-center vertical-center">
                <img className='project-images' alt={`${projectTitleContent} images`} src={`./images/${image}`}></img>
            </div>
        </div>
    );
}
 
export default ProjectWindow;