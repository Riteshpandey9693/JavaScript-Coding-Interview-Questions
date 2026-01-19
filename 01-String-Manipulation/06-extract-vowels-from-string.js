/*
Question:
Return all vowels present in a given string.

A vowel is one of: a, e, i, o, u (case-insensitive).

The function should return:
- An array of vowels in the order they appear
- Preserve the original character case
- Return an empty array if no vowels are found

Examples:
"javascript" → ["a", "a", "i"]
"HELLO"      → ["E", "O"]
"bcdf"       → []
*/

/*
Approach 1: Using string check with lowercase conversion

Understanding:
- We scan the string character by character
- Convert each character to lowercase only for comparison
- Original character is pushed to preserve case
- Simple, readable, and efficient for interviews
*/

function extractVowelsFromString1(str) {
  let result = [];
  let vowels = "aeiou";

  for (let ch of str) {
    if (vowels.includes(ch.toLowerCase())) {
      result.push(ch);
    }
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Using predefined vowel list (both cases)

Understanding:
- Instead of converting case, we store all vowel variations
- Each character is directly checked against the vowel list
- Slightly more explicit, avoids case conversion
- Useful when case-handling must be very clear
*/

function extractVowelsFromString2(str) {
  let result = [];
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (vowels.includes(ch)) {
      result.push(ch);
    }
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let str1 = "javascript";
let str2 = "HELLO";
let str3 = "bcdf";

console.log(extractVowelsFromString1(str1)); // ["a", "a", "i"]
console.log(extractVowelsFromString1(str2)); // ["E", "O"]
console.log(extractVowelsFromString1(str3)); // []

console.log(extractVowelsFromString2(str1)); // ["a", "a", "i"]
console.log(extractVowelsFromString2(str2)); // ["E", "O"]
console.log(extractVowelsFromString2(str3)); // []
