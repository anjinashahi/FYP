"use client"

import { useState } from "react"

const DoctorProfile = () => {
  const [selectedDay, setSelectedDay] = useState(0)
  const [selectedTime, setSelectedTime] = useState(null)

  const days = [
    { day: "MON", date: 10 },
    { day: "TUE", date: 11 },
    { day: "WED", date: 12 },
    { day: "THU", date: 13 },
    { day: "FRI", date: 14 },
    { day: "SAT", date: 15 },
    { day: "SUN", date: 16 },
  ]

  const timeSlots = ["6:00 am", "8:30 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am"]

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow">
        <div className="flex flex-col md:flex-row">
          <div className="bg-blue-medium p-4 md:w-64 flex justify-center">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Dr. Richard James"
              className="rounded-md"
              width={200}
              height={200}
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold">Dr. Richard James</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-blue-medium"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-sm text-gray-600">MBBS - General Physician</p>
              <span className="inline-flex items-center rounded-full border border-gray-200 px-2 py-0.5 text-xs">
                7 Years
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-1 mb-1">
                <h3 className="text-sm font-medium">About</h3>
              </div>
              <p className="text-sm text-gray-600">
                Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive
                medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to
                delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective
                treatment strategies.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm">
                Appointment fee: <span className="font-bold">$50</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t">
          <h3 className="font-medium mb-4">Booking slots</h3>

          <div className="grid grid-cols-7 gap-2 mb-6">
            {days.map((day, index) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(index)}
                className={`flex flex-col items-center justify-center p-2 rounded-full ${
                  selectedDay === index ? "bg-blue-medium text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span className="text-xs">{day.day}</span>
                <span className="font-medium">{day.date}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-4 text-sm border rounded-full ${
                  selectedTime === time
                    ? "border-blue-medium bg-blue-light/10 text-blue-medium"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          <button className="w-full py-2 px-4 bg-blue-medium hover:bg-blue-navy text-white font-medium rounded-md transition-colors">
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile

