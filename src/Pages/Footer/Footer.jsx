import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';
import './Footer.css';

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-logo">AFLAMI</div>
        </div>

        <div className="footer-center">
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/featured">Featured</Link>
            <Link to="/creators">Creators</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/contact">Contact us</Link>
          </nav>
        </div>

        <div className="footer-right">
          <div className="footer-icons">
            <div className="icon-box"><FaLinkedin /></div>
            <div className="icon-box"><FaTwitter /></div>
            <div className="icon-box"><FaDribbble /></div>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p><em>Copyright © 2024 Fatimah Mse. All rights reserved.</em></p>
      </div>
    </footer>
  );
};


