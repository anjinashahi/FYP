import { createContext} from 'react';
import {doctors} from '../../assets/assets'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {
    const value = {
        doctors
    }
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}
export default DoctorContextProvider;