import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'
// import router from "./routes/router"
import { BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom"
import LoginPage from './pages/login/loginPage.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login/" element={<LoginPage/>} />
      </Routes>
    </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
