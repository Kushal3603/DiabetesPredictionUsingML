import React,{useState, useEffect} from 'react';
import './Login.css';
import './DropdownList.css'
import { Link } from 'react-router-dom';

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header>
      <Link to="/" className="logo"><h2>GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/userHistory">User History</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="#">About</Link>
          <button className="loginbtn" onClick={toggleDropdown}>Login</button>
        </nav>
      </header>
      {isOpen && (
        <div className="dropdown-content">
          <Link className="drop" to="/login">Login as Patient</Link>
          <Link className="drop" to="/doctorLogin">Login as Doctor</Link>
        </div>
      )}
      <div style={{backgroundColor:'darkslategray'}}>
        {/* <center className='welcome'><h1>Welcome, {username}!</h1></center> */}
        <center><Link to="/test" type="submit" className="quiz">Take the Test</Link></center>
      </div>
    </div>
  );
}

export default Dashboard;
