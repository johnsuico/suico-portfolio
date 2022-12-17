import React from 'react'

// Import CSS
import './Landing.css';

// Import Components
import { Navbar, Hero, Skills, Projects, Contact, Footer } from '../';

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
      <Footer />
    </div>
  )
}

export default Landing