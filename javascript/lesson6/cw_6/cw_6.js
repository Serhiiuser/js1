// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let name1 = 'Harry..Potter'
// let name2 = 'Ron---Whisley'
// let name3 = 'Hermione__Granger'
//
// let name = (str, symbol) => {
//     let newArr = [];
//     if (str.includes(symbol)) {
//         let a = str.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(name1, '..');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let random = (length,num) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.floor(Math.random()*num))
//
//     }
//     return emptyArr
// }
// let result = random(10,100)
// console.log(result)

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// let sortRandom = (length,num) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.floor(Math.random()*num))
//
//     }
//     return emptyArr.sort((first,second) =>  first - second )
// }
//
// console.log(sortRandom(10,100))
//


// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let filterRandom = (length,num) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.floor(Math.random()*num))
//
//         }
//     return emptyArr.filter(value => value % 2 === 0)
// }
//
// console.log(filterRandom(20,100))

// створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let mapRandom = (length,num) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.floor(Math.random()*num))
//
//         }
//     return emptyArr.map(value => {
//         return value + ' '
//     })
// }
//
// console.log(mapRandom(20,100))

// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// let sortNums = (arr,direction)=>{
//     if (direction === 'ascending') return arr.sort((a,b)=> a - b)
//     if (direction === 'descending') return arr.sort((a,b)=> b - a)
//
// }
// console.log(sortNums([100,33,300,31,500,43,700,12,76],'ascending'))
// console.log(sortNums([100,200,300,400,500,600,700,800,900],'descending'))


// - є масив -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sort = coursesAndDurationArray.sort((m1, m2) => {
//
//         return m1.monthDuration - m2.monthDuration
//
//
// });
// console.log(sort);
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let filter = coursesAndDurationArray.filter((value)=>{
//     return value.monthDuration > 5
// })
// console.log(filter);
