/*
Question:
Reverse a string without using built-in reverse methods.

Example:
Input:  "hello"
Output: "olleh"

Understanding:
- Strings in JavaScript are immutable
- We cannot modify them directly
- So we create a new string by reading characters from end to start
*/

/*
Optional Approach (Only if built-ins are allowed):
- Convert string to array
- Reverse the array
- Join it back to string
*/

function reverseStringBuiltIn(str) {
  return str.split("").reverse().join("");
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Preferred Interview Approach (No built-ins):
- Traverse the string from last index to first
- Append each character to a new string
*/

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


// Test cases
console.log(reverseString("hello"));       // "olleh"
console.log(reverseString("JavaScript"));  // "tpircSavaJ"
console.log(reverseString("a"));           // "a"
console.log(reverseString(""));            // ""
console.log(reverseString("hi there"));    // "ereht ih"
