const middle = function(array) {
  const result = [];
  // If the array length is odd, length % 2 is not 0, so return the middle element
  if (array.length % 2) {
    result.push(array[Math.floor(array.length / 2)]);
  } else if (array.length > 0) {
    result.push(array[array.length / 2 - 1]);
    result.push(array[array.length / 2]);
  }
  return result;
};

module.exports = middle;