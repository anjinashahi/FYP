import mongoose from "mongoose";

const symptomSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    doctorID: { type: String, required: true },
    acne: { type: Boolean, default: false },
    hairThinning: { type: Boolean, default: false },
    irregularPeriods: { type: Boolean, default: false },
    hairGrowth: { type: Boolean, default: false },
    weightGain: { type: Boolean, default: false },
    additionNotes: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now }
  });
  
const symptomModel = mongoose.models.Symptom || mongoose.model("Symptom", symptomSchema);
export default symptomModel;