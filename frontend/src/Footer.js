import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to helping diabetes patients.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/feedback">Feedback</a></li>
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
