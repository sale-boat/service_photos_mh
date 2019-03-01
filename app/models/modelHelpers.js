const { Client } = require('pg');
const { database } = require('../../config');

/*
All these methods are generic functions and can be used for any table
*/

const postgresStringify = function (value) {
  // Postgres requires strings to look like, 'example', and not 
  var result = JSON.stringify(value);
  if (typeof value === 'string') {
    result = '\'' + result.slice(1, result.length - 1) + '\'';
  }
  return result;
}

const getAll = async (tableName='products') => {
  const client = new Client(database);
  await client.connect();
  const res = await client.query(`SELECT * FROM ${tableName}`);
  client.end();
  return res;
};

const getOne = async (id, tableName='products') => {
  const client = new Client(database);
  await client.connect();
  const res = await client.query(`SELECT * FROM ${tableName} WHERE ${tableName}.unique_id = ${id}`);
  client.end();
  return res;
};

const insertOne = async (productData, tableName='products') => {
  const client = new Client(database);
  await client.connect();
  var keyString = Object.keys(productData).join(', ');
  var dataString = Object.values(productData).map((value) => postgresStringify(value)).join(', ');
  var qStr = `INSERT INTO ${tableName} (${keyString}) VALUES (${dataString})`;

  const res = await client.query(qStr);
  client.end();
  return res;
};

const updateOne = async (id, productData, tableName='products') => {
  const client = new Client(database);
  await client.connect();
  var dataString = Object.entries(productData).map((pair) => pair[0] + ' = ' + postgresStringify(pair[1])).join(' ');
  const res = await client.query(`UPDATE ${tableName} SET ${dataString} WHERE ${tableName}.unique_id = ${id}`);
  client.end();
  return res;
};

const deleteOne = async (id, tableName='products') => {
  const client = new Client(database);
  await client.connect();
  const res = await client.query(`DELETE FROM ${tableName} WHERE ${tableName}.unique_id = ${id}`);
  client.end();
  return res;
};

module.exports = {
  getAll,
  getOne,
  insertOne,
  updateOne,
  deleteOne
};
