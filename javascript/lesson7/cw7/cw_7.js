// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Cars(model, producer, year, maxspeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//
// this.info = function () {
//     for (let argumentsKey in arguments) {
//         if (typeof this[argumentsKey] !== 'function') console.log(`${argumentsKey} - ${this[arguments]}`)
//
//     }
// }
//
// this.newMaxSpeed = function (newSpeed) {
//     this.maxspeed = this.maxspeed + newSpeed;
// }
// this.newYear = function (newValue) {
//     this.year = newValue
// };
// this.addDriver = function (newDriver) {
//     this.drive = newDriver
// }}
// let addCar = new Cars('Honda', 'Japan', 2010, 250, 2.2)
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.newMaxSpeed(30);
// addCar.drive();
// addCar.newYear(2015)
// addCar.info();
// addCar.addDriver('Ivan')
// console.log(addCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//     constructor(model, producer, year, maxspeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     info() {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }}
//     newMaxSpeed (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     }
//     newYear  (newValue) {
//     this.year = newValue
// }
// addDriver (newDriver) {
//     this.drive = newDriver
// }
// }
// let addCar = new Cars('Honda', 'Japan', 2010, 250, 2.2)
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.newMaxSpeed(30);
// addCar.drive();
// addCar.newYear(2015)
// addCar.info();
// addCar.addDriver('Ivan')
// console.log(addCar);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбек

// class Popelushka {
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
// let popArr = [
//         new Popelushka('Antonina', 20, 39),
//         new Popelushka('Ivanka', 29, 42),
//         new Popelushka('Toma', 30, 38),
//         new Popelushka('Victoria', 33, 35),
//         new Popelushka('Andryanna', 31, 36),
//         new Popelushka('Ira', 21, 37),
//         new Popelushka('Inna', 25, 40),
//         new Popelushka('Svitlana', 27, 36),
//         new Popelushka('Olga', 40, 37),
//         new Popelushka('Tonya', 50, 38),
// ];
// console.log(popArr);
// class Prince{
//         constructor(name,age,shose) {
//             this.name = name;
//             this.age = age;
//             this.shose = shose;
//         }
// }
// let prince = new Prince('Ramirez',33,35);
//  let  newLove =(popArr,Prince)=> {
//      for (const item of popArr) {
//          if (item.footsize === Prince.shose ){
//              return ` Твоя  Popelushka ${item.name}`
//          }
//      }
//  }
// console.log(newLove(popArr, prince));
//
//  let princess = popArr.find((item) => item.footsize === prince.shose);
//  console.log(princess);
