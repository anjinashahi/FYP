import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext.jsx' 
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext.jsx'
import { assets } from '../../assets/assets.js'

const AllAppointments= () =>{
  const {appointments, getAllAppointments, cancelAppointment} = useContext(AdminContext)
  const {calculateAge, slotDateFormat, currencySymbol} = useContext(AppContext)

  useEffect(() => {
    getAllAppointments()
  },[])

  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
          <p>#</p>
          <p>Patient </p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor Name</p>
          <p>Fee</p>
          <p>Actions</p>
        </div>

        {appointments.map((item, index)=>(
          <div className='grid grid-wrap justify-between max-sm:gap-2 sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover: bg-gray-50' key = {index}>
            <p className='flex items-center gap-2'>{index+1}</p>
            <div>
              {/* <img className= 'w-8 rounded-full'src= {item.userData.image} alt = ""/> */}
              <p>{item.userData.name}</p>
            </div>
              {/* <p className = 'max-sm'>{calculateAge(item.userData.dob)}</p> */}
              <p>34</p>
              <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
              <div>
                <img className= 'w-8 rounded-full bg-gray-200'src= {item.docData.image} alt = ""/><p>{item.docData.name}</p>
              </div>
              <p>{currencySymbol}{item.docData.fees}</p>
              {item.cancelled 
              ?<p className='text-red-400 text-x5 font-medium'>Cancelled</p>
              : <img onClick={()=>cancelAppointment(item._id)} className='w-10 cursor-pointer' src = {assets.cancel_icon} alt=""/>}
             
          </div>
        ))}

      </div>
    </div>
  )
}

export default AllAppointments
