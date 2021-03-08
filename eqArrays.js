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

module.exports = eqArrays;

