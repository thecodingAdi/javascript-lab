/*
  Question:
  Check whether a given array is sorted in ascending order.

  Example:
  [1, 2, 3, 4] → Sorted
  [1, 3, 2, 4] → Not Sorted

  Concepts Used:
  - Arrays
  - Loop
  - Conditional statements

  Day 14: Revision & Logic Strengthening
  
*/

function isSorted(arr) {
   
  for (let i = 1; i < arr.length; i++) {

    if (arr[i] < arr[i - 1]) {    // If current element is smaller than previous, array is not sorted
      return false;
    }
  }
  return true;
}

// Test cases
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 2, 4, 5];
const arr3 = [10];
const arr4 = [];

console.log("Array 1:", isSorted(arr1)); // true
console.log("Array 2:", isSorted(arr2)); // false
console.log("Array 3:", isSorted(arr3)); // true
console.log("Array 4:", isSorted(arr4)); // true
