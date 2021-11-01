import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFilterHdr } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <MdFilterHdr className='navbar-icon' />
            LOGO
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <a href='/form' className='nav-links' onClick={closeMobileMenu}>
                Form
              </a>
            </li>
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
