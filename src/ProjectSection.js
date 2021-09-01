import { useState } from 'react';

const ProjectSection = () => {

    const loremIpsum = "Proin gravida nibh vel auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit";

    const projectObjects = [
        {
            'title': 'Chappel Galleries',
            'text': {loremIpsum},
            'images': ''
        },
        {
            'title': 'John Hounam Fine Art',
            'text': {loremIpsum},
            'images': ''
        },
        {
            'title': 'Helen Howard Ceramics',
            'text': {loremIpsum},
            'images': ''
        },
        {
            'title': 'Isabel Knowland Fine Art',
            'text': {loremIpsum},
            'images': ''
        },
        {
            'title': 'Carluca Decorators',
            'text': {loremIpsum},
            'images': ''
        },
        {
            'title': 'Dog Treats',
            'text': {loremIpsum},
            'images': ''
        },
        {
            'title': '3D',
            'text': {loremIpsum},
            'images': ''
        }
    ];

    const projectTitles = [];

    for (let i = 0; i < projectObjects.length; i++) {
        const element = projectObjects[i];
        projectTitles.push(element.title);
    };

    const projectTitleLinks = projectTitles.map((projectTitles) => 
       <li>{projectTitles}</li>
    )
    return ( 
        <div className="section-container">
            <div className="section-title no-select">
                <h1>Projects</h1>
            </div>
            <div className="project-container horizontal-center">
                <div className="project-menu">
                    <ul>
                        {projectTitleLinks}
                    </ul>
                </div>
                <div className="project-window">
                    <div className="project-text">
                        <h2>Test Title</h2>
                        <p>{loremIpsum}</p>
                    </div>
                    <div className="project-images horizontal-center vertical-center"><p>project-images</p></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;