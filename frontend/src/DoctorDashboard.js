import React from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
function DoctorDashboard() {

  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/')
  }
  return (
    <>
    <header>
        <h2 className="logo">GlucoWise</h2>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="#">News</Link>
          <Link to="#">Feedback</Link>
          <Link to="#">About</Link>
          <button onClick={handleClick} className="loginbtn">Logout</button>
          
          
        </nav>
        
      </header>
      <div>
          <Link to="/doctorEntry" className='quiz'>Enter Diabetes Data</Link>
      </div>
    </>
  )
}

export default DoctorDashboard