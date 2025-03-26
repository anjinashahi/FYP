import { createContext} from 'react';
import {doctors} from '../assets/assets'
import axios from 'axios';
import {toast} from 'react-toastify'
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
            }else{
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
            console.log(error)
    }}
    const value = {
        doctors,
        backendUrl, doctors, getAllDoctors
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider;