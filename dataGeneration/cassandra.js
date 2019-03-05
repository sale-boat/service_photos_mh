const utils = require('./utils');
const faker = require('faker');
const _ = require('underscore');

function generateCassandraObj(unique_id) {
  var mini = (unique_id > 9000000 ? 10 : 0);
  let data = {
    unique_id: unique_id,
    name: faker.commerce.productName(),
    category: 'category ' + unique_id.toString(),
    manufacturer: 'manufacturer ' + unique_id.toString(),
    primary_image: faker.image.image(),
    secondary_images: _.map(_.range(utils.randInt(mini, 15)), (item) => faker.image.image()),
    review_one_star_count: faker.random.number(250),
    review_two_star_count: faker.random.number(250),
    review_three_star_count: faker.random.number(250),
    review_four_star_count: faker.random.number(250),
    review_five_star_count: faker.random.number(250),
    question_count: faker.random.number(250),
    price: faker.random.number(250),
    total_price: faker.random.number(250),
    stock: faker.random.number(250),
    is_prime: faker.random.boolean(),
    description: faker.lorem.paragraph(0)
  };
  data.id = unique_id;
  data.review_count = (data.review_one_star_count + 
    data.review_two_star_count + 
    data.review_three_star_count + 
    data.review_four_star_count + 
    data.review_five_star_count)
  data.slug = `${data.name}${data.unique_id}`;
  return data;
}

module.exports = { generateCassandraObj };
