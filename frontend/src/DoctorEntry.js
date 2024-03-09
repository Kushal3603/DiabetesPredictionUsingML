import React, { useState } from 'react';
import './DoctorEntry.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function DoctorEntry() {
  const [formData, setFormData] = useState({
    age: '',
    diabetesFamily: 'yes',
    physicalActivity: '',
    fastFoodFrequency: '',
    glucoseLevel: '',
    bloodPressure: '',
    bmi: '',
    isDiabetic: 'yes' 
  });

  console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Name:", name);
  console.log("Value:", value);
    if (name === 'diabetesFamily') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value === 'yes' ? 1 : 0
      }));
    } else if (name === 'fastFoodFrequency') {
      let frequencyValue;
      switch (value) {
        case '0':
          frequencyValue = 0;
          break;
        case '1':
          frequencyValue = 1;
          break;
        case '2':
          frequencyValue = 2;
          break;
        default:
          frequencyValue = '';
          break;
      }
      setFormData(prevState => ({
        ...prevState,
        [name]: frequencyValue
      }));
    } else if (name === 'isDiabetic') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value === 'yes' ? 1 : 0
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data submitted successfully.")
    axios.post(`http://localhost:3001/doctorEntry`, formData)
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
    <Link to="/" className="logo"><h2>GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/doctorDashboard">Home</Link>
          <Link to="#">News</Link>
          <Link to="#">Feedback</Link>
          <Link to="#">About</Link>
          <button onClick={handleClick} className="loginbtn" >Logout</button>
        </nav>
        
      </header>
    <div className='container1'>
      <div className='heading'>
        <h1>Entry of Valid Patient data</h1>
      </div>
      <form onSubmit={handleSubmit}>
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
        
      </form>
    </div>
    </>
  );
}

export default DoctorEntry;
