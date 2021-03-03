const assertEqual = function(actual, expected) {
  let strAct = typeof actual === "string" ? '"' : '';
  let strExp = typeof expected === "string" ? '"' : '';
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${strAct}${actual}${strAct} === ${strExp}${expected}${strExp}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${strAct}${actual}${strAct} !== ${strExp}${expected}${strExp}`);
  }
};

const countLetters = function(string) {
  const chars = string.split(" ").join("");
  const counters = {};
  for (let char of chars) {
    counters[char] = counters[char] ? counters[char] + 1 : 1;
  }
  return counters;
};

assertEqual(countLetters('LHL')["L"], 2);
assertEqual(countLetters('LHL')["H"], 1);
assertEqual(countLetters('Lighthouse')["h"], 2);