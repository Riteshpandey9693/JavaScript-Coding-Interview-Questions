/*
Question:
Find the maximum occurring digit in a number.

Rules:
- Digits range from 0 to 9
- Return the digit that appears the most times
- If multiple digits have same frequency → return any one
- Works for positive integers

Examples:
1223334444 → 4
111223      → 1
987654      → any digit (all occur once)
*/


/*
Approach 1: Using Frequency Array

Understanding:
- Create an array of size 10 (for digits 0–9)
- Extract digits using modulo (% 10)
- Count frequency of each digit
- Find digit with maximum frequency
*/

function maxOccurrenceDigit1(num) {
  let freq = new Array(10).fill(0);

  // count frequency
  while (num > 0) {
    let digit = num % 10;
    freq[digit]++;
    num = Math.floor(num / 10);
  }

  // find max occurring digit
  let maxFreq = 0;
  let resultDigit = -1;

  for (let i = 0; i < 10; i++) {
    if (freq[i] > maxFreq) {
      maxFreq = freq[i];
      resultDigit = i;
    }
  }

  return resultDigit;
}

/*
Time Complexity: O(d + 10) ≈ O(d)
Space Complexity: O(1)
*/


/*
Approach 2: Using String + Nested Loop

Understanding:
- Convert number to string
- For each digit (0–9), count occurrences
- Track max frequency and corresponding digit

Why this approach:
- Easy to understand
- Less efficient than frequency array
*/

function maxOccurrenceDigit2(num) {
  let str = num.toString();

  let maxFreq = 0;
  let resultDigit = -1;

  for (let i = 0; i <= 9; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (Number(str[j]) === i) {
        count++;
      }
    }

    if (count > maxFreq) {
      maxFreq = count;
      resultDigit = i;
    }
  }

  return resultDigit;
}

/*
Time Complexity: O(10 * d) ≈ O(d)
Space Complexity: O(d)
*/


// Test cases
let num1 = 1223334444;
let num2 = 111223;
let num3 = 987654;

console.log(maxOccurrenceDigit1(num1)); // 4
console.log(maxOccurrenceDigit1(num2)); // 1
console.log(maxOccurrenceDigit1(num3)); // any digit

console.log(maxOccurrenceDigit2(num1)); // 4
console.log(maxOccurrenceDigit2(num2)); // 1
console.log(maxOccurrenceDigit2(num3)); // any digit