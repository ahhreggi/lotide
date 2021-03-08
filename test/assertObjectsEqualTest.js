const assertObjectsEqual = require('../assertObjectsEqual');

// assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
// assertObjectsEqual({c: "foo", d: "bar"}, {d: "bar", c: "foo"});
// assertObjectsEqual({a: [1, 2]}, {a: [1, 2]});
// assertObjectsEqual({a: [1, 2]}, {a: [2, 3]});
// assertObjectsEqual({a: [1, 2]}, {a: "not an array"});