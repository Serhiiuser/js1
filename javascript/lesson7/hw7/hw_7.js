// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id,name,surname,email,phone){
//     this.id= id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }


// створити пустий масив, наповнити його 10 об'єктами new User
// let userArr = [
//     new User(11, 'Harry', 'Potter', 'Hp@gmail.com', 30681902324),
//     new User(54, 'Ron', 'Wythle', 'R@gmail.com', 30671234566),
//     new User(3, 'Hermyona', 'Graynger', 'Hr@gmail.com', 30681113344),
//     new User(67, 'Tom', 'Hardy', 'Har@gmail.com', 30941153287),
//     new User(5, 'Brad', 'Pitt', 'Pitt@gmail.com', 30930196657),
//     new User(75, 'Selena', 'Gomes', 'Sel@gmail.com', 3067900021),
//     new User(7, 'Mike', 'Tayson', 'Mike@gmail.com', 30684448811),
//     new User(33, 'Alex', 'Usyk', 'Usyk@gmail.com', 30971102233),
//     new User(9, 'Kokos', 'Abricos', 'Kok@gmail.com', 3050443019),
//     new User(1, 'Pen', 'Pensil', 'P@gmail.com', 30672345598),
// ];
// //
// console.log(userArr);

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUser = userArr.filter(value => {
//     if (value.id %2 === 0){
//         return value
//     }
// });
// console.log(filterUser);

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortUser = userArr.sort((a,b)=>a.id-b.id)
// console.log(sortUser)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client{
//   constructor (id,name,surname,email,phone,order){
//     this.id= id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// }
// let userArr = [
//     new Client(11, 'Harry', 'Potter', 'Hp@gmail.com', 30681902324,['iphone','bike' , 'big mac']),
//     new Client(54, 'Ron', 'Wythle', 'R@gmail.com', 30671234566,['tv','moto bike','smart phone']),
//     new Client(3, 'Hermyona', 'Graynger', 'Hr@gmail.com', 30681113344,['lap top','ps5','ring']),
//     new Client(67, 'Tom', 'Hardy', 'Har@gmail.com', 30941153287,['sea food','pen','note']),
//     new Client(5, 'Brad', 'Pitt', 'Pitt@gmail.com', 30930196657,['iphone13','water','xbox']),
//     new Client(75, 'Selena', 'Gomes', 'Sel@gmail.com', 3067900021,['iphone','bike','toy']),
//     new Client(7, 'Mike', 'Tayson', 'Mike@gmail.com', 30684448811,['book','door','car']),
//     new Client(33, 'Alex', 'Usyk', 'Usyk@gmail.com', 30971102233,['cat','dog','cat food']),
//     new Client(9, 'Kokos', 'Abricos', 'Kok@gmail.com', 3050443019,['candy','bike','pencil']),
//     new Client(1, 'Pen', 'Pensil', 'P@gmail.com', 30672345598,['beer','fish','big mac']),
// ];
// // console.log(userArr);

// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sortClient = userArr.sort((a,b)=>a.order.length - b.order.length)
//
// console.log(userArr);
//
