/*
Question:
Remove all spaces / whitespace from a string.

Rules:
- Remove all space characters
- Preserve the order of remaining characters
- Return the cleaned string

Examples:
"hello world"        → "helloworld"
"  java   script  "  → "javascript"
*/


/*
Approach: Manual traversal 

Understanding:
- Traverse the string character by character
- Check each character
- If character is NOT a space, append it to result
- Ignore all spaces
*/

function removeAllWhiteSpace(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch !== " ") {
      result += ch;
    }
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let str1 = "hello world";
let str2 = "  java   script  ";

console.log(removeAllWhiteSpace(str1)); // "helloworld"
console.log(removeAllWhiteSpace(str2)); // "javascript"
