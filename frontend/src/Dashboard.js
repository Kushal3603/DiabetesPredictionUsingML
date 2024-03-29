import React, { useState, useEffect } from 'react';
import './Login.css';
import './DropdownList.css';
import { Link } from 'react-router-dom';
import HeroPage from './HeroPage';
import logo from './logo.png'

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    setIsLoggedIn(!!userEmail); // Set isLoggedIn to true if userEmail exists
  }, []);

  const toggleDropdown = () => {
    console.log('Dropdown')
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <header>
        <Link to="/" className="logo"><img src={logo} alt='Logo' style={{height:'2em',marginLeft:'-60px'}}/><h2 style={{marginTop:'-50px'}}> GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/userHistory">User History</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="#">About</Link>
          {isLoggedIn ? (
            <button className="loginbtn" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="loginbtn" onClick={toggleDropdown}>Login</button>
          )}
        </nav>
      </header>
      {isOpen && !isLoggedIn && (
        <div className="dropdown-content">
          <Link className="drop" to="/login">Login as Patient</Link>
          <Link className="drop" to="/doctorLogin">Login as Doctor</Link>
        </div>
       
      )}
      <HeroPage/>
      <div style={{ backgroundColor: 'darkslategray' }}>
        {/* <center className='welcome'><h1>Welcome, {username}!</h1></center> */}
        {/* <center><Link to="/test" type="submit" >Take the Test</Link></center> */}
      </div>
    </div>
  );
}

export default Dashboard;
