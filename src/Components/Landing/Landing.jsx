import React from 'react'
import { Link } from 'react-router-dom';

// Import CSS
import './Landing.css';

import { BsGithub } from 'react-icons/bs';

// Import Navbar
import { Navbar } from '../';

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-content-container">
        <div className="hero-content">
          <h2 className="hero-title">Hi, I'm <span>John Suico.</span></h2>
          <p className="hero-caption">Computer Engineer and Full Stack Developer.</p>
          <div className="hero-buttons">
            <Link to="/" className="hero-link">Contact Me</Link>
            <div className="github-btn">
              <BsGithub className="github-icon" />
              <a href="https://github.com/johnsuico" target="_blank"  rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing