/*
Question:
Find both the maximum and minimum elements in an array.

Rules:
- Array may contain positive or negative numbers
- If array is empty, return null
- Return result as an object: { max, min }

Examples:
[10, 5, 20, 8] → { max: 20, min: 5 }
[-1, -5, -3]  → { max: -1, min: -5 }
*/


/*
Approach 1: Using Math.max() and Math.min() 

Understanding:
- Spread operator expands array elements
- Math.max() finds the largest value
- Math.min() finds the smallest value
- Very concise solution
*/

function findMaxAndMin1(arr) {
  if (arr.length === 0) {
    return null;
  }

  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 2: Sorting the array 

Understanding:
- Create a copy of the array to avoid mutation
- Sort array in ascending order
- First element is minimum
- Last element is maximum

Why not ideal:
- Sorting does extra work
- Higher time complexity than required
*/

function findMaxAndMin2(arr) {
  if (arr.length === 0) {
    return null;
  }

  let newArray = [...arr];
  newArray.sort((a, b) => a - b);

  return {
    max: newArray[newArray.length - 1],
    min: newArray[0]
  };
}

/*
Time Complexity: O(n log n)
Space Complexity: O(n)
*/


/*
Approach 3: Single traversal 

Understanding:
- Initialize max with -Infinity
- Initialize min with +Infinity
- Traverse array once
- Update max and min simultaneously
*/

function findMaxAndMin3(arr) {
  if (arr.length === 0) {
    return null;
  }

  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max: max, min: min };
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let arr1 = [10, 5, 20, 8];
let arr2 = [-1, -5, -3];

console.log(findMaxAndMin1(arr1)); // { max: 20, min: 5 }
console.log(findMaxAndMin1(arr2)); // { max: -1, min: -5 }

console.log(findMaxAndMin2(arr1)); // { max: 20, min: 5 }
console.log(findMaxAndMin2(arr2)); // { max: -1, min: -5 }

console.log(findMaxAndMin3(arr1)); // { max: 20, min: 5 }
console.log(findMaxAndMin3(arr2)); // { max: -1, min: -5 }
