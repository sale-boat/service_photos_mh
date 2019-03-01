const express = require('express');

const Products = require('../models/postgres/modelHelpers');

const router = express.Router();

// TODO: actually give a appropriate isSuccess value

router.get('/:tableName', async (req, res) => {
  const products = await Products.getAll();
  res.send(products);
});

router.post('/:tableName', async (req, res) => {
  // Create an object
  const product = await Products.insertOne(req.body);
  res.send({isSuccess: true, unique_id: req.body.unique_id});
});

router.get('/:tableName/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Products.getOne(id);
  res.send(product.rows[0]);
});

router.put('/:tableName/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Products.updateOne(id, req.body);
  res.send({isSuccess: true, unique_id: req.body.unique_id});
});

router.delete('/:tableName/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Products.deleteOne(id);
  res.send({isSuccess: true, unique_id: req.body.unique_id});
});

module.exports = router;