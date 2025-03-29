import { useContext } from "react"
import { AdminContext } from "../../context/AdminContext"
import { useEffect } from "react"

const DoctorList = () => {
    const{doctors, getAllDoctors, changeAvailability} = useContext(AdminContext)
    useEffect(() => {
        getAllDoctors();
    }, [])
    return(
        <div className="m-5 max-h-[90vh] overflow-y-scroll">
            <h1 className="text-lg font-medium">All Doctors</h1>
            <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
                {
                    doctors.map((item,index)=>(
                        <div className= "border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group"key= {index}>
                            <img className= "bg-indigo-50 group-hover:bg-primary transition-all duration-500"src = {item.image}alt=""/>
                            <div className="p-4">
                                <p className="text-neutral-800 text-lg font-medium">{item.name}</p>
                                <div>
                                    <input onChange= {()=> changeAvailability(item._id)}className = "mt-2 flex items-center gap-1 text-sm"type = "checkbox" checked = {item.available}/>
                                    <p>Available</p>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
export default DoctorList