
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/loginPage'
import Symptoms from './pages/doctor/symptoms'
import Home from './Home'
import DashboardNav from './components/ui/dashboard-nav'
import BloodTestForm from './pages/doctor/bloodtest'
import PatientUploadSearch from './pages/doctor/page-upload-search'
import Appointments from './pages/doctor/Appointments'
import Doctors from './pages/doctor/doctors'
import Dashboard from './pages/admin/Dashboard'
import AllAppointments from './pages/admin/AllAppointments'
import DoctorList from './pages/admin/DoctorList'
import AddDoctor from './pages/admin/AddDoctor'
// import DoctorProfile from './pages/patient/appointments'
import MyAppointments from './pages/patient/myAppointment'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Appointment from './pages/patient/appointment'

export default function App() {
  return (
    <div className='flex h-screen bg-gray-50'>
    <ToastContainer/>
    <DashboardNav/>
    <div className="flex-1 flex flex-col overflow-auto">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login/" element={<LoginPage/>} />
      <Route path="/symptoms/" element={<Symptoms/>} />
      <Route path="/bloodtest/" element = {<BloodTestForm/>} />
      <Route path = "/ultrasound/" element = {<PatientUploadSearch/>} />
      <Route path = "appointment/:docID" element = {<Appointment/>} />
      <Route path = "/doctors" element = {<Doctors/>} />
      <Route path = "/admin-dashboard" element = {<Dashboard/>} />
      {/* <Route path = "/all-appointments" element = {<AllAppointments/>} /> */}
      <Route path = "/add-doctor" element = {<AddDoctor/>} />
      <Route path = "/doctor-list" element = {<DoctorList/>} />
      {/* <Route path = "/appointment-booking" element = {<DoctorProfile/>} />//cn  */}
      {/* <Route path = "/my-appointments" element = {<MyAppointments/>} /> //shadcn */}
      {/* <Route path = "admin-allappointments" element = {<AllAppointments/>} /> //shadcn */}
    </Routes>
    </div>
    </div>
  )
}
