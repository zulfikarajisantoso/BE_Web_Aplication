const express = require('express');
const router = express.Router();
const walletService = require('../services/walletServices');
const { Wallet } = require('../model');

// change wallet
router.post('/wallet/:operation', async (req, res) => {
    const { amount } = req.body;
    const { operation } = req.params;
    console.log(operation);
    
    try {
        const newBalance = await walletService.updateWallet(amount, operation);
        res.json({ balance: newBalance });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// get balance
router.get('/getbalance', async (req, res) => {
    
    try {
        const balance = await Wallet.findOne();
        res.json({ balance: balance });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
