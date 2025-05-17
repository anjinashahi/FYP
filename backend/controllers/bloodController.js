import bloodModel from "../models/bloodModel.js";
import calculateRiskScore from "../controllers/calculateRiskScore.js";

const calculateRisk= async (req, res) => {
    const { fsh, lh, testosterone, insulin, ratio} = req.body;

    if ([fsh, lh, testosterone, insulin, ratio].some(val => val === undefined)) {
        return res.status(400).json({ error: "Required fields are missing." });
    }

    try {
        const result = calculateRiskScore({
            fsh: parseFloat(fsh),
            lh: parseFloat(lh),
            testosterone: parseFloat(testosterone),
            insulin: parseFloat(insulin),
            ratio: parseFloat(ratio || 0)
        });

        const { riskScore, riskCategory } = result;
        const bloodTestEntry = new bloodModel({
            email: req.user.mongoUser.email,
            doctorID: req.user.mongoUser._id,
            testResults: {
                fsh: parseFloat(fsh),
                lh: parseFloat(lh),
                testosterone: parseFloat(testosterone),
                insulin: parseFloat(insulin),
                ratio: parseFloat(ratio || 0),
                riskScore,
                riskCategory
            }
        });

        await bloodTestEntry.save();
        console.log("Blood test entry saved:", bloodTestEntry);


        res.json({
            // input: { fsh, lh, testosterone, insulin, ratio },
            ...result,  success: true, message: "Risk score saved successfully.",
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export default calculateRisk;
