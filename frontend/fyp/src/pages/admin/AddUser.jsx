import { assets } from '../../assets/assets';
import { useState, useContext } from 'react';
import { AdminContext } from '../../context/AdminContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const AddUser = () => { 
    const {backendUrl} = useContext(AdminContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const formData = {
                name: name,
                email: email,
                password: password
              };
              console.log(formData)
            const {data} = await axios.post(backendUrl + 'api/admin/add-user', formData)
            if(data.success){
            toast.success('Patient Added Successfully')
            console.log("success")
            setName('')
            setEmail('')
            setPassword('')
    
          }
          else{
            toast.error('Patient Not Added')
            console.log("error")
          }
          // Further logic to send data to the backend can be added here
        } catch (error) {
          console.error(error);
          toast.error(error.message)
        }
      }; 
    
     

    return (
        <form onSubmit={onSubmitHandler} className="m-5 w-full">
        <p className="mb-3 text-lg font-medium">Add Patients</p>
        <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
          <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <p>Patient Name</p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border rounded px-3 py-2"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
  
              <div className="flex-1 flex flex-col gap-1">
                <p>Patient Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="border rounded px-3 py-2"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
  
              <div className="flex-1 flex flex-col gap-1">
                <p>Patient Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="border rounded px-3 py-2"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            </div>
  
          <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full">
            Add Patient
          </button>
        </div>
        <ToastContainer />
      </form>
    )
}
export default AddUser;