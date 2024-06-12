import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Sidebar from './components/Sidebar';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <Sidebar />
            <Home />
            <About />
            <Education />
        </div>
    );
}

export default App;
