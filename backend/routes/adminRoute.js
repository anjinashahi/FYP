import express from "express";
import { addDoctor, allDoctors, loginAdmin, appointmentsAdmin, adminDashboard, appointmentCancel, addUser} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";
import { getUser, isAuthenticated, isAdmin, createClerkDoctor, createClerkPatient} from "../middlewares/auth.js";


const adminRouter = express.Router()

// adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor);
adminRouter.post("/add-doctor", upload.single('image'), createClerkDoctor,  addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-doctors", isAdmin,  allDoctors);
adminRouter.post("/change-availability", changeAvailability);
adminRouter.get("/appointments", appointmentsAdmin)
adminRouter.get("/dashboard", adminDashboard);
adminRouter.post("/cancel-appointment", appointmentCancel);
adminRouter.post("/add-user", createClerkPatient, addUser)

export default adminRouter