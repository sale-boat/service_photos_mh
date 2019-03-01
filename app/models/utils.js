
const databaseStringify = function (value) {
  // Postgres requires strings to look like, 'example', and not 
  var result = JSON.stringify(value);
  if (typeof value === 'string') {
    result = '\'' + result.slice(1, result.length - 1) + '\'';
  }
  return result;
}

module.exports = {databaseStringify};
