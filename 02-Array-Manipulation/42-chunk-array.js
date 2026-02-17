/*
Question:
Chunk an array into smaller arrays of given size.

Rules:
- Divide array into groups of specified size
- Last chunk can be smaller if elements remain
- Preserve original order
- Return new 2D array

Examples:
[1,2,3,4,5], size=2 → [[1,2],[3,4],[5]]
[1,2,3,4], size=3 → [[1,2,3],[4]]
*/


/*
Approach 1: Using Loop + slice()

Understanding:
- Iterate in steps of "size"
- Use slice(i, i + size) to extract chunk
- Push each chunk into result array
*/

function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

/*
Time Complexity: O(n)
- Each element is visited once

Space Complexity: O(n)
- New 2D array is created
*/


/*
Approach 2: Using While Loop 

Understanding:
- Use index pointer
- Move pointer forward by size each iteration
*/

function chunkArray2(arr, size) {
  let result = [];
  let index = 0;

  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let arr1 = [1, 2, 3, 4, 5];
let size1 = 2;

let arr2 = [1, 2, 3, 4];
let size2 = 3;

console.log(chunkArray(arr1, size1));  // [[1,2],[3,4],[5]]
console.log(chunkArray(arr2, size2));  // [[1,2,3],[4]]

console.log(chunkArray2(arr1, size1)); // [[1,2],[3,4],[5]]
console.log(chunkArray2(arr2, size2)); // [[1,2,3],[4]]
