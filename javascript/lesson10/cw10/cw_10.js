//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


let divBox1 = document.createElement('div');
divBox1.innerText = 'Container One';
document.body.appendChild(divBox1);

let divBox2 = document.createElement('div');
divBox2.innerText = 'Container Two';
document.body.appendChild(divBox2);




let formOne = document.createElement('form');
formOne.setAttribute('name','formOne');
divBox1.appendChild()

let formOne = document.createElement('form');
formOne.setAttribute('name', 'formOne');
divOne.appendChild(formOne);

let formTwo = document.createElement('form');
formTwo.setAttribute('name', 'formTwo');
divTwo.appendChild(formTwo);

let inputeOne = document.createElement('input');
inputeOne.setAttribute('name', 'inputeOne');

let inputeTwo = document.createElement('input');
inputeTwo.setAttribute('name', 'inputeTwo');

let inputeThree = document.createElement('input');
inputeThree.setAttribute('name', 'inputeThree');

let inputeFour = document.createElement('input');
inputeFour.setAttribute('name', 'inputeFour');

let button = document.createElement('button');
button.innerText = 'ГОРІШКАМ БОЙ';

document.body.appendChild(button);

formOne.append(inputeOne,inputeTwo);
formTwo.append(inputeThree,inputeFour);


button.addEventListener('click', function (){
    console.log(document.forms.formOne.inputeOne.value);
    console.log(document.forms.formOne.inputeTwo.value);
    console.log(document.forms.formTwo.inputeThree.value);
    console.log(document.forms.formTwo.inputeFour.value);
})
