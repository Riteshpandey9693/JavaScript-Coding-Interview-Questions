/*
Question:
Rotate an array by K steps to the right.

Rules:
- Rotate elements to the right
- Handle cases where k > array length
- Return rotated array
- Works for numbers and other primitive values

Examples:
[1, 2, 3, 4, 5], k = 2 → [4, 5, 1, 2, 3]
[10, 20, 30], k = 1    → [30, 10, 20]
*/


/*
Approach 1: Using Extra Array

Understanding:
- Adjust k using modulo to handle large values
- Copy last k elements first
- Then copy remaining elements
- Return new rotated array
*/

function rotateArrayByKSteps1(arr, k) {
  let result = [];

  // handle k greater than array length
  k = k % arr.length;

  // push last k elements
  for (let i = arr.length - k; i < arr.length; i++) {
    result.push(arr[i]);
  }

  // push remaining elements
  for (let i = 0; i < arr.length - k; i++) {
    result.push(arr[i]);
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: In-place Reversal Algorithm 

Understanding:
- Step 1: Reverse entire array
- Step 2: Reverse first k elements
- Step 3: Reverse remaining elements
- This effectively rotates the array

*/

function rotateArrayByKSteps2(arr, k) {
  k = k % arr.length;

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let arr1 = [1, 2, 3, 4, 5];
let k1 = 2;

let arr2 = [10, 20, 30];
let k2 = 1;

console.log(rotateArrayByKSteps1(arr1, k1)); // [4, 5, 1, 2, 3]
console.log(rotateArrayByKSteps2([...arr1], k1)); // [4, 5, 1, 2, 3]

console.log(rotateArrayByKSteps1(arr2, k2)); // [30, 10, 20]
console.log(rotateArrayByKSteps2([...arr2], k2)); // [30, 10, 20]
