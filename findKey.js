const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:", inspect(actual), "===", inspect(expected));
  } else {
    console.log("🛑🛑🛑 Assertion Failed:", inspect(actual), "!==", inspect(expected));
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

const data = {a: 1, b: 2, c: 3, d: 4};
assertEqual(findKey(data, x => x === 3), "c");
assertEqual(findKey(data, x => x >= 4), "d");