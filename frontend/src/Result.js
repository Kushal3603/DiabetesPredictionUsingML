import React, { useState, useEffect } from 'react';
import './Result.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loader from './Loader';



function Result() {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const handleClick = () => {
        navigate('/');
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const { predictions, bmi, junk } = location.state || {};
    console.log("Predictions in Result:", predictions);

    return (
        <>
            <header>
            <Link to="/" className="logo"><h2>GlucoWise</h2></Link>
                <nav className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/userHistory">User History</Link>
                    <Link to="/feedback">Feedback</Link>
                    <Link to="#">About</Link>
                    <button onClick={handleClick} className="loginbtn">Logout</button>
                </nav>
            </header>
            
                {loading ? (
                    <Loader />
                ) : (
                <main className="resultContainer">
                    <ul>
                        {predictions && (
                            <>
                                <li>
                                    <p>Probability of Diabetes Type 2 in future is <b>{predictions}%.</b></p>
                                </li>
                                {predictions > 50 && (
                                    <>
                                        <li>
                                            <p>The estimated risk is considered to be high.</p>
                                        </li>
                                        {(bmi && bmi > 30) && (
                                            <li>
                                                <p>Early stages of type 2 diabetes seldom cause any symptoms. You would be well advised to seriously consider your physical activity and eating habits and pay attention to your weight, to prevent yourself from developing diabetes. Please contact a public-health nurse or your own doctor for further guidance and tests.</p>
                                            </li>
                                        )}
                                        {(bmi && bmi < 18) && (
                                            <li>
                                                <p>Your BMI is less than 18. It's important to maintain a healthy weight. Please consider consulting with a healthcare professional for personalized advice.</p>
                                            </li>
                                        )}
                                    </>
                                )}
                                {junk && junk > 1 && (
                                    <li>
                                        <p>It's advisable to avoid eating junk food.</p>
                                    </li>
                                )}
                            </>
                        )}
                    </ul>
                    <center><Link className="back" to="/">Go Back</Link></center><br/>
                <div className="end"><center><p><i><b>Estimated 1 in 3 will develop this disease.</b></i></p></center></div>
                </main>
                )}
                
           
        </>
    );
}

export default Result;
