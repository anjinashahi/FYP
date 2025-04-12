import { LayoutDashboard, Users, MessageSquare, Calendar, FileText, BarChart2, Receipt, Settings } from "lucide-react"
import { Link} from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'

const navigation = [
]

const navigationPatient = [
  {name: "Appointment-booking", href: "/doctors", icon: LayoutDashboard, current: true},
  {name: "My Appointments", href: "/my-appointments", icon: LayoutDashboard, current: false},
  {name: "Medical Records", href: "/medical-records", icon: LayoutDashboard, current: false},
  {name: "Profile Settings", href: "/my-profile", icon: LayoutDashboard, current: false},
]
const navigationAdmin = [
  {name: "Dashboard", href:"/admin-dashboard", icon: LayoutDashboard, current: true},
  {name: "Doctor List", href: "/doctor-list", icon: LayoutDashboard, current: false},
  {name: "Add Doctor", href: "/add-doctor", icon: LayoutDashboard, current: false},
  {name: "Add User", href: "/add-user", icon: LayoutDashboard, current: false},
  {name: "Appointment List", href: "/admin-allappointments", current: false},
]
const navigationDoctor = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard, current: true },
  { name: "Symptoms", href: "/symptoms", icon: Users, current: false },
  { name: "Blood Test", href: "/bloodtest", icon: MessageSquare, current: false },
  { name: "Ultrasound", href: "/ultrasound", icon: Calendar, current: false },
  { name: "Medical Record", href: "/records", icon: FileText, current: false },
  // { name: "Analytics", href: "/analytics", icon: BarChart2, current: false },
  { name: "Doctors", href: "/doctors", icon: Receipt, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
]

export default function DashboardNav() {
  const { user } = useUser()
  const role = user.publicMetadata.role
  if(role==="ADMIN"){
    navigation.push(...navigationAdmin)
  }else if(role==="DOCTOR"){
    navigation.push(...navigationDoctor)
  }else if(role==="PATIENT"){
    navigation.push(...navigationPatient)
  }else{
    navigation.push(...navigationAdmin)
  }
  return (
    <div className="flex w-64 flex-col bg-white" style={{marginLeft: "50px"}}>
      <div className="flex h-16 shrink-0 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
          <div className="rounded bg-primary p-1">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.25 7.75H4.75M19.25 12H4.75M19.25 16.25H4.75"
              />
            </svg>
          </div>
          <span className="text-xl">HerHealth</span>
        </Link>
      </div>
      <div className="flex flex-col justify-between h-full">
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navigation.map((item) => (
          <Link
        to = {{
            pathname: item.href
        }}
            key={item.name}
            className={`
              group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium
              ${item.current ? "bg-primary text-white" : "text-gray-700 hover:bg-secondary hover:text-white"}
            `}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {item.name}
            {item.badge && (
              <span className="ml-auto rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-primary">
                {item.badge}
              </span>
            )}
          </Link>

        ))}
      </nav>
         <SignedOut>
                <Link to="/login">Login here</Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
      </div>
    </div>
  )
}

