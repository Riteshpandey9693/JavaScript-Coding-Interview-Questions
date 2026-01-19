/*
Question:
Count the number of vowels and consonants in a given string.

Rules:
- Only alphabet characters should be considered
- Ignore spaces, digits, and special characters
- Case-insensitive counting
- Return result as an object

Examples:
"hello"        → { vowels: 2, consonants: 3 }
"javascript"   → { vowels: 3, consonants: 7 }
"hi there!123" → { vowels: 3, consonants: 4 }
*/

/*
Approach 1: Direct vowel comparison

Understanding:
- Convert the string to lowercase to simplify comparison
- Loop through each character
- Check if the character is an alphabet (a–z)
- Compare directly with vowel characters
- Count vowels and consonants separately
*/

function countVowelsandConsonants1(str) {
  str = str.toLowerCase();

  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    // consider only alphabet characters
    if (ch >= 'a' && ch <= 'z') {
      if (
        ch === 'a' ||
        ch === 'e' ||
        ch === 'i' ||
        ch === 'o' ||
        ch === 'u'
      ) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return { vowels, consonants };
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 2: Using a vowel list

Understanding:
- Store all vowels in a list
- Check each alphabet character using includes()
- Logic is cleaner and easier to extend
- Slight extra method call, but still efficient
*/

function countVowelsandConsonants2(str) {
  str = str.toLowerCase();

  let vowelsCount = 0;
  let consonantsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    // consider only alphabet characters
    if (ch >= 'a' && ch <= 'z') {
      if (vowels.includes(ch)) {
        vowelsCount++;
      } else {
        consonantsCount++;
      }
    }
  }

  return { vowels : vowelsCount, constants :consonantsCount };
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let str1 = "hello";
let str2 = "javascript";
let str3 = "hi there!123";

console.log(countVowelsandConsonants1(str1)); // { vowels: 2, consonants: 3 }
console.log(countVowelsandConsonants1(str2)); // { vowels: 3, consonants: 7 }
console.log(countVowelsandConsonants1(str3)); // { vowels: 3, consonants: 4 }

console.log(countVowelsandConsonants2(str1)); // { vowels: 2, consonants: 3 }
console.log(countVowelsandConsonants2(str2)); // { vowels: 3, consonants: 7 }
console.log(countVowelsandConsonants2(str3)); // { vowels: 3, consonants: 4 }
