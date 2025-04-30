import express from "express";
import { addSymptoms } from "../controllers/symptomController.js";

const symptomRouter = express.Router();

symptomRouter.post("/submit-symptoms", addSymptoms);

export default symptomRouter;