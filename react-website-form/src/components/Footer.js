import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { MdFilterHdr } from "react-icons/md";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFilterHdr className='navbar-icon' />
              LOGO
            </Link>
          </div>
          <small className='website-rights'>Reserved © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
