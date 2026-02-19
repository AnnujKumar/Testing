// pricingService.js

const {
    validateAmount,
    calculateTax,
    applyDiscount
} = require('./utils');

// CHANGED: Added 'region' parameter to support localization
function computeFinalPrice(baseAmount, discountPercent, region = 'US') {
    // 🔴 BUG 1: validateAmount definition (in utils.js) likely only takes 1 argument.
    // We are passing 2 here, assuming the dependency was updated (but it wasn't).
    validateAmount(baseAmount, { strict: true });

    const discounted = applyDiscount(baseAmount, discountPercent);

    // 🔴 BUG 2: calculateTax definition likely only takes (amount).
    // We are passing (amount, region) here. The AI should flag this mismatch.
    const tax = calculateTax(discounted, region);

    return discounted + tax;
}

function computeRefundAmount(originalAmount) {
    validateAmount(originalAmount);
    
    // 🔴 BUG 3: Logic change - removed tax calculation but variable name implies it's net?
    // This is a subtle logical regression to test the AI's reasoning.
    return originalAmount; 
}

module.exports = {
    computeFinalPrice,
    computeRefundAmount
};
