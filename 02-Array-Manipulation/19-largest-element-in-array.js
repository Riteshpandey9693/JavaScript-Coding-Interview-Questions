/*
Question:
Find the largest element in an array.

Rules:
- Array may contain positive or negative numbers
- Array may contain only one element
- If array is empty, return null

Examples:
[10, 5, 20, 8] → 20
[-1, -5, -3]  → -1
[7]           → 7
*/


/*
Approach 1: Using Math.max() with spread operator (SHORTEST)

Understanding:
- Spread operator (...) expands array elements
- Math.max() returns the maximum value among arguments
- Works only if array is not empty

Note:
- Internally still iterates over array
*/

function findLargest1(arr) {
  if (arr.length === 0) {
    return null;
  }
  return Math.max(...arr);
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 2: Sorting the array 

Understanding:
- Create a copy of array to avoid mutation
- Sort array in ascending order
- Last element will be the largest

Why this is not ideal:
- Sorting does extra unnecessary work
- Worse time complexity than needed
*/

function findLargest2(arr) {
  if (arr.length === 0) {
    return null;
  }

  let newArray = [...arr];
  newArray.sort((a, b) => a - b);

  return newArray[newArray.length - 1];
}

/*
Time Complexity: O(n log n)
Space Complexity: O(n)
*/


/*
Approach 3: Manual comparison 
Understanding:
- Assume first element is the largest
- Traverse the array
- Update largest whenever a bigger value is found
- Pure logic, no built-in tricks
*/

function findLargest3(arr) {
  if (arr.length === 0) {
    return null;
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let arr1 = [10, 5, 20, 8];
let arr2 = [-1, -5, -3];
let arr3 = [7];

console.log(findLargest1(arr1)); // 20
console.log(findLargest1(arr2)); // -1
console.log(findLargest1(arr3)); // 7

console.log(findLargest2(arr1)); // 20
console.log(findLargest2(arr2)); // -1
console.log(findLargest2(arr3)); // 7

console.log(findLargest3(arr1)); // 20
console.log(findLargest3(arr2)); // -1
console.log(findLargest3(arr3)); // 7
