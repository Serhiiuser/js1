// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numbers(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < num3 && num2 < num1) {
//         console.log(num2);
//     } else {
//         console.log(num3)
//     }
//
// }
//
// numbers(300, 200, 100)
// - створити функцію яка приймає три числа та виводить найбільше.

// function numbers(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//     } else if (num2 > num3 && num2 > num1) {
//         console.log(num2);
//     } else {
//         console.log(num3)
//     }
//
// }
//
// numbers(100, 200, 300)

// - створити функцію яка повертає найбільше число з масиву
// let arrMax =[1,4,7,9,14,12,35,22,55]
// function arrNumbers(arr) {
//     let maxNum = arr[0];
//     for (const element of arr) {
//         if (element > maxNum){
//             maxNum = element
//         }
//
//     }
//     return maxNum;
//
// }
// console.log(arrNumbers(arrMax))

// - створити функцію яка повертає найменьше число з масиву

// let arrMax =[1,4,7,9,14,12,35,22,55]
// function arrNumbers(arr) {
//     let minNum = arr[0];
//     for (const element of arr) {
//         if (element < minNum){
//             minNum = element
//         }
//
//     }
//     return minNum;
//
// }
// console.log(arrNumbers(arrMax))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let num = [5,7,10,20];
// function sumNum(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum= arrElement + sum;
//     }
//     return sum;
//
// }
// console.log(sumNum(num))
// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = [5,7,10,20];
// function middleNum(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum = arrElement + sum;
//     }
//     return sum/arr.length;
//
// }
// console.log(middleNum(numbers));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше 

// function minMax(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
// console.log(minMax(10,33,888,50))

// створити функцію яка заповнює масив рандомними числами

// let emptyArr = [];
//
// function fRandom(length) {
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.round(Math.random()*100))
//
//     }
//     return emptyArr
// }
// console.log(fRandom(10));
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.

// let emptyArr = [];
//
// function fRandom(length,limit) {
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.round(Math.random()*limit))
//
//     }
//     return emptyArr
// }
// console.log(fRandom(10,50));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку.
//
let arrNum =[1,4,7,9,14,12,35,22,55];
function reverseNum() {
    for (let i =arrNum.length  - 1; i >= 0; i--) {
        
    }
}
console.log(reverseNum())