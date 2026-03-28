/*
Question:
Find the LCM (Least Common Multiple) of two numbers.

Definition:
The LCM of two numbers is the smallest number that is divisible
by both numbers.

Examples:
12, 18 → multiples:
12 → 12, 24, 36, 48...
18 → 18, 36, 54...

Common multiples → 36, 72...
Smallest → 36

4, 5 → 20
*/


/*
Approach 1: Brute Force (Incremental check)

Understanding:
- Start from the maximum of two numbers
- Keep increasing until a number is divisible by both
*/

function findLCM1(num1, num2) {
  let max = Math.max(num1, num2);

  while (true) {
    if (max % num1 === 0 && max % num2 === 0) {
      return max;
    }
    max++;
  }
}

/*
Time Complexity: O(LCM)
Space Complexity: O(1)
*/


/*
Approach 2: Using GCD (BEST & optimized)

Formula:
LCM(a, b) = (a × b) / GCD(a, b)

Understanding:
- First find GCD using Euclidean Algorithm
- Then apply formula
*/

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findLCM2(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}

/*
Time Complexity: O(log(min(a,b)))
Space Complexity: O(1)
*/


// Test cases
let num1 = 12;
let num2 = 18;

let num3 = 4;
let num4 = 5;

console.log(findLCM1(num1, num2)); // 36
console.log(findLCM1(num3, num4)); // 20

console.log(findLCM2(num1, num2)); // 36
console.log(findLCM2(num3, num4)); // 20