import { createContext} from 'react';
import {doctors} from '../assets/assets'
import axios from 'axios';
import {toast} from 'react-toastify'
import {useState} from 'react'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [appointments, setAppointments] = useState([])
    
    const getAppointments = async ()=>{
        try{
            const {data} = await axios.get(backendUrl + 'api/doctor/appointments', {})
            if(data.success){
                setAppointments(data.appointments)
                console.log(data.appointments)
            }else{
                toast.error(data.message)
            }
        }catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }

    const completeAppointment = async (appointmentId) => {
        try{
            const {data} = await axios.post(backendUrl + 'api/doctor/complete-appointment', {appointmentId})
            if(data.success){
                toast.success(data.message)
                getAppointments()
            }else{
                toast.error(data.message)
            }
        }catch(error){
            console.log(error)
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try{
            const {data} = await axios.post(backendUrl + 'api/doctor/cancel-appointment', {appointmentId})
            if(data.success){
                toast.success(data.message)
                getAppointments()
            }else{
                toast.error(data.message)
            }
        }catch(error){
            console.log(error)
        }
    }

    const value = {
        doctors,
        backendUrl, getAppointments, appointments, setAppointments,
        completeAppointment, cancelAppointment
    }
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider;