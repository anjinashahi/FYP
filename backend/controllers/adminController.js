//api for adding dcotor
import validator from "validator";
import bcrypt from "bcrypt";
import {v2 as cloudinary} from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";

const addDoctor = async (req, res) => {
    try{
        const {name, email, password, speciality, about, degree, experience, fees, address} = req.body;
        // console.log(req.body)
        const imageFile = req.file

        console.log({name, email, password, speciality, degree, experience, fees, address})

        if(!name || !email || !password || !degree || !experience || !fees || !address ){
            return res.json({success: false, message: "Missing required parameters"})
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 6 characters long" });
        }
        //hasing doc password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        //uplaod image to cloudinary
        const uploadedImage = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});
        const imageUrl = uploadedImage.secure_url;

        console.log(req.body)

        const doctorData ={
            name, 
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: address,
            date: Date.now(),
            clerk_uID: req.clerkUser.id,
            
        }
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({success: true, message: "Doctor added successfully"})
        
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}

//api for adding user
const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const clerkUser = req.clerkUser;
        console.log(clerkUser)
        console.log(req.body)
        // Validate input fields
        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing required parameters" });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 6 characters long" });
        }

        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "Email already in use" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user data
        const userData = {
            name,
            email,
            password: hashedPassword,
            clerk_uID: clerkUser.id,
        };

        // Save the user to the database
        const newUser = new userModel(userData);
        await newUser.save();

        res.json({ success: true, message: "User added successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Internal server error" });
    }
}

//api for admin login

const loginAdmin = async (req, res)=>{
    try{
        const{email, password} = req.body;
        if(email===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, token})
        }else{
            res.json({success: false, message: "Invalid credentials"})     
        }
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}

//api to get all doc from db
const allDoctors = async (req, res) => {
    try{
        console.log(req.user)
        const doctors = await doctorModel.find({});
        res.json({success: true, doctors})
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
//api to get all appointment list in admin
const appointmentsAdmin = async(req, res) => {
    try{
        const appointments = await appointmentModel.find({})
        res.json({success: true, appointments})
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
//api to get dashbvoard data for admin panel

const adminDashboard = async(req, res)=>{
    try{
        const doctors = await doctorModel.find({});
        const users = await userModel.find({});
        const appointments = await appointmentModel.find({});

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0,5),
        }

        res.json({success: true, dashData})
    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}

//api for appointment camcellation
const appointmentCancel = async (req, res) => {
    try{
        const {appointmentId} = req.body;
        const userID = req.auth.userId;
        const appointmentData = await appointmentModel.findById(appointmentId);
       
        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})
        //releasing doctors slots(booked)
        const {docID, slotDate, slotTime} = appointmentData;
        const docData = await doctorModel.findById(docID)
        const slots_booked = docData.slots_booked

        slots_booked[slotDate]= slots_booked[slotDate].filter(e=> e !== slotTime)
        await doctorModel.findByIdAndUpdate(docID, {slots_booked})
        res.json({success: true, message: "Appointment cancelled successfully"})

    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}

export {addDoctor, loginAdmin, allDoctors, appointmentsAdmin, adminDashboard, appointmentCancel, addUser}