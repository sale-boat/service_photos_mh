const _ = require('underscore');

const stringify = function(value) {
  if (Array.isArray(value)) {
    return '"{' + _.map(value, (item) => stringify(item)).join(',') + '}"';
  }
  return JSON.stringify(value);
}

module.exports = { stringify };
