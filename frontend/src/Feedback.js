import React, { useState } from "react";
import "./Feedback.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [feedbackName, setFeedbackName] = useState("");
  const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback submitted:", feedback);
    axios.post('http://localhost:3001/feedback',{feedback:feedback,name:feedbackName})
    .then("Data submitted")
    .catch(e=>console.log(e))
    setFeedback("");
    setFeedbackName("")
  };

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleClick=()=>{
    navigate('/')
  }

  return (
    <>
    <header>
      <Link to="/" className="logo"><h2>GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/userHistory">User History</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="#">About</Link>
          <button className="loginbtn" onClick={handleClick}>Logout</button>
        </nav>
      </header>
    <div className="feedback-container" style={{color:'#fff'}}>
      <h1 className="feedback-title">Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="feedbackName" className="feedback-label">Your Name</label>
        <textarea
        style={{marginBottom:'5px'}}
            className="form-control feedback-textarea"
            id="feedbackName"
            rows="1"
            value={feedbackName}
            onChange={(event)=>setFeedbackName(event.target.value)}
            required
          ></textarea>
          <label htmlFor="feedbackTextarea" className="fe