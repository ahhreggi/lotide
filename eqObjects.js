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
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Return true if both objects have identical keys with identical values
// Otherwise, return false
const eqObjects = function(object1, object2) {
  // If the objects don't have the same length, they are not equal
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    // For each key in object1
    for (const key of Object.keys(object1)) {
      // If the key's value in both objects are arrays, check if they are equal
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      // If the key's value in both objects are objects, check if they are equal
      } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
        return eqObjects(object1[key], object2[key]);
      // Otherwise, compare the primitive values normally
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// Test Cases

console.log('--- Standard Test Cases ---');

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

console.log('--- Recursive Test Cases ---');

const x = { a: {c: 1}, b: {d: 2}};
const y = { b: {d: 2}, a: {c: 1}};
assertEqual(eqObjects(x, y), true);

const x1 = { a: {c: {i: 1}}, b: {d: {j: 2}}};
const y1 = { a: {c: {i: 1}}, b: {d: {j: 2}}};
assertEqual(eqObjects(x1, y1), true);