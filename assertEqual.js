// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let strAct = typeof actual === "string" ? '"' : '';
  let strExp = typeof expected === "string" ? '"' : '';
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${strAct}${actual}${strAct} === ${strExp}${expected}${strExp}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${strAct}${actual}${strAct} !== ${strExp}${expected}${strExp}`);
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