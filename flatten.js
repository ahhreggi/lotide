const flatten = function(array) {
  const flattenedArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let innerItem of item) {
        flattenedArray.push(innerItem);
      }
    } else {
      flattenedArray.push(item);
    }
  }
  return flattenedArray;
};

module.exports = flatten;

// TESTING

// const assertArraysEqual = require('./assertArraysEqual');

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([[1, 2, 3, 4, 5, 6]]), [1, 2, 3, 4, 5, 6]);