/*
Question:
Find factorial of a number.

Rules:
- Factorial of n (n!) = n × (n-1) × ... × 1
- 0! = 1
- Factorial is defined only for non-negative integers

Examples:
5 → 120
0 → 1
3 → 6
*/


/*
Approach 1: Iterative

Understanding:
- Initialize result as 1
- Multiply numbers from 1 to n
- Return result
*/

function factorialOfNumber1(num) {
  if (num < 0) return null; // invalid case

  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 2: Recursive

Understanding:
- Base case: 0! = 1, 1! = 1
- Recursive case: n! = n × (n-1)!

*/

function factorialOfNumber2(num) {
  if (num < 0) return null;
  if (num === 0 || num === 1) return 1;

  return num * factorialOfNumber2(num - 1);
}

/*
Time Complexity: O(n)
Space Complexity: O(n) (recursion stack)
*/

// Test cases
let num1 = 5;
let num2 = 0;
let num3 = 3;

console.log(factorialOfNumber1(num1)); // 120
console.log(factorialOfNumber1(num2)); // 1
console.log(factorialOfNumber1(num3)); // 6

console.log(factorialOfNumber2(num1)); // 120
console.log(factorialOfNumber2(num2)); // 1
console.log(factorialOfNumber2(num3)); // 6
