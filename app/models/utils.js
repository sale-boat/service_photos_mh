
const databaseStringify = function (value, inner=false) {
  // Postgres requires strings to look like, 'example', and not 
  var result;
  if (typeof value === 'string') {
  	result = JSON.stringify(value);
  	if (!inner) {
    	result = '\'' + result.slice(1, result.length - 1) + '\'';
  	}
  } else if (Array.isArray(value)) {
  	return '\'{' + value.map((val) => databaseStringify(val, true)).join(',') + '}\'';
  } else {
  	return JSON.stringify(value);
  }
  return result;
}

module.exports = {databaseStringify};
