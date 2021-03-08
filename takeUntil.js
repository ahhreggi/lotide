const takeUntil = function(array, callback) {
  const result = [];
  for (const element of array) {
    if (callback(element)) {
      return result;
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = takeUntil;

// TESTING

// const assertArraysEqual = require('./assertArraysEqual');

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// const data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// assertArraysEqual(takeUntil(data3, x => x > 4), [1, 2, 3, 4]);
// assertArraysEqual(takeUntil(data3, x => x % 2 === 0), [1]);
// assertArraysEqual(takeUntil(data3, x => x === 11), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



