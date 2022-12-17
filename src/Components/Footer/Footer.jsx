import React from 'react'
import { HashLink } from 'react-router-hash-link';

import './Footer.css';

import {BsChevronUp, BsGithub} from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { HiDocument } from 'react-icons/hi';


const Footer = () => {
  return (
    <div className="footer-container">
      <HashLink smooth to="#top" className="to-top">
        <BsChevronUp className="to-top-icon" />
      </HashLink>

      <div className="footer-icon-container">
        <a href="https://linkedinhttps://www.linkedin.com/in/johnsuico/" target="_blank" rel="noreferrer"><AiFillLinkedin className="footer-icon"/></a>
        <a href="https://github.com/johnsuico" target="_blank" rel="noreferrer"><BsGithub className="footer-icon"/></a>
        <a href="https://drive.google.com/file/d/1U1zU-rThPkHPKUwKRBYzHVWscfHHFjY_/view?usp=sharing" target="_blank" rel="noreferrer"><HiDocument className="footer-icon"/></a>
      </div>
    </div>
  )
}

export default Footer