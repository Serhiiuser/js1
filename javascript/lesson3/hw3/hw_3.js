// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num = [11,22,33,44,55];
// console.log(num);
// let text = ['school','car','iphone','bike','text'];
// console.log(text);
// let mix = ['car',77,true,'text',false]
// console.log(mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0]= 999
// arr[1]='string'
// arr[2]='boolean'
// arr[3]=100
// arr[4]='car'
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (i=0;i<10;i++){
//     document.write('<div>text</div>')
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (i=0;i<10;i++){
//     document.write(`<div>text ${i} </div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<div><h1>text</h1> </div>`)
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
// let i =0;
// while (i < 20){
//     document.write(`<div><h1>text ${i}</h1> </div>`)
//     i++
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr =[22,77,15,12,20,55,7,8,100,150];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrStr=['car','text','iphone','bike','text','dog','string','array','boolean','null']
// for (let i = 0; i < arrStr.length; i++) {
//     console.log(arrStr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі

// let arr =['car',77,true,'text',100,false,'dog','string','array',88,];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrB = ['car', true, 20, 'text', false, 'dog', 'string', 'array', 100, 'true'];
// for (let i = 0; i < arrB.length; i++) {
//     if (typeof arrB[i] === 'boolean') {
//         console.log(arrB[i])
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrN = ['car', true, 20, 'text', false, 'dog', 13, 'array', 100, 'true'];
// for (let i = 0; i < arrN.length; i++) {
//     if (typeof arrN[i] === "number"){
//         console.log(arrN [i]);
//     }
//
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrStr = ['car', true, 20, 'text', false, 'dog', 13, 'array', 100, 'true'];
// for (let i = 0; i < arrStr.length; i++) {
//     if (typeof arrStr[i] === 'string'){
//         console.log(arrStr[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// EmptyArray = [];
// EmptyArray[0] = 'Car';
// EmptyArray[1] = 'text';
// EmptyArray[2] = 100;
// EmptyArray[3] = 'boolean';
// EmptyArray[4] = true;
// EmptyArray[5] = 150;
// EmptyArray[6] = 'TV';
// EmptyArray[7] = true;
// EmptyArray[8] = 55;
// EmptyArray[9] = false;
// for (let i = 0; i < EmptyArray.length; i++) {
//     console.log(EmptyArray[i])
//
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log('Крок ітерації '+ i +' ')
//     document.write('Крок ітерації '+ i +' ')
// }

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log('Крок ітерації ' +  i  + ' ')
//     document.write('Крок ітерації ' +  i  + ' ')
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log('Крок ітерації ' +  i  + ' ')
//     document.write('Крок ітерації ' +  i  + ' ')
// }

//
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 2; i < 100; i+=2) {
//     console.log('Крок ітерації ' +  i  + ' ')
//     document.write('Крок ітерації ' +  i  + ' ')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i < 100; i+=2) {
//     console.log('Крок ітерації ' +  i  + ' ')
//     document.write('Крок ітерації ' +  i  + ' ')
// }

