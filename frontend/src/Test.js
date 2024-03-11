
import React, { useState, useEffect } from "react";
import './Test.css'
import { Questions } from "./Questions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function predictWithMLModel(heredity, physicalActivity, junk, glucose, bp, bmi, age) {
  console.log(heredity, physicalActivity, junk, glucose, bp, bmi, age);
  return fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ heredity, physicalActivity, junk, glucose, bp, bmi, age })
  })
  .then(response => response.json())
  .then(predictions => {
      console.log('Predictions: ', predictions,'%');
      return predictions;
  })
  .catch(error => {
      console.error('Error:', error);
      return null;
  });
}

function Test() {

  const location=useLocation();
  const dropdownStyles = {
    position: 'relative',
  };
  
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(Questions[index]);
  const [heredity, setHeredity] = useState(null);
  const [age, setAge] = useState(0);
  const [physicalActivity, setPhysicalActivity] = useState(0);
  const [junk, setJunk] = useState(0);
  const [bp, setBp] = useState(0);
  const [glucose, setGlucose] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [result, setResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [predictions, setPredictions] = useState(null); 

  useEffect(() => {
    if (heredity !== null && physicalActivity !== null && junk !== null && glucose !== null && bp !== null && bmi !== null && age !== null) {
      const fetchData = async () => {
        const predictions = await predictWithMLModel(heredity, physicalActivity, junk, glucose, bp, bmi, age);
        setPredictions(predictions);
        setLoading(false); 
      };
      fetchData();
    }
  }, [heredity, physicalActivity, junk, glucose, bp, bmi, age, predictions]);

  useEffect(() => {
    setQuestion(Questions[index]);
    setIsAnswered(false);
    setSelectedAnswer(null);
  }, [index]);

  const checkAns = (ans) => {
    setSelectedAnswer(ans);
    setIsAnswered(true);

    switch (index) {
      case 1:
        setHeredity(ans === 1 ? 1 : 0);
        break;
      case 3:
        switch (ans) {
          case 1:
            setJunk(0);
            break;
          case 2:
            setJunk(1);
            break;
          case 3:
            setJunk(2);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  const handleAgeChange = (e) => {
    setAge(parseFloat(e.target.value));
    setIsAnswered(true);
  };

  const handleGlucoseChange = (e) => {
    setGlucose(parseFloat(e.target.value));
    setIsAnswered(true);
  };


  const handlePhysicalActivity = (e) => {
    setPhysicalActivity(parseInt(e.target.value));
    setIsAnswered(true);
  };


  const handleBp = (e) => {
    setBp(parseInt(e.target.value));
    setIsAnswered(true);
  };

  const handleBmiChange = (e) => {
    setBmi((e.target.value));
    setIsAnswered(true);
  }

  const reset = () => {
    setResult(false)
    setIndex(0);
    setSelectedAnswer(null);
    setAge(0);
    setBmi(0);
    setGlucose(0);
    setBp(false);
    setHeredity(false);
    setJunk(false);
    setPhysicalActivity(0);
    setResult(false);
    setPredictions(null);
  };

  const next = () => {
    if (index === Questions.length - 1) {
      setResult(true);
      return;
    }
    setIndex(prevIndex => prevIndex + 1);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }

  const handleSeeResult = async() => {
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    
    

    
    
    setLoading(true);
    const predictions =  await predictWithMLModel(heredity, physicalActivity, junk, glucose, bp, bmi, age);
    const data = { email, heredity, physicalActivity, junk, glucose, bp, bmi, age, predictions};
    console.log(data);
    axios.post(`http://localhost:3001/test`, data)
    .then("Data submitted successfully")
    .catch(e=>console.log(e))
    setPredictions(predictions); 
    navigate('/result', { state: { predictions,bmi,junk,loading } });
  }
  
  return (
    <>
      <header>

        <Link to="/" className="logo"><h2>GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="#">News</Link>
          <Link to="#">Feedback</Link>
          <Link to="#">About</Link>
          <button onClick={handleClick} className="loginbtn">Logout</button>
        </nav>
      </header>
      <div className="container">
        <h1>Diabetes Prediction Test</h1>
        <hr />
        {result ? (
          <>
            <h2>Test is submitted successfully</h2>
            <button className="reset" onClick={reset}>Reset</button>
            <button className="result" onClick={handleSeeResult} >See Result</button>
          </>
        ) : (
          <>
            <h2>{index + 1}. {question.question}</h2>
            {(index === 0) && (
              <>
                <select
                  className="dropdown"
                  style={dropdownStyles}
                  value={age}
                  onChange={handleAgeChange}
                >
                  {[...Array(201).keys()].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                <p>Age: {age} years</p>
              </>
            )}

            {(index === 4) && (
              <>
                <input
                  className="slider"
                  type="range"
                  min={0}
                  max={300}
                  value={glucose}
                  onChange={handleGlucoseChange}
                />
                <p>Value: {glucose} mg/dL</p>
              </>
            )}
            {(index === 6) && (
              <>
                <input
                  className="slider"
                  type="range"
                  min={0}
                  step={0.1}
                  max={100}
                  value={bmi}
                  onChange={handleBmiChange}
                />
                <p>Value: {bmi} kg/m2</p>
              </>
            )}
            {(index === 2) && (
              <>
                <input
                className="inputField"
                  min={0}
                  type="number"
                  value={physicalActivity}
                  onChange={handlePhysicalActivity}
                />
                <p>Exercise Time: {physicalActivity} minutes</p>
              </>
            )}
            {(index === 5) && (
              <>
                <input
                  className="slider"
                  type="range"
                  min={0}
                  max={200}
                  value={bp}
                  onChange={handleBp}
                />
                <p>Value: {bp} mmHg</p>
              </>
            )}

            {index === 1 && (
              <ul>
                {Object.keys(question).filter(key => key.startsWith("option")).map((option, i) => (
                  <li
                    key={option}
                    className={selectedAnswer === i + 1 ? "selected" : ""}
                    onClick={() => checkAns(i + 1)}
                  >
                    {question[option]}
                  </li>
                ))}
              </ul>
            )}

            {index === 3 && (
              <ul>
                {Object.keys(question).filter(key => key.startsWith("option")).map((option, i) => (
                  <li
                    key={option}
                    className={selectedAnswer === i + 1 ? "selected" : ""}
                    onClick={() => checkAns(i + 1)}
                  >
                    {question[option]}
                  </li>
                ))}
              </ul>
            )}

            {index === 5 && (
              <ul>
                {Object.keys(question).filter(key => key.startsWith("option")).map((option, i) => (
                  <li
                    key={option}
                    className={selectedAnswer === i + 1 ? "selected" : ""}
                    onClick={() => checkAns(i + 1)}
                  >
                    {question[option]}
                  </li>
                ))}
              </ul>
            )}

            {index !== 0 && (
              <button className="prev" onClick={() => setIndex(prevIndex => prevIndex - 1)}>Previous</button>
            )}
            <button className="next" onClick={next} disabled={!isAnswered}>Next</button>
            <div className="index">{index + 1} of {Questions.length} questions</div>
          </>
        )}
      </div>
    </>
  );
}

export default Test;