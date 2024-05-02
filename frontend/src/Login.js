import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import validation from './LoginValidation'
import './Login.css'
import logo from './logo.png'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");
        axios.post('https://diabetespredictionusingml.onrender.com/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    localStorage.setItem("userEmail", email);
                    navigate('/');
                } else {
                    // Handle login failure
                }
            })
            .catch(error => {
                console.error('Login Error:', error);
            });
    };

    

    return (
        <>
        <header>
        <Link to="/" className="logo"><img src={logo} alt='Logo' style={{height:'2em',marginLeft:'-60px'}}/><h2 style={{marginTop:'-50px'}}> GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/userHistory">User History</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="#">About</Link>
          <button className="loginbtn">Login</button>
        </nav>
        
      </header>
          <div classname="wrapper">
      <div className="login">
          <span className="icon-close" style={{marginLeft:'311px'}}><i className="fa-solid fa-xmark"></i></span>
          <div className="form-box login">
              <h2 style={{color:'#fff'}}>Patient Login</h2>
              <form action="#" onSubmit={handleSubmit} method="post">
                  <div className="input-box">
                      <span className="icon">
                          <i style={{color:'#fff'}} className="fa-solid fa-envelope"></i>
                      </span>   
                      <input style={{color:'#fff'}} onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="email" required/>
                      <label style={{color:'#fff'}}>Email</label>
                  </div>
                  <div className="input-box">
                      <span className="icon">
                          <i style={{color:'#fff'}} className="fa fa-lock" aria-hidden="true"></i>
                      </span>
                      <input style={{color:'#fff'}} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="password" required/>
                      <label style={{color:'#fff'}}>Password</label>
                  </div>
                  <div className="remember-forget">
                      <a href="#" style={{color:'#fff'}}>Forgot password?</a>
              </div>
                  <button type="submit" className="login-btn">Login</button>
                  <div className="login-register">
                      <p style={{color:'#fff'}}>Don't have an account? <Link to='/signup' id="reg" style={{color:'#fff'}}className="register-link">Register</Link></p>
                  </div>
              </form>
          </div>
          
      </div>
      </div>
      </>
        )
}

export default Login