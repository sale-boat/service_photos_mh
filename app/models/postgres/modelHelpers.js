const { Pool } = require('pg');
const { database } = require('../../../config');
const { databaseStringify } = require('../utils');

const pool = new Pool(database);

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

// process.on('unhandledRejection', (reason, promise) => {
//   console.log('Unhandled Rejection at:\n\n\n', reason.stack || reason);
//   process.exit(-1);
//   // Recommended: send the information to sentry.io
//   // or whatever crash reporting service you use
// })

// All these methods are generic functions and can be used for any table
const getAll = async (tableName='products') => {
  // const client = new Client(database);
  // await client.connect();
  const client = await pool.connect();
  var res;
  try {
    res = await client.query(`SELECT * FROM ${tableName}`);
  } catch(err) {
    console.log('ERROR\n', err, '\n-------------------');
  } finally {
    client.release();
  }
  return res;
};

const getOne = async (id, tableName='products') => {
  // const client = new Client(database);
  // await client.connect();
  // const res = await client.query(`SELECT * FROM ${tableName} WHERE ${tableName}.unique_id = ${id}`);
  // client.end();
  // return res;

  const client = await pool.connect();
  var res;
  try {
    res = client.query('SELECT * FROM products WHERE products.unique_id = $1', [id]);
  } catch(err) {
    console.log('ERROR\n', err, '\n-------------------');
  } finally {
    client.release();
  }
  return res;
};

const insertOne = async (productData, tableName='products') => {
  // const client = new Client(database);
  // await client.connect();
  // var keyString = Object.keys(productData).join(', ');
  // var dataString = Object.values(productData).map((value) => databaseStringify(value)).join(', ');
  // var qStr = `INSERT INTO ${tableName} (${keyString}) VALUES (${dataString})`;

  // const res = await client.query(qStr);
  // client.end();
  // return res;

  const client = await pool.connect();
  var res;
  try {
    var keyString = Object.keys(productData).join(', ');
    var dataString = Object.values(productData).map((value) => databaseStringify(value)).join(', ');
    var qStr = `INSERT INTO ${tableName} (${keyString}) VALUES (${dataString})`;
    res = await client.query(qStr);  
  } finally {
    client.release();
  }
  return res;
};

const updateOne = async (id, productData, tableName='products') => {
  // const client = new Client(database);
  // await client.connect();
  // var dataString = Object.entries(productData).map((pair) => pair[0] + ' = ' + databaseStringify(pair[1])).join(' ');
  // const res = await client.query(`UPDATE ${tableName} SET ${dataString} WHERE ${tableName}.unique_id = ${id}`);
  // client.end();
  // return res;

  const client = await pool.connect();
  var res;
  try {
    var dataString = Object.entries(productData).map((pair) => pair[0] + ' = ' + databaseStringify(pair[1])).join(' ');
    res = await client.query(`UPDATE ${tableName} SET ${dataString} WHERE ${tableName}.unique_id = ${id}`);
  } finally {
    client.release();
  }
  return res;
};

const deleteOne = async (id, tableName='products') => {
  // const client = new Client(database);
  // await client.connect();
  // const res = await client.query(`DELETE FROM ${tableName} WHERE ${tableName}.unique_id = ${id}`);
  // client.end();
  // return res;

  const client = await pool.connect();
  var res;
  try {
    res = await client.query(`DELETE FROM ${tableName} WHERE ${tableName}.unique_id = ${id}`);
  } finally {
    client.release();
  }
  return res;
};

module.exports = {
  getAll,
  getOne,
  insertOne,
  updateOne,
  deleteOne
};
