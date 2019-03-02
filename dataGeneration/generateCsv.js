
const fs = require('fs');
var zlib = require('zlib');
const postgresHelpers = require('./postgres');
const cassandraHelpers = require('./cassandra');
const utils = require('./utils');

const keyOrdering = [
  "unique_id",
  "name",
  "category",
  "manufacturer",
  "primary_image",
  "secondary_images",
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

function writeNTimes(fname, genData, n, isPostgres=true) {
  return new Promise((resolve) => {
    let i = 0;
    let writer = fs.createWriteStream(fname);
    writer.write(keyOrdering.join(',') + '\n', 'utf8');

    write();
    function write() {
      let ok = true;
      do {
        i++;
        if (i === n) {
          writer.write(genData(i, isPostgres=isPostgres), 'utf8');
          resolve();
        } else {
          ok = writer.write(genData(i, isPostgres=isPostgres) + '\n', 'utf8');
        }
      } while (i < n && ok);
      if (i < n) {
        writer.once('drain', write);
      }
    }
  });
}

function generateCsvRow(unique_id, isPostgres=true) {
  if (isPostgres) {
    var obj = postgresHelpers.generatePsqlObj(unique_id);
  } else {
    var obj = cassandraHelpers.generateCassandraObj(unique_id);
  }
  var values = [];

  for (let k of keyOrdering) {
    values.push(utils.stringify(obj[k]));
  }
  return values.join(',');
}

function compressFile(fname) {
  return new Promise(function(resolve) {
    var gzip = zlib.createGzip();
    var r = fs.createReadStream(fname);
    var w = fs.createWriteStream(`${fname}.gz`);
    r.pipe(gzip).pipe(w);
    r.on('end', () => {
      resolve();
    });
  })
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
  var startTime = Date.now();
  console.log(`Beginning csv data generation... ${new Date(startTime).toLocaleTimeString()}`);
  writeNTimes(cmdLineArgs.fname, generateCsvRow, cmdLineArgs.n, cmdLineArgs.isPostgres)
  .then(() => {
    console.log(`Completed csv data generation, duration: ${(Date.now() / 1000) - (startTime / 1000)} sec... ${new Date(Date.now()).toLocaleTimeString()}`);
  })
  .then(() => {
    if (cmdLineArgs.compress) {
      startTime = Date.now();
      console.log(`Completed csv data compression... ${new Date(startTime).toLocaleTimeString()}`);
      compressFile(cmdLineArgs.fname)
      .then(() => {
        console.log(`Completed csv data generation, duration: ${(Date.now() / 1000) - (startTime / 1000)} sec... ${new Date(Date.now()).toLocaleTimeString()}`);
      });
    }
  });
}

main();