/*
Question:
Check whether a string is a valid palindrome
(ignoring spaces and case).

Rules:
- Ignore spaces
- Ignore uppercase / lowercase differences
- Compare characters logically
- Return true if palindrome, else false

Examples:
"A man a plan a canal Panama" → true
"Hello World"                → false
*/


/*
Approach 1: Manual normalization + two-pointer check (BEST for interviews)

Understanding:
STEP 1: Normalize the string
- Traverse the string character by character
- Ignore spaces
- Convert characters to lowercase
- Build a cleaned string

STEP 2: Two-pointer palindrome check
- Compare characters from start and end
- Move inward until middle
- If any mismatch → not a palindrome
*/

function validPalindrome1(str) {
  let cleaned = "";

  // Normalize string
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch !== " ") {
      cleaned += ch.toLowerCase();
    }
  }

  // Two-pointer check
  for (let i = 0; i < cleaned.length / 2; i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Using split + reverse (clean & concise)

Understanding:
- Convert string to lowercase
- Remove spaces using split + join
- Reverse the cleaned string
- Compare original cleaned string with reversed one


*/

function validPalindrome2(str) {
  let cleaned = str
    .toLowerCase()
    .split(" ")
    .join("");

  return cleaned === cleaned.split("").reverse().join("");
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let str1 = "A man a plan a canal Panama";
let str2 = "Hello World";

console.log(validPalindrome1(str1)); // true
console.log(validPalindrome1(str2)); // false

console.log(validPalindrome2(str1)); // true
console.log(validPalindrome2(str2)); // false
