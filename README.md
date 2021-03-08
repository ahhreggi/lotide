# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ahhreggi/lotide`

**Require it:**

`const _ = require('@ahhreggi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Evaluate array1 and array2 then log the results
* `assertEqual(value1, value2)`: Evaluate value1 and value2 then log the results
* `assertObjectsEqual(obj1, obj2)`: Evaluate obj1 and obj2 then log the results
* `countLetters(string)`: Return an object containing character counts for each character in string
* `countOnly(allItems, itemsToCount)`: Return an object containing instance counts for each element in allItems
  - `allItems`: an array of strings (e.g., `['1', '1', '2']`)
  - `itemsToCount`: an object of elements with a boolean value indicating whether or not it should be counted (e.g., `{'1': true, '2': false}`)
* `eqArrays(array1, array2)`: Evaluate array1 === array2
* `eqObjects(obj1, obj2)`: Evaluate obj1 === obj2
* `findKey(object, callback)`: Return the first key in object for which the callback function returns true
* `findKeyByValue(object, value)`: Return the first key in object with the given value
* `flatten(array)`: Return a nested array as a single-level array
* `head(array)`: Return the first element of array
* `letterPositions(sentence)`: Return an object containing the indices for which each character in sentence is found
* `map(array, callback)`: Return a new array with the results of calling the callback on each element in array
* `middle(array)`: Return the middle element(s) of array
* `tail(array)`: Return an array containing every element after the head of array
* `takeUntil(array, callback)`: Return all elements of array until an element for which the callback function is applied to returns true
* `without(source, itemsToRemove)`: Return a new array with elements in source (array) that are not in itemsToRemove (array)
