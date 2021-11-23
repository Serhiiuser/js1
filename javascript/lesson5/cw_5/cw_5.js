// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let numbers = (num1, num2, num3)=> {
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
//

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let numbers = (num1, num2, num3) => {
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
// let arrMax =[1,4,5,9,10,12,35,29,65,100,777]
// let arrNumbers =(arr)=> {
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
//

// - створити функцію яка повертає найменьше число з масиву
// let arrMax =[1,4,5,9,10,12,35,29,65,100,777]
// let arrNumbers =(arr)=> {
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


// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// let num = [5,7,10,20,120,45];
// let sumNum =(arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum= arrElement + sum;
//     }
//     return sum;
//
// }
// console.log(sumNum(num))

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = [5,7,10,20,300,22,150];
// let middleNum = (arr)=> {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum = arrElement + sum;
//     }
//     return sum/arr.length;
//
// }
//
// console.log(middleNum(numbers));

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// let minMax =  (...args)=> {
//     let min = args[0];
//     let max = args[0];
//     for (const element of args) {
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

// - створити функцію яка заповнює масив рандомними числами
// let emptyArr = [];
//
// let fRandom = (length) =>{
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.round(Math.random()*100))
//
//     }
//     return emptyArr
// }
// console.log(fRandom(10));

// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let emptyArr = [];
//
// let  fRandom =(length,limit)=> {
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.round(Math.random()*limit))
//
//     }
//     return emptyArr
// }
// console.log(fRandom(10,50));
//


// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arrNum =[1,4,7,9,14,12,35,22,55];
// let reverseArr = ()=> {
//     let emptyArr = [];
//     for (let i = arrNum.length  - 1; i >= 0; i--) {
//         emptyArr.push(arrNum[i])
//     }
//     return emptyArr
// }
// console.log(reverseArr());
//

