/*
Question:
Find all prime numbers up to N.

Rules:
- Return all prime numbers from 2 to N (inclusive)
- 1 is NOT a prime number
- Return result as an array

Examples:
10 → [2, 3, 5, 7]
5 → [2, 3, 5]
*/


/*
Approach 1: Check Each Number Using isPrime()

Understanding:
- Loop from 2 to N
- Check if each number is prime
- If prime → push into result array
*/

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function primeNumberUptoN1(n) {
  let result = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}

/*
Time Complexity: O(n√n)
Space Complexity: O(n)
*/



// Test cases
let n1 = 10;
let n2 = 5;

console.log(primeNumberUptoN1(n1)); // [2, 3, 5, 7]
console.log(primeNumberUptoN1(n2)); // [2, 3, 5]