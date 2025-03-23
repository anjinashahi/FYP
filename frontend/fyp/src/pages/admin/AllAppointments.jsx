const AllAppointments = () => {
    const appointments = [
      {
        id: 1,
        patient: {
          name: "Richard James",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        department: "Richard James",
        age: 28,
        dateTime: "24th July, 2024, 10:AM",
        doctor: {
          name: "Dr. Richard James",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        fees: "$50",
      },
      {
        id: 2,
        patient: {
          name: "Richard James",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        department: "Richard James",
        age: 28,
        dateTime: "24th July, 2024, 10:AM",
        doctor: {
          name: "Dr. Richard James",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        fees: "$50",
      },
    ]
  
    return (
      <div className="bg-gray-50 min-h-screen p-4">
        {/* Blue vertical accent line */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-medium"></div>
  
          <div className="pl-6">
            <h1 className="text-xl font-semibold mb-6">All Appointments</h1>
  
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">#</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Patient</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Department</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Age</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Date & Time</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Doctor</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Fees</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={appointment.id} className="border-b">
                      <td className="px-4 py-4 text-sm">{index + 1}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <img
                            src={appointment.patient.avatar || "/placeholder.svg"}
                            alt={appointment.patient.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <span className="text-sm">{appointment.patient.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">{appointment.department}</td>
                      <td className="px-4 py-4 text-sm">{appointment.age}</td>
                      <td className="px-4 py-4 text-sm">{appointment.dateTime}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <img
                            src={appointment.doctor.avatar || "/placeholder.svg"}
                            alt={appointment.doctor.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <span className="text-sm">{appointment.doctor.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">{appointment.fees}</td>
                      <td className="px-4 py-4">
                        <button className="text-gray-400 hover:text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* Incomplete third row with just an avatar */}
                  <tr>
                    <td colSpan={8} className="px-4 py-4">
                      <div className="flex justify-center">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Avatar"
                          className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AllAppointments
  
  