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
//app config
const app = express();
const port = process.env.PORT || 3000;

connectCloudinary();

connectDB().then(() => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Replace with your frontend URL
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials
        next();
    });
    app.use(cookieParser())
    app.use(clerkMiddleware())

    //api endpoint
    app.use('/api/admin', adminRouter)
    app.use('/api/doctor', doctorRouter)
    app.use('/api/user', userRouter)
    app.get('/', (req, res) => {
        res.send('API working fine');
    });

    app.listen(port, () => console.log(`Server started on port ${port}`));
}).catch(err => {
    console.error("Server failed to start:", err);
});
