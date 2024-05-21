import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css'
import logo from '../logo.png'
import { Link, useNavigate } from 'react-router-dom';

function DoctorSignup() {
    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://diabetespredictionusingml.onrender.com/doctorSignup',{username,email,password})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        navigate('/doctorLogin') 
    };

    

    return (
        <>
        <header>
        <Link to="/" className="logo"><img src={logo} alt='Logo' style={{height:'2em',marginLeft:'-60px'}}/><h2 style={{marginTop:'-50px'}}> GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/doctorFeedback">Feedback</Link>
          <Link to="/doctorAbout">About</Link>
          <button className="loginbtn" >Login</button>
          
          
        </nav>
        
      </header>
        <div className='signup'>
        <div className="form-box register">
                      <h2 style={{color:'#fff'}}>Doctor Registration</h2>
                      <form onSubmit={handleSubmit} method="post">
                          <div className="input-box">
                              <span className="icon">
                                  <i style={{color:'#fff'}} className="fa-solid fa-user"></i>
                              </span>
                              <input style={{color:'#fff'}} value={username} name='username' onChange={(e)=>setUsername(e.target.value)} type="text" required />
                              <label style={{color:'#fff'}}>Username</label>
                          </div>
                          <div className="input-box">
                              <span className="icon">
                                  <i style={{color:'#fff'}} className="fa-solid fa-envelope"></i>
                              </span>
                              <input style={{color:'#fff'}} value={email} type="email" onChange={(e)=>setEmail(e.target.value)} required name="email"/>
                              <label style={{color:'#fff'}}>Email</label>
                          </div>
                          
                          <div className="input-box">
                              <span className="icon">
                
                                  <i style={{color:'#fff'}} className="fa fa-lock" aria-hidden="true"></i>
                              </span>
                              <input style={{color:'#fff'}} value={password} type="password" onChange={(e)=>setPassword(e.target.value)} required name="password"/>
                              <label style={{color:'#fff'}}>Password</label>
                          </div>
                          
                      <button type='submit' className="register-btn">Register</button>
                          <div className="login-register">
                              <p style={{color:'#fff'}}>Already have an account? <Link to="/doctorLogin" className="login-link" style={{color:'#fff'}}>Login</Link></p>
                          </div>
                      </form>
              </div>
              </div>
              </>
    );
}

export default DoctorSignup;
