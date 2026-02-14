/*
Question:
Find two indices such that their elements add up to the target.

Rules:
- Return indices of the two numbers
- Each input has exactly one solution
- You may not use the same element twice
- Order of indices does not matter

Examples:
[2, 7, 11, 15], target = 9 → [0, 1]
[3, 2, 4], target = 6      → [1, 2]
*/


/*
Approach 1: Brute Force 

Understanding:
- Use two nested loops
- Check every pair of elements
- If sum equals target → return indices
- If no pair found → return default
*/

function twoSum1(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }

  return [null, null];
}

/*
Time Complexity: O(n²)
Space Complexity: O(1)
*/


/*
Approach 2: Using Hash Map 

Understanding:
- Traverse array once
- For each element, calculate required = target - current
- Check if required already exists in Map
- If yes → return stored index and current index
- Otherwise, store current element with its index

Why this approach:
*/

function twoSum2(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let required = target - arr[i];

    if (map.has(required)) {
      return [map.get(required), i];
    }

    map.set(arr[i], i);
  }

  return [];
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let arr1 = [2, 7, 11, 15];
let target1 = 9;

let arr2 = [3, 2, 4];
let target2 = 6;

console.log(twoSum1(arr1, target1)); // [0, 1]
console.log(twoSum1(arr2, target2)); // [1, 2]

console.log(twoSum2(arr1, target1)); // [0, 1]
console.log(twoSum2(arr2, target2)); // [1, 2]
