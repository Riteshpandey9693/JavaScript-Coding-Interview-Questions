/*
Question:
Find the first non-repeating character in a string.

A non-repeating character is one that appears only once.
We return the first such character while scanning from
left to right.

Examples:
"swiss"     → "w"
"aabbcc"    → null
"javascript"→ "j"
*/

/*
Approach 1: Brute force
- Pick each character
- Check if it appears anywhere else in the string
- Return the first character that appears only once
*/

function firstNonRepeatingChar1(str) {
  for (let i = 0; i < str.length; i++) {
    let isRepeated = false;

    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isRepeated = true;
        break;
      }
    }

    if (!isRepeated) {
      return str[i];
    }
  }

  return null;
}

/*
Time Complexity: O(n²)
Space Complexity: O(1)
*/


/*
Approach 2: Using Map
- Count frequency of each character
- Traverse the string again
- Return the first character with frequency 1
*/

function firstNonRepeatingChar2(str) {
  let freq = new Map();

  for (let i = 0; i < str.length; i++) {
    freq.set(str[i], (freq.get(str[i]) || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (freq.get(str[i]) === 1) {
      return str[i];
    }
  }

  return null;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
console.log(firstNonRepeatingChar1("swiss"));       // "w"
console.log(firstNonRepeatingChar1("aabbcc"));     // null
console.log(firstNonRepeatingChar2("javascript")); // "j"
console.log(firstNonRepeatingChar2("aabcbcde"));   // "d"
console.log(firstNonRepeatingChar2(""));           // null
