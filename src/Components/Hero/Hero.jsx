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
        <HashLink smooth to="#contact" className="hero-link">Contact Me</HashLink>
        
        <a href={process.env.REACT_APP_GITHUB_LINK} target="_blank"  rel="noreferrer" className="hero-btn"><BsGithub className="hero-icon" />GitHub</a>

        <a href={process.env.REACT_APP_LINKEDIN_LINK} target="_blank" rel="noreferrer" className="hero-btn"><AiFillLinkedin className="hero-icon" />Linkedin</a>

        <a href={process.env.REACT_APP_RESUME_LINK} target="_blank" rel="noreferrer" className="hero-btn"><HiDocument className="hero-icon" />Resume</a>

      </div>
    </div>
  )
}

export default Hero