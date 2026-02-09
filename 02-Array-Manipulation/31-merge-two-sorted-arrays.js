/*
Question:
Merge two sorted arrays into a single sorted array.

Rules:
- Both input arrays are already sorted
- Final merged array must also be sorted
- Do not modify the original arrays
- Works for numbers and other comparable primitive values

Examples:
[1, 3, 5] & [2, 4, 6] → [1, 2, 3, 4, 5, 6]
*/


/*
Approach: Two-pointer technique 

Understanding:
- Use two pointers i and j for arr1 and arr2
- Compare current elements of both arrays
- Push the smaller element into result
- Move the pointer of the chosen element
- After one array ends, append remaining elements
*/

function mergeTwoSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  // merge while both arrays have elements
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  // append remaining elements
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

console.log(mergeTwoSortedArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
