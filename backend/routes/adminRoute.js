import express from "express";
import { addDoctor, allDoctors, loginAdmin, appointmentsAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";
import { getUser, isAuthenticated, isAdmin} from "../middlewares/auth.js";


const adminRouter = express.Router()

// adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor);
adminRouter.post("/add-doctor", upload.single('image'), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-doctors", getUser, isAdmin,  allDoctors);
adminRouter.post("/change-availability", changeAvailability);
adminRouter.get("/appointments", appointmentsAdmin)


export default adminRouter