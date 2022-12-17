import React from 'react'

import './Projects.css';

import { SpartanSocial, MockUni, PairingTool } from '../';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="project-section-title" id="projects">Projects</h2>

      <SpartanSocial />
      <MockUni />
      <PairingTool />
    </div>
  )
}

export default Projects