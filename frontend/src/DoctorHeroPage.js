import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUserMd, faHeartbeat, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './DoctorHeroPage.css';
import { Link } from 'react-router-dom';


function DoctorHeroPage() {
  return (
    <div className="doctor-hero">
      <div className="hero-content">
        <FontAwesomeIcon icon={faUserMd} className="icon" />
        <h1>Welcome, Doctor!</h1>
        <p>Thank you for using our diabetes prediction system. Your dedication to patient care is invaluable.</p>
        <p>Our system leverages advanced algorithms to provide accurate risk assessments for diabetes, enabling early detection and personalized treatment plans.</p>
        <p>Key features:</p>
        <ul className="feature-list">
          <li><FontAwesomeIcon icon={faChartLine} className="feature-icon" /> Accurate Risk Assessment</li>
          <li><FontAwesomeIcon icon={faHeartbeat} className="feature-icon" /> Early Detection</li>
          <li><FontAwesomeIcon icon={faChartBar} className="feature-icon" /> Personalized Recommendations</li>
          <li><FontAwesomeIcon icon={faChartLine} className="feature-icon" /> Data Visualization</li>
        </ul>
        <Link to="/doctorEntry" className="cta-button">Enter Diabetes Data</Link>
      </div>
    </div>
    
  );
}

export default DoctorHeroPage;
