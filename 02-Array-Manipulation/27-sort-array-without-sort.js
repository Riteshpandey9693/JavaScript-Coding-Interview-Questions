
// 2️⃣7️⃣ Sort an array without using sort()

let arr1 = [4, 2, 1, 3];
// expected output: [1, 2, 3, 4]

let arr2 = [5, 3, 0];
// expected output: [0, 3, 5]




function sortArrayWithoutSorting(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // flag to optimize (already sorted check)
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // if no swap happened, array is already sorted
        if (!swapped) break;
    }

    return arr;
}

console.log(sortArrayWithoutSorting(arr1));
console.log(sortArrayWithoutSorting(arr2));
