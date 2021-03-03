const assertEqual = function(actual, expected) {
  let strAct = typeof actual === "string" ? '"' : '';
  let strExp = typeof expected === "string" ? '"' : '';
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${strAct}${actual}${strAct} === ${strExp}${expected}${strExp}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${strAct}${actual}${strAct} !== ${strExp}${expected}${strExp}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const counter = {};
  // For each item in allItems
  for (const item of allItems) {
    // If item is a valid key in itemsToCount and its value is true
    if (itemsToCount[item]) {
      // Add it to the counter obj (or update if already existing)
      counter[item] = counter[item] ? counter[item] + 1 : 1;
    }
  }
  return counter;
};

// Test Cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);