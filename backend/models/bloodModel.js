import mongoose from 'mongoose';

const bloodTestSchema = new mongoose.Schema({
    // docID: { type: String, required: true },
    email: { type: String, required: true },
    doctorID: { type: String, required: true },
    // testType: { type: String, required: true },
    testResults: { 
        fsh: Number,
        lh: Number,
        testosterone: Number,
        insulin: Number,
        ratio: Number,
        riskScore: Number,
        riskCategory: String,
    },
    createdAt: { type: Date, default: Date.now },
});
const bloodModel = mongoose.models.BloodTest || mongoose.model('BloodTest', bloodTestSchema);
export default bloodModel;