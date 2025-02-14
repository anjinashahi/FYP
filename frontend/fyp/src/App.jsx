import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/loginPage'
import Symptoms from './pages/doctor/symptoms'
import Home from './Home'
import DashboardNav from './components/ui/dashboard-nav'
import BloodTestForm from './pages/doctor/bloodtest'
import PatientUploadSearch from './pages/doctor/page-upload-search'
import Appointments from './pages/doctor/Appointments'
import Doctors from './pages/doctor/doctors'

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
      <Route path = "appomtment/:docID" element = {<Appointments/>} />
      <Route path = "doctors" element = {<Doctors/>} />
    </Routes>
    </div>
    </div>
  )
}
