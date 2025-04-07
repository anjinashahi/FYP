import { createContext} from 'react';
import {doctors} from '../assets/assets'
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify'
import {useState} from 'react'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    axios.defaults.withCredentials = true;
    const[doctors, setDoctors] = useState([])
    const[appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)
    const getAllDoctors = async () => {
        try{
            // const token = await window.Clerk.session.getToken();
            // console.log(token)
            axios.defaults.withCredentials = true;
            const{data} = await axios.post(backendUrl +'api/admin/all-doctors', {})
            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors)
            }else{
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
            console.log(error)
    }}
    const changeAvailability = async (docId) => {
        try{
            const{data}= await axios.post(backendUrl + 'api/admin/change-availability', {docId})
            if(data.success){
                toast.success(data.message)
                getAllDoctors()
            } else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
            console.log(error)
        }
    }

    const getAllAppointments = async () => {
        try{
            const {data} = await axios.get(backendUrl + 'api/admin/appointments', {})
            if(data.success){
                setAppointments(data.appointments)
                console.log(data.appointments)
            }else{
                toast.error(data.message)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const getDashData= async () => {
        try{
            const {data}= await axios.get(backendUrl + 'api/admin/dashboard', {})
            if(data.success){
                setDashData(data.dashData)
                console.log(data.dashData)
            }
            else{
                toast.error(data.message)
            }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId)=>{
        try{
            const {data} = await axios.post(backendUrl + 'api/admin/cancel-appointment', {appointmentId})
            if(data.success){
                toast.success(data.message)
                getAllAppointments()
            }else{
                toast.error(data.message)
            }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }
    const value = {
        doctors,
        backendUrl, getAllDoctors,
        changeAvailability, appointments, setAppointments, getAllAppointments,
        dashData, getDashData,
        cancelAppointment
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider;