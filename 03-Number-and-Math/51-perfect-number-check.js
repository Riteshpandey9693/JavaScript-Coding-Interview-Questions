/*
Question:
Check if a number is a Perfect Number.

Definition:
A Perfect Number is a positive integer that is equal to the
sum of its proper divisors (excluding the number itself).

Example:
6 → divisors: 1, 2, 3
1 + 2 + 3 = 6  → Perfect Number

28 → divisors: 1, 2, 4, 7, 14
1 + 2 + 4 + 7 + 14 = 28 → Perfect Number

12 → divisors: 1, 2, 3, 4, 6
1 + 2 + 3 + 4 + 6 = 16 ≠ 12 → Not Perfect
*/


/*
Approach 1: Brute Force (Check all divisors)

Understanding:
- Iterate from 1 to num-1
- Check if number divides evenly
- Add divisor to sum
- Finally compare sum with original number
*/

function isPerfectNumber1(num) {
    if (num <= 1) return false;

    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/


/*
Approach 2: Optimized (Check divisors up to √n)

Understanding:
Divisors come in pairs.

Example:
28 → (1,28) (2,14) (4,7)

So instead of checking all numbers up to n,
we only check up to √n and add both divisors.
*/

function isPerfectNumber2(num) {
    if (num <= 1) return false;

    let sum = 1; // 1 is always a divisor

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {

            sum += i;

            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    return sum === num;
}

/*
Time Complexity: O(√n)
Space Complexity: O(1)
*/


// Test cases

let num1 = 6;   // true
let num2 = 28;  // true
let num3 = 12;  // false

console.log(isPerfectNumber1(num1));
console.log(isPerfectNumber1(num2));
console.log(isPerfectNumber1(num3));

console.log(isPerfectNumber2(num1));
console.log(isPerfectNumber2(num2));
console.log(isPerfectNumber2(num3));