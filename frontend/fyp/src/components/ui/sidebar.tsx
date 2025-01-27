import Link from "next/link"
import { Home, Stethoscope, VolumeIcon as Vial, Waves, FileText } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Stethoscope, label: "Symptoms", href: "/symptoms" },
  { icon: Vial, label: "Blood Test", href: "/blood-test" },
  { icon: Waves, label: "Ultrasound", href: "/ultrasound" },
  { icon: FileText, label: "Medical Report", href: "/medical-report" },
]

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="h-6 w-6 rounded-full bg-primary" />
          <span className="text-lg">MediDash</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-lg px-4 py-2",
                    "hover:bg-muted hover:text-foreground",
                    "focus:bg-muted focus:text-foreground focus:outline-none",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-border p-6">
        <p className="text-sm text-muted-foreground">© 2023 MediDash. All rights reserved.</p>
      </SidebarFooter>
    </Sidebar>
  )
}

