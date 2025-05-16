import { createContext} from 'react';
import {doctors} from '../assets/assets'
import axios from 'axios';
import {toast} from 'react-toastify'
import {useState} from 'react'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)
    const [profileData, setProfileData] = useState(false)
    
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
            console.log(appointmentId)
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

    const getDashData = async () => {
        try{
            const {data} = await axios.get(backendUrl + 'api/doctor/dashboard', {})
            if(data.success){
                setDashData(data.dashData)
                console.log(data.dashData)
            }
        }
        catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    const getProfileData = async () => {
        try{
            const {data}= await axios.get(backendUrl + 'api/doctor/profile', {})
            if(data.success){
                setProfileData(data.profileData)
                console.log(data.profileData)
            }
            else{
                toast.error(data.message)
            }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
        doctors,
        backendUrl, getAppointments, appointments, setAppointments,
        completeAppointment, cancelAppointment,
        dashData, setDashData, getDashData,
        profileData, setProfileData, getProfileData
    }
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider;