/*
Question:
Check whether a string contains only digits.

Rules:
- String must contain at least one character
- Only numeric characters (0–9) are allowed
- Any alphabet, space, or special character → false

Examples:
"12345"  → true
"123a5"  → false
""       → false
"00123"  → true
"123 "   → false
*/


/*
Approach 1: Manual character check

Understanding:
- Edge case: empty string → false
- Traverse the string character by character
- Check if each character lies between '0' and '9'
- If any character is outside this range → false
- If all characters are digits → true
*/

function checkOnlyDigit1(str) {
  if (str.length === 0) return false;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch < '0' || ch > '9') {
      return false;
    }
  }

  return true;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 2: Using Regular Expression (MOST COMMON)

Understanding:
- ^ and $ ensure full string match
- [0-9]+ allows only digits (at least one)
- test() returns true or false
*/

function checkOnlyDigit2(str) {
  return /^[0-9]+$/.test(str);
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let str1 = "12345";
let str2 = "123a5";
let str3 = "";
let str4 = "00123";
let str5 = "123 ";

console.log(checkOnlyDigit1(str1)); // true
console.log(checkOnlyDigit1(str2)); // false
console.log(checkOnlyDigit1(str3)); // false
console.log(checkOnlyDigit1(str4)); // true
console.log(checkOnlyDigit1(str5)); // false

console.log(checkOnlyDigit2(str1)); // true
console.log(checkOnlyDigit2(str2)); // false
console.log(checkOnlyDigit2(str3)); // false
console.log(checkOnlyDigit2(str4)); // true
console.log(checkOnlyDigit2(str5)); // false
