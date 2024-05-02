import axios from 'axios';
import './Login.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png'

const UserHistory = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  useEffect(() => {
    if (email) {
      fetchData();
    }
  }, [email]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://diabetespredictionusingml.onrender.com/userHistory?Email=${email}`);
      setData(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleClick = () => {
    navigate('/');
    localStorage.removeItem('userEmail');
  };

  
  if (!email) {
    return (
      <div style={{color:'#fff', textDecoration:'none'}}>
        <p>Please log in to view user history.</p>
        <p><Link style={{marginLeft:'100px'}} to="/login">Login</Link></p>
      </div>
    );
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
          <button onClick={handleClick} className="loginbtn">Logout</button>
        </nav>
      </header>
      <div className='historyTitle'>User History</div>
      <div className="user-history-container">
        <table className="user-history-table">
          <thead>
            <tr>
              <th>Date of Test</th>
              <th>Diabetes in Heredity</th>
              <th>Duration of Physical Activity</th>
              <th>Frequency of Fast Food</th>
              <th>Glucose level</th>
              <th>Blood Pressure level</th>
              <th>BMI</th>
              <th>Age</th>
              <th>Prediction</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.TestDate}</td>
                <td>{item.Heredity === 1 ? 'Yes' : 'No'}</td>
                <td>{item.PhysicalActivity} minutes</td>
                <td>{item.FastFood} </td>
                <td>{item.Glucose} mg/dL</td>
                <td>{item.BloodPressure} mmHg</td>
                <td>{item.BMI} kg/m2</td>
                <td>{item.Age} years</td>
                <td>{item.Outcome} %</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserHistory;
