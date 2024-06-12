import React, { useState } from 'react';
import '../styles/Education.css';
import sotonLogo from '../assets/soton.png';
import wgsbLogo from '../assets/wgsb.png';

const Education = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleOpenModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div id="education" className="educationContainer">
                <h2 className="educationTitle">📚 Education</h2>
                <div className="educationCards">
                    <div className="educationCard">
                        <img src={sotonLogo} alt="University of Southampton" className="educationLogo1"/>
                        <h3>2021-2025 </h3>
                        <h3>University of Southampton</h3>
                        <p>MEng Computer Science with Industrial Studies</p>
                        <button className="plusButton" onClick={() => handleOpenModal(
                            `<strong>Expected grade 2:1</strong><br/><br/>
                            <strong>3rd Year Modules:</strong><br/>Cloud Application Development, Social Enterprise, Engineering Management & Law, Social Computing Techniques and Security of Cyber-Physical Systems<br/><br/>
                            <strong>1st & 2nd Year Modules:</strong><br/>Computer Systems Professional Development, Algorithmics, Data Management, Programming Language Concepts, Theory of Computing and Principles of Cyber Security`
                        )}>+
                        </button>
                    </div>
                    <div className="educationCard">
                        <img src={wgsbLogo} alt="Wilmington Grammar School for Boys" className="educationLogo2"/>
                        <h3>2014-2020 </h3>
                        <h3>Wilmington Grammar School for Boys</h3>
                        <p>GCSE's and A Levels</p>
                        <button className="plusButton" onClick={() => handleOpenModal(
                            `<strong>A-Level:</strong><br/>Mathematics (A*) Computer Science (A*) Further Mathematics (A)<br/><br/>
                            <strong>10 GCSEs all 9-6 including:</strong><br/>Mathematics (9), English Language (6)<br/><br/>
                            <strong>Deputy Head Boy</strong> – Sixth form 2020`
                        )}>+
                        </button>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className="modalOverlay" onClick={handleCloseModal}>
                    <div className="modalContent" onClick={e => e.stopPropagation()}>
                        <button className="closeButton" onClick={handleCloseModal}>x</button>
                        <div dangerouslySetInnerHTML={{ __html: modalContent }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Education;
