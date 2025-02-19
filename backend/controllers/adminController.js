//api for adding dcotor
import validator from "validator";
import bcrypt from "bcrypt";
import {v2 as cloudinary} from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

const addDoctor = async (req, res) => {
    try{
        const {name, email, password, speciality, degree, experience, fees, address} = req.body;
        // console.log(req.body)
        const imageFile = req.file

        console.log({name, email, password, speciality, degree, experience, fees, address})

        if(!name || !email || !password || !speciality || !degree || !experience || !fees || !address ){
            return res.json({success: false, message: "Missing required parameters"})
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email" });
        }
        if (password.length < 6) {
            return res.json({ success: false, message: "Password must be at least 6 characters long" });
        }
        //hasing doc password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        //uplaod image to cloudinary
        // const uploadedImage = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});
        // const imageUrl = iamgeUpload.secure_url;

        const doctorData ={
            name, 
            email,
            // image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            // about,
            fees,
            address: address,
            date: Date.now(),
            
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
export {addDoctor, loginAdmin}