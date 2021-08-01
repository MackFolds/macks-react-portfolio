import React from 'react';
import coverImage from '../../assets/imgs/hero-bg-react-portfolio.jpg';
import awesomeImage from '../../assets/imgs/IMG_6609.JPG';
import './About.css';

function About(props) {
    return (
        <section id="about-section">            
            <img src={coverImage} className="cover-image" style={{ width: "100%" }} alt="cover" />
            <div className="container-fluid">
                <div className="row" id="about-title">
                    <h2 id="about">About Mack</h2>
                </div>
            </div>
            <div className="container" id="about-content">
                <div className="row justify-content-lg-center">
                    <div className="col-lg-6" id="image-id" >
                        <img src={awesomeImage} className="personal-photo" id="about-me-img" alt='' />
                    </div>
                    <div className="col-lg-6" id='about-text'>
                        <p>{props.aboutText}</p>
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default About