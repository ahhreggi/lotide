const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// TESTING

// const assertEqual = require('./assertEqual');

// assertEqual(findKeyByValue({a: 1, b: 2, c: 3}, 2), 'b');
// assertEqual(findKeyByValue({a: 1, b: 2, c: 3}, 3), 'c');
// assertEqual(findKeyByValue({a: 1, b: 2, c: 3}, 4), undefined);