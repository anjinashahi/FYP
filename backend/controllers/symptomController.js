import symptomModel from "../models/symptomModel.js";

const addSymptoms = async (req, res) => {
    try{
        const{ email, acne, hairThinning, irregularPeriods, hairGrowth, weightGain, remarks } = req.body;
        console.log(req.user.mongoUser)
        const doctorID = req.user.mongoUser._id
        console.log({doctorID})
        const newEntry = new symptomModel({
            email,
            doctorID,
            acne,
            hairThinning,
            irregularPeriods,
            additionalNotes: remarks,
          });
      
          await newEntry.save();
          res.status(200).json({ success: true, message: "Symptoms submitted successfully." });
    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
export { addSymptoms }