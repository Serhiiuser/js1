// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і
//
// function areaRectangle(a, b) {
//     let sRectangle = a * b;
//     return sRectangle;
// }
// areaRectangle(5,7)
// console.log(areaRectangle(5,7))
//
//
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function areaCircle(r) {
//     let radius = r ** 2;
//     let sCircle = 3.14 * radius;
//     return sCircle;
// }
// areaCircle(5)
// console.log(areaCircle(5))
//
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function areaCircle(h,r) {
//     let sCylinder = 2 * 3.14 * h * r;
//     return sCylinder;
// }
//
// console.log(areaCircle(5,5))
//
// створити функцію яка приймає масив та виводить кожен його елемент
// let arr = ['hello',true,100,'was is das',false,123]
// function arrF(arr) {
//     for (let i = 0; i < arr.length; i++) {
//
//     }
// }
// console.log(arr)
//
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
//
// function someText (text) {
//     document.write(`<p>${text}</p>`)
//
// }
// someText( 'hello')
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listText(t) {
//     document.write(`<ul>`)
//     document.write(`<li>${t}</li>`)
//     document.write(`<li>${t}</li>`)
//     document.write(`<li>${t}</li>`)
//     document.write(`</ul>`)
// }
// listText('Hello JS')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createText(t,number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number ; i++) {
//         document.write(`<li>${t}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// createText('Hello JS',3)
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = ['hello',true,100,'was is das',false,123]
// function fArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
// console.log(arr[i])
//     }
// }
// fArr(arr);
//
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let objArr= [{id:1,name:'Hulio',age:50},{id:2,name:'Farhut',age:40},{id:3,name:'Vova',age:15} ];
// function arrObject(arr) {
//
//         for (const argument of arr) {
//             document.write(`<div>${argument.id}.${argument.name} - ${argument.age}</div>`);
//         }
//
// }
// arrObject(objArr)
