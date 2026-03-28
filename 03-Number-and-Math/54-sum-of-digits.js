/*
Question:
Find the sum of digits of a number.

Rules:
- Extract each digit of the number
- Add all digits together
- Works for positive integers

Examples:
1234 → 1 + 2 + 3 + 4 = 10
999  → 9 + 9 + 9 = 27
5    → 5
*/


/*
Approach 1: Using String Conversion

Understanding:
- Convert number to string
- Split into individual characters
- Convert each character back to number
- Add all digits
*/

function sumOfDigits1(num) {
  let sum = 0;

  let digits = num.toString().split("");

  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }

  return sum;
}

/*
Time Complexity: O(d)
Space Complexity: O(d)
*/


/*
Approach 2: Using Modulo 

Understanding:
- Extract last digit using % 10
- Add it to sum
- Remove last digit using Math.floor(num / 10)
- Repeat until number becomes 0
*/

function sumOfDigits2(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

/*
Time Complexity: O(d)
Space Complexity: O(1)
*/


// Test cases
let num1 = 1234;
let num2 = 999;
let num3 = 5;

console.log(sumOfDigits1(num1)); // 10
console.log(sumOfDigits1(num2)); // 27
console.log(sumOfDigits1(num3)); // 5

console.log(sumOfDigits2(num1)); // 10
console.log(sumOfDigits2(num2)); // 27
console.log(sumOfDigits2(num3)); // 5