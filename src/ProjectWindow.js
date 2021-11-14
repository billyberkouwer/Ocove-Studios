import { useEffect, useState, useRef } from "react";

const ProjectWindow = ( props ) => {

    // Props
 
    const projectTitles = props.projectTitles;
    const projectText = props.projectText;
    const project = props.project;
    const projectImages = props.projectImages;

    // Window

    const [windowFade, setWindowFade] = useState('0');
    const [translation, setTranslation] = useState('translateX(5%)');
    const projectTitleObject = useRef(projectTitles[0]);
    const projectTextObject = useRef(projectText[0]);
    const projectTitleContent = Object.values(projectTitleObject);
    const projectTextContent = Object.values(projectTextObject);

    // Images

    const imageIteration = useRef(0);
    const [image, setImage] = useState(projectImages[0][0]);
    const [imageFade, setImageFade] = useState('0')

    /* --- DYNAMICALLY SET PROJECT CONTENT FROM JSON --- */

    useEffect(() => {
        setTimeout(function() {
            for (let i = 0; i < projectTitles.length; i++) {
                if (project === i) {
                    projectTitleObject.current = projectTitles[i];
                    projectTextObject.current = projectText[i];
                };
            };
            imageIteration.current = 0;
            setImage(projectImages[project][imageIteration.current]);
        }, 495);
    }, [project, projectImages, projectTitleObject, projectTextObject, projectTitles, projectText]);

    /* --- ANIMATE SELECT PROJECT --- */ 

    useEffect(() => {
        setWindowFade('0');
        setTranslation('translateX(5%)');
        setTimeout(function(){
            setWindowFade('1'); 
            setTranslation('translateX(0%)');
        }, 500);
    }, [project]);

    /* --- CYCLE IMAGES FROM JSON --- */

    useEffect(() => {
        const imageInterval = setInterval(() => {
            if (imageIteration.current >= projectImages[project].length - 1) {
                imageIteration.current = 0;
                setImageFade('0');
                setTimeout(function(){
                    setImage(projectImages[project][imageIteration.current]);
                    setImageFade('1');
                }, 300);      
            }   else if (imageIteration.current < projectImages[project].length - 1) {
                imageIteration.current++;
                setImageFade('0');
                setTimeout(function(){
                    setImage(projectImages[project][imageIteration.current]);
                    setImageFade('1');
                }, 300);   
            }
        }, 5000);
        return () => {clearInterval(imageInterval)}
    }, [project, projectImages]);

    return ( 
        <div className="project-window" style={{opacity: windowFade, transform: translation}}>
            <div className="project-text">
                <h3>{projectTitleContent}</h3>
                <p>{projectTextContent}</p>
            </div>
            <div className="project-images-container horizontal-center vertical-center">
                <img className='project-images' style={{opacity: imageFade}} alt={`${projectTitleContent} images`} src={`./images/${image}`}></img>
            </div>
        </div>
    );
}
 
export default ProjectWindow;