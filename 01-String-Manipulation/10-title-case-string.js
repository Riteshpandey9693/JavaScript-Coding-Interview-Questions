/*
Question:
Convert a string to Title Case.

Definition:
- Capitalize the first letter of every word
- Remaining letters should remain unchanged
- Extra spaces should be handled properly

Examples:
"this is a title case example"   → "This Is A Title Case Example"
"welcome to javascript"         → "Welcome To Javascript"
"   welcome   to   javascript   "→ "Welcome To Javascript"
*/


/*
Approach 1: Using split + map + join (clean & readable)

Understanding:
- Trim leading/trailing spaces
- Split by one or more spaces
- Capitalize first letter of each word
- Join words using a single space

Best for:
- Clean code
- Readability
*/

function toTitleCase1(str) {
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
- Capitalize after a space
- Ignore extra spaces
- Build the result string manually

Best for:
- Interviews restricting built-in methods
*/

function toTitleCase2(str) {
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
let str1 = "this is a title case example";
let str2 = "welcome to javascript";
let str3 = "   welcome   to   javascript   ";

console.log(toTitleCase1(str1)); // "This Is A Title Case Example"
console.log(toTitleCase1(str2)); // "Welcome To Javascript"
console.log(toTitleCase1(str3)); // "Welcome To Javascript"

console.log(toTitleCase2(str1)); // "This Is A Title Case Example"
console.log(toTitleCase2(str2)); // "Welcome To Javascript"
console.log(toTitleCase2(str3)); // "Welcome To Javascript"
