
const fs = require('fs');
var zlib = require('zlib');
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
  return new Promise((resolve) => {
    let i = 0;
    let writer = fs.createWriteStream(fname);

    write();
    function write() {
      let ok = true;
      do {
        i++;
        if (i === n) {
          writer.write(genData(i) + '\n', 'utf8');
          resolve();
        } else {
          ok = writer.write(genData(i) + '\n', 'utf8');
        }
      } while (i < n && ok);
      if (i < n) {
        writer.once('drain', write);
      }
    }
  });
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

function compressFile(fname) {
    var gzip = zlib.createGzip();
    var r = fs.createReadStream(fname);
    var w = fs.createWriteStream(`${fname}.gz`);
    r.pipe(gzip).pipe(w);
}

function main() {
  let cmdLineArgs = {
    fname: "output.csv",
    n: 1000000,
    compress: false,
    isPostgres: true
  };  
  let args = process.argv.slice(2);

  for(let arg of args) {
    if (arg.includes('--filename=')) {
      cmdLineArgs.fname = arg.replace('--filename=', '');
    } else if (arg.includes('-c')) {
      cmdLineArgs.compress = true;
    } else if (arg.includes('--n=')) {
      cmdLineArgs.n = Number(arg.replace('--n=', ''));
    } else if (arg === '--postgres=true') {
      cmdLineArgs.isPostgres = true;
    } else if (arg === '--cassandra=true') {
      cmdLineArgs.isPostgres = false;
    }
  }
  writeNTimes(cmdLineArgs.fname, generateCsvRow, cmdLineArgs.n)
  .then(() => {
    if (cmdLineArgs.compress) {
      compressFile(cmdLineArgs.fname);
    }
  });
}

main();