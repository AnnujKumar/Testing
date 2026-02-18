// utils.js

function validateAmount(amount) {
    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid amount");
    }
    return true;
}

function calculateTax(amount) {
    return amount * 0.18;
}

function applyDiscount(amount, discountPercent) {
    return amount - (amount * discountPercent / 100);
}

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

module.exports = {
    validateAmount,
    calculateTax,
    applyDiscount,
    formatCurrency
};
