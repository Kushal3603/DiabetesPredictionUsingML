import React, { useState, useEffect } from "react";
import "./Feedback.css";
import axios from "axios";
import logo from './logo.png'
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    setIsLoggedIn(!!userEmail); // Set isLoggedIn to true if userEmail exists
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = () => {
    axios.get('https://diabetespredictionusingml.onrender.com/feedback')
      .then(response => {
        setFeedbacks(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedbacks:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback submitted:", feedback);
    axios.post('https://diabetespredictionusingml.onrender.com/feedback',{feedback:feedback,name:feedbackName})
      .then(() => {
        console.log("Data submitted");
        // Fetch updated feedbacks after successful submission
        fetchFeedbacks();
      })
      .catch(e=>console.log(e))
    setFeedback("");
    setFeedbackName("");
  };
  

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleClick=()=>{
    if (isLoggedIn) {
      localStorage.removeItem('userEmail');
      setIsLoggedIn(false);
      navigate('/');
    } else {
      navigate('/');
    }
  }

  return (
    <>
    <header>
      <Link to="/" className="logo"><img src={logo} alt='Logo' style={{height:'2em',marginLeft:'-60px'}}/><h2 style={{marginTop:'-50px'}}> GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/userHistory">User History</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="#">About</Link>
          <button className="loginbtn" onClick={handleClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </nav>
      </header>
      <div style={{marginLeft:'-73px'}}>
    <div className="feedback-container" >
      <h1 className="feedback-title">Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="feedbackName" className="feedback-label">Your Name</label>
        <textarea
        style={{marginBottom:'5px',width:'307px'}}
            className="form-control feedback-textarea"
            id="feedbackName"
            rows="1"
            value={feedbackName}
            onChange={(event)=>setFeedbackName(event.target.value)}
            required
          ></textarea>
          <label htmlFor="feedbackTextarea" className="feedback-label">Your Feedback</label>
          <textarea
          style={{width:'307px'}}
            className="form-control feedback-textarea"
            id="feedbackTextarea"
            rows="5"
            value={feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button style={{width:'307px'}} type="submit" className="btn btn-primary feedback-submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
    <div className="feedback-display-container">
         <center><h1 className="feedback-title">Feedbacks from Users</h1></center>
        
        {feedbacks.map((feedbackItem, index) => (
          <div className="feedback">
          <React.Fragment key={index}>
           <div style={{fontSize:'larger'}}><i class="fa fa-user-circle" aria-hidden="true"></i><strong> {feedbackItem.Name}<br/></strong></div> {feedbackItem.Feedback}
            <br />
          </React.Fragment>
          </div>
        ))}
        
      </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default Feedback;
