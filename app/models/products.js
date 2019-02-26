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

module.exports = {
  getAll,
  getOne,
};
