/*
Question:
Compare two arrays and check if they are exactly equal.

Rules:
- Arrays must have the same length
- Elements must be in the same order
- Comparison should be value-by-value
- Works for numbers, strings, and other primitive values
- Return true if equal, otherwise false

Examples:
[1, 2, 3] & [1, 2, 3] → true
[1, 2, 3] & [3, 2, 1] → false
*/


/*
Approach 1: Using every() method

Understanding:
- First check if array lengths are equal
- every() checks each element with its corresponding index
- If any comparison fails, it returns false immediately
*/

function compareTwoArrays1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => {
    return element === arr2[index];
  });
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 2: Using for loop (most explicit)

Understanding:
- First check length mismatch
- Compare elements one by one using index
- Return false immediately on first mismatch
- If loop completes, arrays are equal
*/

function compareTwoArrays2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

let arr3 = [1, 2, 3];
let arr4 = [3, 2, 1];

console.log(compareTwoArrays1(arr1, arr2)); // true
console.log(compareTwoArrays1(arr3, arr4)); // false

console.log(compareTwoArrays2(arr1, arr2)); // true
console.log(compareTwoArrays2(arr3, arr4)); // false
