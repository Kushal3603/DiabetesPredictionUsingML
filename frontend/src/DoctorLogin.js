import React,{useState} from 'react'
import './Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function DoctorLogin() {
  
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [errors,setErrors]=useState({

    })

    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/doctorLogin',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Success"){
                navigate('/doctorDashboard')
            }
            else{
                
            }
            
        })
       
        
    }

    
return (
    
        <>
        <header>
        <Link to="/" className="logo"><h2>GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/doctorDashboard">Home</Link>
          <Link to="#">News</Link>
          <Link to="#">Feedback</Link>
          <Link to="#">About</Link>
          <button className="loginbtn" >Login</button>
        </nav>
        
      </header>
          <div classname="wrapper">
      <div className="login">
          <span className="icon-close"><i className="fa-solid fa-xmark"></i></span>
          <div className="form-box login">
              <h2>Doctor Login</h2>
              <form action="#" onSubmit={handleSubmit} method="post">
                  <div className="input-box">
                      <span className="icon">
                          <i className="fa-solid fa-envelope"></i>
                      </span>
                      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="email" required/>
                      <label>Email</label>
                  </div>
                  <div className="input-box">
                      <span className="icon">
                          <i className="fa fa-lock" aria-hidden="true"></i>
                      </span>
                      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="password" required/>
                      <label>Password</label>
                  </div>
                  <div className="remember-forget">
                      <a href="#">Forgot password?</a>
              </div>
                  <button type="submit" className="login-btn">Login</button>
                  <div className="login-register">
                      <p>Don't have an account? <Link to='/doctorSignup' id="reg" className="register-link">Register</Link></p>
                  </div>
              </form>
          </div>
          
      </div>
      </div>
      </>
        )
}

export default DoctorLogin