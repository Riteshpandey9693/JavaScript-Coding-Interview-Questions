/*
Question:
Check if a number is an Armstrong number.

Definition:
An Armstrong number (also called Narcissistic number) is a number
that is equal to the sum of its digits raised to the power of
the number of digits.

Formula:
For a number with d digits:
abcd... = a^d + b^d + c^d + ...

Examples:
153 → 1³ + 5³ + 3³ = 153 → true
123 → 1³ + 2³ + 3³ = 36 → false
370 → 3³ + 7³ + 0³ = 370 → true
*/


/*
Approach 1: Using Digit Count + Math Logic

Understanding:
1. Count number of digits
2. Extract each digit
3. Add (digit ^ digitCount)
4. Compare result with original number
*/

function isArmStrongNumber1(num) {
  if (num < 0) return false;

  let original = num;
  let digitCount = 0;
  let temp = num;

  // Count digits
  while (temp > 0) {
    digitCount++;
    temp = Math.floor(temp / 10);
  }

  let sum = 0;
  temp = num;

  // Calculate sum of digits^digitCount
  while (temp > 0) {
    let lastDigit = temp % 10;
    sum += lastDigit ** digitCount;
    temp = Math.floor(temp / 10);
  }

  return sum === original;
}

/*
Time Complexity: O(d)
Space Complexity: O(1)
*/


/*
Approach 2: Using String Method (Cleaner)

Understanding:
- Convert number to string
- Get length (digit count)
- Loop through digits
- Add digit^length
*/

function isArmStrongNumber2(num) {
  if (num < 0) return false;

  let numStr = num.toString();
  let power = numStr.length;

  let sum = 0;

  for (let digit of numStr) {
    sum += Number(digit) ** power;
  }

  return sum === num;
}

/*
Time Complexity: O(d)
Space Complexity: O(d)
*/


// Test cases
let num1 = 153;
let num2 = 123;
let num3 = 370;
let num4 = 9474;

console.log(isArmStrongNumber1(num1)); // true
console.log(isArmStrongNumber1(num2)); // false
console.log(isArmStrongNumber1(num3)); // true
console.log(isArmStrongNumber1(num4)); // true

console.log(isArmStrongNumber2(num1)); // true
console.log(isArmStrongNumber2(num2)); // false
console.log(isArmStrongNumber2(num3)); // true
console.log(isArmStrongNumber2(num4)); // true