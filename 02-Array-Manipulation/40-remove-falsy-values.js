/*
Question:
Remove all falsy values from an array.

Rules:
- Remove values that are falsy in JavaScript:
  false, 0, "", null, undefined, NaN
- Preserve order of remaining elements
- Return a new cleaned array

Examples:
[0, 1, false, 2, "", 3, null, undefined] → [1, 2, 3]
*/


/*
Approach 1: Using Loop 

Understanding:
- Traverse array element by element
- Check if element is truthy
- If truthy → push into result array
- Return result
*/

function removeFalsyValues1(arr) {
  let result = [];

  for (let el of arr) {
    if (el) {
      result.push(el);
    }
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Using filter(Boolean)

Understanding:
- filter() keeps elements where callback returns true
- Boolean converts each element to true/false
- Only truthy values remain
*/

function removeFalsyValues2(arr) {
  return arr.filter(Boolean);
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test case
let arr1 = [0, 1, false, 2, "", 3, null, undefined];

console.log(removeFalsyValues1(arr1)); // [1, 2, 3]
console.log(removeFalsyValues2(arr1)); // [1, 2, 3]
