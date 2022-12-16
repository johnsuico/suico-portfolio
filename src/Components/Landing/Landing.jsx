import React from 'react'

// Import CSS
import './Landing.css';

// Import Components
import { Navbar, Hero } from '../';

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-content-container">
        <Hero />
      </div>
    </div>
  )
}

export default Landing