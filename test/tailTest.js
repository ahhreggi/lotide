const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(String(result), String(["Lighthouse", "Labs"]));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: An array with only one element should yield an empty array for its tail
const shortArray = tail(["alone"]);
assertEqual(shortArray.length, 0);

// Test Case: An empty array should yield an empty array for its tail
const emptyArray = tail([]);
assertEqual(emptyArray.length, 0);