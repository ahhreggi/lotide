const without = function(source, itemsToRemove) {
  const filteredArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

module.exports = without;

// TESTING

// const assertArraysEqual = require('./assertArraysEqual');

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);