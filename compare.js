// JavaScript Comparison Operators...

// string compare...

let str = 'Abhi'; // 065
    str1 = 'abhi'; // 097
    console.log(str < str1); //Ans... true
              // 065 < 097

let string = 'apple'; // 097
    string1 = 'elephant'; // 0101
    console.log(string > string1); //Ans... false
               // 097 < 0101

// compare a Boolean and another value...

console.log(true < 1); // false
console.log(true < 0); // false
console.log(false < 1); // true
console.log(false < 0) // false

// Compare null and undefined...

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null > undefined); //  false;
console.log(null < undefined); // false;

// Compare NaN with other values...

console.log(NaN == 1) // false
console.log(NaN == NaN) // false
console.log(NaN != 1) // true
console.log(NaN != NaN) // true

// Strict equal (===) and not strict equal (!==)...

console.log(10 === '10'); // false
console.log(10 == '10') // true
console.log(20 !== '20'); // true



// class Person {
//   constructor(name) {
//     this.name = name;
//     console.log(new.target.name);
//   }
// }

// class Employee extends Person {
//   constructor(name, title) {
//     super(name);
//     this.title = title;
//   }
// }

// let john = new Person('John Doe'); // Person
// let lily = new Employee('Lily Bush', 'Programmer'); // Employee
// console.log(john);
// console.log(lily);

