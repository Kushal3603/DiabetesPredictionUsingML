import React, { useState, useEffect } from 'react';
import './Result.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Loader() {
  return <div className="loader">Loading...</div>;
}

function Result() {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const handleClick = () => {
        navigate('/');
    };

    useEffect(() => {
        // Simulate a delay to show the loader for demonstration purposes
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay as needed

        return () => clearTimeout(timeout);
    }, []);

    const { predictions, bmi, junk } = location.state || {};
    console.log("Predictions in Result:", predictions);

    return (
        <>
            <header>
                <h2 className="logo">GlucoWise</h2>
                <nav className="navigation">
                    <Link to="/doctorDashboard">Home</Link>
                    <Link to="#">News</Link>
                    <Link to="#">Feedback</Link>
                    <Link to="#">About</Link>
                    <button onClick={handleClick} className="loginbtn">Logout</button>
                </nav>
            </header>
            <main className="resultContainer">
                {loading ? (
                    <Loader />
                ) : (
                    <ul>
                        {predictions && (
                            <>
                                <li>
                                    <p>Probability of Diabetes Type 2 in the future is <b>{predictions}%.</b></p>
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
                )}
                <center><Link className="back" to="/">Go Back</Link></center><br/><br/>
                <div className="end"><center><p><i><b>Estimated 1 in 3 will develop this disease.</b></i></p></center></div>
            </main>
        </>
    );
}

export default Result;
