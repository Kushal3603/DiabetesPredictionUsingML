import { useState } from 'react';
import React from 'react';
import '../styles/About.css';   
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo.png'


function About() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate=useNavigate()
    const handleClick=()=>{
        if (isLoggedIn) {
          localStorage.removeItem('userEmail');
          setIsLoggedIn(false);
          navigate('/');
        } else {
          navigate('/');
        }
      }
  return (
    <>
    <header>
      <Link to="/" className="logo"><img src={logo} alt='Logo' style={{height:'2em',marginLeft:'-60px'}}/><h2 style={{marginTop:'-50px'}}> GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/userHistory">User History</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/about">About</Link>
          <button className="loginbtn" onClick={handleClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </nav>
      </header>
    <div className="about-us-container"> 
      <h2>About Us</h2>
      <p>Welcome to our Diabetes Prediction App!</p>
      <p>We are dedicated to providing a reliable tool for predicting the risk of diabetes based on various factors such as age, BMI, glucose levels, etc.</p>
      <p>Our mission is to empower individuals to take proactive steps towards managing their health and reducing the risk of diabetes-related complications.</p>
      <h3>Our Team</h3>
      <ul>
        <li><strong>Kushal Shah</strong></li>
        <li><strong>Shrey Patel</strong></li>
        </ul>
      <p>Feel free to reach out to us at contact@glucowise.com for any inquiries or feedback.</p>
    </div>
    </>
  );
}

export default About