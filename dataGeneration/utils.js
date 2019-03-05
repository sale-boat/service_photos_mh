const _ = require('underscore');

const cassStr = (string) => (typeof string === 'string' ? string.replace(/,/g, '\\,') : JSON.stringify(string));
const cassArrStr = (string) => cassStr(string).replace(/'/g, '\\\'').replace(/"/g, '\\\"');

const stringify = function(value, isPostgres=true) {
  if (isPostgres) {
    if (Array.isArray(value)) {
      return '"{' + _.map(value, (item) => stringify(item, isPostgres)).join(',') + '}"';
    } else {
      return JSON.stringify(value)
    }
  } else {
    if (Array.isArray(value)) {
      return '"[' + _.map(value, (item) => '\'' + cassArrStr(item) + '\'').join(',') + ']"';
    } else {
      return cassStr(value);
    }
  }
}

const randInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports = { stringify, randInt };
