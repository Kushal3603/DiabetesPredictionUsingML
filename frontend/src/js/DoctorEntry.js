import React, { useState } from 'react';
import '../styles/DoctorEntry.css';
import axios from 'axios';
import logo from '../logo.png'
import { Link, useNavigate } from 'react-router-dom';


function DoctorEntry() {
  const [formData, setFormData] = useState({
    age: '',
    diabetesFamily: 1,
    physicalActivity: '',
    fastFoodFrequency: '',
    glucoseLevel: '',
    bloodPressure: '',
    bmi: '',
    isDiabetic: 1 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert 'yes' and 'no' values to numbers for specific fields
    const numericValue = value === 'yes' ? 1 : 0;

    // Update state based on field name
    setFormData(prevState => ({
      ...prevState,
      [name]: (name === 'diabetesFamily' || name === 'isDiabetic') ? numericValue : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data submitted successfully.")
    axios.post(`https://diabetespredictionusingml.onrender.com/doctorEntry`, formData)
      .then(result => {
        console.log(result);
        setFormData({
          age: '',
          diabetesFamily: '',
          physicalActivity: '',
          fastFoodFrequency: '',
          glucoseLevel: '',
          bloodPressure: '',
          bmi: '',
          isDiabetic: ''
        });
      })
      .catch(err => console.log(err));
  };

  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/')
  }
  

  return (
    <>
    <header>
      <Link to="/" className="logo"><img src={logo} alt='Logo' style={{height:'2em',marginLeft:'-60px'}}/><h2 style={{marginTop:'-50px'}}> GlucoWise</h2></Link>
      <nav className="navigation">
        <Link to="/doctorDashboard">Home</Link>
        <Link to="/doctorFeedback">Feedback</Link>
        <Link to="/doctorAbout">About</Link>
        <button onClick={handleClick} className="loginbtn" >Logout</button>
      </nav>
    </header>
    <div className='container1' style={{color:'#fff',marginTop:'282px'}}>
      <div className='heading'>
        <h1>Entry of Valid Patient data</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='left'>
          <div className='form1'>
            Patient's Age: <input type='number' name='age' required value={formData.age} onChange={handleChange} min={0} max={200} />
          </div>
          <div>
            Diabetes in Family:
            <select name='diabetesFamily' required value={formData.diabetesFamily === 1 ? 'yes' : 'no'} onChange={handleChange}>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div>
            Duration of Physical Activity (per week):
            <input type='number' name='physicalActivity' required value={formData.physicalActivity} onChange={handleChange} min={0}/>
          </div>
          <div>
            Frequency of eating fast-food (per week):
            <select name='fastFoodFrequency' required value={formData.fastFoodFrequency} onChange={handleChange}>
              <option value='0'>Zero</option>
              <option value='1'>Once</option>
              <option value='2'>More than once</option>
            </select>
          </div>
        </div>
        <div className='right'>
          <div>
            Glucose level (in mg/dL):
            <input type='number' name='glucoseLevel' required value={formData.glucoseLevel} onChange={handleChange} min={0} max={300} />
          </div>
          <div>
            Blood Pressure Level:
            <input type='number' name='bloodPressure' required value={formData.bloodPressure} onChange={handleChange} min={0} max={200} />
          </div>
          <div>
            BMI value: <input type="number" name='bmi' required value={formData.bmi} onChange={handleChange} min={0} step={0.5} max={100} />
          </div>
          <div>
            Is the Patient diabetic?
            <select name='isDiabetic' required value={formData.isDiabetic === 1 ? 'yes' : 'no'} onChange={handleChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button type='submit' className='submit'>Submit Data</button>
          <button type='reset' className='reset'>Reset</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default DoctorEntry;
