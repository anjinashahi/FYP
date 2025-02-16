//api for adding dcotor
import validator from "validator";
import bycrypt from "bcrypt";
import {v2 as cloudinary} from "cloudinary";

const addDoctor = async (req, res) => {
    try{
        const {name, email, password, speciality, degree, experience, about, fees, address} = req.body;
        const imageFile = req.file

        console.log({name, email, password, speciality, degree, experience, about, fees, address, image})

        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imageFile){
            return res.json({success: false, message: "Missing required parameters"})
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email" });
        }
        if (password.length < 6) {
            return res.json({ success: false, message: "Password must be at least 6 characters long" });
        }
        //hasing doc password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);

        //uplaod image to cloudinary
        const uploadedImage = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});
        const imageUrl = iamgeUpload.secure_url;
    }
    catch(error){

    }
}

export {addDoctor}