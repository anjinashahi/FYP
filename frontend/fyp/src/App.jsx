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

export default function App() {
  const { user } = useUser()
  if (!user){
  return (
     <div
          className="min-h-screen flex flex-col items-center px-4 py-16 sm:px-6 lg:px-8"
          style={{ background: "#0A2647" }}
        >
          {/* Logo Section */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2">
              <Mountain size={40} style={{ color: "#2C74B3" }} />
              <span className="text-2xl font-bold" style={{ color: "#2C74B3" }}>
                LOGO
              </span>
            </div>
          </div>
    
          {/* Content Box */}
          <Card className="w-full max-w-md p-8 space-y-6 shadow-2xl" style={{ backgroundColor: "#144272" }}>
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
  )
}
else{
  return(
    <div>
      <DashboardPage/>
    </div>
  )
}
}

