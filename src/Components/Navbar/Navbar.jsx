import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-content-container">
        <Link to="/" className="header-title">SUI.CO</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Skills</Link>
          <Link to="/" className="nav-link">Projects</Link>
          <Link to="/" className="nav-link">Resume</Link>
        </div>

        <GiHamburgerMenu className="mobile-menu-button" onClick={()=>setMobileMenu(!mobileMenu)}/>
      </div>

      <div className={mobileMenu ? `mobileMenu mm-active` : `mobileMenu`}>
        <div className="mm-links">
          <Link to="/" className="nav-link">Skills</Link>
          <Link to="/" className="nav-link">Projects</Link>
          <Link to="/" className="nav-link">Resume</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar