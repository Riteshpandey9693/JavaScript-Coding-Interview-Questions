/*
Question:
Reverse digits of a number.

Rules:
- Reverse the digits
- Remove leading zeros after reversing
- Preserve negative sign if present
- Return a number

Examples:
9876 → 6789
1200 → 21
5 → 5
-123 → -321
*/


/*
Approach 1: Using String Methods 

Understanding:
- Convert number to string
- Remove sign using Math.abs()
- Split → Reverse → Join
- Convert back to Number
- Reapply sign
*/

function reverseDigits1(num) {
  let sign = Math.sign(num);

  let reversed = Number(
    Math.abs(num)
      .toString()
      .split("")
      .reverse()
      .join("")
  );

  return sign * reversed;
}

/*
Time Complexity: O(d)
- d = number of digits

Space Complexity: O(d)
- String + array created
*/


/*
Approach 2: Pure Math 

Understanding:
- Extract last digit using % 10
- Build reversed number using multiplication
- Remove last digit using Math.floor(num / 10)
- Reapply sign at the end
*/

function reverseDigits2(num) {
  let sign = Math.sign(num);
  num = Math.abs(num);

  let reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return sign * reversed;
}

/*
Time Complexity: O(d)
Space Complexity: O(1)
*/


// Test cases
let num1 = 9876;
let num2 = 1200;
let num3 = 5;
let num4 = -123;

console.log(reverseDigits1(num1)); // 6789
console.log(reverseDigits1(num2)); // 21
console.log(reverseDigits1(num3)); // 5
console.log(reverseDigits1(num4)); // -321

console.log(reverseDigits2(num1)); // 6789
console.log(reverseDigits2(num2)); // 21
console.log(reverseDigits2(num3)); // 5
console.log(reverseDigits2(num4)); // -321