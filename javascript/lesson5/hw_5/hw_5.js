// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let sRectangle =(a, b) => a * b;
//
// sRectangle(5,7)
// console.log(sRectangle(5,7))

// - створити функцію яка обчислює та повертає площу кола
//
// let  areaCircle = (r)=> {
//     let radius = r ** 2;
//     return  3.14 * radius;
//
// }
// areaCircle(5)
// console.log(areaCircle(5))


// - створити функцію яка обчислює та повертає площу циліндру
// let areaCircle=(r,h)=> 2 * 3.14 * r * h
// areaCircle(5,7)
// console.log(areaCircle(5,7))

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let arr = ['hello',true,100,'was is das',false,123];
//
// let arrF = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         document.write(arr[i]);
//     }
//
// }
// arrF(arr);


// let array = [1,2,3,4,5, 'hello world', 'okten'];
//
// const dataArray =  (array) => {
//     for (let i = 0; i < array.length; i++) {
//        document.write(array[i]);
//     }
// }
// dataArray(array);
// створити функцію яка  створює параграф з текстом. Текст задати через аргумент

//  let someText = (text)=> {
//     document.write(`<p>${text}</p>`)
//
// }
// someText( 'hello');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let listText =(t)=> {
//     document.write(`<ul>`)
//     document.write(`<li>${t}</li>`)
//     document.write(`<li>${t}</li>`)
//     document.write(`<li>${t}</li>`)
//     document.write(`</ul>`)
// }
// listText('Hello JS');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим

// let createText =(t,number)=> {
//     document.write(`<ul>`)
//     for (let i = 0; i < number ; i++) {
//         document.write(`<li>${t}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// createText('Hello JS',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// //
// let arr = ['hello',true,100,'was is das',false,123]
// let fArr= (arr)=> {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//         document.write(`</ul>`)
// }
// fArr(arr);


// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let objArr= [{id:1,name:'Hulio',age:50},{id:2,name:'Farhut',age:40},{id:3,name:'Vova',age:15} ];
// let arrObject =(arr)=> {
//
//         for (const argument of arr) {
//             document.write(`<div>${argument.id}.${argument.name} - ${argument.age}</div>`);
//         }
//
// }
// arrObject(objArr)