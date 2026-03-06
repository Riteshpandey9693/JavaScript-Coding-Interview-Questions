/*
Question:
Find the GCD (Greatest Common Divisor) of two numbers.

Definition:
The GCD of two numbers is the largest number that divides both numbers
without leaving a remainder.

Example:
12 → divisors: 1, 2, 3, 4, 6, 12
18 → divisors: 1, 2, 3, 6, 9, 18

Common divisors → 1, 2, 3, 6
Greatest → 6
*/


/*
Approach 1: Brute Force (Check from min number)

Understanding:
- The GCD cannot be greater than the smaller number.
- Start checking from min(num1, num2) and move backward.
- First common divisor found is the GCD.
*/

function findGCD1(num1, num2) {
    let min = Math.min(num1, num2);

    for (let i = min; i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i;
        }
    }

    return 1;
}

/*
Time Complexity: O(min(num1, num2))
Space Complexity: O(1)
*/


/*
Approach 2: Better (Check up to min)

Understanding:
- Iterate from 1 to min(num1, num2)
- Store the latest common divisor
*/

function findGCD2(num1, num2) {
    let min = Math.min(num1, num2);
    let gcd = 1;

    for (let i = 1; i <= min; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }

    return gcd;
}

/*
Time Complexity: O(min(num1, num2))
Space Complexity: O(1)
*/


/*
Approach 3: Optimal (Euclidean Algorithm)

Key Idea:
GCD(a, b) = GCD(b, a % b)

Example:
GCD(12, 18)

18 % 12 = 6
12 % 6 = 0

GCD = 6
*/

function findGCD3(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    return num1;
}

/*
Time Complexity: O(log(min(a,b)))
Space Complexity: O(1)
*/


// Test cases

let num1 = 12;
let num2 = 18;

let num3 = 20;
let num4 = 8;

console.log(findGCD1(num1, num2));
console.log(findGCD1(num3, num4));

console.log(findGCD2(num1, num2));
console.log(findGCD2(num3, num4));

console.log(findGCD3(num1, num2));
console.log(findGCD3(num3, num4));