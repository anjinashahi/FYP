import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import { connect } from "mongoose";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";
import cookieParser from 'cookie-parser';
import { clerkMiddleware } from "@clerk/express";
import { getUser } from "./middlewares/auth.js";
import symptomRouter from "./routes/symtomsRoute.js";
import bloodTestRouter from "./routes/bloodTestRoute.js";
//app config
const app = express();
const port = process.env.PORT || 3000;

connectCloudinary();

connectDB().then(() => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({
        origin: "http://localhost:5173", // Replace with your frontend URL
        credentials: true, // Allow cookies and credentials
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], // Allowed headers
    }));
    app.use(cookieParser())
    app.use(clerkMiddleware())
    app.use(getUser)
    //api endpoint
    app.use('/api/admin', adminRouter)
    app.use('/api/doctor', doctorRouter)
    app.use('/api/user', userRouter)
    app.use('/api/symptoms', symptomRouter)
    app.use('/api/bloodtests', bloodTestRouter)
    app.get('/', (req, res) => {
        res.send('API working fine');
    });

    app.listen(port, () => console.log(`Server started on port ${port}`));
}).catch(err => {
    console.error("Server failed to start:", err);
});
