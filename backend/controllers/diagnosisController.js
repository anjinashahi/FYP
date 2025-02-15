function calculateRiskScore(data) {
    const { fsh, lh, testosterone, insulin, androstenedione, shbg } = data;
    let riskScore = 0;

    // 1. FSH
    if (fsh < 3 || fsh > 10) {
        riskScore += 2;
    }

    // 2. LH
    if (lh > 10) {
        riskScore += 2;
    }

    // 3. LH/FSH Ratio
    const lhFshRatio = fsh > 0 ? lh / fsh : 0;
    if (lhFshRatio >= 2) {
        riskScore += 2;
    }

    // 4. Testosterone
    if (testosterone > 50) {
        riskScore += 3;
    }

    // 5. Insulin
    if (insulin > 20) {
        riskScore += 2;
    }

    // 6. Androstenedione
    if (androstenedione > 3) {
        riskScore += 2;
    }

    // 7. SHBG
    if (shbg < 30) {
        riskScore += 2;
    }

    // Determine risk category
    let riskCategory = "Low Risk";
    if (riskScore >= 6 && riskScore <= 12) {
        riskCategory = "Moderate Risk";
    } else if (riskScore >= 13) {
        riskCategory = "High Risk";
    }

    return {
        riskScore,
        riskCategory,
        message: `Based on the scores, the patient falls under the ${riskCategory} category.`,
    };
}

module.exports = { calculateRiskScore };
console.log(calculateRiskScore({ fsh: 20, lh: 20, testosterone: 80, insulin: 15, androstenedione: 2, shbg: 40 }));
