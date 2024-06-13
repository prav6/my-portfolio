import React, { useState } from 'react';
import '../styles/Projects.css';

const projects = [
    "Wedding Website",
    "Runway Declaration Tool",
    "Visual Acuity iOS App",
    "DVLA API App",
    "Portfolio Website"
];

const Projects = () => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <div id="projects" className="projectsContainer">
            <h2>My Projects</h2>
            <div className="projectsGrid">
                {projects.map((project, index) => (
                    <div key={index} className="projectCard">
                        <div className="projectContent">
                            <h3>{project}</h3>
                            <button className="plus1Button" onClick={() => openModal(project)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            {modalContent && (
                <div className="modalOverlay" onClick={closeModal}>
                    <div className="modalContent" onClick={e => e.stopPropagation()}>
                        <button className="closeButton" onClick={closeModal}>x</button>
                        <h2>{modalContent}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
