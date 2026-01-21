/*
Question:
Remove duplicate characters from a string.

Rules:
- Preserve the original character order
- Keep only the first occurrence of each character
- Return the final string without duplicates

Examples:
"aabbcc"     → "abc"
"javascript" → "javscript"
*/


/*
Approach 1: Using Set (clean & modern)

Understanding:
- Set stores only unique values
- Converting string to Set removes duplicates automatically
- Spread operator converts Set back to array
- Join array to form final string
*/

function removeDuplicateCharacters1(str) {
  return [...new Set(str)].join("");
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Using Set + loop (more explicit)

Understanding:
- Initialize a Set with string characters
- Iterate over the Set to preserve insertion order
- Build the result string manually

Why this approach:
- Same logic as Approach 1
- More readable step-by-step
*/

function removeDuplicateCharacters2(str) {
  let set = new Set(str);
  let result = "";

  for (let ch of set) {
    result += ch;
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 3: Manual check (BEST for interviews without Set)

Understanding:
- Traverse the string character by character
- Check if character already exists in result
- If not present, append it
- Preserves order naturally

*/

function removeDuplicateCharacters3(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }

  return result;
}

/*
Time Complexity: O(n²)
Space Complexity: O(n)
*/


// Test cases
let str1 = "aabbcc";
let str2 = "javascript";

console.log(removeDuplicateCharacters1(str1)); // "abc"
console.log(removeDuplicateCharacters1(str2)); // "javscript"

console.log(removeDuplicateCharacters2(str1)); // "abc"
console.log(removeDuplicateCharacters2(str2)); // "javscript"

console.log(removeDuplicateCharacters3(str1)); // "abc"
console.log(removeDuplicateCharacters3(str2)); // "javscript"
