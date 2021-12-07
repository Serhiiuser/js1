/ - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
//     const res = [];
//     while (str.length) {
//         res.push(str.substr(0, n))
//         str = str.slice(n)
//     }
//     console.log(res)
//     return res
// };
// document.writeln(cutString('Армагедон', 3))