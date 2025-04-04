import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    docID: {type: String, required: true},
    userID: {type: String, required: true},
    slotDate: {type: String, required: true},
    slotTime: {type: String, required: true},
    userData: {type: Object, default: true},
    docData: {type: Object, default: true},
    date: {type: Number, required: true},
    canceelled: {type: Boolean, default: false},
    payment: {type: Boolean, default: false},
    isCompleted: {type: Boolean, default: false},
})
const appointmentModel = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema);
export default appointmentModel;