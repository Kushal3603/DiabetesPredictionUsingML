
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './js/Login';
import DoctorLogin from './js/DoctorLogin';
import Signup from './js/Signup';
import Test from './js/Test';
import Result from './js/Result';
import DoctorAbout from './js/DoctorAbout'
import Dashboard from './js/Dashboard'
import Feedback from './js/Feedback'
import DoctorFeedback from './js/DoctorFeedback'
import About from './js/About'
import DoctorEntry from './js/DoctorEntry'
import DoctorDashboard from './js/DoctorDashboard'
import DoctorSignup from './js/DoctorSignup'
import UserHistory from './js/UserHistory'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
        <Route path='/doctorLogin' element={<DoctorLogin/>}></Route>
        <Route path="/doctorSignup" element={<DoctorSignup/>}></Route>
        <Route path="/doctorDashboard" element={<DoctorDashboard/>}></Route>
        <Route path="/doctorEntry" element={<DoctorEntry/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
        <Route path="/userHistory" element={<UserHistory/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/doctorFeedback" element={<DoctorFeedback/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/doctorAbout" element={<DoctorAbout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
