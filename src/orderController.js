// orderController.js

const express = require('express');
const {
    computeFinalPrice,
    computeRefundAmount
} = require('./pricingService');
const { formatCurrency } = require('./utils');

const router = express.Router();

router.post('/create-order', (req, res) => {
    const { amount, discount } = req.body;

    const finalPrice = computeFinalPrice(amount, discount);

    res.json({
        total: formatCurrency(finalPrice)
    });
});

router.post('/refund-order', (req, res) => {
    const { amount } = req.body;

    const refund = computeRefundAmount(amount);

    res.json({
        refund: formatCurrency(refund)
    });
});

module.exports = router;
