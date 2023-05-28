import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import AdminDashboardPage from './pages/AdminDashboardPage';
import DocterDashboardPage from './pages/DocterDashboardPage';
import PatientDashboardPage from './pages/PatientDashboardPage';
import StaffDashboard from './pages/StaffDashboard';
import LoginPage from './pages/auth/LoginPage'
import Payments from './pages/profile/Payments';
import Paymentedit from './pages/profile/Paymentedit';
import Report from './pages/profile/Report';
import RoomAllocate from './pages/profile/RoomAllocate';
import AdminAdd from './pages/profile/AdminAdd';
import Roomadd from './pages/profile/Roomadd';
import Doctoredit from './pages/profile/Doctoredit';
import AdminEdit from './pages/profile/AdminEdit';
import Staffedit from './pages/profile/Staffedit';
import Register from './pages/auth/Register';
import PatientDetails from './pages/PatientDetails'
import StaffDetails from './pages/StaffDetails'
import DocterDetails from './pages/DocterDetails'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Appointment from './pages/profile/appointment';
import Appointments from './pages/showappointment';
import Viewdocter from './pages/viewdocter';
import Payments1 from './pages/Payments1';
import Histroy from './pages/profile/histroy';
import Showreport from './pages/profile/showreport';
import Staffadddoctor from './pages/Staffadddoctor';
import DoctorAdd from './pages/profile/DoctorAdd';
import Staffadd from './pages/profile/StaffAdd';
import Staffaddpatient from './pages/Staffaddpatient';
import Roomedit from './pages/profile/Roomedit';
import { useSelector } from "react-redux";
import Appointmentadd from './pages/profile/Appointmentadd';
import AppointmentEdit from './pages/profile/AppointmentEdit';
import PatientDoctor from './pages/profile/PatientDoctor';
import HomePage from './components/Home';
function App() {
    const role = useSelector((state) => state.role);
  return (  
    
        <Router>
            
            <Routes>
            {role === "admin" ? (
  <>
    <Route exact path='/admindashboard' element={<AdminDashboardPage />} />
    <Route exact path='/docterdetails' element={<DocterDetails />} />
    <Route exact path='/patientdetails' element={<PatientDetails />} />
    <Route exact path='/staffdetails' element={<StaffDetails />} />
    <Route exact path='/adminadd' element={<AdminAdd />} />
    <Route exact path='/adminedit' element={<AdminEdit />} />
  </>
) : role === "staff" ? (
  <>
    <Route exact path='/staffdashboard' element={<StaffDashboard />} />
    <Route exact path='/staffadddoctor' element={<Staffadddoctor />} />
    <Route exact path='/doctoradd' element={<DoctorAdd />} />
    <Route exact path='/doctoredit' element={<Doctoredit />} />
    <Route exact path='/staffaddpatient' element={<Staffaddpatient />} />
    <Route exact path='/staffadd' element={<Staffadd />} />
    <Route exact path='/staffedit' element={<Staffedit />} />
    <Route exact path='/payments' element={<Payments />} />
    <Route exact path='/paymentedit' element={<Paymentedit />} />
    <Route exact path='/roomallocate' element={<RoomAllocate />} />
    <Route exact path='/roomadd' element={<Roomadd />} />
    <Route exact path='/roomedit' element={<Roomedit />} />
    <Route exact path='/report' element={<Report />} />
    <Route exact path='/appointment' element={<Appointments />} />
    <Route exact path='/appointmentadd' element={<Appointmentadd />} />
    <Route exact path='/appointmentedit' element={<AppointmentEdit />} />
  </>
) : role === "patient" ? (
  <>
    <Route exact path='/patientdashboard' element={<PatientDashboardPage />} />
    <Route exact path='/payments1' element={<Payments1 />} />
    <Route exact path='/histroy' element={<Histroy />} />
    <Route exact path='/showreport' element={<Showreport />} />
    <Route exact path='/appointments' element={<Appointment />} />
    <Route exact path='/patientdoctor' element={<PatientDoctor />} />
  </>
) : role === "doctor" ? (
  <>
    <Route exact path='/docterdashboard' element={<DocterDashboardPage />} />
  </>
) : (
  <Route path="*" element={<Navigate to ="/" />} />
)}

        
<Route exact path='/' element={<HomePage/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/register' element={<Register/>} />
            </Routes>  
        </Router>
       
    )
}

export default App;
