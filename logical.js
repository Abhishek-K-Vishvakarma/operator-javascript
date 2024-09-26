// Logical Not (!) Operator...

let eligible = true; // false
let noteligible = false; // true

console.log(!eligible);
console.log(!noteligible);

let a = undefined;
let b = null;
let c = Number;
let d = NaN;
let e = 20;
let f = 0;
let g = {};
let h = '';
let i = 'Hi';
let j = true;
let k = false;


console.log(!a); // true
console.log(!b); // true
console.log(!c); // false
console.log(!d); // true
console.log(!e); // false
console.log(!f); // true
console.log(!g); // false
console.log(!h); // true
console.log(!i); // false
console.log(!j); // false
console.log(!k); // true

console.log(!!a); // true
console.log(!!b); // true
console.log(!!c); // false
console.log(!!d); // true
console.log(!!e); // false
console.log(!!f); // true
console.log(!!g); // false
console.log(!!h); // true
console.log(!!i); // false
console.log(!!j); // false
console.log(!!k); // true


// double-negation (!!)...

let data = 10;
console.log(!!data);  // true

let data1 = true;
console.log(!!data1); // true


// Logical OR (||) Operator...

let num1 = 10 || 20 || 30; // 10
console.log(num1);

let bool = true || false; // true
console.log(bool);

// Logical AND (&&) Operator...

let and = 10 && 20 && 30; // 30
console.log(and);

let dbland = true && false; // false
console.log(dbland);
