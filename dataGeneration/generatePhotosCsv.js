
const fs = require('fs');
const utils = require('./utils');
const faker = require('faker');

const keyOrdering = ['product_id', 'url'];

const generateRow = function(product_id) {
  var mini = (product_id > 5 ? 10 : 0); // TODO FIX
  var photoCount = utils.randInt(mini, 15);
  var photos = [];

  for (var i=0; i<photoCount; i++) {
    photos.push(`${product_id},${faker.image.image()}`)
  }
  return photos.join('\n');
}

function writeNTimes(fname, genData, n) {
  return new Promise((resolve) => {
    let i = 0;
    let writer = fs.createWriteStream(fname);
    writer.write(keyOrdering.join(',') + '\n', 'utf8');

    write();
    function write() {
      let ok = true;
      do {
        var row = genData(i);
        i++;
        if (i === n) {
          writer.write(row, 'utf8');
          resolve();
        } else {
          if(row) {
            ok = writer.write(row + '\n', 'utf8');
          } else {
            ok = writer.write('', 'utf8');
          }
        }
      } while (i < n && ok);
      if (i < n) {
        writer.once('drain', write);
      }
    }
  });
}

writeNTimes('photos.csv', generateRow, 10000000);
