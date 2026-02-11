/*
Question:
Find the union of two arrays.

Rules:
- Return all unique elements from both arrays
- No duplicate values in the result
- Order does not matter
- Works for numbers, strings, and other primitive values

Examples:
[1, 2, 3] & [3, 4, 5] → [1, 2, 3, 4, 5]
*/


/*
Approach 1: Using Set with Spread Operator

Understanding:
- Combine both arrays using spread operator
- Convert merged array into a Set to remove duplicates
- Convert Set back to array

*/

function findUnionOfTwoArrays1(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

/*
Time Complexity: O(n + m)
Space Complexity: O(n + m)
*/


/*
Approach 2: Using Set manually (Step-by-step logic)

Understanding:
- Create an empty Set
- Insert elements from first array
- Insert elements from second array
- Set automatically ensures uniqueness
- Convert Set to array
*/

function findUnionOfTwoArrays2(arr1, arr2) {
  let result = new Set();

  for (let i = 0; i < arr1.length; i++) {
    result.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    result.add(arr2[i]);
  }

  return [...result];
}

/*
Time Complexity: O(n + m)
Space Complexity: O(n + m)
*/


// Test cases
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

console.log(findUnionOfTwoArrays1(arr1, arr2)); // [1, 2, 3, 4, 5]
console.log(findUnionOfTwoArrays2(arr1, arr2)); // [1, 2, 3, 4, 5]
