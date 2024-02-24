import React from 'react'
import './Result.css'
import { Link,useNavigate } from 'react-router-dom'

function Result(props) {
  const vari1 = props.data;
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/')
    }


  return (
  <>
   <header>
        <h2 className="logo">GlucoWise</h2>
        <nav className="navigation">
          <Link to="/doctorDashboard">Home</Link>
          <Link to="#">News</Link>
          <Link to="#">Feedback</Link>
          <Link to="#">About</Link>
          <button onClick={handleClick} className="loginbtn" >Logout</button>
        </nav>
        </header>
    <div className='resultContainer'>
        {console.log(vari1)}
        <center><h3>Result: {vari1}/10</h3></center>
        <ul>
          {/* {predictionResult>5?<li><p>The estimated risk is considered to be high.</p></li>:<></>} */}
          
        {/* <li><p>The estimated risk is considered to be high.</p></li>
        <li><p>Estimated 1 in 3 will develop disease</p></li>
       <li> <p>    
        Early stages of type 2 diabetes seldom cause any symptoms. You would be well advised to seriously consider your physical activity and eating habits and pay attention to your weight, to prevent yourself from developing diabetes. Please contact a public-health nurse or your own doctor for further guidance and tests.
        </p></li> */}
    </ul>
    <center><Link className='back' to='/'>Go Back</Link></center>
    </div>
    </>
  )
}

export default Result