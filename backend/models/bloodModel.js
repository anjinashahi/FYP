import mongoose from "mongoose";

const bloodTestSchema = new mongoose.Schema({
    docID: { type: String, required: true },
    email: { type: String, required: true },
    doctorID: { type: String, required: true },
    testType: { type: String, required: true },
    testResults: { type: Object, default: {} },
    additionalNotes: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
})