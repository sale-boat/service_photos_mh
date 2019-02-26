const faker = require('faker');

module.exports = {
  generateName: number => `Amazon Product ${number}`,
  generateCategory: (number) => {
    const categoryArr = [
      'electronics',
      'beauty',
      'outdoor',
      'wearables',
      'bath',
      'clothing',
      'board games',
      'food',
      'toys',
      'jewelery',
    ];
    let category = '';
    if (number >= 1 && number <= 10) {
      category = categoryArr[0];
    } else if (number >= 11 && number <= 20) {
      category = categoryArr[1];
    } else if (number >= 21 && number <= 30) {
      category = categoryArr[2];
    } else if (number >= 31 && number <= 40) {
      category = categoryArr[3];
    } else if (number >= 41 && number <= 50) {
      category = categoryArr[4];
    } else if (number >= 51 && number <= 60) {
      category = categoryArr[5];
    } else if (number >= 61 && number <= 70) {
      category = categoryArr[6];
    } else if (number >= 71 && number <= 80) {
      category = categoryArr[7];
    } else if (number >= 81 && number <= 90) {
      category = categoryArr[8];
    } else if (number >= 91 && number <= 100) {
      category = categoryArr[9];
    }
    return category;
  },
  generateManufacturer: () => faker.company.companyName(),
  generateImage: (category, number) => `https://s3.us-east-2.amazonaws.com/product-summary-component/${category}${number}.jpg`,
  generateRandomCount: () => faker.random.number(1000),
  generateRandomBoolean: () => faker.random.boolean(),
  generateDescription: () => (`
    Lorem ipsum dolor amet you probably haven't heard of them ennui raclette VHS irony tumeric pop-up lumbersexual palo santo truffaut yr scenester. Letterpress flannel kitsch lumbersexual, brooklyn chia keffiyeh subway tile everyday carry seitan fam schlitz glossier. Shoreditch franzen tumeric, deep v YOLO bespoke meh. Vaporware knausgaard subway tile pop-up green juice next level, food truck la croix artisan leggings portland occupy truffaut.
  `),
};
