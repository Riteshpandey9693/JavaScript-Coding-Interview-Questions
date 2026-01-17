/*
Question:
Check whether a given string is a palindrome.

A palindrome reads the same forward and backward.

Examples:
"madam" → true
"level" → true
"hello" → false

Understanding:
- We compare the string with its reverse
- Comparison should be case-insensitive
*/

/*
Approach 1:
- Reverse the string
- Compare it with the original string
*/

function isPalindromeBuiltIn(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2:
- Convert string to lowercase
- Compare characters from start and end
- Stop if any mismatch is found
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("level"));  // true
console.log(isPalindrome("hello"));  // false
console.log(isPalindrome("Aba"));    // true
console.log(isPalindrome(""));       // true
console.log(isPalindrome("a"));      // true
