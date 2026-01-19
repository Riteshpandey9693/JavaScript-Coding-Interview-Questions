/*
Question:
Capitalize the first letter of each word in a string.

Definition:
- Each word's first character should be uppercase
- Remaining characters should remain as they are
- Extra spaces should be handled properly

Examples:
"hello world"              → "Hello World"
"javaScript interview"     → "JavaScript Interview"
"  hello   world  "        → "Hello World"
*/


/*
Approach 1: Split, transform, and join (using built-in methods)

Understanding:
- Trim extra spaces
- Split string by one or more spaces
- Capitalize first letter of each word
- Join words with a single space

Note:
- Very clean and readable
- Uses built-in methods (allowed in most interviews)
*/

function capitalizeFirstLetter1(str) {
  return str
    .trim()
    .split(/\s+/)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Manual traversal (no split, no regex)

Understanding:
- Traverse character by character
- Capitalize when a new word starts
- Ignore extra spaces
- Build result string manually
*/

function capitalizeFirstLetter2(str) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch === " ") {
      // avoid multiple spaces
      if (result[result.length - 1] !== " ") {
        result += " ";
      }
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        result += ch.toUpperCase();
        capitalizeNext = false;
      } else {
        result += ch;
      }
    }
  }

  return result.trim();
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let str1 = "hello world";
let str2 = "javaScript interview questions";
let str3 = "  hello   world  ";

console.log(capitalizeFirstLetter1(str1)); // "Hello World"
console.log(capitalizeFirstLetter1(str2)); // "JavaScript Interview Questions"
console.log(capitalizeFirstLetter1(str3)); // "Hello World"

console.log(capitalizeFirstLetter2(str1)); // "Hello World"
console.log(capitalizeFirstLetter2(str2)); // "JavaScript Interview Questions"
console.log(capitalizeFirstLetter2(str3)); // "Hello World"
