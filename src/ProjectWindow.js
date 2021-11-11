import { useEffect, useState, useRef } from "react";

const ProjectWindow = ( props ) => {

    const project = props.project;
    const projectTitleContent = Object.values(props.projectTitleContent);
    const projectTextContent = Object.values(props.projectTextContent);
    const [fade, setFade] = useState('0');
    const [translation, setTranslation] = useState('translateX(5%)');

    useEffect(() => {
        setFade('0');
        setTranslation('translateX(5%)');
        setTimeout(function(){
            setFade('1'); 
            setTranslation('translateX(0%)');
        }, 500);
    }, [project]);

    /*--------- CYCLE IMAGES FROM JSON PATHS ---------*/

    const testImage = props.testImage;
    const imageIteration = useRef(0);
    const [image, setImage] = useState(testImage[0]);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            if (imageIteration.current === testImage.length - 1) {
                imageIteration.current = 0;
                setImage(testImage[imageIteration.current]); 
            }   else if (imageIteration.current < testImage.length - 1) {
                imageIteration.current++;
                setImage(testImage[imageIteration.current]);
            }
        }, 1500);
        return () => clearInterval(imageInterval)
    }, [testImage, image, imageIteration]);

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