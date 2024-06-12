import React, { useState } from 'react';
import '../styles/About.css';
import pravImage from '../assets/Prav.jpeg';

const About = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div id="about" className={`aboutContainer ${modalOpen ? 'modalOpen' : ''}`}>
                <h2 className="aboutTitle">About Me 🚀</h2>
                <div className="aboutCard">
                    <div className="aboutImageContainer">
                        <img src={pravImage} alt="Praveen Chandrarajah"/>
                    </div>
                    <div className="aboutContent">
                        <p>As a dedicated computer science student with a keen interest in software development 💻 and
                            cybersecurity 🔒, I have a strong foundation in applying theoretical knowledge to real-world
                            problems.
                            📚My academic path is enriched by leadership positions in various extracurricular activities,
                            which have bolstered my teamwork and organizational capabilities. I am an avid
                            problem-solver with a passion for cybersecurity, constantly seeking to understand and
                            mitigate digital threats. With a proactive approach, I am eager to contribute my technical
                            acumen and vibrant interpersonal abilities to a professional environment, especially within
                            the technology and finance sectors.</p>
                        <button className="plusButton" onClick={handleOpenModal}>+</button>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className="modalOverlay" onClick={handleCloseModal}>
                    <div className="modalContent" onClick={e => e.stopPropagation()}>
                        <button className="closeButton" onClick={handleCloseModal}>x</button>
                        <h2>More About Me</h2>
                        <p><strong>What I Like to Do in My Free Time:</strong></p>
                        <ul className="interestsList">
                            <li>Formula One 🏎️</li>
                            <li>Badminton 🏸</li>
                            <li>Technology 💻</li>
                            <li>Cars 🚗</li>
                            <li>Cricket 🏏</li>
                            <li>Dance 💃</li>
                            <li>Scouts (2009-2020) ⛺</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
