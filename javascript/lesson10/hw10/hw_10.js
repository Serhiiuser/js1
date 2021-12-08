// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let text = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     text.style.display = 'none';
// };


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     btn.style.display = 'none'
//
// };


// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувач
//
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     let age = document.getElementById('age').value;
//     if (!age) {
//         alert('You did not enter your age');
//     } else if (age < 18) {
//         alert('You are baby))');
//     } else {
//         alert('Hello please enter');
//     }
//
// };

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function () {
//     console.log(this.children)
//     for (const child of this.children) {
//         child.classList.toggle('hide')
//     }
//
// };


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

//

let cars = [
    {name: 'Toyota', body: 'Japan car'},
    {name: 'BMW', body: 'German car'},
    {name: 'Tavria', body: 'Ukraine car'},
    {name: 'Toyota', body: 'American car'}
];


let div1 = document.createElement('div');
for (const item of cars) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    p.classList.add('comments-body')
    let btn = document.createElement('button');

    h3.innerText = item.name;
    h3.style.color = 'blue'
    p.innerText = item.body;
    btn.innerText = 'Close';
    btn.style.color = 'red'

    btn.onclick = () => {
        p.classList.toggle('hide-body')
    }
    div.append(h3, p, btn);
    div1.append(div)
}
document.body.appendChild(div1);


