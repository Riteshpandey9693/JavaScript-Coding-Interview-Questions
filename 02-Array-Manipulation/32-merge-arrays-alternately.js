/*
Question:
Merge two arrays alternately.

Rules:
- Take elements one by one from each array alternately
- If one array is longer, append remaining elements at the end
- Preserve the relative order of elements
- Works for numbers, strings, and other primitive values

Examples:
[1, 3, 5] & [2, 4, 6]   → [1, 2, 3, 4, 5, 6]
[1, 2] & [3, 4, 5, 6] → [1, 3, 2, 4, 5, 6]
*/


/*
Approach: Two-pointer technique (BEST & optimized)

Understanding:
- Use two pointers i and j for arr1 and arr2
- Pick one element from each array alternately
- When one array finishes, append remaining elements
- Ensures order is preserved
*/

function mergeArraysAlternately(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  // merge alternately while both arrays have elements
  while (i < arr1.length && j < arr2.length) {
    result.push(arr1[i++]);
    result.push(arr2[j++]);
  }

  // append remaining elements (if any)
  while (i < arr1.length) {
    result.push(arr1[i++]);
  }

  while (j < arr2.length) {
    result.push(arr2[j++]);
  }

  return result;
}

/*
Time Complexity: O(n + m)
Space Complexity: O(n + m)
*/


// Test cases
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let arr3 = [1, 2];
let arr4 = [3, 4, 5, 6];

console.log(mergeArraysAlternately(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
console.log(mergeArraysAlternately(arr3, arr4)); // [1, 3, 2, 4, 5, 6]
