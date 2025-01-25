const express = require("express");
const bodyParser = require("body-parser");
const diagnosisRoutes = require("./routes/diagnosis");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/diagnosis", diagnosisRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
