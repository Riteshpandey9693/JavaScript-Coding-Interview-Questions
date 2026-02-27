/*
Question:
Generate Fibonacci series up to N terms.

Definition:
Fibonacci sequence:
- First term = 0
- Second term = 1
- Next term = sum of previous two terms

Formula:
F(n) = F(n-1) + F(n-2)

Examples:
5 → [0, 1, 1, 2, 3]
7 → [0, 1, 1, 2, 3, 5, 8]
*/


/*
Approach 1: Iterative

Understanding:
- Handle edge cases (n <= 0)
- Start with [0, 1]
- Generate next term using sum of previous two
- Continue until n terms are generated

Why this approach:
- Simple
- O(n) time
- Interview standard
*/

function generateFibonacci1(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
Approach 2: Using Recursion (For nth term)

Understanding:
- Base cases: F(0) = 0, F(1) = 1
- Recursive relation: F(n) = F(n-1) + F(n-2)

Note:
- This is inefficient for large n without memoization
*/

function fibonacciNth(n) {
  if (n <= 1) return n;
  return fibonacciNth(n - 1) + fibonacciNth(n - 2);
}

/*
Time Complexity: O(2^n) (Exponential)
Space Complexity: O(n) (recursion stack)
*/


/*
Approach 3: Optimized Space (Only store last two values)

Understanding:
- No need to store entire array
- Track only previous two values
- Useful when only nth term is required
*/

function fibonacciNthOptimized(n) {
  if (n <= 1) return n;

  let prev1 = 0;
  let prev2 = 1;

  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


// Test cases
let n1 = 5;
let n2 = 7;

console.log(generateFibonacci1(n1)); // [0, 1, 1, 2, 3]
console.log(generateFibonacci1(n2)); // [0, 1, 1, 2, 3, 5, 8]

console.log(fibonacciNth(6));         // 8
console.log(fibonacciNthOptimized(6)); // 8