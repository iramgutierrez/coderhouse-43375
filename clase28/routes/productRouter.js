const express = require('express');
const { productRepository } = require('../services');

const router = express.Router();

router.get('/products', async (req, res) => {
    try {
        const products = await productRepository.get();
        res.json(products);
    } catch (error) {
        res.status(500).send('Error fetching products');
    }
});

module.exports = router;
