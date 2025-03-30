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
        console.log("dn cn")
        const doctors = await doctorModel.find({})
        res.json({success: true, doctors})
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
export {changeAvailability, doctorList}