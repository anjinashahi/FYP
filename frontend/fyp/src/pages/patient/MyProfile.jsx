import React from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const MyProfile= () => {
    const [userData, setUserData] = useState({
        name: 'Eva Smith',
        image: assets.profile_pic,
        email: "eva@GalleryThumbnailsIcon.com",
        phone: "+923001234567",
        address:{
            line1: 'House # 123, Street # 123',
        },
        gender: "Female",
        dob: "01-01-1990",
    })
    const [isEdit, setIsEdit ]= useState(false)
  return (
    <div>
        <img src ={userData.image} alt=""/>
        {
            isEdit
            ?<input type= "text" value = {userData.name} onChange= {e=> setUserData(prev => ({...prev,name: e.target.value}))}/>
            :<p>{userData.name}</p>
        }
        <hr/>
        <div>
            <p>CONTACT INFORMATION</p>
            <div>
                <p>Email id:</p>
                <p>{userData.email}</p>
                <p>Phone:</p>
                {
                    isEdit
                    ?<input type= "text" value = {userData.phone} onChange= {e=> setUserData(prev => ({...prev,phone: e.target.value}))}/>
                    :<p>{userData.phone}</p>
                }
                <p>Address:</p>
                {
                    isEdit
                    ?<p>
                        <input onChange = {(e)=> setUserData(prev => ({...prev, address:{...prev.address, line1: e.target.value}}))} value = {userData.address.line1}type="text" />
                
                    </p>
                    :<p>{userData.address.line1}</p>
                }
            </div>
        </div>
        <div>
            <p>Basic Information</p>
            <div>
                <p>{userData.gender}</p>
            </div>
            <p>Birthday:</p>
            {
                isEdit?
                <input type = "date" onChange= {e=> setUserData(prev => ({...prev,dob: e.target.value}))} value = {userData.dob}/>
                :<p>{userData.dob}</p>
            }
        </div>   
        <div>
            {
                isEdit
                ?<button onClick = {()=> setIsEdit(false)}>Save Information</button>
                :<button onClick = {() => setIsEdit(true)}>Edit</button>
            }
        </div>
    </div>
  )
}
export default MyProfile
