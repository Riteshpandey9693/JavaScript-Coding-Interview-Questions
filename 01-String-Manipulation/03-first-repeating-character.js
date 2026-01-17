/*
Question:
Find the first repeating character in a string.

The first repeating character is the character
that appears more than once and whose repetition
is detected first while scanning from left to right.

Examples:
"javascript" → "a"
"abcdef"    → null
"aabbcc"    → "a"
*/

/*
Approach 1: Brute force
- Fix one character
- Check if it appears again later in the string
- Return the first such character
*/

function firstRepeatingChar1(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i];
      }
    }
  }
  return null;
}

/*
Time Complexity: O(n²)
Space Complexity: O(1)
*/


/*
Approach 2: Using Set
- Traverse string from left to right
- Store characters already seen
- If a character is already in the set, return it
*/

function firstRepeatingChar2(str) {
  let set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      return str[i];
    }
    set.add(str[i]);
  }

  return null;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 3: Using Map
- Count frequency of each character
- Traverse string again to find the first
  character with frequency greater than 1
*/

function firstRepeatingChar3(str) {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) > 1) {
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
console.log(firstRepeatingChar1("javascript")); // "a"
console.log(firstRepeatingChar1("abcdef"));    // null
console.log(firstRepeatingChar2("aabbcc"));    // "a"
console.log(firstRepeatingChar2("abcbade"));   // "b"
console.log(firstRepeatingChar3("abcbade"));   // "a"
console.log(firstRepeatingChar3(""));          // null
