import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/loginPage'
import Symptoms from './pages/doctor/symptoms'
import Home from './Home'
import DashboardNav from './components/ui/dashboard-nav'
import BloodTestForm from './pages/doctor/bloodtest'
import PatientUploadSearch from './pages/doctor/page-upload-search'
import Doctors from './pages/doctor/doctors'
import Dashboard from './pages/admin/Dashboard'
import AllAppointments from './pages/admin/AllAppointments'
import DoctorList from './pages/admin/DoctorList'
import AddDoctor from './pages/admin/AddDoctor'
// import DoctorProfile from './pages/patient/appointments'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Appointment from './pages/patient/appointment'
import MyProfile from './pages/patient/MyProfile'
import MyAppointments from './pages/patient/MyAppointments'
import { useUser } from '@clerk/clerk-react'
import DoctorAppointments from './pages/doctor/DoctorAppointments'
import DoctorProfile from './pages/doctor/DoctorProfile'
import AddUser from './pages/admin/AddUser'
import path from 'path'
// import DashboardPage from './pages/doctor/dashboard'

export default function App() {
  const { isLoaded, user } = useUser()

  if (!isLoaded) {
    // Handle loading state
    return null
  }

  if (!user) return <LoginPage/>

  const navigationRoutes = [
    {path: "/", element: <Home/>},
    {path : "/login/", element: <LoginPage/>},
  ]
  const adminRoutes = [
    {path: "/", element: <Home/>},
    {path : "/login/", element: <LoginPage/>},
    {path : "/symptoms/", element: <Symptoms/>},
    {path : "/bloodtest/", element: <BloodTestForm/>},
    {path : "/ultrasound/", element: <PatientUploadSearch/>},
    {path : "/doctors/", element: <Doctors/>},
    {path : "/admin-dashboard/", element: <Dashboard/>},
    {path : "/add-doctor/", element: <AddDoctor/>},
    {path : "/add-user/", element: <AddUser/>},
    {path : "/doctor-list/", element: <DoctorList/>},
    {path : "/my-profile/", element: <MyProfile/>},
    {path : "/my-appointments/", element: <MyAppointments/>},
    {path : "/appointment/:docID/", element: <Appointment/>},
    {path : "/admin-allappointments/", element: <AllAppointments/>},
    {path : "/doctor-appointments/", element: <DoctorAppointments/>},
    {path : "/doctor-profile/", element: <DoctorProfile/>},
    
  ]
  const doctorRoutes = [
    {path: "/", element: <Home/>},
    {path : "/login/", element: <LoginPage/>},
    {path : "/symptoms/", element: <Symptoms/>},
    {path : "/bloodtest/", element: <BloodTestForm/>},
    {path : "/ultrasound/", element: <PatientUploadSearch/>},
    {path : "/doctors/", element: <Doctors/>},
    {path : "/admin-dashboard/", element: <Dashboard/>},
    {path : "/add-doctor/", element: <AddDoctor/>},
    {path : "/add-user/", element: <AddUser/>},
    {path : "/doctor-list/", element: <DoctorList/>},
    {path : "/my-profile/", element: <MyProfile/>},
    {path : "/my-appointments/", element: <MyAppointments/>},
    {path : "/appointment/:docID/", element: <Appointment/>},
    {path : "/admin-allappointments/", element: <AllAppointments/>},
    {path : "/doctor-appointments/", element: <DoctorAppointments/>},
    {path : "/doctor-profile/", element: <DoctorProfile/>},
  ]
  const patientRoutes = [
    {path: "/", element: <Home/>},
    {path : "/login/", element: <LoginPage/>},
    {path : "/symptoms/", element: <Symptoms/>},
    {path : "/bloodtest/", element: <BloodTestForm/>},
    {path : "/ultrasound/", element: <PatientUploadSearch/>},
    {path : "/doctors/", element: <Doctors/>},
    {path : "/admin-dashboard/", element: <Dashboard/>},
    {path : "/add-doctor/", element: <AddDoctor/>},
    {path : "/add-user/", element: <AddUser/>},
    {path : "/doctor-list/", element: <DoctorList/>},
    {path : "/my-profile/", element: <MyProfile/>},
    {path : "/my-appointments/", element: <MyAppointments/>},
    {path : "/appointment/:docID/", element: <Appointment/>},
    {path : "/admin-allappointments/", element: <AllAppointments/>},
    {path : "/doctor-appointments/", element: <DoctorAppointments/>},
    {path : "/doctor-profile/", element: <DoctorProfile/>},
  ]
  console.log(user)
  const role = user.publicMetadata.role
  if(role==="ADMIN"){
    navigationRoutes.push(...adminRoutes)
  }else if(role==="DOCTOR"){
    navigationRoutes.push(...doctorRoutes)
  }else if(role==="PATIENT"){
    navigationRoutes.push(...patientRoutes)
  }else{
    navigationRoutes.push(...adminRoutes)
  }
  return (
    <div className='flex h-screen bg-gray-50'>
    <ToastContainer/>
    {user && <DashboardNav/> }
    {/* <DashboardNav/> */}
    <div className="flex-1 flex flex-col overflow-auto">
    <Routes>
      {navigationRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}

      {/* <Route path="/" element={<Home/>} />
      <Route path="/login/" element={<LoginPage/>} />
      <Route path="/symptoms/" element={<Symptoms/>} />
      <Route path="/bloodtest/" element = {<BloodTestForm/>} />
      <Route path = "/ultrasound/" element = {<PatientUploadSearch/>} />
      <Route path = "appointment/:docID" element = {<Appointment/>} />
      <Route path = "/doctors" element = {<Doctors/>} />
      <Route path = "/admin-dashboard" element = {<Dashboard/>} /> */}
      {/* <Route path = "/all-appointments" element = {<AllAppointments/>} /> */}
      {/* <Route path = "/add-doctor" element = {<AddDoctor/>} />
      <Route path = "/add-user" element ={<AddUser/>} />
      <Route path = "/doctor-list" element = {<DoctorList/>} />
      <Route path = "/my-profile" element = {<MyProfile/>} />
      <Route path = "/my-appointments" element = {<MyAppointments/>} /> */}
      {/* <Route path = "/appointment-booking" element = {<DoctorProfile/>} />//cn  */}
      {/* <Route path = "admin-allappointments" element = {<AllAppointments/>} />
      <Route path = "doctor-appointments" element = {<DoctorAppointments/>} />
      <Route path = "doctor-profile" element = {<DoctorProfile/>} /> */}
      {/* <Route path = "dashboard" element = {<DashboardPage/>} /> */}
    </Routes>
    </div>
    </div>
  )
}
