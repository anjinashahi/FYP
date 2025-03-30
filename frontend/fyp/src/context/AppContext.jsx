import { createContext } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = "Nrs";
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);

    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + 'api/doctor/list', {});
            if (data.success) {
                setDoctors(data.doctors);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error); // Correct way to log the error
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getDoctorsData();
    }, []); // Removed incorrect `toast.error(error.message)`

    const value = {
        doctors,
        currencySymbol,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
