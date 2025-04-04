
import { use, useContext } from 'react'
import {doctors} from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-mediu'>Our Doctors</h1>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {doctors.slice(0,5).map((item, index)=>(
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} key = {index} className=' border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duaryion-500'>
                        <img className='bg-blue-50'src={item.image} alt="" />
                        <div className ='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                        <p>{item.name}</p>
                        <p>{item.speciality}</p>
                        </div>
                        </div>
                    ))}
            </div>
            {/* <button>more</button> */}
        </div>
    )
}
export default TopDoctors;