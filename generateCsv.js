
const fs = require('fs');
const faker = require('faker');
const keyOrdering = [
  "unique_id",
  "name",
  "category",
  "manufacturer",
  "primary_image",
  "review_one_star_count",
  "review_two_star_count",
  "review_three_star_count",
  "review_four_star_count",
  "review_five_star_count",
  "review_count",
  "question_count",
  "price",
  "total_price",
  "stock",
  "is_prime",
  "description"
];

function writeNTimes(fname, genData, n) {
  let i = 1;
  let writer = fs.createWriteStream(fname);

  write();
  function write() {
    let ok = true;
    do {
      i++;
      if (i === n + 1) {
        writer.write(genData(i) + '\n', 'utf8');
      } else {
        ok = writer.write(genData(i) + '\n', 'utf8');
      }
    } while (i < n + 1 && ok);
    if (i < n + 1) {
      writer.once('drain', write);
    }
  }
}

function generateCsv(fname, genData, n) {
  // let startTime = Math.floor(Date.now() / 1000);
  writeNTimes(fname, genData, n);
  // console.log(Math.floor(Date.now() / 1000) - startTime);
}

function generatePsqlObj(unique_id) {
  let data = {
    unique_id: unique_id,
    name: faker.commerce.productName(),
    category: 'category ' + unique_id.toString(),
    manufacturer: 'manufacturer ' + unique_id.toString(),
    primary_image: faker.image.image(),
    review_one_star_count: faker.random.number(250),
    review_two_star_count: faker.random.number(250),
    review_three_star_count: faker.random.number(250),
    review_four_star_count: faker.random.number(250),
    review_five_star_count: faker.random.number(250),
    question_count: faker.random.number(250),
    price: faker.commerce.price(),
    total_price: faker.commerce.price(),
    stock: faker.random.number(250),
    is_prime: faker.random.boolean(),
    description: faker.lorem.paragraphs()
  };
  data.review_count = (data.review_one_star_count + 
    data.review_two_star_count + 
    data.review_three_star_count + 
    data.review_four_star_count + 
    data.review_five_star_count)
  return data;
}

function generateCsvRow(unique_id) {
  var obj = generatePsqlObj(unique_id);
  var values = [];

  for (let k of keyOrdering) {
    values.push(JSON.stringify(obj[k]));
  }
  return values.join(',');
}

generateCsv("output.csv", generateCsvRow, 1000000);
