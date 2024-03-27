import React, { useState,useEffect } from "react";
import "./Feedback.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    // Fetch feedback data when the component mounts
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = () => {
    axios.get('http://localhost:3001/feedback')
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
    axios.post('http://localhost:3001/feedback',{feedback:feedback,name:feedbackName})
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
      <div style={{marginLeft:'-73px'}}>
    <div className="feedback-container" >
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
          <label htmlFor="feedbackTextarea" className="feedback-label">Your Feedback</label>
          <textarea
            className="form-control feedback-textarea"
            id="feedbackTextarea"
            rows="5"
            value={feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary feedback-submit-btn">
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
    </>
  );
}

export default Feedback;

// import React, { useState, useEffect } from "react";
// import "./Feedback.css";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// function Feedback() {
//   const [feedback, setFeedback] = useState("");
//   const [feedbackName, setFeedbackName] = useState("");
//   const [feedbacks, setFeedbacks] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch feedback data when the component mounts
//     fetchFeedbacks();
//   }, []);

//   const fetchFeedbacks = () => {
//     axios.get('http://localhost:3001/feedback')
//       .then(response => {
//         setFeedbacks(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching feedbacks:', error);
//       });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Feedback submitted:", feedback);
//     axios.post('http://localhost:3001/feedback', { feedback: feedback, name: feedbackName })
//       .then(() => {
//         console.log("Data submitted");
//         // After successful submission, fetch updated feedbacks
//         fetchFeedbacks();
//       })
//       .catch(error => {
//         console.error('Error submitting feedback:', error);
//       });
//     setFeedback("");
//     setFeedbackName("");
//   };

//   const handleChange = (event) => {
//     setFeedback(event.target.value);
//   };

//   const handleClick = () => {
//     navigate('/');
//   }

//   return (
//     <>
//       <header>
//         <Link to="/" className="logo"><h2>GlucoWise</h2></Link>
//         <nav className="navigation">
//           <Link to="/">Home</Link>
//           <Link to="/userHistory">User History</Link>
//           <Link to="/feedback">Feedback</Link>
//           <Link to="#">About</Link>
//           <button className="loginbtn" onClick={handleClick}>Logout</button>
//         </nav>
//       </header>
//       <div className="feedback-container" style={{ color: '#fff' }}>
//         <h1 className="feedback-title">Feedback</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="feedbackName" className="feedback-label">Your Name</label>
//             <textarea
//               style={{ marginBottom: '5px' }}
//               className="form-control feedback-textarea"
//               id="feedbackName"
//               rows="1"
//               value={feedbackName}
//               onChange={(event) => setFeedbackName(event.target.value)}
//               required
//             ></textarea>
//             <label htmlFor="feedbackTextarea" className="feedback-label">Your Feedback</label>
//             <textarea
//               className="form-control feedback-textarea"
//               id="feedbackTextarea"
//               rows="5"
//               value={feedback}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className="btn btn-primary feedback-submit-btn">
//             Submit Feedback
//           </button>
//         </form>
//       </div>
//       <div className="feedback-display-container" style={{ color: '#fff', marginLeft: '300px' }}>
//         <h1 className="feedback-title">Feedback</h1>
        
//         {feedbacks.map((feedbackItem, index) => (
//           <div className="feedback">
//           <React.Fragment key={index}>
//            <strong>{feedbackItem.Name}:<br/></strong> {feedbackItem.Feedback}
//             <br />
//           </React.Fragment>
//           </div>
//         ))}
        
//       </div>
//     </>
//   );
// }

// export default Feedback;



