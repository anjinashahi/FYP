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


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}
  createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
    <BrowserRouter>
      {/* <RouterProvider router={router} /> */} 
    <App/>
    </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
)
