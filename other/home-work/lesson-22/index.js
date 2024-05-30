"use strict";

/**
 * @param {Array} arr
 * @returns® {Object} - iterator
 */
function Boo(arr) {
  let index = 0;
  return {
    next() {
      return {
        value: arr[index++],
        done: index > arr.length
      }
    }
  }
}

const iterator = Boo([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Output:
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }