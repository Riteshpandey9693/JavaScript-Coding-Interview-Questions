/*
Question:
Merge two arrays into a single array.

Rules:
- Preserve the order of elements
- Return a new merged array
- Works for numbers, strings, and other primitive values
- Arrays may or may not be sorted (depends on approach)

Examples:
[1, 2, 3] + [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/


/*
Approach 1: Using Spread Operator (BEST & CLEANEST)

Understanding:
- Spread operator expands elements of both arrays
- Creates a new array containing all elements
- Order is preserved automatically
*/

function mergeTwoArrays1(arr1, arr2) {
  return [...arr1, ...arr2];
}

/*
Time Complexity: O(n + m)
Space Complexity: O(n + m)
*/


/*
Approach 2: Using concat()

Understanding:
- concat() joins two arrays and returns a new array
- Does not mutate original arrays
- Order is preserved

Why this approach:

*/

function mergeTwoArrays2(arr1, arr2) {
  return arr1.concat(arr2);
}

/*
Time Complexity: O(n + m)
Space Complexity: O(n + m)
*/


/*
Approach 3: Using Two Pointers (for SORTED arrays)

Understanding:
- Works when both arrays are already sorted
- Compare elements from both arrays
- Push smaller element first
- Continue until both arrays are exhausted
*/

function mergeTwoArrays3(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  let idx = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result[idx++] = arr1[i++];
    } else {
      result[idx++] = arr2[j++];
    }
  }

  while (i < arr1.length) {
    result[idx++] = arr1[i++];
  }

  while (j < arr2.length) {
    result[idx++] = arr2[j++];
  }

  return result;
}

/*
Time Complexity: O(n + m)
Space Complexity: O(n + m)
*/


// Test cases
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(mergeTwoArrays1(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
console.log(mergeTwoArrays2(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
console.log(mergeTwoArrays3(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
