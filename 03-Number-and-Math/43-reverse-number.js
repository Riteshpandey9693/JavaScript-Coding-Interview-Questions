// 4️⃣3️⃣ Reverse a number

let num1 = 1234;
// expected output: 4321

let num2 = -567;
// expected output: -765

let num3 = 100;
// expected output: 1

function reverseNumber1(num) {
    let sign = Math.sign(num);
    let reversed = Number(Math.abs(num).toString().split("").reverse().join(""));
    return sign * reversed;
}


function reverseNumber2(num) {
    let sign = Math.sign(num);
    num = Math.abs(num);

    let reversed = 0;

    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return sign * reversed;
}



console.log(reverseNumber1(num1));
console.log(reverseNumber1(num2));
console.log(reverseNumber1(num3));

console.log(reverseNumber2(num1));
console.log(reverseNumber2(num2));
console.log(reverseNumber2(num3));