/*
Question:
Move all zeroes in an array to the end.

Rules:
- Maintain the relative order of non-zero elements
- Modify array in-place if possible
- Works for numbers
- Return the modified array

Examples:
[0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]
[0, 0, 0, 1]     → [1, 0, 0, 0]
*/


/*
Approach 1: Using Extra Array

Understanding:
- First collect all non-zero elements
- Place them at the beginning of array
- Fill remaining positions with zeros
*/

function moveZeroesToEnd1(arr) {
  let nonZeroes = [];

  // collect non-zero elements
  for (let el of arr) {
    if (el !== 0) {
      nonZeroes.push(el);
    }
  }

  // place non-zero elements first
  for (let i = 0; i < nonZeroes.length; i++) {
    arr[i] = nonZeroes[i];
  }

  // fill remaining with zeros
  for (let i = nonZeroes.length; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Two-pointer technique 

Understanding:
- Maintain a pointer insertPos for next non-zero position
- Traverse array
- When non-zero found → move it forward
- After traversal, fill remaining positions with zero
*/

function moveZeroesToEnd2(arr) {
  let insertPos = 0;

  // move non-zero elements forward
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos++] = arr[i];
    }
  }

  // fill remaining with zeros
  while (insertPos < arr.length) {
    arr[insertPos++] = 0;
  }

  return arr;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let arr1 = [0, 1, 0, 3, 12];
let arr2 = [0, 0, 0, 1];

console.log(moveZeroesToEnd1([...arr1])); // [1, 3, 12, 0, 0]
console.log(moveZeroesToEnd1([...arr2])); // [1, 0, 0, 0]

console.log(moveZeroesToEnd2([...arr1])); // [1, 3, 12, 0, 0]
console.log(moveZeroesToEnd2([...arr2])); // [1, 0, 0, 0]
