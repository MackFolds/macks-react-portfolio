import React, { useState } from 'react';
import './App.css';
import Nav from '../Nav';
import About from '../About';
import Footer from '../Footer';
import ContactForm from '../Contact';
import Resume from '../Resume';
import Work from '../Work';
// import projects from '../../assets/projects.json';

function App() {
  const [ aboutSelected, setAboutSelected ] = useState(true);
  const [ workSelected, setWorkSelected ] = useState(false);
  const [ contactSelected, setContactSelected ] = useState(false);
  const [ resumeSelected, setResumeSelected ] = useState(false);
  const aboutText = "I am a salt lake city-based full time student in the University of Utah Coding Bootcamp. I started school with half a decade of teamwork and leadership experience in the workplace. If you are looking for a coder with a dedication to learn, improve and cooperate, you've come to the right place. I began my journey down the coding path March 3rd, 2021. I always felt that I was too detail oriented or meticulous for my previous work, so I sought out to find a career to match my need to fix and improve upon mine and others work. Some of my hobbies include basketball and video games however most of my time goes to Marin, my love of ten years.";
  return (
   <div className="App">
      <Nav 
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      workSelected={workSelected}
      setWorkSelected={setWorkSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {(!aboutSelected && !contactSelected && !resumeSelected) ?(
          <>
            <Work></Work>
          </>  
        ) :(!workSelected && !aboutSelected && !resumeSelected) ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : (!workSelected && !contactSelected && !aboutSelected) ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <About aboutText={aboutText}></About>
        )}        
        </main>   
        
      <Footer></Footer>
   </div>
  );
}

export default App;