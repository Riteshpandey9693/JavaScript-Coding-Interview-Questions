/*
Question:
Find the total number of words in a string.

Rules:
- A word is a continuous sequence of non-space characters
- Ignore leading, trailing, and multiple spaces
- Return 0 if no words are present

Examples:
"Hello world"       → 2
"I love JavaScript" → 3
"   "               → 0
*/


/*
Approach 1: Using split + filter (clean & readable)

Understanding:
- split(" ") divides the string at spaces
- Multiple spaces create empty strings
- filter removes empty values
- length gives total valid words
*/

function countWordsInString1(str) {
  return str
    .split(" ")
    .filter(word => word.length > 0)
    .length;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Manual traversal (BEST for interviews)

Understanding:
- Traverse the string character by character
- Build a word until a space is encountered
- When a space appears:
  → if a word exists, increase count
  → reset the word
- After the loop, count the last word if present
*/

function countWordsInString2(str) {
  let word = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch !== " ") {
      word += ch;
    } else if (word.length > 0) {
      count++;
      word = "";
    }
  }

  // Handle the last word
  if (word.length > 0) {
    count++;
  }

  return count;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let str1 = "Hello world";
let str2 = "I love JavaScript";
let str3 = "   ";

console.log(countWordsInString1(str1)); // 2
console.log(countWordsInString1(str2)); // 3
console.log(countWordsInString1(str3)); // 0

console.log(countWordsInString2(str1)); // 2
console.log(countWordsInString2(str2)); // 3
console.log(countWordsInString2(str3)); // 0
