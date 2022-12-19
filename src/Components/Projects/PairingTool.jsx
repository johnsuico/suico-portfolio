import React from 'react'

import './Projects.css';

import PairingToolPic from '../../Images/pairingtool.png';
import { BsGithub } from 'react-icons/bs';
import Flask from '../../Logos/Flask.svg';

const PairingTool = () => {
  return (
    <div className="project-individual-container">
      <img src={PairingToolPic} alt="MockUni" className="project-img"/>
        <div className="project-info">
          <h3 className="project-title">Mentorship Pairing Tool <span className="project-role">- Frontend Developer</span></h3>

          <p className="project-desc">A web application that matches people with each other depending on their answers from a Google form.</p>

          <p className="project-desc">People who wanted to be matched with someone else will answer a short google form about themselves and the backend would calculate their similarity score.</p>

          <p className="project-desc">The person using the app would be able to look at the form results, pairing results, and a pair's similarity score.</p>

          <div className="project-tech">
            <h4 className="project-tech-title">Tech Stack:</h4>
            <div className="project-icon-link-container">
              <div className="project-tech-icons">
                <img src="https://img.icons8.com/color/48/null/html-5--v1.png" alt="" className="project-icon" title="HTML"/>
                <img src="https://img.icons8.com/color/48/null/css3.png" alt="" className="project-icon" title="CSS"/>
                <img src="https://img.icons8.com/color/96/null/python--v1.png" alt="" className="project-icon" title="Python"/>
                <img src={Flask} alt="" className="project-icon white-icon" title="Python"/>
                <img src="https://img.icons8.com/color/48/null/google-forms-new-logo-1.png" alt="" className="project-icon"/>
              </div>
              <div className="github-link-group">
                <a href="https://github.com/aibarrola/MentorshipPairingTool" target="_blank" rel="noreferrer" className="github-link"><BsGithub className="github-icon" />Github</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PairingTool