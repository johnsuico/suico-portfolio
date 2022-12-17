import React from 'react'

// Import CSS
import './Landing.css';

// Import Components
import { Navbar, Hero, Skills, Projects, Contact } from '../';

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-content-container">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default Landing