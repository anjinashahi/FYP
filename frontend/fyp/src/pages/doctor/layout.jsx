import "./globals.css"
import { Inter } from "next/font/google"

import { DashboardNav } from "@/components/dashboard-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Medical Dashboard",
  description: "Modern medical dashboard",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-50">
          <DashboardNav />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}

