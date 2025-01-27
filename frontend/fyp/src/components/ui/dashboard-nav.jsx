import { LayoutDashboard, Users, MessageSquare, Calendar, FileText, BarChart2, Receipt, Settings } from "lucide-react"
import { Link} from 'react-router-dom'
const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard, current: true },
  { name: "Symptoms", href: "/symptoms", icon: Users, current: false },
  { name: "Blood Test", href: "/bloodtest", icon: MessageSquare, current: false },
  { name: "Ultrasound", href: "/ultrasound", icon: Calendar, current: false },
  { name: "Medical Record", href: "/records", icon: FileText, current: false },
  { name: "Analytics", href: "/analytics", icon: BarChart2, current: false },
  { name: "Billing", href: "/billing", icon: Receipt, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
]

export default function DashboardNav() {
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
    </div>
  )
}

