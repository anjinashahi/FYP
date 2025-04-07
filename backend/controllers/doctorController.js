import appointmentModel from "../models/appointmentModel.js";
import doctorModel from "../models/doctorModel.js";
const changeAvailability = async (req, res) => {
    try{
        const {docId} = req.body;
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId, {available: !docData.available})
        res.json({success:true, message:"Availability changed successfully"})
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }

}
const doctorList = async (req, res) => {
    try{
        const doctors = await doctorModel.find({})
        res.json({success: true, doctors})
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
//api to get doctor appointmnet for doctor panel
const appointmentsDoctor = async(req, res)=>{
    try{
        const {_id} = req.user.mongoUser;
        const appointments = await appointmentModel.find({docID: _id})

        res.json({success: true, appointments})
    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
//api to mark appointment completion
const appointmentComplete = async(req, res)=>{
    try{
        const {_id} = req.user.mongoUser;
        const {appointmentId} = req.body;

        const appointmentData = await appointmentModel.findById(appointmentId);
        if(appointmentData && appointmentData.docId == _id){
            await appointmentModel.findByIdAndUpdate(appointmentId, {completed: true})
            res.json({success: true, message: "Appointment marked as completed"})
        }
        else{
            res.json({success: false, message: "Appointment not found"})
        }
    }
    catch(error){

    }
}

//api to cancel appointment
const appointmentCancel= async(req, res)=>{
    try{
        const {_id} = req.user.mongoUser;
        const {appointmentId} = req.body;

        const appointmentData = await appointmentModel.findById(appointmentId);
        if(appointmentData && appointmentData.docId == _id){
            await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})
            res.json({success: true, message: "Appointment cancelled"})
        }
        else{
            res.json({success: false, message: "Cancellation failed"})
        }
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}

//api to get dashboard data for doctor panel
const doctorDashboard = async(req, res)=>{
    try{
        const {_id} = req.user.mongoUser;
        const appointments = await appointmentModel.find({docID: _id});

        let patients = [];
        appointments.map((item)=>{
            if(!patients.includes(item.userID)){
                patients.push(item.userID)
            }
        })

        const dashData = {
            appointments: appointments.length,
            patients:patients.length,
            latestAppointments: appointments.reverse().slice(0,5),
        }
        
        res.json({success: true, dashData})
    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
export {changeAvailability, doctorList, appointmentsDoctor, appointmentComplete, appointmentCancel, doctorDashboard}