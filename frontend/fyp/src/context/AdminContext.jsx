import { createContext} from 'react';
import {doctors} from '../assets/assets'
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify'
import {useState} from 'react'
export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const[doctors, setDoctors] = useState([])
    const getAllDoctors = async () => {
        try{
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
    const value = {
        doctors,
        backendUrl, doctors, getAllDoctors,
        changeAvailability
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider;