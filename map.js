const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// TESTING

// const assertArraysEqual = require('./assertArraysEqual');

// const words = ["once", "upon", "a", "time"];
// assertArraysEqual(map(words, word => word[0]), ['o', 'u', 'a', 't']);
// assertArraysEqual(map(words, word => word.toUpperCase()), ['ONCE', 'UPON', 'A', 'TIME']);
// assertArraysEqual(map(words, word => word + "1"), ['once1', 'upon1', 'a1', 'time1']);


