import {assets} from '../../assets/assets'
import { useState } from 'react'
import { useContext } from 'react'
// import { AdminContext } from '../../context/AdminContext.jsx'

export default function addDoctors() {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [about, setAbout] = useState('')

  // const {backendUrl} = useContext(AdminContext)
  const onSubmitHandler = async (event) => {
    event.preventDefault()
    console.log({
      name,
      email,
      password,
      experience,
      fees,
      degree,
      address1,
      address2,
      about
    })
  }

  return (
    <form className='m-5 w-full'>
      <p className = 'mb-3 text-lg font-medium'>Add doctors</p>
      <div className = 'bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className = 'flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img className= 'w-16 bg-gray-100 rounded-full c'src={docImg? URL.createObjectURL(docImg):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id = "doc-img" hidden/>
          <p>Upload doctor image</p>
        </div>
        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className = 'w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Name</p>
              <input onChange={(e)=> setName(e.target.value)} value= {name} className='border rounded px-3 py-2' type= "text" placeholder= 'Name' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Email</p>
              <input onChange={(e)=> setEmail(e.target.value)} value= {email}className='border rounded px-3 py-2' type= "email" placeholder= 'Email' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Password</p>
              <input onChange={(e)=> setPassword(e.target.value)} value= {password}className='border rounded px-3 py-2' type= "password" placeholder= 'Password' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select onChange={(e)=> setExperience(e.target.value)} value= {experience} className='border rounded px-3 py-2' name = "" id= "">
                <option value = "1 Year">1 Year</option>
                <option value = "2 Year">2 Year</option>
                <option value = "3 Year">3 Year</option>
                <option value = "4 Year">4 Year</option>
                <option value = "5 Year">5 Year</option>
                <option value = "6 Year">6 Year</option>
                <option value = "7 Year">7 Year</option>
                <option value = "8 Year">8 Year</option>
                <option value = "9 Year">9 Year</option>
                <option value = "10 Year">10 Year</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input onChange={(e)=> setFees(e.target.value)} value= {fees}className='border rounded px-3 py-2' type= "number" placeholder= 'Fees' required/>
            </div>

          </div>

            <div className='w-full lg:flex-1 flex flex-col gap-4'>
              <div className='flex-1 flex flex-col gap-1'>
                <p>Education</p>
                <input onChange={(e)=> setDegree(e.target.value)} value= {degree}className='border rounded px-3 py-2' type= "text" placeholder= 'Education' required/>
              </div>

              <div className='flex-1 flex flex-col gap-1'>
                <p>Address</p>
                <input onChange={(e)=> setAddress1(e.target.value)} value= {address1} className='border rounded px-3 py-2' type= "text" placeholder = 'address 1' required/>
                <input onChange={(e)=> setAddress2(e.target.value)} value= {address2}className='border rounded px-3 py-2' type= "text" placeholder = 'address 2' required/>
              </div>
            </div>
          

      </div>
          <div>
              <p className='mt-4 mb-2'>About Doctor</p>
              <textarea onChange={(e)=> setAbout(e.target.value)} value= {about} className= 'w-full px-4 pt-2 border rounded'type= "text" placeholder= 'Write about doctor' rows = {5} required/>
            </div>

          <button type = 'submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Doctor</button>
    </div>
    </form>
  )
}
