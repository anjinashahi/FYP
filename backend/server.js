// const express = require("express");
// const bodyParser = require("body-parser");
// const diagnosisRoutes = require("./routes/diagnosis");

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.use("/api/diagnosis", diagnosisRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ error: "Internal Server Error" });
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// import express from "express";
// import cors from "cors";
// import 'dotenv/config';
// import connectDB from "./config/mongodb.js";
// import { connect } from "mongoose";

// //app config
// const app = express();
// const port = process.env.PORT || 3000
// connectDB()

// //middleware
// app.use(express.json());
// app.use(cors());

// //api endpoint
// app.get('/', (req, res) => {
//     res.send('API working');
// });

// app.listen(port, () => console.log("Server started", port))
import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import { connect } from "mongoose";
import adminRouter from "./routes/adminRoute.js";

//app config
const app = express();
const port = process.env.PORT || 3000;

connectCloudinary();

connectDB().then(() => {
    app.use(express.json());
    app.use(cors());

    //api endpoint
    app.use('/api/admin', adminRouter)

    app.get('/', (req, res) => {
        res.send('API working fine');
    });

    app.listen(port, () => console.log(`Server started on port ${port}`));
}).catch(err => {
    console.error("Server failed to start:", err);
});
