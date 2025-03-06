import { createContext} from 'react';
import {doctors} from '../../assets/assets'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    const value = {
        doctors
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider;