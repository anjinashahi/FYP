import express from "express";
import { doctorList, appointmentsDoctor, appointmentCancel, appointmentComplete, doctorDashboard } from "../controllers/doctorController.js";
import { getUser } from "../middlewares/auth.js";

const doctorRouter = express.Router()

doctorRouter.get('/list', doctorList)
doctorRouter.get('/appointments', getUser, appointmentsDoctor)
doctorRouter.post('/cancel-ppointment', getUser, appointmentCancel)
doctorRouter.post('/complete-appointment', getUser, appointmentComplete)
doctorRouter.get('/dashboard', getUser, doctorDashboard)

export default doctorRouter