const countLetters = function(string) {
  const chars = string.split(" ").join("");
  const counters = {};
  for (let char of chars) {
    counters[char] = counters[char] ? counters[char] + 1 : 1;
  }
  return counters;
};

module.exports = countLetters;

// TESTING

// const assertEqual = require('./assertEqual');

// assertEqual(countLetters('LHL')["L"], 2);
// assertEqual(countLetters('LHL')["H"], 1);
// assertEqual(countLetters('Lighthouse')["h"], 2);