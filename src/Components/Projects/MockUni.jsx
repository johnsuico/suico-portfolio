import React from 'react'

import './Projects.css';

import MockUniPic from '../../Images/MockUni.png';
import { BsGithub } from 'react-icons/bs';

const MockUni = () => {
  return (
    <div className="project-individual-container">
      <img src={MockUniPic} alt="MockUni" className="project-img"/>
        <div className="project-info">
          <h3 className="project-title">MockUni <span className="project-role">- Full Stack Developer</span></h3>

          <p className="project-desc">A web management system for an imaginary school to keep track of their students, books, and classes.</p>

          <p className="project-desc">School admins, or anyone authorized, would be able to add students, books, or classes to the system.</p>

          <p className="project-desc">Students, classes, and books can also be assigned to each other to show what students are taking classes or what books they have checked out.</p>

          <div className="project-tech">
            <h4 className="project-tech-title">Tech Stack:</h4>
            <div className="project-icon-link-container">
              <div className="project-tech-icons">
                <img src="https://img.icons8.com/color/48/null/mongodb.png" alt="" className="project-icon" title="MongoDB"/>
                <img src="https://img.icons8.com/color/48/000000/express-js.png" alt="" className="project-icon white-icon" title="Express.js"/>
                <img src="https://img.icons8.com/color/48/null/react-native.png" alt="" className="project-icon" title="React.js"/>
                <img src="https://img.icons8.com/color/96/null/nodejs.png" alt="" className="project-icon white-icon" title="Node.js"/>
                <img src="https://img.icons8.com/color/48/null/amazon-web-services.png" alt="" className="project-icon white-icon" title="AWS"/>
                <img src="https://img.icons8.com/fluency/48/null/docker.png" alt="" className="project-icon" title="Docker"/>
              </div>
              <div className="github-link-group">
                <a href="https://github.com/johnsuico/MockUni" target="_blank" rel="noreferrer" className="github-link"><BsGithub className="github-icon" />Github</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MockUni