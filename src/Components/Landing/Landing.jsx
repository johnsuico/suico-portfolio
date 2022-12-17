import React from 'react'

// Import CSS
import './Landing.css';

// Import Components
import { Navbar, Hero, Skills, Projects } from '../';

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-content-container">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </div>
  )
}

export default Landing