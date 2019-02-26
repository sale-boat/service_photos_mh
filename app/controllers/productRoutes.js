const express = require('express');

const Products = require('../models/products');

const router = express.Router();

router.get('', async (req, res) => {
  const products = await Products.getAll();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Products.getOne(id);
  res.send(product.rows[0]);
});

module.exports = router;
