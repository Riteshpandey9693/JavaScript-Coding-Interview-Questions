/*
Question:
Reverse the order of words in a sentence.

Rules:
- Words should appear in reverse order
- Extra spaces should be handled properly
- Final output should contain single spaces only

Examples:
"hello world javascript"      → "javascript world hello"
"i love coding"               → "coding love i"
"   i   love   javascript   " → "javascript love i"
*/


/*
Approach 1: Using split + reverse (simple but limited)

Understanding:
- Split the string using space
- Reverse the resulting array
- Join back using space

Limitation:
- Fails when input has extra spaces
*/

function reverseWordsInSentence1(str) {
  return str.split(" ").reverse().join(" ");
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Manual word extraction (handles extra spaces)

Understanding:
- Traverse the string character by character
- Build words manually
- Push words into array only when valid
- Reverse words array manually
*/

function reverseWordsInSentence2(str) {
  let words = [];
  let word = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch !== " ") {
      word += ch;
    } else if (word !== "") {
      words.push(word);
      word = "";
    }
  }

  if (word !== "") {
    words.push(word);
  }

  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i] + (i !== 0 ? " " : "");
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 3: Reverse traversal (best & optimized)

Understanding:
- Traverse the string from end to start
- Build words in reverse
- Append words directly to result
- Avoids extra array usage

*/

function reverseWordsInSentence3(str) {
  let result = "";
  let word = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let ch = str[i];

    if (ch !== " ") {
      word = ch + word;
    } else if (word !== "") {
      result += word + " ";
      word = "";
    }
  }

  if (word !== "") {
    result += word;
  }

  return result.trim();
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
let str1 = "hello world javascript";
let str2 = "i love coding";
let str3 = "   i   love   javascript   ";

console.log(reverseWordsInSentence1(str1)); // "javascript world hello"
console.log(reverseWordsInSentence1(str2)); // "coding love i"
console.log(reverseWordsInSentence1(str3)); //  incorrect (extra spaces)

console.log(reverseWordsInSentence2(str1)); // "javascript world hello"
console.log(reverseWordsInSentence2(str2)); // "coding love i"
console.log(reverseWordsInSentence2(str3)); // correct

console.log(reverseWordsInSentence3(str1)); // "javascript world hello"
console.log(reverseWordsInSentence3(str2)); // "coding love i"
console.log(reverseWordsInSentence3(str3)); //  correct
