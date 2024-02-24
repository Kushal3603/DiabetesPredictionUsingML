import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import validation from './LoginValidation';
import { Link, useNavigate } from 'react-router-dom';

function DoctorSignup() {
    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/doctorSignup',{username,email,password})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        navigate('/doctorLogin') 
    };

    

    return (
        <>
        <header>
        <h2 className="logo">GlucoWise</h2>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="#">News</Link>
          <Link to="#">Feedback</Link>
          <Link to="#">About</Link>
          <button className="loginbtn" >Login</button>
          
          
        </nav>
        
      </header>
        <div className='signup'>
        <div className="form-box register">
                      <h2>Doctor Registration</h2>
                      <form onSubmit={handleSubmit} method="post">
                          <div className="input-box">
                              <span className="icon">
                                  <i className="fa-solid fa-user"></i>
                              </span>
                              <input value={username} name='username' onChange={(e)=>setUsername(e.target.value)} type="text" required />
                              <label>Username</label>
                          </div>
                          <div className="input-box">
                              <span className="icon">
                                  <i className="fa-solid fa-envelope"></i>
                              </span>
                              <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} required name="email"/>
                              <label>Email</label>
                          </div>
                          
                          <div className="input-box">
                              <span className="icon">
                
                                  <i className="fa fa-lock" aria-hidden="true"></i>
                              </span>
                              <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} required name="password"/>
                              <label>Password</label>
                          </div>
                          
                      <button type='submit' className="register-btn">Register</button>
                          <div className="login-register">
                              <p>Already have an account? <Link to="/doctorLogin" className="login-link">Login</Link></p>
                          </div>
                      </form>
              </div>
              </div>
              </>
    );
}

export default DoctorSignup;
