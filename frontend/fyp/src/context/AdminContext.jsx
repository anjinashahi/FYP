import { createContext} from 'react';
import {doctors} from '../assets/assets'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const value = {
        doctors,
        backendUrl
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider;