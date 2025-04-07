import express from "express";
import { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment} from "../controllers/userController.js";
import upload from "../middlewares/multer.js";
import { getUser } from "../middlewares/auth.js";
const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile', getProfile)
userRouter.post('/update-profile', upload.single('image'), updateProfile)
userRouter.post('/book-appointment', bookAppointment)
userRouter.get('/appointments', getUser, listAppointment)
userRouter.post('/cancel-appointment', getUser, cancelAppointment)

export default userRouter