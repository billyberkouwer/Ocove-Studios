import { useEffect, useState } from "react";

const ProjectWindow = ( props ) => {

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
    }, [props.project]);

    return ( 
        <div className="project-window" style={{opacity: fade, transform: translation}}>
            <div className="project-text">
                <h2>{projectTitleContent}</h2>
                <p>{projectTextContent}</p>
            </div>
            <div className="project-images horizontal-center vertical-center">
                <p>project-images</p>
            </div>
        </div>
     );
}
 
export default ProjectWindow;