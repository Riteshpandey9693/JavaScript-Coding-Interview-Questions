/*
Question:
Check if a number is prime.

Rules:
- Prime number is divisible only by 1 and itself
- Numbers less than 2 are NOT prime
- Return true or false

Examples:
7 → true
10 → false
1 → false
*/


/*
Approach 1: Basic Trial Division

Understanding:
- If number < 2 → not prime
- Check divisibility from 2 to num - 1
- If divisible → not prime
- Else → prime
*/

function isPrime1(num) {
  if (num < 2) {
    return false;
  }
  if(num === 2) {
    return true;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 2: Optimized (Check till √n)

Understanding:
- Factors repeat after square root
- Only check from 2 to √num
- If divisor found → not prime

*/

function isPrime2(num) {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

/*
Time Complexity: O(√n)
Space Complexity: O(1)
*/

// Test cases
let num1 = 7;
let num2 = 10;
let num3 = 1;
let num4 = 29;

console.log(isPrime1(num1)); // true
console.log(isPrime1(num2)); // false

console.log(isPrime2(num1)); // true
console.log(isPrime2(num2)); // false

console.log(isPrime3(num4)); // true