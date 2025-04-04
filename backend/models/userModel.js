import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    image: {type: String, default: ""},
    // address: {type: String, default: {line1:'', line2:''}},
    gender: {type: String, default: "Not selected"},
    phone: {type: String, default: '0000000000'},
    clerk_uID: {type: String, default: ''},
})

const userModel = mongoose.models.user || mongoose.model("User", userSchema);

export default userModel; 