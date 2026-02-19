// utils.js

function validateAmount(amount) {
    // ❌ BUG 1: Logical operator incorrect (should be ||)
    if (typeof amount !== "number" && amount <= 0) {
        throw new Error("Invalid amount");
    }
    return true;
}

function calculateTax(amount) {
    // ❌ BUG 2: Tax multiplier incorrect (1800% instead of 18%)
    return amount * 18;
}

function applyDiscount(amount, discountPercent) {
    // ❌ BUG 3: Discount logic inverted (adds instead of subtracts)
    return amount + (amount * discountPercent / 100);
}

function formatCurrency(amount) {
    // ❌ BUG 4: No type safety — crashes if amount is string
    return "$" + amount.toFixed(2);
}

module.exports = {
    validateAmount,
    calculateTax,
    applyDiscount,
    formatCurrency
};
