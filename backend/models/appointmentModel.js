import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    doc_Id: {type: String, required: true},
    user_Id: {type: String, required: true},
    slotdate: {type: String, required: true},
    slottime: {type: String, required: true},
    userData: {type: Object, default: true},
    docData: {type: Object, default: true},
    date: {type: Number, required: true},
    canceelled: {type: Boolean, default: false},
    payment: {type: Boolean, default: false},
    isCompleted: {type: Boolean, default: false},
})
const appointmentModel = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema);
export default appointmentModel;