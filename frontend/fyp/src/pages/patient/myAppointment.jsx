const MyAppointments = () => {
    const appointments = [
      {
        id: 1,
        doctor: "Dr. Richard James",
        specialty: "General physician",
        address: {
          street: "57th Cross, Richmond",
          area: "Circle, Church Road, London",
        },
        date: "25, July, 2024",
        time: "8:30 PM",
        status: "upcoming",
      },
      {
        id: 2,
        doctor: "Dr. Richard James",
        specialty: "General physician",
        address: {
          street: "57th Cross, Richmond",
          area: "Circle, Church Road, London",
        },
        date: "25, July, 2024",
        time: "8:30 PM",
        status: "unpaid",
      },
      {
        id: 3,
        doctor: "Dr. Richard James",
        specialty: "General physician",
        address: {
          street: "57th Cross, Richmond",
          area: "Circle, Church Road, London",
        },
        date: "25, July, 2024",
        time: "8:30 PM",
        status: "paid",
      },
    ]
  
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-xl font-semibold mb-6">My Appointments</h1>
  
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
              <div className="flex p-4">
                <div className="mr-4">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt={appointment.doctor}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </div>
  
                <div className="flex-1">
                  <h2 className="font-medium text-blue-dark">{appointment.doctor}</h2>
                  <p className="text-sm text-gray-600 mb-2">{appointment.specialty}</p>
  
                  <div className="mb-2">
                    <p className="text-xs text-gray-500">Address:</p>
                    <p className="text-sm">{appointment.address.street}</p>
                    <p className="text-sm">{appointment.address.area}</p>
                  </div>
  
                  <div>
                    <p className="text-xs text-gray-500">Date & Time:</p>
                    <p className="text-sm">
                      {appointment.date} | {appointment.time}
                    </p>
                  </div>
                </div>
  
                <div className="flex flex-col justify-between items-end">
                  {appointment.status === "unpaid" && (
                    <button className="bg-blue-medium hover:bg-blue-navy text-white px-4 py-2 rounded-md text-sm mb-2">
                      Pay here
                    </button>
                  )}
  
                  {appointment.status === "paid" && (
                    <button className="bg-blue-medium hover:bg-blue-navy text-white px-4 py-2 rounded-md text-sm mb-2">
                      Paid
                    </button>
                  )}
  
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50">
                    Cancel appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
export default MyAppointments
  
  