const eqObjects = function(object1, object2) {
  // If the objects don't have the same length, they are not equal
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    // For each key in object1
    for (const key of Object.keys(object1)) {
      // If the key's value in both objects are arrays, check if they are equal
      // Otherwise, compare the primitive values normally
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log("✅✅✅ Assertion Passed:", inspect(actual), "===", inspect(expected));
  } else {
    console.log("🛑🛑🛑 Assertion Failed:", inspect(actual), "!==", inspect(expected));
  }
}

// Test Cases
assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
assertObjectsEqual({c: "foo", d: "bar"}, {d: "bar", c: "foo"});