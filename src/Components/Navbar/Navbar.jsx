import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import './Navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="navbar-container" id="top">
      <div className="navbar-content-container">
        <Link to="/" className="header-title">SUI.CO</Link>
        <div className="navbar-links">
          <HashLink smooth to="#skills" className="nav-link">Skills</HashLink>
          <HashLink smooth to="#projects" className="nav-link">Projects</HashLink>
          <a href="https://drive.google.com/file/d/1U1zU-rThPkHPKUwKRBYzHVWscfHHFjY_/view?usp=sharing" className="nav-link" target="_blank" rel="noreferrer">Resume</a>
        </div>

        <GiHamburgerMenu className="mobile-menu-button" onClick={()=>setMobileMenu(!mobileMenu)}/>
      </div>

      <div className={mobileMenu ? `mobileMenu mm-active` : `mobileMenu`}>
        <div className="mm-links">
          <HashLink smooth to="#skills" className="nav-link">Skills</HashLink>
          <HashLink smooth to="#projects" className="nav-link">Projects</HashLink>
          <a href="https://drive.google.com/file/d/1U1zU-rThPkHPKUwKRBYzHVWscfHHFjY_/view?usp=sharing" className="nav-link" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar