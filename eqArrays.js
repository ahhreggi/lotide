const assertEqual = function(actual, expected) {
  let strAct = typeof actual === "string" ? '"' : '';
  let strExp = typeof expected === "string" ? '"' : '';
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${strAct}${actual}${strAct} === ${strExp}${expected}${strExp}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${strAct}${actual}${strAct} !== ${strExp}${expected}${strExp}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // If both items are arrays, check if they are equal
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      return eqArrays(array1[i], array2[i]);
    // Otherwise, compare the primitive values normally
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Test Cases
console.log('--- Standard Test Cases ---');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], []), false);
console.log('--- Recursive Test Cases ---');
assertEqual(eqArrays([[[1]]], [[[1]]]), true);
assertEqual(eqArrays([[1, 2, 3]], [[1, 2, 3]]), true);
assertEqual(eqArrays([[1, [[2], 3]]], [[1, [[2], 3]]]), true);

