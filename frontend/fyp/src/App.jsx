import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/loginPage'
import Symptoms from './pages/doctor/symptoms'
import Home from './Home'
import DashboardNav from './components/ui/dashboard-nav'
import BloodTestForm from './pages/doctor/bloodtest'

export default function App() {
  return (
    <div className='flex h-screen bg-gray-50'>
    <DashboardNav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login/" element={<LoginPage/>} />
      <Route path="/symptoms/" element={<Symptoms/>} />
      <Route path="/bloodtest/" element = {<BloodTestForm/>} />
    </Routes>
    </div>
  )
}
