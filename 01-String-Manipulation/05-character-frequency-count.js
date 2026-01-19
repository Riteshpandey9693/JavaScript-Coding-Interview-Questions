/*
Question:
Count how many times each character appears in a string.

Rules:
- Case-sensitive (unless specified otherwise)
- Count every character in the string
- Return result as an object

Examples:
"aabbcc"     → { a:2, b:2, c:2 }
"javascript" → { j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1 }
*/


/*
Approach 1: Using Object (most common & readable)

Understanding:
- Traverse the string character by character
- Use an object to store frequency
- If character exists → increment
- Else → initialize with 1

Best for:
- Clean logic
- Quick implementation
*/

function countCharacters1(str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (freq[ch]) {
      freq[ch]++;
    } else {
      freq[ch] = 1;
    }
  }

  return freq;
}

/*
Time Complexity: O(n)
Space Complexity: O(k) → unique characters
*/


/*
Approach 2: Using Map (more structured, interview-safe)

Understanding:
- Map allows explicit key–value handling
- Useful when keys are not limited to strings
- Logic is same as object approach

Best for:
- Clean interviews
- Avoiding prototype issues
*/

function countCharacters2(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    map.set(ch, (map.get(ch) || 0) + 1);
  }

  // convert Map to plain object (for expected output format)
  let result = {};
  for (let [key, value] of map) {
    result[key] = value;
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(k)
*/


// Test cases
let str1 = "aabbcc";
let str2 = "javascript";

console.log(countCharacters1(str1)); 
// { a: 2, b: 2, c: 2 }

console.log(countCharacters1(str2)); 
// { j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1 }

console.log(countCharacters2(str1)); 
console.log(countCharacters2(str2));
