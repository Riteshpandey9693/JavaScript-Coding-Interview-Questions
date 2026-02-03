// 2️⃣9️⃣ Find the first non-repeating element in an array

let arr1 = [1, 2, 2, 3, 3];
// expected output: 1

let arr2 = [5, 5, 5];
// expected output: null

function firstNonRepeatingElementInArray1(arr) {
    for(let i=0; i<arr.length; i++) {
        let isRepeated = false;
        for(let j=i+1; j < arr.lenth; j++) {
            if(i !== j && arr[j] === arr[i]) {
                isRepeated = true;
                break;
            }
        }
        if(! isRepeated) {
            return arr[i];
        }
    }
    return null;
}

function firstNonRepeatingElementInArray2(arr) {
    let freq = {};
    for(let i=0; i<arr.length; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1
    }
    
    for(let i=0; i<arr.length; i++) {
        if(freq[arr[i]] == 1) {
            return arr[i];
        }
    }
    return null;
}

console.log(firstNonRepeatingElementInArray1(arr1));
console.log(firstNonRepeatingElementInArray1(arr2));

console.log(firstNonRepeatingElementInArray2(arr1));
console.log(firstNonRepeatingElementInArray2(arr2));