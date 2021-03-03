const assertEqual = function(actual, expected) {
  let strAct = typeof actual === "string" ? '"' : '';
  let strExp = typeof expected === "string" ? '"' : '';
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${strAct}${actual}${strAct} === ${strExp}${expected}${strExp}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${strAct}${actual}${strAct} !== ${strExp}${expected}${strExp}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

assertEqual(findKeyByValue({a: 1, b: 2, c: 3}, 2), 'b');
assertEqual(findKeyByValue({a: 1, b: 2, c: 3}, 3), 'c');
assertEqual(findKeyByValue({a: 1, b: 2, c: 3}, 4), undefined);