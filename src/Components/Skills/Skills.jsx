import React from 'react'

import './Skills.css';

import Netlify from '../../Logos/netlify.svg';
import Flask from '../../Logos/Flask.svg';
import Postman from '../../Logos/postman.svg';


const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title" id="skills">Skills</h2>
      <div className="skills-icon-container">
        {/* <div className="skills-icon-group"> */}
          <img src="https://img.icons8.com/color/96/null/javascript--v1.png" className="skill-icon" alt="" title="JavaScript"/>
          <img src="https://img.icons8.com/color/96/null/html-5--v1.png" alt="" className="skill-icon" title="HTML"/>
          <img src="https://img.icons8.com/color/96/null/css3.png" alt="" className="skill-icon" title="CSS"/>
          <img src="https://img.icons8.com/color/96/null/c-plus-plus-logo.png" alt="" className="skill-icon" title="C++"/>
          <img src="https://img.icons8.com/color/96/null/c-programming.png" alt="" className="skill-icon" title="C"/>
          <img src="https://img.icons8.com/color/96/null/python--v1.png" alt="" className="skill-icon" title="Python"/>
        {/* </div> */}

        {/* <div className="skills-icon-group"> */}
          <img src="https://img.icons8.com/color/96/null/mongodb.png" alt="" className="skill-icon" title="MongoDB"/>
          <img src="https://img.icons8.com/color/96/000000/express-js.png" alt="" className="skill-icon white-icon" title="Express.js"/>
          <img src="https://img.icons8.com/color/96/null/react-native.png" alt="" className="skill-icon" title="React.js"/>
          <img src="https://img.icons8.com/color/96/null/nodejs.png" alt="" className="skill-icon" title="Node.js"/>
          <img src={Flask} alt="" className="skill-icon white-icon" title="Flask"/>
          <img src="https://img.icons8.com/color/96/null/heroku.png" alt="" className="skill-icon" title="Heroku"/>
        {/* </div> */}

        {/* <div className="skills-icon-group"> */}
          <img src={Netlify} alt="" className="skill-icon" title="Netlify"/>
          <img src="https://img.icons8.com/color/96/null/git.png" alt="" className="skill-icon" title="Git"/>
          <img src="https://img.icons8.com/color/96/null/figma--v1.png" className="skill-icon" alt="" title="Figma"/>
          <img src="https://img.icons8.com/color/96/null/gimp.png" alt="" className="skill-icon" title="GIMP"/>
          <img src={Postman} alt="" className="skill-icon" title="Postman"/>
        {/* </div> */}
      </div> 
    </div>
  )
}

export default Skills