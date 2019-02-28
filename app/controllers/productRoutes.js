const express = require('express');

const Products = require('../models/products');

const router = express.Router();

router.get('', async (req, res) => {
  const products = await Products.getAll();
  res.send(products);
});

router.post('', async (req, res) => {
  // Create an object
  console.log(typeof req.body, req.body);
  const product = await Products.insertOne(req.body);
  res.send(product.rows[0]);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Products.getOne(id);
  res.send(product.rows[0]);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Products.updateOne(id, req.body);
  res.send(product.rows[0]);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Products.deleteOne(id);
  res.send(product.rows[0]);
});

module.exports = router;
