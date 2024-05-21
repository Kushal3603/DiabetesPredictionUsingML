import React from 'react'
import '../styles/Login.css'
import logo from './logo.png'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import DoctorHeroPage from './DoctorHeroPage'

function DoctorDashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <>
      <header>
        <Link to="/" className="logo"><img src={logo} alt='Logo' style={{height:'2em',marginLeft:'-60px'}}/><h2 style={{marginTop:'-50px'}}> GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/doctorDashboard">Home</Link>
          <Link to="/doctorFeedback">Feedback</Link>
          <Link to="/doctorAbout">About</Link>
          <button onClick={handleClick} className="loginbtn">Logout</button>
        </nav>
      </header>
      <DoctorHeroPage/>
      {/* <div className="content" style={{  paddingTop: '100px', paddingBottom: '200px' }}>
        <div style={{ fontSize: '50px', fontWeight: '1000', marginBottom: '33px', color: 'silver' }}>Let's Contribute for a Change !</div>
        <div>
          <Link to="/doctorEntry" className='dataEntry'>Enter Diabetes Data</Link>
        </div>
      </div> */}
      <Footer />  
    </>
  )
}

export default DoctorDashboard
