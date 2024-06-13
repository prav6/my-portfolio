import React, { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const [active, setActive] = useState('home');
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(true);
            clearTimeout(handleScroll.timeout);
            handleScroll.timeout = setTimeout(() => setVisible(false), 2000);
        };

        window.addEventListener('scroll', handleScroll);

        Events.scrollEvent.register('end', function (to) {
            setActive(to);
        });

        scrollSpy.update();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            Events.scrollEvent.remove('end');
        };
    }, []);

    useEffect(() => {
        scrollSpy.update();
    }, [active]);

    return (
        <div className={`sidebar ${visible ? 'visible' : 'faint'}`}>
            <Link to="home" className={`dot ${active === 'home' ? 'active' : ''}`} smooth={true} duration={500} spy={true} data-tip="Home"></Link>
            <Link to="about" className={`dot ${active === 'about' ? 'active' : ''}`} smooth={true} duration={500} spy={true} data-tip="About"></Link>
            <Link to="education" className={`dot ${active === 'education' ? 'active' : ''}`} smooth={true} duration={500} spy={true} data-tip="Education"></Link>
            <Link to="projects" className={`dot ${active === 'projects' ? 'active' : ''}`} smooth={true} duration={500} spy={true} data-tip="Projects"></Link>
        </div>
    );
};

export default Sidebar;
