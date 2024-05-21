import React from 'react';
import '../styles/HeroPage.css';
import { useNavigate,Link } from 'react-router-dom';


const HeroPage = () => {
    const navigate=useNavigate()
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Early Detection Can Save Lives</h1>
        <p className="hero-text">
          Diabetes is a serious health condition that affects millions of people worldwide. Detecting diabetes early is crucial for managing the disease effectively and preventing complications.
        </p>
        <div className="info-container">
          <div className="info-item">
            <i className="fas fa-heartbeat"></i>
            <h3>Reduce Health Risks</h3>
            <p>Early detection allows for timely intervention and helps reduce the risk of heart disease, stroke, kidney failure, and other complications associated with diabetes.</p>
          </div>
          <div className="info-item">
            <i className="fas fa-chart-line"></i>
            <h3>Improve Quality of Life</h3>
            <p>By managing diabetes early, individuals can lead healthier lives, maintain optimal blood sugar levels, and enjoy a higher quality of life with fewer health-related limitations.</p>
          </div>
          <div className="info-item">
            <i className="fas fa-users"></i>
            <h3>Community Support</h3>
            <p>Join our community of patients, caregivers, and healthcare professionals dedicated to raising awareness about diabetes, sharing experiences, and supporting each other on the journey to better health.</p>
          </div>
          
        </div>
        {/* <button onClick={handleClick} className="hero-btn">Learn More</button> */}
        <Link to="https://diabetes.org/" target="_blank" className="hero-btn">Learn More</Link>
      </div><br/>
      <p className='test-title'>Click below for reviewing your chances of diabetes</p><br/>
      <center><button onClick={()=>navigate('/test')} type="submit" className='quiz-btn' >Take the Test</button></center>
    </section>
  );
}

export default HeroPage
 