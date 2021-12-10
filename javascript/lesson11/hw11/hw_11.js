// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let name = document.forms.user.name;
// let age = document.forms.user.age;
// let btn = document.getElementById('btn');
// let key = 'key';
//
// let value = function (userName,userAge) {
//     let user = {
//         name:userName,
//         age:userAge
//     };
//     localStorage.setItem(key,JSON.stringify(user));
//
// };
// btn.onclick = ()=>{
//     value(name.value,age.value)
// };
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let model = document.forms.car.model;
let type = document.forms.car.type;
let vol = document.forms.car. volume;
let btn = document.getElementById('btn');
let  key = 'keyCar';


let saveCar =function (modelCar,typeCar,volumeCar) {
    let newArr = JSON.parse(localStorage.getItem(key)) || [];

    newArr.push({modelCar,typeCar,volumeCar});
    localStorage.setItem(key,JSON.stringify(newArr));

};
btn.onclick = ()=>{
    saveCar(model.value,type.value,vol.value);
};
