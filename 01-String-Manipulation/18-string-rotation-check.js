/*
Question:
Check if one string is a rotation of another string.

Rules:
- Both strings must have the same length
- Rotation means shifting characters circularly
- Order must be preserved after rotation

Examples:
"abcd", "cdab" → true
"abcd", "acbd" → false
*/


/*
Approach 1: Using concatenation + includes (MOST COMMON)

Understanding:
- If str2 is a rotation of str1,
  then str2 will always be a substring of (str1 + str1)
- Example:
  str1 = "abcd"
  str1 + str1 = "abcdabcd"
  "cdab" exists inside → valid rotation

Why this works:
- Any rotation of a string appears in its double version
*/

function isRotation1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let combined = str1 + str1;
  return combined.includes(str2);
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Manual rotation check (PURE LOGIC – INTERVIEW SAFE)

Understanding:
- Try every possible rotation of str1
- Rotate by index i:
  - Take substring from i → end
  - Append substring from 0 → i
- Compare rotated string with str2
- If any match → valid rotation
*/

function isRotation2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    let rotated = "";

    // build rotation starting from index i
    for (let j = i; j < str1.length; j++) {
      rotated += str1[j];
    }

    // append beginning part
    for (let j = 0; j < i; j++) {
      rotated += str1[j];
    }

    if (rotated === str2) {
      return true;
    }
  }

  return false;
}

/*
Time Complexity: O(n²)
Space Complexity: O(1)
*/


// Test cases
let str1 = "abcd";
let str2 = "cdab";

let str3 = "abcd";
let str4 = "acbd";

console.log(isRotation1(str1, str2)); // true
console.log(isRotation1(str3, str4)); // false

console.log(isRotation2(str1, str2)); // true
console.log(isRotation2(str3, str4)); // false
