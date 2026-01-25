/*
Question:
Count frequency of each element in an array.

Rules:
- Return frequency as key–value pairs
- Works for numbers, strings, and other primitive values
- Order of keys does not matter

Examples:
[1, 2, 2, 3]     → { 1:1, 2:2, 3:1 }
["a", "b", "a"] → { a:2, b:1 }
*/


/*
Approach 1: Using Plain JavaScript Object 
Understanding:
- Create an empty object to store frequencies
- Traverse the array once
- For each element:
  - If key already exists → increment count
  - If not → initialize with 1
*/

function countFrequency1(arr) {
  let freq = {};

  for (let val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }

  return freq;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Using Map 

Understanding:
- Use Map instead of object
- Map allows any data type as keys
- Count frequency using get() and set()
- Convert Map to object for clean output
*/

function countFrequency2(arr) {
  let freqMap = new Map();

  for (let val of arr) {
    freqMap.set(val, (freqMap.get(val) || 0) + 1);
  }

  return Object.fromEntries(freqMap);
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let arr1 = [1, 2, 2, 3];
let arr2 = ["a", "b", "a"];

console.log(countFrequency1(arr1)); // { 1:1, 2:2, 3:1 }
console.log(countFrequency1(arr2)); // { a:2, b:1 }

console.log(countFrequency2(arr1)); // { 1:1, 2:2, 3:1 }
console.log(countFrequency2(arr2)); // { a:2, b:1 }
