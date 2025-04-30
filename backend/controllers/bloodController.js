const { calculateRiskScore } = require("../controllers/calculateRiskScore");

exports.analyzeBloodTest = (req, res) => {
    const { fsh, lh, testosterone, insulin, androstenedione, shbg } = req.body;

    if ([fsh, lh, testosterone, insulin].some(val => val === undefined)) {
        return res.status(400).json({ error: "Required fields (FSH, LH, Testosterone, Insulin) are missing." });
    }

    const result = calculateRiskScore({
        fsh: parseFloat(fsh),
        lh: parseFloat(lh),
        testosterone: parseFloat(testosterone),
        insulin: parseFloat(insulin),
        androstenedione: parseFloat(androstenedione || 0),
        shbg: parseFloat(shbg || 0)
    });

    res.json({
        input: { fsh, lh, testosterone, insulin, androstenedione, shbg },
        ...result
    });
};


