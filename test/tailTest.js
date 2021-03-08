const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should return an empty array for an array with one element", () => {
    assert.deepEqual(tail(["Yo Yo"]), []);
  });
  it("should return an ampty array for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});