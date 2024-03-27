// import React from 'react'
// import './Login.css'
// import { Link,useNavigate } from 'react-router-dom'
// import Footer from './Footer'
// function DoctorDashboard() {

//   const navigate=useNavigate()
//   const handleClick=()=>{
//     navigate('/')
//   }
//   return (
//     <>
//     <header>
//     <Link to="/" className="logo"><h2>GlucoWise</h2></Link>
//         <nav className="navigation">
//           <Link to="/">Home</Link>
//           <Link to="/feedback">Feedback</Link>
//           <Link to="#">About</Link>
//           <button onClick={handleClick} className="loginbtn">Logout</button>
          
          
//         </nav>
        
//       </header>
//       <div style={{fontSize:'50px',fontWeight:'1000', marginBottom:'33px',color:'silver'}}>Let's Contribute for a Change !</div>
//       <div>
        
//           <Link to="/doctorEntry" className='dataEntry'>Enter Diabetes Data</Link>
//       </div>
      
//     </>
//   )
// }

// export default DoctorDashboard

// import React, { useEffect, useState } from 'react';
// import './Login.css';
// import { Link, useNavigate } from 'react-router-dom';

// function DoctorDashboard() {
//   const navigate = useNavigate();
//   const [showFooter, setShowFooter] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setShowFooter(true);
//       } else {
//         setShowFooter(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleClick = () => {
//     navigate('/');
//   };

//   return (
//     <div className="page-container">
//       <header>
//         <Link to="/" className="logo">
//           <h2>GlucoWise</h2>
//         </Link>
//         <nav className="navigation">
//           <Link to="/">Home</Link>
//           <Link to="/feedback">Feedback</Link>
//           <Link to="#">About</Link>
//           <button onClick={handleClick} className="loginbtn">
//             Logout
//           </button>
//         </nav>
//       </header>
//       <div className="content">
//         <div style={{ fontSize: '50px', fontWeight: '1000', marginBottom: '33px', color: 'silver' }}>
//           Let's Contribute for a Change !
//         </div>
//         <div>
//           <Link to="/doctorEntry" className="dataEntry">
//             Enter Diabetes Data
//           </Link>
//         </div>
//         {/* Add more content here if needed */}
//       </div>

//       {/* Footer Section */}
//       <footer className={showFooter ? "footer footer-show" : "footer"}>
//         <div className="footer-container">
//           <div className="footer-section">
//             <h3>About Us</h3>
//             <p>We are dedicated to helping diabetes patients.</p>
//           </div>
//           <div className="footer-section">
//             <h3>Quick Links</h3>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/feedback">Feedback</Link></li>
//               <li><Link to="#">About</Link></li>
//             </ul>
//           </div>
//           <div className="footer-section">
//             <h3>Contact Us</h3>
//             <p>Email: contact@glucowise.com</p>
//             <p>Phone: 123-456-7890</p>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>&copy; 2024 GlucoWise. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default DoctorDashboard;

import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'

function DoctorDashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <>
      <header>
        <Link to="/" className="logo"><h2>GlucoWise</h2></Link>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="#">About</Link>
          <button onClick={handleClick} className="loginbtn">Logout</button>
        </nav>
      </header>
      <div className="content" style={{ paddingTop: '100px', paddingBottom: '200px' }}>
        <div style={{ fontSize: '50px', fontWeight: '1000', marginBottom: '33px', color: 'silver' }}>Let's Contribute for a Change !</div>
        <div>
          <Link to="/doctorEntry" className='dataEntry'>Enter Diabetes Data</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DoctorDashboard
