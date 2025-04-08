import {useContext} from 'react'
import {DoctorContext} from '../../context/DoctorContext.jsx'
import {AppContext} from '../../context/AppContext.jsx'
import {useEffect} from 'react'

const DoctorProfile = () => {
    const {profileData, setProfileData, getProfileData} = useContext(DoctorContext)
    const {currencySymbol, backendUrl} = useContext(AppContext)

    useEffect (()=>{
        getProfileData()
    }, [])
    return(
        <div>

        </div>
    )
}
export default DoctorProfile