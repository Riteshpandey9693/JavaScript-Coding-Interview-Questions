/*
Question:
Find the intersection of two arrays.

Rules:
- Return elements common to both arrays
- Each element should appear only once in the result
- Order of output does not matter
- Works for numbers, strings, and other primitive values

Examples:
[1, 2, 3, 4] & [3, 4, 5, 6] → [3, 4]
*/


/*
Approach 1: Using Set (BEST for unsorted arrays)

Understanding:
- Store elements of second array in a Set
- Traverse first array
- If element exists in Set → it is common
- Use another Set to avoid duplicate results
*/

function findIntersectionOfTwoArrays1(arr1, arr2) {
  let set2 = new Set(arr2);
  let result = new Set();

  for (let el of arr1) {
    if (set2.has(el)) {
      result.add(el);
    }
  }

  return [...result];
}

/*
Time Complexity: O(n + m)
Space Complexity: O(n)
*/


/*
Approach 2: Two-pointer technique (for SORTED arrays)

Understanding:
- Works when both arrays are sorted
- Compare elements using two pointers
- If equal → add to result
- Move pointer of smaller element otherwise
- Avoid duplicates by checking last inserted element
*/

function findIntersectionOfTwoArrays2(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

/*
Time Complexity: O(n + m)
Space Complexity: O(1) (excluding output array)
*/


// Test cases
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

console.log(findIntersectionOfTwoArrays1(arr1, arr2)); // [3, 4]
console.log(findIntersectionOfTwoArrays2(arr1, arr2)); // [3, 4]
