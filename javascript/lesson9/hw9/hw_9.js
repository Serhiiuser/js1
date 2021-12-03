// Все робити за допомоги js.
// - створити блок,


// let tag = document.createElement('div');
//
// //     - додати йому класи wrap, collapse, alpha, beta
//
// tag.classList.add('wrap');
// tag.classList.add('collapse');
// tag.classList.add('alpha');
// tag.classList.add('beta');
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// tag.style.background = 'red';
// tag.style.color = 'blue';
// tag.style.fontSize = '30px';
//
// // - додати цей блок в body.
//
// document.body.appendChild(tag);
//
// // - клонувати його повністю, та додати клон в body.
//
// document.body.appendChild(tag.cloneNode(true));


// - Є масив:
//['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arrItems = ['Main', 'Products', 'About us', 'Contacts'];
// let menu = document.getElementsByClassName('menu')[0]
// for (let menuitem of arrItems) {
//     let li = document.createElement('li')
//     li.innerText = menuitem;
//     menu.appendChild(li)
//
// }
//
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let item of coursesAndDurationArray) {
//     let tag = document.createElement('div')
//     tag.innerText = `${item.title} ${item.monthDuration}`
//     document.body.appendChild(tag)
// }



// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    let tagDiv = document.createElement('div',{class: 'item'})
    let tagH1 = document.createElement('h1',{class:'heading'})
    tagH1.innerText = item.title;

    let p = document.createElement('p',{class :'description'})
    p.innerText = item.monthDuration

    tagDiv.appendChild(tagH1)
    tagDiv.appendChild(p)
    document.body.appendChild(tagDiv)
}


