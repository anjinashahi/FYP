import { Search, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <header className="border-b bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-primary">Dashboard</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything here..."
              className="w-80 rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        <Tabs defaultValue="overview" className="mt-4">
          <TabsList>
            <TabsTrigger value="overview" className="text-sm">
              Overview
            </TabsTrigger>
            <TabsTrigger value="medical-reports" className="text-sm">
              Medical Reports
            </TabsTrigger>
            <TabsTrigger value="patients-overview" className="text-sm">
              Patients Overview
            </TabsTrigger>
            <TabsTrigger value="diagnose" className="text-sm">
              Diagnose
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </header>

      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-500">Patients</CardTitle>
              <div className="h-4 w-4">
                <span className="sr-only">Patients trend</span>
                <svg className="h-4 w-4 text-secondary" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 17L17 7M17 7H8M17 7V16"
                  />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">6025</div>
              <p className="text-xs text-gray-500">Since last week</p>
              <div className="mt-1 text-xs font-medium text-secondary">68.95% ↑</div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-500">New This Week</CardTitle>
              <div className="h-4 w-4">
                <span className="sr-only">New patients trend</span>
                <svg className="h-4 w-4 text-secondary" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 17L17 7M17 7H8M17 7V16"
                  />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">4152</div>
              <p className="text-xs text-gray-500">Since last week</p>
              <div className="mt-1 text-xs font-medium text-secondary">4.11% ↑</div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-500">Critical Alerts</CardTitle>
              <div className="h-4 w-4">
                <span className="sr-only">Critical alerts trend</span>
                <svg className="h-4 w-4 text-red-500" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 7L7 17M7 7l10 10"
                  />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">5948</div>
              <p className="text-xs text-gray-500">Since last week</p>
              <div className="mt-1 text-xs font-medium text-red-500">92.05% ↑</div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-500">Appointments</CardTitle>
              <div className="h-4 w-4">
                <span className="sr-only">Appointments trend</span>
                <svg className="h-4 w-4 text-secondary" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 17L17 7M17 7H8M17 7V16"
                  />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">5626</div>
              <p className="text-xs text-gray-500">Since last week</p>
              <div className="mt-1 text-xs font-medium text-secondary">27.44% ↑</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$138,500</div>
              <p className="text-sm text-gray-500">Avg per month</p>
              <p className="mt-1 text-sm font-medium text-secondary">13.4% ↑</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Today Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Pre-op Consultation</p>
                    <p className="text-sm text-gray-500">08:00 - 09:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Migraine Evaluation</p>
                    <p className="text-sm text-gray-500">13:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

