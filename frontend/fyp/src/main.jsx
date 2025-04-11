import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'
// import router from "./routes/router"
import { BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom"
import LoginPage from './pages/login/loginPage.jsx'
import Symptoms from './pages/doctor/symptoms.jsx'
import SymptomsForm from './pages/doctor/symptoms.jsx'
import AdminContextProvider from './context/AdminContext.jsx'
import AppContextProvider, { AppContext } from './context/AppContext.jsx'
import DoctorContextProvider from './context/DoctorContext.jsx'
import axios from 'axios'

axios.defaults.withCredentials = true

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}
  createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
    <BrowserRouter>
    <AdminContextProvider>
      <AppContextProvider>
      <DoctorContextProvider>
      {/* <RouterProvider router={router} /> */} 
      <App/>
      </DoctorContextProvider>
      </AppContextProvider>
    </AdminContextProvider>
    </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
)
