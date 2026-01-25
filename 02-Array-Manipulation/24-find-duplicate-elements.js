/*
Question:
Find duplicate elements in an array.

Rules:
- Return only elements that appear more than once
- Each duplicate should appear only once in the output
- Order of duplicates does not matter
- Works for numbers, strings, and other primitive values

Examples:
[1, 2, 3, 2, 4, 3] → [2, 3]
[1, 2, 3]          → []
*/


/*
Approach 1: Using Set 

Understanding:
- Use one Set to track already seen elements
- Use another Set to store duplicates
- If element is already in seen Set → it's a duplicate
- Set ensures duplicates appear only once in result
*/

function findDuplicateElements1(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let val of arr) {
    if (seen.has(val)) {
      duplicates.add(val);
    } else {
      seen.add(val);
    }
  }

  return [...duplicates];
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Using Map (frequency counting)

Understanding:
- Count frequency of each element using Map
- Traverse Map entries
- If frequency > 1, push element to result array
*/

function findDuplicateElements2(arr) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value > 1) {
      result.push(key);
    }
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let arr1 = [1, 2, 3, 2, 4, 3];
let arr2 = [1, 2, 3];

console.log(findDuplicateElements1(arr1)); // [2, 3]
console.log(findDuplicateElements1(arr2)); // []

console.log(findDuplicateElements2(arr1)); // [2, 3]
console.log(findDuplicateElements2(arr2)); // []
