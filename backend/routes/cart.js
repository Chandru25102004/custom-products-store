const express = require('express');
const router = express.Router();
const CartItem = require('../models/Cart');

// Endpoint to add items to the cart
router.post('/', async (req, res) => {
    try {
        const items = req.body.items;
        const savedItems = await CartItem.insertMany(items);
        res.status(200).json({ message: 'Cart updated successfully', items: savedItems });
    } catch (error) {
        console.error('Error saving cart items:', error);
        res.status(500).json({ message: 'Error saving cart items' });
    }
});

// Endpoint to get cart items
router.get('/', async (req, res) => {
    try {
        const cartItems = await CartItem.find();
        res.status(200).json(cartItems);
    } catch (error) {
        console.error('Error retrieving cart items:', error);
        res.status(500).json({ message: 'Error retrieving cart items' });
    }
});

module.exports = router;
