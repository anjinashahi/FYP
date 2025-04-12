import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { Mountain } from "lucide-react"
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import {Link} from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import DashboardPage from './pages/doctor/dashboard'
import DashboardNav from './components/ui/dashboard-nav'
import SymptomsForm from './pages/doctor/symptoms'
import { Route } from 'react-router-dom'
import { assets } from './assets/assets'
import Dashboard from './pages/admin/Dashboard'
import Doctors from './pages/doctor/doctors'

export default function Home() {
  const { user } = useUser()
  console.log(user)
  if (!user){

  return (
     <div
          className="min-h-screen flex flex-col items-center px-4 py-16 sm:px-6 lg:px-8"
          style={{ background: "#A5D7E8" }}
        >
          {/* Logo Section */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2">
              {/* <Mountain size={40} style={{ color: "#2C74B3" }} /> */}
              <span className="text-2xl font-bold" style={{ color: "#2C74B3" }}>
                HerHealth
              </span>
            </div>
          </div>
    
          {/* Content Box */}
          <Card className="w-full max-w-md p-8 space-y-6 shadow-2xl" style={{ backgroundColor: "#144272", marginTop: "40px" }}>
            <div className="text-center space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#ffffff" }}>
                Welcome to this app
              </h1>
              <p className="text-lg sm:text-xl" style={{ color: "#9CB4CC" }}>
                Your gateway to amazing experiences
              </p>
            </div>
    
            <div className="pt-4">
            <header>
              <SignedOut>
                <Link to="/login">Login here</Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            </div>
          </Card>
    </div>

    // <div className="relative min-h-screen w-full overflow-hidden">
    //   {/* Background Image */}
    //   <div className="absolute inset-0 z-0">
    //     <img src="assets/hospital.jpg" alt="" className="h-full w-full object-cover" />
    //     <div className="absolute inset-0 bg-black/30" />
    //   </div>

    //   {/* Content Container */}
    //   <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
    //     {/* Header with Logo Space */}
    //     <header className="absolute top-0 left-0 right-0 flex items-center justify-between p-6">
    //       <div className="h-12 w-40 rounded bg-white/20 backdrop-blur-md">
    //         {/* Logo placeholder */}
    //         <div className="flex h-full w-full items-center justify-center text-white">
    //           <span className="font-semibold">LOGO</span>
    //         </div>
    //       </div>
    //     </header>

    //     {/* Main Content with Glassmorphism */}
    //     <div className="max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md md:p-12">
    //       <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
    //         Welcome to Her Health
    //       </h1>
    //       <p className="mb-8 text-lg text-white/90 md:text-xl">
    //         Dedicated to providing exceptional healthcare services for women
    //       </p>
    //       <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
    //       <header>
    //           <SignedOut>
    //           {/* <Link to="/login">Login here</Link> */}
    //           <button className="rounded-md bg-rose-500 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-rose-600">
    //             <Link to="/login">Login here</Link>
    //           </button>
    //           </SignedOut>
    //           <SignedIn>
    //           <UserButton />
    //           </SignedIn>
    //       </header>
          
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
else{
  if (user.publicMetadata.role === "DOCTOR") {
    return(
      <div>
        <DashboardPage/>
      </div>
    )}
    else if (user.publicMetadata.role === "ADMIN") {
      return(
        <div>
        <Dashboard/>
        </div>
      )
    }
    else{
      return(
        <div>
          <Doctors/>
        </div>
      )
    }
}
}

