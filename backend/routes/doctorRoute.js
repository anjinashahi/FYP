import express from "express";
import { doctorList, appointmentsDoctor, appointmentCancel, appointmentComplete, doctorDashboard, doctorProfile, updateDoctorProfile } from "../controllers/doctorController.js";
import { getUser } from "../middlewares/auth.js";

const doctorRouter = express.Router()

doctorRouter.get('/list', doctorList)
doctorRouter.get('/appointments', getUser, appointmentsDoctor)
doctorRouter.post('/cancel-appointment', getUser, appointmentCancel)
doctorRouter.post('/complete-appointment', getUser, appointmentComplete)
doctorRouter.get('/dashboard', getUser, doctorDashboard)
doctorRouter.get('/profile', getUser, doctorProfile)
doctorRouter.post('/update-profile', getUser, updateDoctorProfile)

export default doctorRouter