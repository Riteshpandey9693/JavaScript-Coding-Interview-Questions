/*
Question:
Find the sum of all elements in an array.

Rules:
- Sum all numeric elements
- Works with positive and negative numbers
- Return 0 for an empty array

Examples:
[1, 2, 3, 4] → 10
[-1, 2, -3]  → -2
*/


/*
Approach 1: Using reduce() 

Understanding:
- reduce() accumulates values into a single result
- Start accumulator from 0
- Add each element to accumulator
- Final accumulator value is the sum

*/

function sumOfArrayElements1(arr) {
  return arr.reduce((acc, el) => acc + el, 0);
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 2: Using loop 

Understanding:
- Initialize sum as 0
- Traverse array using loop
- Add each element to sum
- Return final sum
*/

function sumOfArrayElements2(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let arr1 = [1, 2, 3, 4];
let arr2 = [-1, 2, -3];

console.log(sumOfArrayElements1(arr1)); // 10
console.log(sumOfArrayElements1(arr2)); // -2

console.log(sumOfArrayElements2(arr1)); // 10
console.log(sumOfArrayElements2(arr2)); // -2
