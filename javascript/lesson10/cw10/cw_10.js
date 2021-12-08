//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// //
// let divBox1 = document.createElement('div');
// divBox1.innerText = 'Container One';
// document.body.appendChild(divBox1);
//
//
// let divBox2 = document.createElement('div');
// divBox2.innerText = 'Container Two';
// document.body.appendChild(divBox2);
//
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', ' formOne');
// divBox1.appendChild(formOne);
//
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', ' formOne');
// divBox1.appendChild(formTwo);
//
//
// let inputeOne =document.createElement('input');
// inputeOne.setAttribute('name','inputeOne');
//
// let inputeTwo =document.createElement('input');
// inputeTwo.setAttribute('name','inputeTwo');
//
//
// let inputeThree =document.createElement('input');
// inputeThree.setAttribute('name','inputeThree');
//
//
// let inputeFour =document.createElement('input');
// inputeFour.setAttribute('name','inputeFour');
//
//
// let button = document.createElement('button');
// button.innerText = 'Push me';
//
// document.body.appendChild(button);
//
// formOne.append(inputeOne,inputeTwo);
// formTwo.append(inputeThree,inputeFour);
//
// button.addEventListener('click',function () {
//   console.log(document.forms.formOne.inputeOne.value);
//     console.log(document.forms.formOne.inputeTwo.value);
//     console.log(document.forms.formTwo.inputeThree.value);
//     console.log(document.forms.formTwo.inputeFour.value);
//
// });



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// let divOne = document.createElement('div');
// divOne.innerText = 'Контейнер 1';
// divOne.style.margin = '20px';
// document.body.appendChild(divOne);
// let divTwo = document.createElement('div');
// divTwo.innerText = 'Контейнер 2';
// divTwo.style.margin = '20px';
// document.body.appendChild(divTwo);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// divOne.appendChild(formOne);
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// divTwo.appendChild(formTwo);
//
// let inputeOne = document.createElement('input');
// inputeOne.setAttribute('name', 'inputeOne');
//
// let inputeTwo = document.createElement('input');
// inputeTwo.setAttribute('name', 'inputeTwo');
//
// let inputeThree = document.createElement('input');
// inputeThree.setAttribute('name', 'inputeThree');
//
// let inputeFour = document.createElement('input');
// inputeFour.setAttribute('name', 'inputeFour');
//
// let button = document.createElement('button');
// button.innerText = 'ГОРІШКАМ БОЙ';

// document.body.appendChild(button);

// formOne.append(inputeOne,inputeTwo);
// formTwo.append(inputeThree,inputeFour);
//
//
// button.addEventListener('click', function (){
//     console.log(document.forms.formOne.inputeOne.value);
//     console.log(document.forms.formOne.inputeTwo.value);
//     console.log(document.forms.formTwo.inputeThree.value);
//     console.log(document.forms.formTwo.inputeFour.value);
// })


//    - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//        При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Create table';
// document.body.append(inputOne,inputTwo,inputThree,button);
//
// button.addEventListener('click',function () {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let enterTxt = inputThree.value;
//
//     function createTable(tr,td,inner) {
//         let table = document.createElement('table');
//         let divTab = document.createElement('div');
//
//
//         table.style.border = '1px solid black';
//         divTab.appendChild(table);
//         document.body.appendChild(divTab);
//
//
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid dark red'
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid red';
//                 td.innerText = `${inner}`;
//
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     createTable(tr,td,enterTxt);
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


// let badWords = ['fuck','shit','ass','fool','suck'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Verify';
// document.body.append(input,button)
//
// button.addEventListener('click',function () {
//     let valInput = input.value;
//     for (const word of badWords) {
//         if (word === valInput){
//             alert('ERROR 404');
//             input.value='clen';
//             return
//         }
//
//     }
//     if (valInput){
//         alert('Good job');
//         input.value = 'clean';
//     }
//
// });

