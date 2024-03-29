import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer" style={{padding:'35px'}}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to helping diabetes patients.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@glucowise.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GlucoWise. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
