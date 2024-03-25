import Login from "./Login";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import DoctorLogin from "./DoctorLogin";
import DoctorSignup from "./DoctorSignup";
import Test from "./Test";
import DoctorDashboard from "./DoctorDashboard";
import DoctorEntry from "./DoctorEntry";
import Result from "./Result";
import UserHistory from "./UserHistory";
import Feedback from "./Feedback";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
