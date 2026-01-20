/*
Question:
Find the longest word in a given sentence.

Rules:
- Words are separated by spaces
- If multiple words have the same maximum length,
  return the first one encountered
- Sentence contains only valid words and spaces

Examples:
"I love JavaScript programming" → "programming"
"Hello world"                  → "Hello" or "world"
*/


/*
Approach 1: Manual traversal

Understanding:
- Traverse the string character by character
- Build each word manually
- When a space is encountered, compare word lengths
- Track the longest word found so far
- After loop, check the last word

*/

function longestWordInSentence1(str) {
  let word = "";
  let longestWord = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch !== " ") {
      word += ch;
    } else {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
      word = "";
    }
  }

  // check the last word
  if (word.length > longestWord.length) {
    longestWord = word;
  }

  return longestWord;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Using split (simple & clean)

Understanding:
- Split the sentence into words
- Traverse the words array
- Track the word with maximum length
*/

function longestWordInSentence2(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let str1 = "I love JavaScript programming";
let str2 = "Hello world";

console.log(longestWordInSentence1(str1)); // "programming"
console.log(longestWordInSentence1(str2)); // "Hello" or "world"

console.log(longestWordInSentence2(str1)); // "programming"
console.log(longestWordInSentence2(str2)); // "Hello" or "world"
