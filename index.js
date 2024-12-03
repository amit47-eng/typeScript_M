"use strict";
// function handelLast(a:number,b:number):number{
//     return a+b
//     }
//     console.log(handelLast(2,4))
// let person={
//     name:'amit',
//     age:21,
//     address:{address1:'mayawati'}
// }
// interface person{
//     name:string,
//     age:number
//     address:{address1:string|number}
// }
// function checkperson(obj:person):void{
//      console.log('yes it is person')
// }
// checkperson(person)
// class Person {
//     protected name:string;
//     age:number;
//     constructor(name:string, age:number) {
//       this.name = name;
//       this.age = age;
//     }
//     greet():void {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
//   class child extends Person{
//     address:string
//     constructor(name:string, age:number,address:string) {
//         super(name,age)
//         this.address=address
//       }
//   }
//   const person1 = new Person("Amit", 25);
//   person1.greet(); 
//   let inputTuple:[number,string,boolean,undefined]=[1,'amit',false,undefined];
//   inputTuple.push(142);
//   inputTuple.push('amit');
//   inputTuple.push(123);
//   inputTuple.push(undefined)
//   console.log(inputTuple);
var univerwsity;
(function (univerwsity) {
    univerwsity["principel"] = "principle";
    univerwsity["student"] = "student";
    univerwsity["admin"] = "admin";
})(univerwsity || (univerwsity = {}));
function user(person) {
    if (person == univerwsity.student) {
        console.log();
    }
}
// type Person = {
//   name: string;
// };
// type Employee = {
//   employeeId: number;
// };
// type PersonEmployee = Person & Employee;
// const personEmployee: PersonEmployee = {
//   name: "Alice",
//   employeeId: 101,
// };
// function handelLast<T,B>(arg1:T,arg2:B):[T,B]{
//   return [arg1,arg2]
// const handelLast=<T,B>(arg1:T,arg2:B):[T,B]=>{
//  return [arg1,arg2]
// }
// const person=handelLast<string,string>('amit','ravi');
// console.log(person);
//Write a function in TypeScript that takes a string and a number as arguments and returns the string repeated the number of times specified by the second argument.
const repeated = (a, b) => {
    const answer = a.repeat(b);
    return answer;
};
console.log(repeated('amit ', 3));
function handelwork(str, num) {
    return str.repeat(num);
}
console.log(handelwork('ravi ', 4));
//Create a variable without explicitly declaring its type. How does TypeScript infer the type of the variable?
let massege;
massege = true;
massege = 'amit';
//Define an enum for the days of the week and write a function that takes a day and returns whether it is a weekday or a weekend
let array = [2, 4, 5, 3, 5, [4, [4, [6]]]];
console.log(array.flat(3));
let a;
a = 'ravi';
console.log(a);
let num;
num = 3;
num = 'amit';
num = true;
if (num === 'amit') {
    console.log(num);
}
else {
    console.log(typeof (num));
}

