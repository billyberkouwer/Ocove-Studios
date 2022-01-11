import { useEffect, useState, useRef } from "react";

const ProjectWindow = (props) => {

    const projectTitles = props.projectTitles;
    const projectText = props.projectText;
    const project = props.project;
    const projectImages = props.projectImages;
   
    const projectCredits1 = props.projectCredits1;
    const projectCreditURLS1 = props.projectCreditURLS1;
    const projectCredits2 = props.projectCredits2;
    const projectCreditURLS2 = props.projectCreditURLS2;

    const projectLinkURLS = props.projectLinkURLS;
    const projectLinks = props.projectLinks;

    const [windowFade, setWindowFade] = useState('0');
    const [translation, setTranslation] = useState('translateX(5%)');


    const projectTitleObject = useRef(projectTitles[0]);
    const projectTextObject = useRef(projectText[0]);

    const projectCreditsObject1 = useRef(projectCredits1[0])
    const projectCreditURLSObject1 = useRef(projectCreditURLS1[0])
    const projectCreditsObject2 = useRef(projectCredits2[0])
    const projectCreditURLSObject2 = useRef(projectCreditURLS2[0])

    const projectLinkURLSObject = useRef(projectLinkURLS[0])
    const projectLinksObject = useRef(projectLinks[0])


    const projectTitleContent = Object.values(projectTitleObject);
    const projectTextContent = Object.values(projectTextObject);

    const projectCreditsContent1 = Object.values(projectCreditsObject1);
    const projectCreditURLSContent1 = Object.values(projectCreditURLSObject1);
    const projectCreditsContent2 = Object.values(projectCreditsObject2);
    const projectCreditURLSContent2 = Object.values(projectCreditURLSObject2);


    const projectLinkURLContent = Object.values(projectLinkURLSObject);
    const projectLinkContent = Object.values(projectLinksObject);

    const imageIteration = useRef(0);
    const [image, setImage] = useState(projectImages[0][0]);
    const [imageFade, setImageFade] = useState('0');

    /* --- DYNAMICALLY SET PROJECT CONTENT FROM JSON --- */

    useEffect(() => {
        setTimeout(function () {
            for (let i = 0; i < projectTitles.length; i++) {
                if (project === i) {
                    projectTitleObject.current = projectTitles[i];
                    projectTextObject.current = projectText[i];

                    projectCreditsObject1.current = projectCredits1[i];
                    projectCreditURLSObject1.current = projectCreditURLS1[i];
                    projectCreditsObject2.current = projectCredits2[i];
                    projectCreditURLSObject2.current = projectCreditURLS2[i];

                    projectLinkURLSObject.current = projectLinkURLS[i];
                    projectLinksObject.current = projectLinks[i];
                };
            };
            imageIteration.current = 0;
            setImage(projectImages[project][imageIteration.current]);
        }, 495);
    }, [projectTitleObject, projectTextObject, projectTitles, projectText, projectImages, project, projectCredits1, projectCreditURLS1, projectCredits2, projectCreditURLS2, projectLinkURLS, projectLinks]);

    console.log('refresh')

    /* --- ANIMATE SELECT PROJECT --- */

    useEffect(() => {
        setWindowFade('0');
        setTranslation('translateX(5%)');
        setTimeout(function () {
            setImageFade('1');
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
                setTimeout(function () {
                    setImage(projectImages[project][imageIteration.current]);
                    setImageFade('1');
                }, 500);
            } else if (imageIteration.current < projectImages[project].length - 1) {
                imageIteration.current++;
                setImageFade('0');
                setTimeout(function () {
                    setImage(projectImages[project][imageIteration.current]);
                    setImageFade('1');
                }, 500);
            }
        }, 5000);
        return () => { clearInterval(imageInterval) }
    }, [project, projectImages]);

    return (
        <div className="project-window" style={{ opacity: windowFade, transform: translation }}>
            <div className="project-text">
                <h3>{projectTitleContent}</h3>
                <div className="project-text-body">
                    <p className="project-description">{projectTextContent}</p>
                </div>
            </div>
            <div className="project-footer">
                <div className="project-credits" >
                <a className="project-credits-1" target="_blank" rel="noreferrer" href={projectCreditURLSContent1}>{projectCreditsContent1}</a>
                <a className="project-credits-2" target="_blank" rel="noreferrer" href={projectCreditURLSContent2}>{projectCreditsContent2}</a>
                </div>
                <a className="visit-project-link" target="_blank" rel="noreferrer" href={projectLinkURLContent}>{projectLinkContent}</a>
            </div>
            <div className="project-images-container">
                <img className='project-images' style={{ opacity: imageFade }} alt={`${projectTitleContent} images`} src={`./images/${image}`}></img>
            </div>
        </div>
    );
}

export default ProjectWindow;