const { Client } = require('pg');
const { database } = require('../../config');

const getAll = async () => {
  const client = new Client(database);
  await client.connect();
  const res = await client.query('SELECT * FROM products');
  client.end();
  return res;
};

const getOne = async (id) => {
  const client = new Client(database);
  await client.connect();
  const res = await client.query(`
    SELECT * FROM products
    WHERE products.unique_id = ${id}
  `);
  client.end();
  return res;
};

const updateOne = async (id, productData) => {
  const client = new Client(database);
  await client.connect();
  var dataString = Object.entries(productData).map((pair) => pair[0] + ' = ' + JSON.stringify(pair[1])).join(' ');
  const res = await client.query(`UPDATE products SET ${dataString} WHERE products.unique_id = ${id}`);
  client.end();
  return res;
};

const deleteOne = async (id) => {
  const client = new Client(database);
  await client.connect();
  const res = await client.query(`DELETE FROM products WHERE products.unique_id = ${id}`);
  client.end();
  return res;
};

module.exports = {
  getAll,
  getOne,
  updateOne,
  deleteOne
};
