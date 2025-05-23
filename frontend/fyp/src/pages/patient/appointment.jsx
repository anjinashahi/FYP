//appointment booking with docid

import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {AppContext} from '../../context/AppContext'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Appointment = () => {
    const {docID} = useParams()
    const {doctors, currencySymbol, backendUrl, getDoctorsData} = useContext(AppContext)
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const navigate = useNavigate()
    const [docInfo, setDocInfo] = useState(null)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc=> doc._id === docID)
        setDocInfo(docInfo)
        console.log(docInfo)
        
    }

    const getAvailableSlots = async () => {
        setDocSlots([])
        //getting current date
        let today = new Date()

        for (let i = 0; i<7; i++){
            //getting date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            //setting end of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(16,0,0,0)

            //setting hours
            if (today.getDate() === currentDate.getDate()){
                currentDate.setHours(currentDate.getHours() >10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            }else{
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }
            let timeSlots = []
            while(currentDate < endTime){
                let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            //add slot to array
                timeSlots.push({
                    dateTime: new Date(currentDate),
                    time: formattedTime,
                })
            //incrementing time by 30
            currentDate.setMinutes(currentDate.getMinutes() + 30)
            }
            if(timeSlots.length){
            setDocSlots((prev) => [...prev,timeSlots])
            }
        }
    }
    const bookAppointment = async () => {
        // console.log("booked")
        try{
            console.log("slotIndex", slotIndex)
            console.log("slotTime", slotTime)
            const date = docSlots[slotIndex][0].dateTime
            let day = date.getDate()
            let month = date.getMonth()+1
            let year = date.getFullYear()

            let slotDate = day+"_ "+month+"_ "+year
            console.log(slotDate)

            const {data} = await axios.post(backendUrl + 'api/user/book-appointment',{docID, slotDate, slotTime})
            console.log("djbc")
            if (data.success){
                toast.success(data.message)
                getDoctorsData()
                navigate('/my-appointments')
            }else{
                toast.error(data.message)
            }
        }catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        fetchDocInfo()
    }, [doctors, docID])

    useEffect(() => {
        getAvailableSlots()
    },[docInfo])
    useEffect(() => {
        console.log(docSlots)
    },[docSlots])
    useEffect(() => {
        getDoctorsData();
    }, []); // Removed incorrect `toast.error(error.message)`

    return docInfo &&(
        <div> 
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className="bg-primary w-full sm:max-w-72 rounded-lg"src = {docInfo.image} alt=""/>
                </div>
                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                        {docInfo.name}
                        <img className='w-5' src={assets.verified_icon} alt = ""/></p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                        <p>{docInfo.degree}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt = ""/></p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>
                    <p className='text-gray-500 font-medium mt-4'>
                        Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
                </div>
            </div>

            {/* booking slots */}
               <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking Slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {
                        docSlots.length && docSlots.map((item, index) => (
                            <div onClick = {() => setSlotIndex(index)}className ={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-primary text-white': 'border border-gray'} `}key={index}>
                                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                                <p>{item[0] && item[0].dateTime.getDate()}</p>
                            </div>

                        ))
                    }
                </div>

                <div className ="flex items-center gap-3 w-full overflow-x-scroll mt-4">
                    {docSlots.length && docSlots[slotIndex].map((item, index) => (
                        <p onClick = {()=> setSlotTime(item.time)}className= {`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white': 'text-gray-400 border border-gray-300'}`}key={index}>
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>
                <button onClick= {bookAppointment} className="bg-primary text-white text-sm font-light px-14 rounded-full my-6">Book an Appointment</button>
            </div> 
        </div>
    )
}
export default Appointment;