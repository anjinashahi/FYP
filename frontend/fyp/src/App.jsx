
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
import DoctorProfile from './pages/patient/appointment'
import MyAppointments from './pages/patient/myAppointment'

export default function App() {
  return (
    <div className='flex h-screen bg-gray-50'>
    <DashboardNav/>
    <div className="flex-1 flex flex-col overflow-auto">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login/" element={<LoginPage/>} />
      <Route path="/symptoms/" element={<Symptoms/>} />
      <Route path="/bloodtest/" element = {<BloodTestForm/>} />
      <Route path = "/ultrasound/" element = {<PatientUploadSearch/>} />
      <Route path = "appointment/:docID" element = {<Appointments/>} />
      <Route path = "/doctors" element = {<Doctors/>} />
      <Route path = "/admin-dashboard" element = {<Dashboard/>} />
      {/* <Route path = "/all-appointments" element = {<AllAppointments/>} /> */}
      <Route path = "/add-doctor" element = {<AddDoctor/>} />
      <Route path = "/doctor-list" element = {<DoctorList/>} />
      <Route path = "/appointment-booking" element = {<DoctorProfile/>} />
      <Route path = "/my-appointments" element = {<MyAppointments/>} />
      <Route path = "admin-allappointments" element = {<AllAppointments/>} />
    </Routes>
    </div>
    </div>
  )
}
