/*
Question:
Sort an array without using the built-in sort() method.

Rules:
- Do not use Array.prototype.sort()
- Sort in ascending order
- Works for numbers (positive, negative, zero)
- Return the sorted array

Examples:
[4, 2, 1, 3] → [1, 2, 3, 4]
[5, 3, 0]    → [0, 3, 5]
*/


/*
Approach: Bubble Sort (Optimized)

Understanding:
- Repeatedly compare adjacent elements
- Swap if elements are in the wrong order
- After each pass, the largest element moves to the end
- Use a flag to detect if array is already sorted
*/

function sortArrayWithoutSorting(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Optimization: check if any swap happens
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap adjacent elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    // If no swaps occurred, array is already sorted
    if (!swapped) break;
  }

  return arr;
}

/*
Time Complexity:
- Worst Case: O(n²)
- Average Case: O(n²)
- Best Case: O(n) (already sorted due to optimization)

Space Complexity:
- O(1) (in-place sorting)
*/


// Test cases
let arr1 = [4, 2, 1, 3];
let arr2 = [5, 3, 0];

console.log(sortArrayWithoutSorting(arr1)); // [1, 2, 3, 4]
console.log(sortArrayWithoutSorting(arr2)); // [0, 3, 5]
