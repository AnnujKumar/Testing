// pricingService.js

const {
    validateAmount,
    calculateTax,
    applyDiscount
} = require('./utils');

function computeFinalPrice(baseAmount, discountPercent) {
    validateAmount(baseAmount);

    const discounted = applyDiscount(baseAmount, discountPercent);
    const tax = calculateTax(discounted);

    return discounted + tax;
}

function computeRefundAmount(originalAmount) {
    validateAmount(originalAmount);
    const tax = calculateTax(originalAmount);
    return originalAmount - tax;
}

module.exports = {
    computeFinalPrice,
    computeRefundAmount
};
