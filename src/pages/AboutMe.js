import React from 'react'
import "../styles/Aboutme.css";
import person from '../assets/per.png';

function AboutMe() {
  return (
    <div>
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={person} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <h2 className="hero--section-description">
          I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a 
          positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          </h2>
         
        
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutMe