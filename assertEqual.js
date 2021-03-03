// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:", inspect(actual), "===", inspect(expected));
  } else {
    console.log("🛑🛑🛑 Assertion Failed:", inspect(actual), "!==", inspect(expected));
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello", "Hello");
assertEqual("Hello", "World");
assertEqual(123, 123);
assertEqual(123, 456);
assertEqual(123, "123");