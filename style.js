// Javascript properties
// const person = {
//     name: 'sumit',
//     age: 35
// };
// person.country = 'Bangladesh';
// person.age = 36;
// console.log(person);

// Accessing JavaScript Properties

// const person = {
//     name: 'sumit',
//     age: 35
// };
// console.log(person.age);
// let a = 'age';
// console.log(person[a]);

// JavaScript for...in Loop
// const person = {
//     fname:' jhon',
//     lname:' Doe',
//     age: 25
// };
// let txt = '';
// for (let x in person ) {
//     txt += person [x];
// };
// console.log(txt);

// Deleting Properties
// const person = {
//     fname: 'sohel',
//     lname: 'rana',
//     age: 100
// };
// delete person.age;
// console.log(person);

// Nested object
myobj = {
    name:'jhon',
    age:30,
    cars: {
        car1: 'Ford',
        car2: 'Bmw'
    }
}

console.log(myobj.cars.car1);