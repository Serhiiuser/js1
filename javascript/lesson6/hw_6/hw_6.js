// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let words = 'hello world';
// console.log(words.length)
//
// let words_2 = 'lorem ipsum';
// console.log(words_2.length);
//
// let words_3 = 'javascript is cool';
// console.log(words_3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// let strUp = str.toUpperCase('lorem ipsum');

// let str_2 = 'lorem ipsum';
// let strUpp = str_2.toUpperCase('hello world');

// let str_3 = 'javascript is cool';
// let strUpper = str_3.toUpperCase('javascript is cool');
// console.log(strUp,strUpp,strUpper);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let str = 'hello world';
// let strUp = str.toLowerCase('lorem ipsum');
// let str_2 = 'lorem ipsum';
// let strUpp = str_2.toLowerCase('hello world');
// let str_3 = 'javascript is cool';
// let strUpper = str_3.toLowerCase('javascript is cool');
// console.log(strUp,strUpp,strUpper);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let trim = str.trim(' dirty string   ');
// console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let arrSplit =str.split(' ')
// console.log(arrSplit);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delCharacters = (str, index) => {
//     return str.substr(0, index);
// };
// let str = 'Каждый охотник желает знать';
// console.log(delCharacters(str, 15));





// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insDash = (str) => {
//     let splitJoinUpper = str.split(' ').join('-').toUpperCase();
//     return splitJoinUpper;
// }
// let string = "HTML JavaScript PHP";
// console.log(insert_dash(string));

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

//  let funcUp = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// };
//
// console.log(firstUp('java script'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
//
// console.log(capitalize('java script okten web'));


