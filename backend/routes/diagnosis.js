const express = require("express");
const router = express.Router();
const { calculateRiskScore } = require("../controllers/diagnosisController");

// POST /api/diagnosis
router.post("/", (req, res) => {
    try {
        const { fsh, lh, testosterone, insulin, androstenedione, shbg } = req.body;

        // Input validation
        if (
            fsh === undefined ||
            lh === undefined ||
            testosterone === undefined ||
            insulin === undefined ||
            androstenedione === undefined ||
            shbg === undefined
        ) {
            return res.status(400).json({ error: "Missing required parameters" });
        }

        // Calculate risk score
        const result = calculateRiskScore({ fsh, lh, testosterone, insulin, androstenedione, shbg });

        // Send response
        res.status(200).json(result);
    } catch (error) {
        console.error("Error calculating risk score:", error);
        res.status(500).json({ error: "Failed to calculate risk score" });
    }
});

module.exports = router;
