/*
Question:
Check whether two strings are anagrams.

Definition:
Two strings are anagrams if:
- They contain the same characters
- Character frequencies are the same
- Order does NOT matter

Examples:
"listen" & "silent" → true
"hello"  & "world"  → false
*/

/*
Approach 1: Sorting based comparison

Understanding:
- Convert both strings to lowercase
- Split into characters
- Sort characters
- Join back and compare
- If equal → anagram

Note:
- Simple and easy to explain
- Uses built-in methods (may not be allowed in some interviews)
*/

function isAnagram1(str1, str2) {
  // normalize case
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // length check
  if (str1.length !== str2.length) {
    return false;
  }

  return (
    str1.split("").sort().join("") ===
    str2.split("").sort().join("")
  );
}

/*
Time Complexity: O(n log n)
Space Complexity: O(n)
*/


/*
Approach 2: Frequency map (recommended for interviews)

Understanding:
- Count character frequency of first string
- Reduce frequency using second string
- If all frequencies become zero → anagram
- No sorting used
*/

function isAnagram2(str1, str2) {
  // normalize case
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // length check
  if (str1.length !== str2.length) {
    return false;
  }

  let map = new Map();

  // count characters from first string
  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  // reduce count using second string
  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];

    if (!map.has(ch)) {
      return false;
    }

    map.set(ch, map.get(ch) - 1);
  }

  // check if all values are zero
  for (let value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let str1 = "listen";
let str2 = "silent";

let str3 = "hello";
let str4 = "world";

console.log(isAnagram1(str1, str2)); // true
console.log(isAnagram1(str3, str4)); // false

console.log(isAnagram2(str1, str2)); // true
console.log(isAnagram2(str3, str4)); // false
