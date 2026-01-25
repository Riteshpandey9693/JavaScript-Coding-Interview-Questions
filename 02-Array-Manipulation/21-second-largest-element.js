/*
Question:
Find the second largest element in an array.

Rules:
- Array may contain duplicate values
- Second largest must be strictly smaller than the largest
- If no such element exists, return null
- If array length < 2, return null

Examples:
[10, 20, 30, 40] → 30
[5, 5, 5]       → null
[8, 2]          → 2
*/


/*
Approach 1: Sorting the array 

Understanding:
- Create a copy of the array to avoid mutation
- Sort array in ascending order
- Largest element will be at the end
- Traverse backwards to find the first element
  that is smaller than the largest
*/

function findSecondLargest1(arr) {
  if (arr.length < 2) {
    return null;
  }

  let newArray = [...arr].sort((a, b) => a - b);
  let largest = newArray[newArray.length - 1];

  for (let i = newArray.length - 2; i >= 0; i--) {
    if (newArray[i] !== largest) {
      return newArray[i];
    }
  }

  return null;
}

/*
Time Complexity: O(n log n)
Space Complexity: O(n)
*/


/*
Approach 2: Two-pass traversal (optimized)

Understanding:
- First pass: find the largest element
- Second pass: find the largest element
  that is smaller than the largest
- Avoids sorting
*/

function findSecondLargest2(arr) {
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 3: Single-pass traversal

Understanding:
- Track largest and second largest simultaneously
- Update both values during traversal
- Handles duplicates correctly
- Most efficient solution
*/

function findSecondLargest3(arr) {
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } 
    else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let arr1 = [10, 20, 30, 40];
let arr2 = [5, 5, 5];
let arr3 = [8, 2];

console.log(findSecondLargest1(arr1)); // 30
console.log(findSecondLargest1(arr2)); // null
console.log(findSecondLargest1(arr3)); // 2

console.log(findSecondLargest2(arr1)); // 30
console.log(findSecondLargest2(arr2)); // null
console.log(findSecondLargest2(arr3)); // 2

console.log(findSecondLargest3(arr1)); // 30
console.log(findSecondLargest3(arr2)); // null
console.log(findSecondLargest3(arr3)); // 2
