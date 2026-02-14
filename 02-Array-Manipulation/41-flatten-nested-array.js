/*
Question:
Flatten a nested array into a single-level array.

Rules:
- Array may contain nested arrays at multiple levels
- Return a completely flattened array
- Preserve element order

Examples:
[1, [2, [3, [4]], 5]] → [1, 2, 3, 4, 5]
[[1, 2], [3, 4]] → [1, 2, 3, 4]
*/


/*
Approach 1: Using Recursion 

Understanding:
- Traverse each element
- If element is an array → recursively flatten it
- If element is not an array → push into result
- Combine results
*/

function flattenNestedArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenNestedArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

/*
Time Complexity: O(n)
- Each element is visited once

Space Complexity: O(n)
- Result array + recursion stack (worst case depth)
*/


/*
Approach 2: Using Built-in flat() (Modern JavaScript)

Understanding:
- flat(Infinity) flattens array completely
- Infinity ensures all nesting levels are flattened

*/

function flattenNestedArray2(arr) {
  return arr.flat(Infinity);
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let arr1 = [1, [2, [3, [4]], 5]];
let arr2 = [[1, 2], [3, 4]];

console.log(flattenNestedArray(arr1));  // [1, 2, 3, 4, 5]
console.log(flattenNestedArray(arr2));  // [1, 2, 3, 4]

console.log(flattenNestedArray2(arr1)); // [1, 2, 3, 4, 5]
console.log(flattenNestedArray2(arr2)); // [1, 2, 3, 4]
