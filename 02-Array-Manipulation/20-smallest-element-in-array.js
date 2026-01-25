/*
Question:
Find the smallest element in an array.

Rules:
- Array may contain positive or negative numbers
- Array may contain only one element
- If array is empty, return null

Examples:
[10, 5, 20, 8] → 5
[-1, -5, -3]  → -5
[7]           → 7
*/


/*
Approach 1: Using Math.min() with spread operator (SHORTEST)

Understanding:
- Spread operator (...) expands array elements
- Math.min() returns the smallest value among arguments
- Works only if array is not empty
*/

function findSmallestElement1(arr) {
  if (arr.length === 0) {
    return null;
  }
  return Math.min(...arr);
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
- First element will be the smallest
*/

function findSmallestElement2(arr) {
  if (arr.length === 0) {
    return null;
  }

  let newArray = [...arr];
  newArray.sort((a, b) => a - b);

  return newArray[0];
}

/*
Time Complexity: O(n log n)
Space Complexity: O(n)
*/


/*
Approach 3: Manual comparison 

Understanding:
- Assume first element is the smallest
- Traverse the array
- Update smallest whenever a smaller value is found
- Pure logic, no built-in tricks
*/

function findSmallestElement3(arr) {
  if (arr.length === 0) {
    return null;
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let arr1 = [10, 5, 20, 8];
let arr2 = [-1, -5, -3];
let arr3 = [7];

console.log(findSmallestElement1(arr1)); // 5
console.log(findSmallestElement1(arr2)); // -5
console.log(findSmallestElement1(arr3)); // 7

console.log(findSmallestElement2(arr1)); // 5
console.log(findSmallestElement2(arr2)); // -5
console.log(findSmallestElement2(arr3)); // 7

console.log(findSmallestElement3(arr1)); // 5
console.log(findSmallestElement3(arr2)); // -5
console.log(findSmallestElement3(arr3)); // 7
