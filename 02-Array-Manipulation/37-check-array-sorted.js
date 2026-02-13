/*
Question:
Check if an array is sorted in ascending order.

Rules:
- Return true if array is sorted in non-decreasing order
- Return false otherwise
- Works for numbers and other comparable primitive values
- Empty or single-element array is considered sorted

Examples:
[1, 2, 3, 4] → true
[1, 3, 2, 4] → false
*/


/*
Approach 1: Using every() method

Understanding:
- Compare each element with the next element
- If any element is greater than the next one → not sorted
- every() stops early if condition fails
*/

function isSorted1(arr) {
  return arr.every((el, idx) => {
    if (idx === arr.length - 1) return true;
    return arr[idx] <= arr[idx + 1];
  });
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 2: Using for loop 

Understanding:
- Start from index 1
- Compare current element with previous
- If previous > current → not sorted
- Break early for optimization
*/

function isSorted2(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }

  return true;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 3, 2, 4];

console.log(isSorted1(arr1)); // true
console.log(isSorted1(arr2)); // false

console.log(isSorted2(arr1)); // true
console.log(isSorted2(arr2)); // false
