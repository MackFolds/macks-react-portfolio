import React from 'react';
import './Nav.css';

function Nav(props) {
    const {
        aboutSelected,
        setAboutSelected,
        workSelected,
        setWorkSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
    } = props
    return (
        <header>            
            <nav className="navbar navbar-expand-sm" data-testid="navbar">
                <div className="container-fluid ">
                    <a className="navbar-brand" data-testid="link" href="/macks-react-portfolio">
                        <h1>Mack's Portfolio</h1>
                    </a>
                        <ul className="navbar-nav ">
                            <li className={`${aboutSelected && 'navActive'}`}>
                                <a className="nav-link active" href="#about"                             
                                onClick={() => { setAboutSelected(true); setContactSelected(false); setResumeSelected(false); setWorkSelected(false); }}>
                                <h3>About Mack</h3></a>
                            </li>
                            <li className={`${workSelected && 'navActive'}`}>
                                <a className="nav-link active" href="#work"
                                onClick={() => { setAboutSelected(false); setContactSelected(false); setWorkSelected(true); setResumeSelected(false); }}>
                                <h3>My Projects</h3></a>                            
                            </li>
                            <li className={`${contactSelected && 'navActive'}`}>
                                <a className="nav-link active" href="#contact-me" 
                                onClick={() => { setAboutSelected(false); setContactSelected(true); setWorkSelected(false); setResumeSelected(false); }}>
                                <h3>Contact Me</h3></a>
                            </li>
                            <li className={`${resumeSelected && 'navActive'}`}>
                                <a className="nav-link active" href="#resume" 
                                onClick={() => { setAboutSelected(false); setContactSelected(false); setWorkSelected(false); setResumeSelected(true); }}>
                                <h3>Resume</h3></a>
                            </li>
                        </ul>
                </div>
            </nav>
        </header>
    )
};

export default Nav;