/*
Question:
Check if a number is a palindrome.

Rules:
- A palindrome number reads the same forward and backward
- Negative numbers are NOT palindrome
- Return true or false

Examples:
121 → true
123 → false
1221 → true
-121 → false
*/


/*
Approach 1: Using String + Two Pointer Technique

Understanding:
- Convert number to string
- Compare first and last characters moving inward
- If mismatch found → return false
- If loop completes → palindrome
*/

function numberPalindromeCheck1(num) {
  if (num < 0) return false;

  let numStr = num.toString();

  for (let i = 0; i < numStr.length / 2; i++) {
    if (numStr[i] !== numStr[numStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/*
Time Complexity: O(d)
- d = number of digits

Space Complexity: O(d)
- String created
*/


/*
Approach 2: Using Digit Extraction (Math Based)

Understanding:
- Extract digits using % 10
- Store digits in array
- Compare start and end elements
- If mismatch → false
*/

function numberPalindromeCheck2(num) {
  if (num < 0) return false;

  let arr = [];
  let temp = num;

  while (temp > 0) {
    arr.push(temp % 10);
    temp = Math.floor(temp / 10);
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/*
Time Complexity: O(d)
Space Complexity: O(d)
*/


/*
Approach 3: Most Optimal (Reverse Half of Number)

Understanding:
- Reverse only half of the digits
- Compare first half with reversed second half
- No extra array or string needed
*/

function numberPalindromeCheck3(num) {
  if (num < 0 || (num % 10 === 0 && num !== 0)) return false;

  let reversedHalf = 0;

  while (num > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return num === reversedHalf || num === Math.floor(reversedHalf / 10);
}

/*
Time Complexity: O(d)
Space Complexity: O(1)
*/


// Test cases
let num1 = 121;
let num2 = 123;
let num3 = 1221;
let num4 = -121;

console.log(numberPalindromeCheck1(num1)); // true
console.log(numberPalindromeCheck1(num2)); // false
console.log(numberPalindromeCheck1(num3)); // true
console.log(numberPalindromeCheck1(num4)); // false

console.log(numberPalindromeCheck2(num1)); // true
console.log(numberPalindromeCheck2(num2)); // false
console.log(numberPalindromeCheck2(num3)); // true
console.log(numberPalindromeCheck2(num4)); // false

console.log(numberPalindromeCheck3(num1)); // true
console.log(numberPalindromeCheck3(num2)); // false
console.log(numberPalindromeCheck3(num3)); // true
console.log(numberPalindromeCheck3(num4)); // false