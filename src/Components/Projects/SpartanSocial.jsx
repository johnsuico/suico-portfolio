import React from 'react'

import './Projects.css';

import SpartanSocialScreen from '../../Images/SpartanSocial.png';
import { BsGithub } from 'react-icons/bs';

const SpartanSocial = () => {
  return (
    <div className="project-individual-container">
      <img src={SpartanSocialScreen} alt="SpartanSocial" className="project-img"/>
        <div className="project-info">
          <h3 className="project-title">SpartanSocial <span className="project-role">- Lead Full Stack Developer</span></h3>

          <p className="project-desc">A social media website focused on creating a better student experience for new and Existing SJSU students.</p>

          <p className="project-desc">Users can create their own profile to post on the forums or post an upcoming event.</p>

          <p className="project-desc">Users also have their own profile page they can edit and shows their past activity. </p>

          <div className="project-tech">
            <h4 className="project-tech-title">Tech Stack:</h4>
            <div className="project-icon-link-container">
              <div className="project-tech-icons">
                <img src="https://img.icons8.com/color/48/null/mongodb.png" alt="" className="project-icon" title="MongoDB"/>
                <img src="https://img.icons8.com/color/48/000000/express-js.png" alt="" className="project-icon white-icon" title="Express.js"/>
                <img src="https://img.icons8.com/color/48/null/react-native.png" alt="" className="project-icon" title="React.js"/>
                <img src="https://img.icons8.com/color/96/null/nodejs.png" alt="" className="project-icon white-icon" title="Node.js"/>
                <img src="https://img.icons8.com/color/96/null/heroku.png" alt="" className="project-icon" title="Heroku"/>
              </div>
              <div className="github-link-group">
                <div className="github-link">
                  <BsGithub className="github-icon" />
                  <a href="https://github.com/johnsuico/SpartanSocial-FrontEnd" target="_blank" rel="noreferrer">Frontend</a>
                </div>
                <div className="github-link">
                  <BsGithub className="github-icon" />
                  <a href="https://github.com/johnsuico/SpartanSocial-API" target="_blank" rel="noreferrer">Backend</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SpartanSocial