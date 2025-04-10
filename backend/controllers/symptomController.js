import symptomModel from "../models/symptomModel";

const addSymptoms = async (req, res) => {
    try{
        const{ userID, doctorID, acne, hairThinning, irregularPeriods, hairGrowth, weightGain, additionNotes } = req.body;

        const newEntry = new symptomModel({
            userID,
            doctorID,
            acne,
            hairThinning,
            irregularPeriods
          });
      
          await newEntry.save();
          res.status(200).json({ success: true, message: "Symptoms submitted successfully." });
    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}
export { addSymptoms }