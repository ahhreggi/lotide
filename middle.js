const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const middle = function(array) {
  const result = [];
  // If the array length is odd, length % 2 is not 0, so return the middle element
  if (array.length % 2) {
    console.log('odd');
    result.push(array[Math.floor(array.length / 2)]);
  } else if (array.length > 0) {
    result.push(array[array.length / 2 - 1]);
    result.push(array[array.length / 2]);
  }
  return result;
};

// Test Cases
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([]), []);