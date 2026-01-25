/*
Question:
Remove duplicate elements from an array.

Rules:
- Preserve the original order of elements
- Keep only the first occurrence of each element
- Works for numbers, strings, and other primitive values
- Return a new array without duplicates

Examples:
[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]
["a", "b", "a"]    → ["a", "b"]
*/


/*
Approach 1: Using Set 
Understanding:
- Set stores only unique values
- Converting array to Set removes duplicates automatically
- Spread operator converts Set back to array
- JavaScript Sets preserve insertion order
*/

function removeDuplicates1(arr) {
  if (arr.length === 0) {
    return [];
  }

  return [...new Set(arr)];
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Manual check using array 

Understanding:
- Traverse array element by element
- Check if element already exists in result array
- If not present, push it to result
- Order is preserved naturally
*/

function removeDuplicates2(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

/*
Time Complexity: O(n²)
Space Complexity: O(n)
*/


/*
Approach 3: Using Map 

Understanding:
- Map keys are always unique
- Insert each element as a key
- Insertion order is preserved
- Extract keys back into an array
*/

function removeDuplicates3(arr) {
  if (arr.length === 0) {
    return [];
  }

  let map = new Map();

  for (let val of arr) {
    map.set(val, true);
  }

  return [...map.keys()];
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let arr1 = [1, 2, 2, 3, 4, 4];
let arr2 = ["a", "b", "a"];

console.log(removeDuplicates1(arr1)); // [1, 2, 3, 4]
console.log(removeDuplicates1(arr2)); // ["a", "b"]

console.log(removeDuplicates2(arr1)); // [1, 2, 3, 4]
console.log(removeDuplicates2(arr2)); // ["a", "b"]

console.log(removeDuplicates3(arr1)); // [1, 2, 3, 4]
console.log(removeDuplicates3(arr2)); // ["a", "b"]
