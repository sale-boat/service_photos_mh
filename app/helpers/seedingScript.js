const { Client } = require('pg');
const { database } = require('../../config');

const { createTableQueries, createProductQuery } = require('./seedingQueries');
const {
  generateName,
  generateCategory,
  generateManufacturer,
  generateImage,
  generateRandomCount,
  generateRandomBoolean,
  generateDescription,
} = require('./seedingHelperFunctions');

async function seedScript() {
  const client = new Client(database);

  await client.connect();
  try {
    await client.query(createTableQueries, []);
    const mockData = [];
    for (let i = 1; i <= 100; i += 1) {
      const reviews = [];
      for (let b = 0; b < 5; b += 1) {
        reviews.push(generateRandomCount());
      }
      reviews.push(reviews.reduce((total, value) => total + value));

      const prices = [];
      prices.push(generateRandomCount());
      prices.unshift(prices[0] - 10);

      const values = [
        i,
        generateName(i),
        generateCategory(i),
        generateManufacturer(i),
        generateImage(generateCategory(i), i),
        ...reviews,
        generateRandomCount(),
        ...prices,
        generateRandomCount(),
        generateRandomBoolean(),
        generateDescription(),
      ];

      mockData.push(client.query({ text: createProductQuery, values }));
    }
    await Promise.all(mockData);
    // console.log('newRes:', newRes);
  } catch (err) {
    // console.log(err.stack);
  }

  await client.end();
}

seedScript();
module.exports = seedScript;
