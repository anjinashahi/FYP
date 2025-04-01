import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import doctorModel from '../models/doctorModel.js'
import {v2 as cloudinary} from 'cloudinary'
const registerUser = async (req, res) => {
    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.json({success: false, message: "Please enter all fields"})
        }
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Please enter valid email"})
        }
        if(password.length <5){
            return res.json({success: false, message: "Password must be atleast 5 characters long"})
        } 
        //hassing the password
         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password, salt)

         const userData ={
            email,
            password: hashedPassword,
         }

         const newUser = new userModel(userData);
         const user = await newUser.save();

          
    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}

//api for user login

const loginUser = async (req, res) => {
    try{
        const{email, password} = req.body
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success: false, message: "User does not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
            res.json({success: true, token})
        }else{
            res.json({success: false, message: "Invalid credentials"})
        }
    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
//api to get user profile data
const getProfile = async (req, res) => {
    try{
        const {userId} = req.body;
        const userData = await userModel.findById(userId);
        res.json({success: true, userData})
    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
//api to update user profile
const updateProfile = async (req, res) => {
    try{
        const{userId, name, phone, address, dob, gender} = req.body
        const imageFile = req.files.image

        if(!name|| !phone || !dob ||!gender){
            return res.json({success: false, message: "Please enter all fields"})
        }
        await userModel.findByIdAndUpdate(userId, {name, phone, address: JSON.parse(address), dob, gender})

        if (imageFile){
            //upload image to cloudinary
            const imageupload = await cloudinary.uploader.upload(imageFile.path, {resource_type: 'image'})
            const imageUrl = imageUpload.secure_url;

            await userModel.findByIdAndUpdate(userId, {image: imageUrl})
        }
        res.json({success: true, message: "Profile updated successfully"})

    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
//api to book appointment
const bookAppointment = async (req, res) => {
    try{
        const (useId, docId, date, time) = req.body;
        const docData = await doctorModel.findById(docId);

        if(!docData.available){
            return res.json({success: false, message: "Doctor not available"})
        }
        let slots_booked = docData.slots_booked;
        //check if the slot is already booked
        if(Aslots_booked[slotsDate]){
            if(slots_booked[slotsDate].includes(slotTime)){
                return res.json({success: false, message: "Slot not aviailable"})
            }else{
                slots_booked[slotsDate].push(slotTime)
            }
        } else{
            slots_booked[slotsDate] = []
            slots_booked[slotsDate].push(slotTime)
        }

        const userData = await userModel.findById(userId);
        delete docData.slots_booked;
        const appointmentData = {
            userId,
            docId,
            docData,
            userData,
            amount: docData.fees,
            slotDate,
            slotTime,
            date: Date.now()
        }
        const newAppointment = new appointmentModel(appointmentData);
        await newAppointment.save(); //save the appointment in db

        //save new slots data in docData
        await doctorModel.findByIdAndUpdate(docId, {slots_booked})
        res.json({success: true, message: "Appointment booked successfully"})

    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
export {registerUser, loginUser, bookAppointment, getProfile, updateProfile}