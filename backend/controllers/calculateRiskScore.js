function calculateRiskScore(data) {
    const { fsh = 0, lh = 0, testosterone = 0, insulin = 0 } = data;
    let riskScore = 0;

    // 1. FSH (Follicle Stimulating Hormone)
    if (fsh < 3 || fsh > 10) {
        riskScore += 2;
    }

    // 2. LH (Luteinizing Hormone)
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

    // Risk Category Determination
    let riskCategory = "Low Risk";
    if (riskScore >= 6 && riskScore <= 10) {
        riskCategory = "Moderate Risk";
    } else if (riskScore >= 11) {
        riskCategory = "High Risk";
    }

    return {
        riskScore,
        riskCategory,
        riskMessage: `Based on the scores, the patient falls under the ${riskCategory} category.`,
    };
}

export default calculateRiskScore;

// Quick test
// console.log(calculateRiskScore({ fsh: 20, lh: 20, testosterone: 80, insulin: 15 }));
