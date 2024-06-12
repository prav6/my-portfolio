import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Home.css';

const Home = ({ onScrollHeader }) => {
    return (
        <div className="homeContainer" id="home">
            <h1>Praveen Chandrarajah</h1>
            <p>Innovative Computer Science Professional Specialising in Cyber security and Software Development</p>
            <div className="scrollPrompt">
                <Link to="about" smooth={true} duration={500}>
                    <div className="scrollArrow"></div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
