import React from 'react'
import { HashLink } from 'react-router-hash-link';

import './Hero.css';

import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { HiDocument } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="hero-content">
      <h2 className="hero-title">Hi, I'm <span>John Suico.</span></h2>
      <p className="hero-caption">Computer Engineer and Full Stack Web Developer.</p>
      <div className="hero-buttons">
        {/* <Link to="/" className="hero-link">Contact Me</Link> */}
        <HashLink smooth to="#contact" className="hero-link">Contact Me</HashLink>
        <div className="hero-btn">
          <BsGithub className="hero-icon" />
          <a href="https://github.com/johnsuico" target="_blank"  rel="noreferrer">GitHub</a>
        </div>
        <div className="hero-btn">
          <AiFillLinkedin className="hero-icon" />
          <a href="https://www.linkedin.com/in/johnsuico/" target="_blank" rel="noreferrer">Linkedin</a>
        </div>
        <div className="hero-btn">
          <HiDocument className="hero-icon" />
          <a href="https://drive.google.com/file/d/1U1zU-rThPkHPKUwKRBYzHVWscfHHFjY_/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero