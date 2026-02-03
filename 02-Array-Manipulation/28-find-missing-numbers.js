/*
Question:
Find missing numbers in an array from 1 to N.

Rules:
- Array contains numbers in the range 1 to N
- N is the maximum value present in the array
- Return all numbers missing between 1 and N
- Order of output should be increasing

Examples:
[1, 2, 4, 6] → [3, 5]
[2, 3, 7]    → [1, 4, 5, 6]
*/


/*
Approach: Using Set (BEST & OPTIMIZED)

Understanding:
- Find N as the maximum element in the array
- Store all array elements in a Set for O(1) lookup
- Loop from 1 to N
- If number is not present in Set, it is missing

Why this approach:
- Clean and readable
- Efficient lookup
- Very interview-friendly
*/

function findMissingNumbers(arr) {
  let N = Math.max(...arr);
  let set = new Set(arr);
  let result = [];

  for (let i = 1; i <= N; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let arr1 = [1, 2, 4, 6];
let arr2 = [2, 3, 7];

console.log(findMissingNumbers(arr1)); // [3, 5]
console.log(findMissingNumbers(arr2)); // [1, 4, 5, 6]
