import { createContext} from 'react';
import {doctors} from '../assets/assets'
import axios from 'axios';
import {useState} from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = "Nrs"
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors, setDoctors] = useState([])
     const value = {
        doctors
    }

    const getDoctorsData = async () => {
        try{
            const {data} = await axios.post(backendUrl + 'api/doctor/list', {})
            if(data.success){
                setDoctors(data.doctors)
            }
        }catch(error){
            console.log(error)
    }
}
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;