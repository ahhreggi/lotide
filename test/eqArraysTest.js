const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("eqArrays", () => {
  it("should return true for equal arrays of equal length", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("should return false for inequal arrays of equal length", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it("should return false for arrays of inequal length", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2]));
  });
  it("should return true for two empty arrays", () => {
    assert.isTrue(eqArrays([], []));
  });
  it("should return true for nested arrays of equal depths and values", () => {
    assert.isTrue(eqArrays([[[1]]], [[[1]]]));
    assert.isTrue(eqArrays([[[1, 2, 3]]], [[[1, 2, 3]]]));
  });
  it("should return false for nested arrays of inequal depths and values", () => {
    assert.isFalse(eqArrays([1], [[1]]));
    assert.isFalse(eqArrays([1, [[2], 3]], [[1, 2], [3]]));
  });
});