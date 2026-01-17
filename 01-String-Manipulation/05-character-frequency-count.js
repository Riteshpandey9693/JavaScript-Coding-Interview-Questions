/*
Question:
Return all vowels from a string in the order they appear.

Vowels: a, e, i, o, u (case-insensitive)

Examples:
"I am a frontend developer" → "iaaonteeeoe"
"Hello World"             → "eoo"
"xyz"                     → ""
*/

/*
Approach 1: Direct character comparison
- Convert string to lowercase
- Traverse each character
- Check manually if it's a vowel
- Append it to result if yes
*/

function vowels1(str) {
  str = str.toLowerCase();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      result += ch;
    }
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Using array and includes
- Store vowels in an array
- Traverse string and check if character exists in vowel array
- Append if yes
*/

function vowels2(str) {
  str = str.toLowerCase();
  let result = "";
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (vowels.includes(ch)) {
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
console.log(vowels1("I am a frontend developer")); // "iaaonteeeoe"
console.log(vowels1("Hello World"));               // "eoo"
console.log(vowels1("xyz"));                       // ""

console.log(vowels2("I am a frontend developer")); // "iaaonteeeoe"
console.log(vowels2("Hello World"));               // "eoo"
console.log(vowels2("xyz"));                       // ""
